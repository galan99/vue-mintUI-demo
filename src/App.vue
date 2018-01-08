<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style>
    /* 通用样式引入 */
    @import "assets/css/main.less";
    body{
      max-width: 640px;
      margin: 0 auto;
      background: rgb(255,255,255);
      overflow-x: hidden;
      padding: 0;
      width:6.4rem;
    }
    #app{
      position: relative;    
    }
    .m-tag{
      display: inline-block;
      padding: 0 .1rem;
      color: #fff;
      line-height: .32rem;
      margin-left: .08rem;
      border-radius: .03rem;
      vertical-align: middle;
      font-size: .2rem;
    }
</style>
