<template>
  <c-chart
    type="doughnut"
    :labels="labels"
    :datasets="datasets"
    width="400"
    height="200"
    :options="{
      legend: {
        display: true,
        position: 'left'
      },
      cutoutPercentage: 62,
      circumference: 5 / 3 * Math.PI,
      rotation: 2 / 3 *Math.PI
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'DoughnutChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };
  }
};
</script>
