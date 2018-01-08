<template>
  <div class="detail">
    <div >
      <div class="d_content" id="scroller">
        <div class="d_con_mc">
          <div class="d_conmc_mt dbox">
            <a data-href="/Forum/userCenter?fid=229&amp;uid=353311">
              <img class="d_conmc_pic" src="http://dl.gamdream.com/bbs/attachment/album/201607/21/5091691.jpg">
            </a>
            <div class="d_conmc_mtcon flex elli">
              <span class="ft32">三剑豪大大</span>                 
              <em class="m-tag m-tagposter" style="background:#1497f1;">楼主</em>
              <em class="m-tag" style="background:#FF823F;">版主</em>
              <p>2017-12-26 17:49</p>
            </div>
          </div>
          <div class="d_conmc_mc">
            <h3 class="t">关于《三剑豪》近期调整公告，请大侠们知晓</h3> 
            <div class="datebox" date-list="">
                各位大侠：<br>
                <br>
                &nbsp; &nbsp; 由于服务器优化，原定于每周四《三剑豪》的更新暂时停止，同样每周一新服也暂停开放，等服务器优化好后我们再操作。活动本周四会在上周的基础上做一波累加活动，请大侠们留意，感谢支持！<br>
            </div>
          </div>
        </div>


        <div class="d_con_list">
          <ul class="d_clist_mc">
            <li pid="32938135" v-for="i in 3">
              <a data-href="/Forum/userCenter?fid=229&amp;uid=205082461">
                <img class="d_clist_pic" src="http://dl.gamdream.com/noavatar.jpg">
              </a>
              <div class="d_clistmian flex">
                <div class="li_build">
                  <div class="li_text_1">
                    <p class="li_text_p">
                      <span class="ft30">guanguihong0614</span>
                    </p>
                    <span class="li_floor">7楼</span>
                  </div>
                </div>
                <div class="datebox" date-list="">
                  <div class="grey quote">
                    <blockquote>
                      引用: MM135869 发表于 2017-12-27 17:20<br>
                      感觉像关服？
                    </blockquote>
                  </div>
                  <br>
                  这是要倒闭的节奏！                 
                </div>
                <p class="li_text_3"><span>2017-12-28 08:18</span><a class="li_write" href="javascript:;"></a></p>
              </div>            
            </li>
          </ul>
        </div>
      </div>

      <!--底部点赞 回复-->
      <div class="de_gowrite">
        <a href="javascript:;">
          <span class="writebtn_l"><s></s><em>0</em></span>
          <span class="writebtn_r"><s></s><em>14</em></span>
        </a>
      </div>
    </div>
    
    <!--回复-->
    <div class="d_write">     
      <div class="d_w_bj"></div>
      <div class="d_w_con">
        <p class="d_w_mt">
          <a class="d_w_false" href="javascript:;">取消</a>
          <a class="d_w_sure mt-btn" style="float:right;" href="javascript:;">发送</a>
        </p>
        <div class="d_w_mc">
          <textarea placeholder="我来说一句"></textarea>
          <div class="mc_file">
            <span class="wt_img"><img src="http://dl.gamdream.com/bbs/attachment/album/201607/21/5091691.jpg" alt=""><i class="del"></i></span>     
            <a class="file_btn" href="javascript:;"><input id="uploadInput" type="file"><em class="file_num" date-num="1">可上传1张</em></a>
          </div>
        </div>
      </div>    
    </div>  
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    document.querySelector('#scroller').style.height=document.documentElement.clientHeight + 'px';
  },
  destroyed (){
    console.log('跳出详情页')
    //document.querySelector('body').style.height='auto';
  },
  methods: {
    goIndex (){
      this.$router.push('/index')
    },
  }
}
</script>

