<template>
  <nav class="pagination-container">
    <div class="pagination" :class="wrapperCls">
      <a
        v-if="pager"
        role="button"
        class="pagination__item"
        :class="[prevDisabled && 'is-disabled']"
        @click="selectPrev"
        v-text="prev"></a>
      <select class="pagination__item pagination__select" v-model="current">
        <option v-for="i in this.total" :key="i" :value="i" v-text="i"></option>
      </select>
      <template v-for="(chunk, i) in chunks">
        <template v-for="(paged, j) in chunk">
          <em
            v-if="current === paged"
            class="pagination__item pagination__page is-active"
            :key="i + '-' + j + 'e'"
            v-text="paged"></em>
          <a
            v-else
            role="button"
            :key="i + '-' + j + 'a'"
            class="pagination__item pagination__page"
            @click="select(paged)"
            v-text="paged"></a>
        </template>
        <span class="pagination__item pagination__page is-disabled" :key="i + 's'" v-if="i < chunks.length - 1">...</span>
      </template>
      <a
        v-if="pager"
        role="button"
        class="pagination__item"
        :class="[nextDisabled && 'is-disabled']"
        @click="selectNext"
        v-text="next"></a>
    </div>
    <select v-if="jumper" class="form-select pagination-jumper" v-model="current">
      <option v-for="i in this.total" :key="i" :value="i" v-text="i"></option>
    </select>
  </nav>
</template>

<script>
import { range } from '../../utils/helpers';

export default {
  name: 'c-pagination',
  props: {
    value: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    range: {
      type: Number,
      default: 2
    },
    prev: {
      default: 'Previous'
    },
    next: {
      default: 'Next'
    },
    size: {
      type: String
    },
    type: {
      type: String
    },
    pager: {
      type: Boolean,
      default: true
    },
    jumper: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: 1
    };
  },
  watch: {
    value: {
      imediate: true,
      handler(val) {
        if (val !== this.current) {
          this.current = val;
        }
      }
    },
    current(val) {
      this.$emit('input', val);
    }
  },
  computed: {
    chunks() {
      let lower = this.current - this.range;
      let higher = this.current + this.range;

      if (lower <= 2) lower = 1;
      if (higher >= this.total - 1) higher = this.total;

      const result = [range(lower, higher)];

      if (lower > 2) result.unshift([1]);
      if (higher < this.total - 1) result.push([this.total]);

      return result;
    },
    prevDisabled() {
      return this.current === 1;
    },
    nextDisabled() {
      return this.current === this.total;
    },
    wrapperCls() {
      const cls = [];
      if (this.size) cls.push(`pagination--${this.size}`);
      if (this.type) cls.push(`pagination--${this.type}`);
      return cls;
    }
  },
  methods: {
    select(paged) {
      this.current = paged;
    },
    selectPrev() {
      if (this.current > 1) {
        this.select(this.current - 1);
      }
    },
    selectNext() {
      if (this.current < this.total) {
        this.select(this.current + 1);
      }
    }
  }
};
</script>
