<template>
  <div class="pie" ref="pie"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BigCake",
  mounted() {
    const myechart = echarts.init(this.$refs.pie);
    /** @type EChartsOption */
    let options = {
      title: {
        text: "饼状图练习",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        left: "right",
        top: 20,
        orient: "vertical",
      },
      series: [
        {
          name: "销量",
          type: "pie",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          radius: ["30%", "70%"],
          label: {
            position: "inner",
          },
          roseType: "area",
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0,0,0,.5)",
          },
        },
      ],
    };
    myechart.setOption(options);
  },
};
</script>

<style scoped>
.pie {
  width: 500px;
  height: 500px;
}
</style>
