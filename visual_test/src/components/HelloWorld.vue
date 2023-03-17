<template>
  <div class="box" ref="main"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "HelloWorld",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main);
    // 指定图表的配置项和数据
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
        link: "https://fanyi.youdao.com/index.html#/",
        target: "self",
        backgroundColor: "pink",
        borderColor: "blue",
        borderWidth: 5,
        x: "center",
        textStyle: {
          color: "green",
          fontSize: "14px",
        },
        subtextStyle: {
          fontSize: "18px",
          color: "yellow",
        },
        subtext: "副标题",
        sublink: "https://fanyi.youdao.com/index.html#/",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        borderColor: "red",
        borderWidth: 3,
        backgroundColor: "yellow",
        textStyle: {
          color: "green",
          fontSize: 12,
        },
        //对提示框信息进行自定义
        formatter(params) {
          console.log(params);
          for (let i = 0; i < params.length; i++) {
            return (
              "名字" +
              params[i].name +
              "-销量-" +
              params[i].data.value +
              "-生产日期-" +
              params[i].data.date
            );
          }
        },
      },
      legend: {
        show: true,
        left: 10,
        top: 10,
        itemWidth: 20,
        itemHeight: 30,
        textStyle: {
          color: "skyblue",
        },
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [
            { value: "5", date: "2000-9-18" },
            { value: "6", date: "2034-9-18" },
            { value: "7", date: "2032-9-18" },
            { value: "8", date: "2054-9-18" },
            { value: "9", date: "2064-9-18" },
            { value: "1", date: "2066-9-18" },
          ],
        },
      ],
    });
  },
};
</script>
<style scoped>
.box {
  width: 500px;
  height: 500px;
  border: 1px solid darkred;
}
</style>
