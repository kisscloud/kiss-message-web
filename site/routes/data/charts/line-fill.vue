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
            max: 2.5,
            min: 1,
            stepSize: 0.5
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
  name: 'LineFillChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      datasets: [
        {
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.3)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          lineTension: 0.45,
          data: [
            { x: 1, y: 2 },
            { x: 2, y: 1.6 },
            { x: 3, y: 2.4 },
            { x: 4, y: 2.1 },
            { x: 5, y: 1.7 },
            { x: 6, y: 1.5 },
            { x: 7, y: 1.7 }
          ]
        }
      ]
    };
  }
};
</script>
