<template>
  <c-chart
    type="line"
    :datasets="datasets"
    width="400"
    height="200"
    :options="{
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          display: false
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'LineChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      datasets: [
        {
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.1)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 2,
          lineTension: 0.45,
          pointRadius: 0,
          data: [
            { x: 1, y: 6.1 },
            { x: 2, y: 6.3 },
            { x: 3, y: 6.4 },
            { x: 4, y: 6.6 },
            { x: 5, y: 7.0 },
            { x: 6, y: 7.7 },
            { x: 7, y: 8.3 }
          ]
        }
      ]
    };
  }
};
</script>
