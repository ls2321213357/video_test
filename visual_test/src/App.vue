<template>
  <div id="app">
    <router-link to="/">test</router-link>
    <router-link to="/about">bar</router-link>
    <router-link to="/bigcake">bigcake</router-link>
    <router-link to="/line">line</router-link>
    <router-link to="/scatter">scatter</router-link>
    <router-link to="/candlistick">candlistick</router-link>
    <router-link to="/leida">leida</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
#app {
  a {
    margin-left: 20px;
  }
}
</style>