<style scoped lang="less" type="text/less" rel="stylesheet/less">
  .detail{
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .d_content {
    padding: 0px 0 1.05rem;
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }
  .d_con_mc{
    padding: 0 .2rem;
    font-size: .26rem;
  }
  .d_conmc_mt {
    padding: .3rem 0 .15rem;
    color: #a0a0a0;
    .ft32{
      font-size:.32rem;
      color:#333;
      vertical-align: middle
    }
  }
  .d_conmc_pic,.d_clist_pic{
    border-radius: .05rem;
    width: .72rem;
    height: .72rem;
    margin-right: .16rem;
  }
  .d_conmc_mc {
    line-height: .54rem;
    word-break: break-all;
    word-wrap: break-word;
    .t{
      font-size: .36rem;
      color: #333;
      padding: .05rem 0 .2rem;
    }
    .datebox{
      padding: 0 0 .3rem;
      font-size: .3rem;
      color: #444;
      line-height: 1.6;
      overflow-x: hidden;
    }
  }
  .d_con_list {
    padding: 0 .3rem;
    font-size: .28rem;
    color: #898989;
    border-top: 1px solid #e8e8e8;
    .d_clist_mc li{
      &:first-child{
        border:none;
      }
      display: -webkit-box;
      display: box;
      border-top: 1px solid #e8e8e8;
      padding: .26rem 0 0px;
      line-height: 1;
    }
  }
  .d_clist_mc .li_text_1 {
    position: relative;
  }
  .li_floor {
      position: absolute;
      right: 0px;
      top: .06rem;
      font-size: .26rem;
  }
  .d_clistmian {
    padding-bottom: .25rem;
    .datebox {
      padding: .3rem 0 0px;
      color: #333;
      line-height: 1.4;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
  .quote{
    border:1px dashed #D7D7D7;
    line-height: .4rem;
    padding: .05rem .16rem;
    margin-bottom: .15rem;
    font-size: .26rem!important;
    color: #898989!important;
  }
  .li_text_3 {
    overflow: hidden;
    zoom: 1;
    line-height:.6rem;
    font-size: .26rem;
    a{
      float: right;
      width: 1rem;
      height:.6rem;
      background: url(../assets/img/dis-22.png) no-repeat;
      background-size: .34rem auto;
      background-position: .68rem .16rem;
    }
  }
  .de_gowrite {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: .2rem;
    height: .62rem;
    border-top: 1px solid #e8e8e8;
    background: #fff;
    z-index: 3;
    span{
      float: left;
      width: 48%;
      border: 1px solid #e8e8e8;
      background: #fafafa;
      line-height: .62rem;
      text-align: center;
      box-sizing: border-box;
      border-radius: .04rem;
      color: #898989;
      font-size: .3rem;
    }
    .writebtn_r{
      float: right;
      s{
        background-position: 0 -.64rem;
      }
    }
  }
  .de_gowrite s {
    display: inline-block;
    width: .36rem;
    height: .32rem;
    background: url(../assets/img/det-write.png) 0 1px no-repeat;
    background-size: 100% auto;
    margin-right: .08rem;
    vertical-align: -.06rem;
  }

  .d_write {
      width: 100%;
      position: absolute;
      top: 0;
      left: 100%;
      height: 100%;
      font-size:.28rem;
      overflow: hidden;
      -webkit-transition: all .3s linear;
      transition: all .3s linear;
      z-index: 50;
      &.active {
          left: 0;
          display: block;
      }
  }
  .d_write .d_w_bj {
      background: rgba(0,0,0,.75);
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      z-index: 3;
      display: block;
  }
  .d_write .d_w_con {
      position: absolute;
      z-index: 50;
      background: #fff;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      z-index: 4;
      padding: 0 .35rem .3rem;
      box-sizing: border-box;
  }
  .d_w_mt {
    overflow: hidden;
    zoom: 1;
    a {
        float: left;
        line-height: 2;
        padding: .1rem .18rem;
        color: #333;
    }
    .d_w_sure{
      float: right;
    }
  }
  .d_w_mc {
      border: 1px solid #e8e8e8;
      background: #fff;
      border-radius: .06rem;
      padding: .15rem;
      textarea {
        border: none;
        background: none;
        font-size: .3rem;
        line-height: 1.4;
        width: 100%;
        outline: none;
        resize: none;
        min-height: 1.8rem;
        overflow: auto;
    }
    .mc_file{
      border-top: 1px dashed #cfcfcf;
      padding: .2rem 0 .05rem;
      margin-right: -.05rem;
      display: -webkit-box;
      display: box;
      border: none;
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
          margin: 0 .42rem .3rem 0;
          img{
            width: 1.08rem;
            height: 1.08rem;
            border-radius:.06rem;
          }
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
