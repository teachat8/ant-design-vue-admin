<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from 'echarts';
import {addListener, removeListener} from 'resize-detector';
import debounce from 'lodash/debounce';
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    },
    //深度监听
    // option: {
    //   handler: function(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true
    // }

  },
  created() {
    // resize防抖处理
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  methods: {
    resize() {
      console.log("resize");
      this.chart.resize();
    },
    // 渲染echart
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      // 绘制图表
      this.chart.setOption(this.option);
    },
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  }
}
</script>

<style>

</style>
