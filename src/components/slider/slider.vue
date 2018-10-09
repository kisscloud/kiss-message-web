<template>
  <div class="slider" :class="{'is-disabled': disabled}">

    <template v-if="dots">
      <span class="slider__dot"
          v-for="(item, index) in stops"
          :key="index"
          :style="{'left': item + '%'}">
      </span>
    </template>

    <template v-if="range">
      <div class="slider__bar" :style="barStyle"></div>
      <div class="slider__handle is-lower hint hint--top"
        :data-hint="format(values[0])"
        :class="{
          'is-active': isDragging && !isDragingUpper
        }"
        :style="{'left': lowerHandlePosition + '%'}">
        <span
          @mousedown="startLowerDrag"
          @touchstart="startLowerDrag"
        ></span>
      </div>
      <div class="slider__handle is-higher hint hint--top"
        :data-hint="format(values[1])"
        :class="{
          'is-active': isDragging && isDragingUpper
        }"
        :style="{'left': upperHandlePosition + '%'}">
        <span
          @mousedown="startUpperDrag"
          @touchstart="startUpperDrag"
        ></span>
      </div>
    </template>
    <template v-else>
      <div class="slider__bar" :style="barStyle"></div>
      <div class="slider__handle hint hint--top"
        :data-hint="format(values[0])"
        :class="{
          'is-active': isDragging
        }"
        :style="{'left': lowerHandlePosition + '%'}">
        <span
          @mousedown="startLowerDrag"
          @touchstart="startLowerDrag"
        ></span>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'c-slider',

  props: {
    value: {
      type: [Array, Number],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    dots: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#1BB934'
    },
    format: {
      type: Function,
      default(val) {
        return val;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isDragging: false,
      isDragingUpper: false,
      values: [this.min, this.max],
      startDragMousePos: 0,
      startVal: 0
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (
          (Array.isArray(val) && (val[0] !== this.values[0] || val[1] !== this.values[1])) ||
          val !== this.values[0]
        ) {
          this.updateValue(val);
        }
      }
    },
    disabled(newVal) {
      if (!newVal) {
        this.stopDrag();
      }
    }
  },

  computed: {
    lowerHandlePosition() {
      return ((this.values[0] - this.min) / (this.max - this.min)) * 100;
    },
    upperHandlePosition() {
      return ((this.values[1] - this.min) / (this.max - this.min)) * 100;
    },
    barStyle() {
      if (this.range) {
        return {
          width: ((this.values[1] - this.values[0]) / (this.max - this.min)) * 100 + '%',
          left: this.lowerHandlePosition + '%',
          'background-color': this.color
        };
      } else {
        return {
          width: (this.values[0] / (this.max - this.min)) * 100 + '%',
          'background-color': this.color
        };
      }
    },
    stops() {
      let total = Math.floor((this.max - this.min) / this.step);
      let result = [];
      let stepGutter = (100 * this.step) / (this.max - this.min);
      for (let i = 1; i <= total; i++) {
        result.push(i * stepGutter);
      }
      return result;
    }
  },

  methods: {
    updateValue(newVal) {
      let newValues = [];

      if (Array.isArray(newVal)) {
        newValues = [newVal[0], newVal[1]];
      } else {
        newValues[0] = newVal;
      }

      if (typeof newValues[0] !== 'number') {
        newValues[0] = this.values[0];
      } else {
        newValues[0] = Math.round((newValues[0] - this.min) / this.step) * this.step + this.min;
      }

      if (typeof newValues[1] !== 'number') {
        newValues[1] = this.values[1];
      } else {
        newValues[1] = Math.round((newValues[1] - this.min) / this.step) * this.step + this.min;
      }

      // value boundary adjust
      if (newValues[0] < this.min) {
        newValues[0] = this.min;
      }
      if (newValues[1] > this.max) {
        newValues[1] = this.max;
      }
      if (newValues[0] > newValues[1]) {
        if (newValues[0] === this.values[0]) {
          newValues[1] = newValues[0];
        } else {
          newValues[0] = newValues[1];
        }
      }

      if (this.values[0] === newValues[0] && this.values[1] === newValues[1]) return;

      this.values = newValues;

      if (this.range) {
        this.$emit('input', this.values);
      } else {
        this.$emit('input', this.values[0]);
      }
    },
    startLowerDrag(e) {
      if (this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.startDragMousePos = e.pageX;
      this.startVal = this.values[0];
      this.isDragingUpper = false;
      this.isDragging = true;
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('touchmove', this.onDrag);
      window.addEventListener('mouseup', this.onUp);
      window.addEventListener('touchend', this.onUp);
    },
    startUpperDrag(e) {
      if (this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.startDragMousePos = e.pageX;
      this.startVal = this.values[1];
      this.isDragingUpper = true;
      this.isDragging = true;
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('touchmove', this.onDrag);
      window.addEventListener('mouseup', this.onUp);
      window.addEventListener('touchend', this.onUp);
    },
    onDrag(e) {
      if (this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      if (!this.isDragging) return;
      e = e.changedTouches ? e.changedTouches[0] : e;
      window.requestAnimationFrame(() => {
        let diff = ((e.pageX - this.startDragMousePos) / this.$el.offsetWidth) * (this.max - this.min);
        let nextVal = this.startVal + diff;
        if (this.isDragging) {
          if (this.isDragingUpper) {
            this.updateValue([null, nextVal]);
          } else {
            this.updateValue([nextVal, null]);
          }
        }
      });
    },
    onUp(e) {
      e.preventDefault();
      e.stopPropagation();
      this.stopDrag();
    },
    stopDrag() {
      this.isDragging = false;
      this.isDragingUpper = false;
      window.removeEventListener('mousemove', this.onDrag);
      window.removeEventListener('touchmove', this.onDrag);
      window.removeEventListener('mouseup', this.onUp);
      window.removeEventListener('touchend', this.onUp);
    }
  }
};
</script>
