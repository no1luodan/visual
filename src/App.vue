<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
    padding:0;
    margin: 0;
}
#app{
  background: #16222f;
    color: #486e8d;
    height: 100%;
    width: 100%;
}
</style>
