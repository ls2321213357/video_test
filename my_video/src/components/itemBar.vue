<template>
  <div class="box">
    <h2>销售总量</h2>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import {onMounted, inject, ref, reactive} from 'vue'

export default {
  name: 'itemBar',
  setup() {
    const chart = ref(null)
    let data = reactive({})
    let xData = reactive([])
    let yData = reactive([])
    let $echarts = inject('echarts')
    let $http = inject('axios')

    async function getState() {
      data = await $http({url: '/one/data'})
    }

    function editData() {
      xData = data.data.data.chartData.map(item => item.title)
      yData = data.data.data.chartData.map(item => item.num)
    }

    onMounted(() => {
      let mychart = $echarts.init(chart.value)
      getState().then(() => {
        editData()
        /** @type EChartsOption */
        let option = {
          tooltip: {
            show: true,
            trigger: 'item'
          },
          grid:{
            top:'3%',
            left:'1%',
            right:'6%',
            bottom:'3%',
            containLabel:true
          },
          xAxis: {
            type: 'value',
            axisLine:{
              lineStyle:{
                color:'#fff'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: xData,
            axisLine:{
              lineStyle: {
                color:'#fff'
              }
            }
          },
          series: [
            {
              data: yData,
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: [0, 20, 20, 0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0,
                      [{
                        offset: 0,
                        color: '#ff6b81'
                      },
                        {
                          offset: 0.5,
                          color: '#be2edd'
                        },
                        {
                          offset: 1,
                          color: '#00d2d3'
                        }]
                  )
                }
              }
            }
          ]
        }
        mychart.setOption(option)
        window.onresize = function () {
          mychart.resize()
        }
      })

    })
    return {
      getState,
      chart,
      editData,
      xData,
      yData
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
    height: 4.75rem;
  }
}
</style>
