<template>
  <canvas></canvas>
</template>

<script>
import Chart from "chart.js/dist/Chart.js";
import reset from "./reset";

reset(Chart);
export default {
  name: "c-chart",
  props: {
    type: {
      type: String,
      default: "line"
    },
    labels: {
      type: Array,
      default: () => []
    },
    datasets: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    const config = {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          mode: "nearest",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        ...this.options
      }
    };

    this._chartjs = new Chart(this.$el, config);
  }
};
</script>
