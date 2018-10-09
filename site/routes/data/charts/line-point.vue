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
          type: 'linear',
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          }
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom'
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'LinePointChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      datasets: [
        {
          fill: false,
          borderColor: '#FFCE56',
          borderWidth: 2,
          lineTension: 0.45,
          pointRadius: 5,
          pointBorderColor: '#FFCE56',
          pointBackgroundColor: '#FFFFFF',
          data: [
            { x: 1, y: 5.5 },
            { x: 2, y: 5.7 },
            { x: 3, y: 6.4 },
            { x: 4, y: 7.0 },
            { x: 5, y: 7.2 },
            { x: 6, y: 7.3 },
            { x: 7, y: 7.5 }
          ]
        }
      ]
    };
  }
};
</script>
