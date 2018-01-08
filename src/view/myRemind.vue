<!--系统消息-我的回复-->
<template>
  <div class="system">
    <div class="tab dbox">
      <span class="active flex">回复我的</span>
      <span class="flex">系统消息</span>
    </div>
    <ul class="mremind">
      <li>
        <div class="mt dbox">
          <a class="pic" href="javascript:;"><img src="http://dfs.idreamsky.com/group1/M00/08/12/ChQUUFeQob-AOuN3AAA2BARMPkw2691500"></a>
          <a class="flex" href="javascript:">
            <h3>浪子i</h3>
            <p>05-23 16:38</p>
          </a>
        </div>
        <a class="mc" href="javascript:">
          <p class="text_mt">我们可以做朋友吗</p>
          <div class="text_mc">
            <i></i>
            <p class="elli">回复我的帖子：来咯哦哦摸摸哦哦弄</p>         
          </div>
        </a>
      </li>
    </ul>
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
      loadtext: '加载中',
    }
  },
  created () {
    let that = this;
  },
  mounted(){
    //document.querySelector('.edit').style.height = document.documentElement.clientHeight+'px';
  },
  methods: {
    
  },
}
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
  .tab{
    border-bottom: 1px solid #e9e9e9;
    .active{
      color: #23a8b7;
      border-color: #23a8b7;
    }
    span{
      display: block;
      text-align: center;
      height: .84rem;
      line-height: .84rem;
      color: #848484;
      font-size: .30rem;
      border-bottom: .07rem solid #fff;
    }
  }
  .mremind {
    padding: 0 .30rem;
    font-size: .30rem;
    li{
      padding-bottom: .10rem;
      .mt{
        padding: .25rem 0 .15rem;
        a{
          display: block;
          color: #898989;
          font-size: .26rem;
          line-height: 1;
        }       
        img{
          width: .72rem;
          height: .72rem;
          border-radius: .06rem;
          margin-right: .30rem;
        }
        h3{
          font-size: .30rem;
          padding-bottom: .16rem;
        }
      }
      .mc{
        display: block;
        color: #333;
        line-height: .44rem;
      }
      .text_mt {
          margin-bottom: .16rem;
          padding: 0;
      }
      .text_mc {
          color: #9a9a9a;
          font-size: .26rem;
          position: relative;
          height: .66rem;
          line-height: .66rem;
          background: #e8eaec;
          border-radius: .08rem;
          padding-left: .16rem;
          i {
            position: absolute;
            top: -13px;
            left: .2rem;
            width: 0;
            height: 0;
            overflow: hidden;
            border-style: dashed solid dashed;
            border-color: transparent transparent #e8eaec;
            border-width: 7px;
          }
      }
    }
  }
  
</style>
