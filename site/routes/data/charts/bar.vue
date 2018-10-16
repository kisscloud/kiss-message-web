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
        yAxes: [{
          type: 'linear',
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'BarChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      datasets: [
        {
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56',
          borderWidth: 0,
          data: [2, 4, 5, 7, 6, 4, 5, 4]
        }
      ]
    };
  }
};
</script>
