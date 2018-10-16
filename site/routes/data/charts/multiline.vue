<template>
  <c-chart
    type="line"
    :labels="labels"
    :datasets="datasets"
    width="400"
    height="200"
    :options="{
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 5,
            stepSize: 0.5
          }
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'MultilineChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: ['January', 'February', 'Mar', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          fill: false,
          borderColor: '#4BC0C0',
          borderWidth: 2,
          lineTension: 0.45,
          pointRadius: 0,
          data: [6.1, 6.3, 6.4, 6.6, 7.0, 7.7, 8.3]
        },
        {
          fill: false,
          borderColor: '#FFCE56',
          borderWidth: 2,
          lineTension: 0.45,
          pointRadius: 0,
          data: [5.5, 5.7, 6.4, 7.0, 7.2, 7.3, 7.5]
        }
      ]
    };
  }
};
</script>
