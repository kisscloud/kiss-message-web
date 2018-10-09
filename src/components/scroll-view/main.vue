<template>
  <div class="scroll-view" :class="{[`scroll-view--${theme}`]: !!theme}">
    <div
      class="scroll-view__content"
      :style="contentStyle"
      @scroll="onScroll"
      @mouseenter="onMouseEnter"
      ref="content"
    >
      <slot></slot>
    </div>
    <aside
      class="scroll-view__track scroll-view__track--vertical"
      ref="trackY"
      :style="{
        visibility: isScrollable.y ? 'visible': 'hidden'
      }"
      >
      <div
        class="scroll-view__scrollbar"
        :class="{
          'is-visible': isVisible.y
        }"
        :style="{
          top: handleOffset.y + 'px',
          height: handleSize.y + 'px'
        }"
        ref="scrollbarY"
        @mousedown="startDragY"
      ></div>
    </aside>
    <aside
      class="scroll-view__track scroll-view__track--horizontal"
      ref="trackX"
      :style="{
        visibility: isScrollable.x ? 'visible': 'hidden'
      }"
    >
      <div
        class="scroll-view__scrollbar"
        :class="{
          'is-visible': isVisible.x
        }"
        :style="{
          left: handleOffset.x + 'px',
          width: handleSize.x + 'px'
        }"
        ref="scrollbarX"
        @mousedown="startDragX"
      ></div>
    </aside>
  </div>
</template>

<script>
import { throttle } from 'lodash';
import ResizeObserver from 'resize-observer-polyfill';

const scrollOffsetAttr = { x: 'scrollLeft', y: 'scrollTop' };
const sizeAttr = { x: 'offsetWidth', y: 'offsetHeight' };
const scrollSizeAttr = { x: 'scrollWidth', y: 'scrollHeight' };
const offsetAttr = { x: 'left', y: 'top' };
const scrollbarMinSize = 25;

export default {
  name: 'c-scroll-view',

  props: {
    theme: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      currentAxis: 'y',
      dragOffset: { x: 0, y: 0 },
      isVisible: { x: false, y: false },
      isScrollable: { x: false, y: false },
      handleOffset: { x: 0, y: 0 },
      handleSize: { x: 0, y: 0 },
      nativeScrollbarWidth: 0
    };
  },

  computed: {
    contentStyle() {
      if (this.nativeScrollbarWidth) {
        return {
          paddingRight: this.nativeScrollbarWidth + 'px',
          paddingBottom: this.nativeScrollbarWidth + 'px',
          marginRight: '-' + this.nativeScrollbarWidth + 'px',
          marignBottom: '-' + this.nativeScrollbarWidth + 'px'
        };
      }
      return {};
    }
  },

  created() {
    this.reflow = throttle(this._reflow, 100, { leading: true });
  },

  mounted() {
    this.reflow();
    this.resizeObserver = new ResizeObserver(this.reflow.bind(this));
    this.resizeObserver.observe(this.$el);
  },

  updated() {
    this.reflow();
  },

  activated() {
    this.reflow();
  },

  beforeDestroy() {
    this.stopDrag();
    this.resizeObserver.disconnect();
  },

  methods: {
    startDragY(e) {
      this.startDrag(e, 'y');
    },
    startDragX(e) {
      this.startDrag(e, 'x');
    },
    startDrag(e, axis = 'y') {
      e.preventDefault();

      const scrollbar = axis === 'y' ? this.$refs.scrollbarY : this.$refs.scrollbarX;
      const offset = axis === 'y' ? e.pageY : e.pageX;

      this.dragOffset[axis] = offset - scrollbar.getBoundingClientRect()[offsetAttr[axis]];
      this.currentAxis = axis;

      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(e) {
      e.preventDefault();

      let offset, track;
      if (this.currentAxis === 'y') {
        offset = e.pageY;
        track = this.$refs.trackY;
      } else {
        offset = e.pageX;
        track = this.$refs.trackX;
      }

      const dragPos =
        offset - track.getBoundingClientRect()[offsetAttr[this.currentAxis]] - this.dragOffset[this.currentAxis];
      const dragPercent = dragPos / track[sizeAttr[this.currentAxis]];
      const scrollPos = dragPercent * this.$refs.content[scrollSizeAttr[this.currentAxis]];

      this.$refs.content[scrollOffsetAttr[this.currentAxis]] = scrollPos;
    },
    stopDrag() {
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
    onScroll() {
      this.flashScrollbar('x');
      this.flashScrollbar('y');
    },
    onMouseEnter() {
      this.flashScrollbar('x');
      this.flashScrollbar('y');
    },
    _reflow() {
      this.contentSizeX = this.$refs.content[sizeAttr['x']];
      this.contentSizeY = this.$refs.content[sizeAttr['y']];
      this.scrollWidth = this.$refs.content[scrollSizeAttr['x']];
      this.scrollHeight = this.$refs.content[scrollSizeAttr['y']];
      this.trackXSize = this.$refs.trackX[sizeAttr['x']];
      this.trackYSize = this.$refs.trackY[sizeAttr['y']];
      this.nativeScrollbarWidth = this.$refs.content.offsetWidth - this.$refs.content.clientWidth;

      if (this.scrollHeight > this.contentSizeY) {
        this.isScrollable.y = true;
        this.resizeScrollbar('y');
      } else {
        this.isScrollable.y = false;
      }

      if (this.scrollWidth > this.contentSizeX) {
        this.isScrollable.x = true;
        this.resizeScrollbar('x');
      } else {
        this.isScrollable.x = false;
      }
    },
    resizeScrollbar(axis = 'y') {
      // eslint-disable-next-line
      let scrollbar, contentSize, scrollSize, trackSize;
      const scrollOffset = this.$refs.content[scrollOffsetAttr[axis]];
      if (axis === 'x') {
        scrollbar = this.$refs.scrollbarX;
        contentSize = this.contentSizeX;
        scrollSize = this.scrollWidth;
        trackSize = this.trackXSize;
      } else {
        scrollbar = this.$refs.scrollbarY;
        contentSize = this.contentSizeY;
        scrollSize = this.scrollHeight;
        trackSize = this.trackYSize;
      }

      const scrollRatio = contentSize / scrollSize;
      const scrollPercent = scrollOffset / (scrollSize - contentSize);
      const handleSize = Math.max(~~(scrollRatio * trackSize), scrollbarMinSize);
      const handleOffset = ~~((trackSize - handleSize) * scrollPercent);

      this.handleOffset[axis] = handleOffset;
      this.handleSize[axis] = handleSize;
    },
    flashScrollbar(axis = 'y') {
      this.resizeScrollbar(axis);
      this.showScrollbar(axis);
    },
    showScrollbar(axis = 'y') {
      this.isVisible[axis] = true;

      if (typeof this.flashTimeout === 'number') {
        window.clearTimeout(this.flashTimeout);
      }
      this.flashTimeout = window.setTimeout(this.hideScrollbar, 1000);
    },
    hideScrollbar() {
      this.isVisible.x = false;
      this.isVisible.y = false;

      if (typeof this.flashTimeout === 'number') {
        window.clearTimeout(this.flashTimeout);
      }
    }
  }
};
</script>
