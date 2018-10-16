<template>
  <c-chart
    type="pie"
    :labels="labels"
    :datasets="datasets"
    width="400"
    height="200"
    :options="{
      legend: {
        display: true,
        position: 'left'
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'PieChart',

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
