<template>
  <div class="scatter" ref="scatter"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "VisualTestScatter",
  mounted() {
    let myechart = echarts.init(this.$refs.scatter);
    /** @type EChartsOption */
    let options = {
      xAxis: {},
      yAxis: {},
      grid: {
        left: "10%",
        top: 10,
        show: true,
        borderColor: "black",
        backgroundColor: "pink",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "散点图",
          type: "scatter",
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
          ],
          color: {
            type: "line",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "purple",
              },
              {
                offset: 1,
                color: "skyblue",
              },
            ],
          },
          emphasis: {
            itemStyle: {
              borderColor: "#fd79a8",
              borderWidth: 20,
            },
          },
        },
      ],
    };
    myechart.setOption(options);
  },
};
</script>

<style scoped>
.scatter {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>
