<template>
  <div class="index">
    <!--主体-->
    <div class="content"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="50">
      <div class="mt">
        <div class="head dbox">
          <img class="log" src="../assets/img/icon.png">
          <div class="text flex">
            <h3>三剑壕</h3>
            <p>
              帖子<em>666</em>今日<em>61</em>
            </p>
          </div>
        </div>
        <ul class="info">
          <li class="elli"><i></i><span>关于《三剑豪》近期调整公告，请大侠们知晓请大侠们知晓</span></li>
          <li class="elli"><i></i><span>关于《三剑豪》近期调整公告，请大侠们知晓</span></li>
          <li class="elli"><i></i><span>关于《三剑豪》近期调整公告，请大侠们知晓</span></li>
        </ul>
      </div>
      <div class="mc page-infinite-wrapper">
        <ul class="mtz-list">
          <li class="mtz-item" v-for="item in list">
            <div class="mtz-iteam-mt dbox">
              <a href="javascript:;">
                <i></i>
                <img class="people" src="../assets/img/icon.png">
              </a>
              <a href="javascript:;" class="flex">
                <h3 class="name"><span>sjh2017sjh</span><em class="m-tag" style="background:#FF823F;">版主</em></h3>
                <p class="date">昨天 10:33</p>
              </a>
            </div>
            <a data-href="/Forum/threadDetail?fid=229&amp;tid=8260275">
              <div class="mtz-iteam-mc">
                <h3 class="tit">新区321联盟战的问题，麻烦大大反应一下</h3>
                <p class="text">现在这个三剑豪每次开新区真真玩的人有多少你们后台数据库看不出来吗？一个新区活跃的玩家基本能凑够一个联</p>
                <div class="image dbox datebox">
                  <p class="medias_item" v-for="i in 3">
                    <img class="test-lazyload" src="http://gimg.gamdream.com/bbs/attachment//forum/201801/03/131434bx7xk4ix1fsnritn.png"></p>
                  <p class="medias_num" date-list="http://gimg.gamdream.com/bbs/attachment//forum/201801/03/131434bx7xk4ix1fsnritn.png;http://gimg.gamdream.com/bbs/attachment//forum/201801/03/131442dhgqfgwhxpgpntxy.png;http://gimg.gamdream.com/bbs/attachment//forum/201801/03/131450ok875qyppfmpmksy.png" style="display:none;"></p>
                </div>
                <p class="page_zan"><span class="ico2">3评论</span></p>
              </div>
            </a>
          </li>
        </ul>
        <p class="page-infinite-loading" v-show="loading" v-if="!nomore">
          <mt-spinner type="fading-circle"></mt-spinner>加载中...
        </p>
        <p class="nomore" v-if="nomore">没有更多了哦</p>
      </div>
    </div>
    
    <!--footer-->
    <footer class="cmm-foot">
      <a class="activityren" data-href="/Forum/activeUser?fid=229" style="display:none;"><i></i>互动达人</a>
      <p class="text"><a data-href="/Forum/newThread?fid=229&amp;fup=229&amp;typeid=0"></a></p>
      <a class="login" data-href="/Forum/userCenter?fid=229&amp;myUid=167084"><i class="loginIoc"><em class="ico0122"></em></i>个人中心</a>
    </footer>

  </div>
</template>

<script>
//import { Spinner} from 'mint-ui';

