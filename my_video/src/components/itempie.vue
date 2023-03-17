<template>
  <div class="box">
    <h2>库存统计</h2>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive, ref } from 'vue'
export default {
  name: 'itemPie',
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')
    let data = reactive({})
    let chart = ref(null)
    async function getData() {
      data = await $http({ url: '/three/data' })
    }
    onMounted(() => {
      let mychart = $echarts.init(chart.value)
      getData().then(() => {
        /** @type EChartsOption */
        let option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: 'bottom'
          },
          series: [
            {
              type: 'pie',
              data: data.data.data.chartData,
              roseType: 'radius',
              radius: [20, 100],
              center: ['40%', '50%'],
              itemStyle: {
                borderRadius: 10,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              emphasis: {
                itemStyle: {
                  borderRadius: 20,
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        mychart.setOption(option)
      })
    })
    return {
      chart,
      getData
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
