<template>
  <div>
    <!-- 顶部 -->
    <header>
      <h1>大屏可视化项目</h1>
    </header>
    <!-- 中间容器 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="item-left">
        <!-- 上容器 -->
        <itemPage>
          <itemBar />
        </itemPage>
        <!-- 下容器 -->
        <itemPage>
          <itemLine />
        </itemPage>
      </section>
      <!-- 中容器 -->
      <section class="item-center">
        <pageHome />
      </section>
      <!-- 右容器 -->
      <section class="item-right">
        <!-- 上容器 -->
        <itemPage>
          <itemPie />
        </itemPage>
        <!-- 下容器 -->
        <itemPage>
          <itemData />
        </itemPage>
      </section>
    </section>
  </div>
</template>

<script>
import itemPage from '@/components/itemPage'
import itemBar from '@/components/itemBar'
import itemLine from '@/components/itemLine'
import itemPie from '@/components/itempie'
import itemData from '@/components/itemData'
import pageHome from '@/components/mapPage'
export default {
  name: 'testHome',
  components: {
    itemPage,
    itemBar,
    itemLine,
    itemPie,
    itemData,
    pageHome
  },
}
</script>
<style scoped lang="less">
header {
  width: 100%;
  height: 1rem;
  background-color: rgba(0, 0, 255, 0.2);
  h1 {
    text-align: center;
    line-height: 1rem;
    color: #fff;
    font-size: 0.375rem;
    letter-spacing: 0.3125rem;
  }
}
.container {
  max-width: 1920px;
  min-width: 1200px;
  padding: 0.125rem 0.125rem 0;
  margin: 0 auto;
  height: 10rem;
  display: flex;
  .item-left,
  .item-right {
    flex: 3;
  }
  .item-center {
    flex: 5;
    height: 10.5rem;
    padding: 0.125rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }
}
</style>