export default {
  name: 'index',
  components: {
    //Spinner
  },
  data () {
    return {
      load:true,
      list:[1,2,3,4,5],
      loading:false,
      nomore:false,
    }
  },
  created () {
    let that = this
    Toast({
      message:'提示消息',
      position:'top'
    });
    console.log(this.$route.path.slice(1))

    this.getData();
  },
  mounted(){
    let bodyHeight = document.documentElement.clientHeight,
        topHeight = document.querySelector('.mt').offsetHeight,
        footHeight = document.querySelector('.cmm-foot').offsetHeight;
    document.querySelector('.content').style.height = bodyHeight-footHeight + 'px';
  },
  methods: {
    getData (){
      Indicator.open('加载中...');
      let postData={'mobile':13512345123}
      this.$axios.get('/sdk-game-data/player-data/index',postData).then((data)=>{
        console.log(data)
      })
      /*this.$ajax('get',`${this.$url}config/list`,postData).then((data)=>{
        setTimeout( () => {
          Indicator.close();
        },2000)
        
        if(data.code == 0){               
          
        }
      });*/
    },
    openMsg (val){

    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 5; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  },
}
</script>
<style scoped lang="less" type="text/less" rel="stylesheet/less">
  .content{
    padding-bottom:.2rem;
    background: #fff;
    overflow: scroll;
    box-sizing: border-box;
  }  
  .mt{   
    .head{
      padding:.26rem;
      color: #fff;
      background:url(../assets/img/top_bg.jpg) no-repeat;
      background-size:100% auto;
      .text{
        font-size: .24rem;
        h3{
          font-size: .32rem;
          line-height: .70rem;
          padding-bottom: .05rem;
        }
        em{
          margin-right:.3rem;
          margin-left:2px;
        }       
      }
    }
    .log{
      width: 1.16rem;
      height: 1.16rem;
      border-radius:.06rem;
      margin-right:.2rem;
    }
    .info{
      border-bottom:1px solid #e5e5e5;
      padding:.12rem 0;
      li{
        color: #333;
        font-size: .28rem;
        line-height: .3rem;
        padding: .1rem .25rem;
        i{
          display: inline-block;
          width: .3rem;
          height: .3rem;
          background: url(../assets/img/up.png) no-repeat;
          background-size:100% auto;
          vertical-align: middle;
          margin-right:.1rem;
        }
        span{
          vertical-align: middle;
        }
      }
    }
  }
  .mc{
    padding: .08rem 0px 0;
    background: #f3f3f3;    
    .mtz-item{
      border: 1px solid #e8e8e8;
      margin-bottom: .08rem;
      background: #fff;
      padding: .15rem .25rem;
      a{
        line-height: .38rem;
        color: #888;
        font-size: .3rem;
        word-wrap: break-word;
        word-break: break-all;
      }      
      .mtz-iteam-mc{
        .tit{
          font-size: .32rem;
          color: #333;
          padding: .12rem 0 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .text{
          padding-top: .12rem;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .image{
          position: relative;
          padding-top: .15rem;
          .medias_item{
            width: 1.9rem;
            height: 1.9rem;
            margin-right: .1rem;
            overflow: hidden;
            background: #999;
          }
          img{
            width:100%;
            max-width: none;
          }
        }
        .page_zan {
            padding: .15rem 0 .1rem;
            text-align: right;
            font-size: .28rem;
            color: #a0a0a0;
            span{
              display: inline-block;
              margin-left: .34rem;
              width: auto;
              height: auto;              
              padding: 0 0 0 .44rem;              
              background: url(../assets/img/dis-2.png) 0 0 no-repeat;
              background-position: 0 .04rem;
              background-size:.34rem auto;
              vertical-align: -.3rem;
            }
        }
      }
    }
    .mtz-iteam-mt{      
      .name{
        color: #333;
        font-size: .28rem;
        vertical-align: middle;
        span{
          vertical-align: middle;
        }
      }
      .date{
        font-size: .24rem;
      }
    }
    .people{
      border-radius: .05rem;
      width: .72rem;
      height: .72rem;
      margin-right: .16rem;
    }
  }

  .cmm-foot{
    position: fixed;
    width:6.4rem;
    left: 50%;
    margin-left:-3.2rem;
    bottom: 0;
    background: #fff;
    padding: .1rem 0;
    border-top:1px solid #d0d0d0;
    line-height: 1;
    a{
      padding: 0 .55rem;
      width: 1rem;
      font-size: .24rem;
      color: #808080;
      text-align: center;
      i{
        display: block;
        margin: .05rem auto .08rem;
        width: .5rem;
        height: .41rem;
        background: url(../assets/img/foot1-1020.png) no-repeat;
        background-size: 100% auto;
      }
    }
    .text{
      background: #7a9de1;
      width: 2.14rem;
      height:.8rem;
      float: left;
      border-radius:.1rem;
      margin-left:2rem;
      a{
        display: block;
        height: 100%;
        background: url(../assets/img/foot2-1020.png) center no-repeat;
        background-size: .43rem auto;
      }
    }
    .activityren{
      float: left;
    }
    .login{
      float: right;
      i{
        background-image: url(../assets/img/foot3-1020.png);
      }
    }
  }
</style>
