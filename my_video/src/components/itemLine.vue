<template>
  <div class="box">
    <h2>产品月销</h2>
    <div class="chart" ref="chartLine"></div>
  </div>
</template>
<script>
import { inject, onMounted, reactive, ref } from 'vue'
export default {
  name: 'itemLine',
  setup() {
    const chartLine = ref(null)
    let data = reactive({})
    let $echarts = inject('echarts')
    let $http = inject('axios')
    let xData = reactive([])
    let yData = reactive([])
    async function getData() {
      data = await $http({ url: '/two/data' })
    }
    function editData() {
      xData = data.data.data.chartData.day
      yData = data.data.data.chartData.num
    }
    onMounted(() => {
      let mychart = $echarts.init(chartLine.value)
      getData().then(() => {
        editData()
        //等待请求完毕进行页面的加载
        /** @type EChartsOption */
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            backgroundColor: '#74b9ff',
            borderWidth: 0
          },
          legend: {
            data: ['服饰', '数码', '家电', '家具', '日化'],
            icon: 'circle'
          },
          grid: {
            left: '1%',
            right: '3%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: xData,
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          series: [
            {
              name: '服饰',
              type: 'line',
              data: yData.Clothes,
              smooth: true,
              showSymbol: false,
              stack: 'total',
              areaStyle: {
                opacity: 0.7,
                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(25,235,138)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(18,211,72)'
                  }
                ])
              },
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: 'series' //只显示选中区域高亮
              }
            },
            {
              name: '数码',
              type: 'line',
              data: yData.digit,
              smooth: true,
              showSymbol: false,
              stack: 'total',
              areaStyle: {
                opacity: 0.9,
                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(225,155,238)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(178,51,172)'
                  }
                ])
              },
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: 'series' //只显示选中区域高亮
              }
            },
            {
              name: '家电',
              type: 'line',
              data: yData.Electrical,
              smooth: true,
              showSymbol: false,
              stack: 'total',
              areaStyle: {
                opacity: 0.7,
                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(155,205,38)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(18,25,72)'
                  }
                ])
              },
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: 'series' //只显示选中区域高亮
              }
            },
            {
              name: '家具',
              type: 'line',
              data: yData.gear,
              smooth: true,
              showSymbol: false,
              stack: 'total',
              areaStyle: {
                opacity: 0.7,
                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(125,74,138)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(178,103,72)'
                  }
                ])
              },
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: 'series' //只显示选中区域高亮
              }
            },
            {
              name: '日化',
              type: 'line',
              data: yData.Chemicals,
              smooth: true,
              showSymbol: false,
              stack: 'total',
              areaStyle: {
                opacity: 0.7,
                color: new $echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(192,146,29)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(98,99,100)'
                  }
                ])
              },
              lineStyle: {
                width: 0
              },
              emphasis: {
                focus: 'series' //只显示选中区域高亮
              }
            }
          ]
        }
        mychart.setOption(option)
      })
    })
    return {
      chartLine,
      getData,
      xData,
      yData,
      editData
    }
  }
}
</script>
<style scoped lang="less">
.box {
  h2 {
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    color: #fff;
    font-size: 0.25rem;
  }
  .chart {
    width: 6.25rem;
    height: 4.5rem;
  }
}
</style>
