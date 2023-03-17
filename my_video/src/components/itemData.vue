<template>
  <div class="box">
    <h2>产品类别</h2>
    <div class="chart" ref="dataRef"></div>
  </div>
</template>

<script>
import { onMounted, ref, reactive, inject } from 'vue'
export default {
  name: 'itemData',
  setup() {
    let dataRef = ref(null)
    let data = reactive({})
    let $echarts = inject('echarts')
    let $http = inject('axios')
    async function getData() {
      data = await $http({ url: '/four/data' })
    }
    onMounted(() => {
      let myEchart = $echarts.init(dataRef.value)
      getData().then(() => {
        /** @type EChartsOption */
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: data.data.data.chartData.day
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
              type: 'bar',
              data: data.data.data.chartData.num.Clothes,
              stack: 'total',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
            },
            {
              name: '数码',
              type: 'bar',
              data: data.data.data.chartData.num.digit,
              stack: 'total',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
            },
            {
              name: '家电',
              type: 'bar',
              data: data.data.data.chartData.num.Electrical,
              stack: 'total',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
            },
            {
              name: '家具',
              type: 'bar',
              data: data.data.data.chartData.num.gear,
              stack: 'total',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
            },
            {
              name: '日化',
              type: 'bar',
              data: data.data.data.chartData.num.Chemicals,
              stack: 'total',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series',
              },
            }
          ]
        }
        myEchart.setOption(option)
      })
    })
    return {
      dataRef,
      data
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
