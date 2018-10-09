<template>
  <c-chart
    type="horizontalBar"
    :labels="labels"
    :datasets="datasets"
    width="400"
    height="200"
    :options="{
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 0
          }
        }],
        yAxes: [{
          barPercentage: 0.5
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'HorizontalBarChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          backgroundColor: '#4BC0C0',
          borderColor: '#4BC0C0',
          borderWidth: 0,
          data: [65, 45, 75, 50, 60]
        }
      ]
    };
  }
};
</script>
