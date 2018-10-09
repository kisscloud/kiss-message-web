<template>
  <c-chart
    type="line"
    :labels="labels"
    :datasets="datasets"
    width="400"
    height="100"
    :options="{
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }]
      }
    }"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'BasicChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
      datasets: [
        {
          label: 'In',
          fill: false,
          lineTension: 0.2,
          borderColor: '#33B8FF',
          borderWidth: 1,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',

          pointRadius: 0,
          pointBorderWidth: 0,
          pointBorderColor: '#33B8FF',
          pointBackgroundColor: '#33B8FF',

          pointHoverRadius: 4,
          pointHoverBorderWidth: 0,
          pointHoverBackgroundColor: '#33B8FF',
          pointHoverBorderColor: '#33B8FF',
          pointHitRadius: 6,
          data: [65, 59, 80, 81, 56, 55, 40, 90, 120, 80],
          spanGaps: false
        },
        {
          label: 'Out',
          fill: false,
          lineTension: 0.2,
          borderColor: '#F0A231',
          borderWidth: 1,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',

          pointRadius: 0,
          pointBorderWidth: 0,
          pointBorderColor: '#F0A231',
          pointBackgroundColor: '#F0A231',

          pointHoverRadius: 4,
          pointHoverBorderWidth: 0,
          pointHoverBackgroundColor: '#F0A231',
          pointHoverBorderColor: '#F0A231',
          pointHitRadius: 6,
          data: [60, 70, 80, 75, 78, 90, 110, 145, 130, 90],
          spanGaps: false
        }
      ]
    };
  }
};
</script>
