<template>
  <div class="leida" ref="leida"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "VisualTestLeida",
  mounted() {
    let myechart = echarts.init(this.$refs.leida);
    myechart.on("click", "series.radar", (params) => {
      console.log(params);
    });
    /** @type EChartsOption */
    let option = {
      title: {
        text: "雷达图",
      },
      legend: {
        data: ["Allocated Budget", "Actual Spending"],
      },
      radar: {
        shape: "circle",
        splitNumber: 4,
        radius: 220,
        startAngle: 90,
        axisName: {
          formatter: "{value}",
          color: "#dc281c",
        },
        splitArea: {
          areaStyle: {
            color: [
              "rgba(210,25,234,0.3)",
              "rgba(120,250,223,0.3)",
              "rgba(40,234,153,0.3)",
              "rgba(12,25,22,0.3)",
            ],
            shadowColor: "0,0,0,.3",
            shadowBlur: 10,
          },
        },
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "Information Technology", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Marketing", max: 25000 },
        ],
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",

          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget",
              areaStyle: "yellow",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending",
              areaStyle: "green",
            },
          ],
          lineStyle: {
            type: "dashed",
          },
        },
      ],
    };
    myechart.setOption(option);
  },
};
</script>

<style scoped>
.leida {
  width: 500px;
  height: 500px;
  border: 1px solid saddlebrown;
}
</style>
