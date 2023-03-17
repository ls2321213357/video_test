<template>
  <!-- 柱状图配置 -->
  <div class="box" ref="box"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  mounted() {
    let myechart = echarts.init(this.$refs.box);
    myechart.setOption({
      title: {
        text: "柱状图练习",
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        data: ["电脑", "手机", "平板", "耳机", "手表"],
        type: "category",
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: ["3000", "1000", "2000", "4000", "500"],
          barWidth: 25,
          itemStyle: {
            color: function (params) {
              let colorList = ["red", "green", "skyblue", "orange", "purple"];
              return colorList[params.dataIndex];
            },
          },
          markPoint: {
            data: [
              {
                name: "最大值",
                type: "max",
              },
              {
                name: "最小值",
                type: "min",
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
      ],
    });
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  height: 500px;
  border: 1px solid darkred;
}
</style>
