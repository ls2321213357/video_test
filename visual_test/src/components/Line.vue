<template>
  <div class="line" ref="line"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TestLine",
  mounted() {
    let myechart = echarts.init(this.$refs.line);
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let dataA = [354, 1435, 543, 123, 432, 224, 218];
    let dataB = [232, 235, 353, 1123, 422, 524, 718];
    let dataC = [154, 156, 264, 586, 439, 274, 238];
    let dataD = [234, 347, 643, 623, 332, 524, 218];
    /** @type EChartsOption */
    let options = {
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        // {
        //   data,
        //   type: "line",
        //   areaStyle: { shadowColor: "rgba(0, 0, 0, 0.5)", shadowBlur: 10 },
        //   smooth: true,
        //   markPoint: {
        //     data: [
        //       {
        //         name: "最大值",
        //         type: "max",
        //       },
        //       {
        //         name: "最小值",
        //         type: "min",
        //       },
        //     ],
        //   },
        //   markLine: {
        //     data: [
        //       {
        //         name: "平均值",
        //         type: "average",
        //       },
        //     ],
        //   },
        // },
        {
          name: "蔬菜",
          type: "line",
          data: dataA,
          smooth: true,
          areaStyle: {},
          //   stack: "num",
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "电子产品",
          type: "line",
          data: dataD,
          smooth: true,
          areaStyle: {},
          stack: "num",
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "水果",
          type: "line",
          data: dataB,
          smooth: true,
          areaStyle: {},
          stack: "num",
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "衣服",
          type: "line",
          data: dataC,
          smooth: true,
          areaStyle: {},
          stack: "num",
          emphasis: {
            focus: "series",
          },
        },
      ],
    };
    myechart.setOption(options);
    window.addEventListener("resize", () => {
      myechart.resize();
    });
  },
};
</script>

<style scoped>
.line {
  width: 100%;
  height: 500px;
}
</style>
