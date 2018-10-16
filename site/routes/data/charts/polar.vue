<template>
  <c-chart
    type="polarArea"
    :labels="labels"
    :datasets="datasets"
    width="400"
    height="200"
  />
</template>

<script>
import Chart from 'cover/vendors/chart';

export default {
  name: 'PolarChart',

  components: {
    [Chart.name]: Chart
  },

  data() {
    return {
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
          label: 'My dataset'
        }
      ]
    };
  }
};
</script>
