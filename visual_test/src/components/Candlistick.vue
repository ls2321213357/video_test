<template>
  <div class="cand" ref="cand"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "VisualTestCandlistick",
  data() {
    return {
      kData: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
      ],
    };
  },
  mounted() {
    let myechart = echarts.init(this.$refs.cand);
    /** @type EChartsOption */
    let option = {
      xAxis: {
        data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
      },
      yAxis: {},
      tooltip: {
        trigger: "item",
        axisPointer: {
          type: "cross",
        },
      },
      series: [
        {
          type: "candlestick",
          data: this.kData,
          itemStyle: {
            color: "#c21531",
            color0: "#jd8302",
            borderColor: "#d8dc7",
            borderColor0: "#314656",
          },
          markPoint: {
            data: [
              {
                name: "最大值",
                type: "max",
                valueDim: "highest",
              },
              {
                name: "最小值",
                type: "min",
                valueDim: "lowest",
              },
            ],
          },
          markLine: {
            data: [
              {
                name: "平均值",
                type: "average",
              },
            ],
          },
        },
        {
          name: "折线图",
          type: "line",
          data: this.lData,
          smooth: true,
          areaStyle: {
            color: "pink",
          },
        },
      ],
    };
    myechart.setOption(option);
  },
  computed: {
    lData() {
      return this.kData.map((item) => item[0]);
    },
  },
};
</script>

<style scoped>
.cand {
  width: 500px;
  height: 500px;
}
</style>
