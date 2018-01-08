<template>
  <div class="new-detail">
    <input type="text" placeholder="请输入帖子标题（可选）">
    <div class="new_writes">
      <textarea placeholder="请输入帖子内容"></textarea>
      <div class="mc_file">
        <span class="wt_img"><img src="http://dl.gamdream.com/bbs/attachment/album/201607/21/5091691.jpg" alt=""><i class="del"></i></span>
        <a class="file_btn" href="javascript:;"><input id="uploadInput" type="file"><em class="file_num" date-num="5">可上传4张</em></a>
      </div>            
    </div>
    <div class="new_writes_btn"><a class="mt-btn" href="javascript:;">发表帖子</a></div>
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

  },
}
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
  .new-detail{
    padding:.2rem;
  }
  .new-detail input {
    height: .66rem;
    line-height: .66rem;
    background: #fff;
    width: 100%;
    font-size: .3rem;
    border: 1px solid #e8e8e8;
    padding-left: .16rem;
    box-sizing: border-box;
    border-radius: .06rem;
    margin-bottom: .2rem;
    outline: none;
  }
  .new_writes {
    border: 1px solid #e8e8e8;
    border-radius: .05rem;
    padding-bottom: .2rem;
  }
  .new_writes textarea{
    width: 100%;
    font-size: .3rem;
    line-height: 1.2;
    height: 2.5rem;
    padding: .16rem;
    resize: none;
    border: none;
    background: #fff;
    margin: 0;
    box-sizing: border-box;
    border-radius: .06rem;
  }
  .new_writes_btn {
      text-align: right;
      padding: .2rem 0;
      a{
        padding: 0 .2rem;
        display: inline-block;
        background: #42bd41;
        border-radius: .05rem;
        width: 1.7rem;
        color: #fff;
        font-size: .3rem;        
        line-height: .7rem;
        text-align: center;
      }
  }
  .mc_file{
      padding: .2rem .2rem 0;
      display: -webkit-box;
      display: box;
      margin-right: -.4rem;
      .file_btn{
        display: inline-block;
        width: 1.08rem;
        height: 1.08rem;
        background: url(../assets/img/det-file.png) 0 0 no-repeat;
        background-size: 100%;
        position: relative;
      }
      input{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        filter: alpha(opacity=0);
      }
      em{
        display: block;
        margin: 0 auto;
        padding: .75rem 0 0;
        font-size: .2rem;
        color: #999;
        text-align: center;
      }
      .wt_img {
          display: inline-block;
          position: relative;
          vertical-align: top;
          margin: 0 .35rem .3rem 0;
          img{
            width: 1.08rem;
            height: 1.08rem;
            border-radius:.06rem;
          }
      }
  }
  .del{
    position: absolute;
    right: -.24rem;
    top: -.24rem;
    width: .44rem;
    height: .44rem;
    background: url(../assets/img/delete.png) 0 0 no-repeat;
    background-size: 100% auto;
  }
</style>
