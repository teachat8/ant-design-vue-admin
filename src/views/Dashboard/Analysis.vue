<template>
  <div>
    {{ $t("message")["app.dashboard.analysis.timeLabel"]}} :
    <a-date-picker></a-date-picker>
    <Chart :option="chartOption" style="height: 400px" />
  </div>
</template>

<script>
import Chart from '../../components/Chart';
// import random from 'lodash/random';
import axios from 'axios';
export default {
  name: 'Analysis',
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {},
      // chartOption: {
      //   title: {
      //       text: 'ECharts 入门示例'
      //   },
      //   tooltip: {},
      //   xAxis: {
      //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      //   },
      //   yAxis: {},
      //   series: [{
      //       name: '销量',
      //       type: 'bar',
      //       data: [5, 20, 36, 10, 10, 20]
      //   }]
      // }
    }
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //   () => random(100)
      // );
      // this.chartOption = {...this.chartOption};
    }, 3000);
  },
  methods: {
    getChartData() {
      axios
        .get('/api/dashboard/chart', { params: { ID: 12345 } })
        .then(response => {
          this.chartOption = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: response.data,
            }]
          }
        });

    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
}
</script>

<style>

</style>
