<template>
  <section class="zz" id="loading" v-if="loading">
    <div class="loading"></div>
  </section>
</template>

<script>
export default {
  name: 'load',
  props:['loading'],
}
</script>

<style scoped lang="less" type="text/less" rel="stylesheet/less">

</style>
