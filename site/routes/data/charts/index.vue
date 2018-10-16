<template lang="nunjucks">
  <c-main>
    <c-panel title="Chart.js">
      <p><code>c-chart</code> component is just a wrapper of <a href="http://chartjs.org" target="_blank">Chart.js</a>.</p>

      <c-note type="warning">
        <strong>Vendor Component</strong>: a vendor component needs a third-party plugin, which would increase the size of your bundle file, so we separte it from the core of <strong>Cover</strong>. If you want to use vendor component, you must import it specifically.
      </c-note>

      <BasicChart />

      <hr />

      <% markdown %>
      ```html
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
        import Chart from 'cover/vendors/chart'

        export default {

          components: {
            [Chart.name]: Chart
          },

          data() {
            return {
              labels: [],
              datasets: []
            }
          }
        }
      </script>
      ```
      <% endmarkdown %>
      <h3>API</h3>
      <table class="table table--bordered table--stress">
        <caption>Props</caption>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>type</th>
            <td>chart type of Chart.js</td>
            <td>String</td>
            <td>line</td>
          </tr>
          <tr>
            <th>labels</th>
            <td>labels of category axis</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <th>datasets</th>
            <td>your chart datasets</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
          <tr>
            <th>options</th>
            <td>configure options of Chart.js</td>
            <td>Object</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </c-panel>

    <c-row>
      <c-col md="8">
        <c-panel title="Line">
          <LineChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Line with points">
          <LinePointChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Line with fill">
          <LineFillChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Bar">
          <BarChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Horizontal Bar">
          <HorizontalBarChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Two Bars">
          <TwoBarChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Pie">
          <PieChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Doughnut">
          <DoughnutChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Polar Area Chart">
          <PolarChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Radar Chart">
          <RadarChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Multiple Lines">
          <MultilineChart />
        </c-panel>
      </c-col>

      <c-col md="8">
        <c-panel title="Mixed Chart">
          <MixedChart />
        </c-panel>
      </c-col>

    </c-row>

  </c-main>
</template>

<script>
import BasicChart from './basic.vue';
import LineChart from './line.vue';
import LinePointChart from './line-point.vue';
import LineFillChart from './line-fill.vue';
import BarChart from './bar.vue';
import HorizontalBarChart from './bar-horizontal.vue';
import TwoBarChart from './two-bar.vue';
import PieChart from './pie.vue';
import DoughnutChart from './doughnut.vue';
import PolarChart from './polar.vue';
import RadarChart from './radar.vue';
import MultilineChart from './multiline.vue';
import MixedChart from './mixed.vue';

export default {
  name: 'ChartsView',
  components: {
    BasicChart,
    LineChart,
    LinePointChart,
    LineFillChart,
    BarChart,
    HorizontalBarChart,
    TwoBarChart,
    PieChart,
    DoughnutChart,
    PolarChart,
    RadarChart,
    MultilineChart,
    MixedChart
  }
};
</script>
