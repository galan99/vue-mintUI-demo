<!--个人中心-->
<template>
  <div class="center">
    <div class="mt dbox">
      <div class="img">
        <img src="http://dl.gamdream.com/bbs/attachment/album/201607/21/5061901.jpg"/>
      </div>
      <div class="info flex">
        <p class="name"><span>别瞅我1</span></p>
        <p class="more">
          <span class="age">29岁</span>
          <span>广东省 深圳市</span>
        </p>
        <a class="edit" href="javascript:;" @click="goEdit"><i></i>编辑资料</a>
      </div>
    </div>
    <div class="mc">
      <ul>
        <li>
          <p>我的讨论<span>0</span></p>
          <i class="icos"></i>
        </li>
        <li>
          <p>我的提醒</p>
          <em class="redtip"></em>
          <i class="icos"></i>
        </li>
        <li>
          <p>退出</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new',
  components: {
    
  },
  data () {
    return {
      load:true,
      moreTip:'正在加载',
      loadshow: false,
      loadtext: '加载中'
    }
  },
  created () {
    let that = this;
  },
  methods: {
    goEdit(){
      this.$router.push('/edit')
    }
  },
}
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
  .mt{
    padding: 2.2rem .3rem 0;
    height: 2rem;
    background: url(../assets/img/per-bg.jpg) no-repeat;
    background-size: 100% auto;
    font-size: .24rem;
    color: #fff;
    line-height: 1;
    position: relative;
    .img img{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: .08rem;
      margin-right: .2rem;
    }
    .name{
      span{
        font-size: .32rem;
      }
    }
    .more{
      padding: .15rem 0 .25rem;
      overflow: hidden;
      .age{
        margin-right:.18rem;
      }
    }
    .edit{
      position: absolute;
      left: 2.10rem;
      bottom: .40rem;
      width: 1.70rem;
      height: .56rem;
      line-height: .56rem;
      text-align: center;
      background: #f2eff6;
      border-radius: .08rem;
      font-size: .26rem;
      color: #333;
      i{
        display: inline-block;
        background: url(../assets/img/editor.png) no-repeat;
        width: .33rem;
        height: .30rem;
        vertical-align: -.04rem;
        margin-right: .04rem
      }
    }
  }
  .mc{
    li{
      vertical-align: middle;
      font-size: .30rem;
      color: #898989;
      border-bottom:1px solid #e8e8e8;
      padding: .10px .30rem;
      line-height: .80rem;
      height: .80rem;
      background: #fff;
      display: block;
      overflow: hidden;
      position: relative;
      p{
        float: left;
        span{
          margin-left: .12rem;
          color: #333;
        }
      }
      .icos{
        position: absolute;
        right: .30rem;
        top: 50%;
        margin-top: -.16rem;
        width: .18rem;
        height: .31rem;
        background: url(../assets/img/per-in.png) 0 0 no-repeat;
        background-size: 100%;
        vertical-align: -.04rem;
        margin-left: .12rem;
      }
      .redtip{
        width: .18rem;
        height: .18rem;
        border-radius: 50%;
        background: #ff5f5f;
        position: absolute;
        right: 0;
        top: 50%;
        margin: -.09rem .60rem 0 0;
      }
    }
  }
</style>
