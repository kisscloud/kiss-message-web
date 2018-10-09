<template>
  <c-chart
    type="bar"
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
          stacked: false
        }],
        yAxes: [{
          stacked: false,
          ticks: {
            min: 0
          }
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'TwoBarChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: [1, 2, 3, 4, 5],
      datasets: [
        {
          backgroundColor: '#4BC0C0',
          borderColor: '#4BC0C0',
          borderWidth: 0,
          data: [65, 45, 75, 50, 60]
        },
        {
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56',
          borderWidth: 0,
          data: [30, 20, 40, 25, 45]
        }
      ]
    };
  }
};
</script>
