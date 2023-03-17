<template>
  <div class="chart" ref="map"></div>
</template>

<script>
import { reactive, onMounted, ref, inject } from 'vue'
import axios from 'axios'
export default {
  name: 'mapPage',
  setup() {
    let map = ref(null)
    let mapData = reactive({})
    async function getData() {
      mapData = await axios.get('http://localhost:8080/map/china.json')
    }
    let $echarts = inject('echarts')
    onMounted(() => {
      let myechart = $echarts.init(map.value)
      getData().then(() => {
        $echarts.registerMap('china', mapData.data)
        /** @type EChartsOption */
        let option = {
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            type: 'continuous',
            min: 100,
            max: 5000,
            calculable: true,
            inRange: {
              color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            map: 'china',
            itemStyle: {
              areaColor: '#0099ff',
              borderColor: '#00ffff',
              shadowColor: 'rgba(230,130,70,0.5)',
              emphasis: {
                focus: 'self'
              }
            }
          },
          series: [
            {
              type: 'scatter',
              itemStyle: {
                color: 'red'
              },
              name: '城市销售额',
              coordinateSystem: 'geo',
              data: [
                { name: '北京', value: [116.46, 39.92, 4367] },
                { name: '上海', value: [121.48, 31.22, 8675] },
                { name: '深圳', value: [114.07, 22.62, 2461] },
                { name: '广州', value: [113.23, 23.16, 187] },
                { name: '西安', value: [108.45, 34, 3421] }
              ]
            }
          ]
        }
        myechart.setOption(option)
      })
    })
    return {
      getData,
      mapData,
      map
    }
  }
}
</script>
<style scoped lang="less">
.chart {
  width: 100%;
  height: 100%;
}
</style>
