<!--编辑个人中心-->
<template>
  <div class="edit">
    <ul class="per_mc">     
      <li class="per_m_pic_2">        
          <span class="pic_box">
            <img class="per_people" src="http://dl.gamdream.com/bbs/attachment/album/201607/21/5061901.jpg">
            <input type="file" class="file_pic" id="uploadInput">
            <em class="pic_text">点击上传头像</em>
          </span>       
      </li>
      <li>
        <a href="javascript:;" class="per_m_name"  @click="edit('name')">
          <p>昵称</p>
          <p class="per_rcon"><span class="per_rname">别瞅我1</span><i class="icos"></i></p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="per_m_sex" @click="showSex = true">
          <p>性别</p>
          <p class="per_rcon">
            <span class="per_rsex">男</span>
            <i class="icos"></i>
          </p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="per_m_time" @click="edit('time')">
          <p>生日</p>
          <p class="per_rcon"><span class="per_rtime">1990-5-1</span><i class="icos"></i></p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="per_m_city" @click="edit('city')">
          <p>城市</p>
          <p class="per_rcon"><span class="per_rcity">广东省 深圳市</span><i class="icos"></i></p>
        </a>
      </li>                   
    </ul>

    <!--编辑性别-->
    <div class="per_tan" v-show="showSex">
      <div class="per_tanbox">
        <input type="radio" name="sexSelect" id="sir" value="1" style="display:none">
        <label for="sir" class="labels" value="1" @click="saveSex(1)">男</label>
        <input type="radio" name="sexSelect" id="miss" value="2" style="display:none">
        <label for="sir" class="labels" value="2" @click="saveSex(2)">女</label>
      </div>
      <p class="per_tanfalse" @click="showSex = false">取消</p>
    </div>

    <div class="per_layer" :class="{'active':showEdit}">
      <div class="play_mt dbox">
        <a class="m-back" href="javascript:;" @click="showEdit=false"><i></i></a>
        <h3 class="flex play_mttit">修改{{editText}}</h3>
        <a class="mt-btn" href="javascript:;" @click="sub">保存</a>
      </div>
            
      <div class="play_mc">
        <!--编辑昵称-->
        <div class="nick_name" id="nick_name" v-show="editType=='name'">
          <p class="nick_ins"><input type="text" placeholder="请输入昵称" v-model="nickname"></p>
        </div>
        <!--编辑生日-->
        <div class="nick_time" id="nick_time" v-show="editType=='time'">
          <p class="nick_sles">
            <select></select>
            <span>年</span>
          </p>
          <p class="nick_sles">
            <select>
            </select>
            <span>月</span>
          </p>
          <p class="nick_sles">
            <select>
            </select>
            <span>日</span>
          </p>
        </div>
        
        <!--编辑城市-->
        <div class="nick_city" id="nick_city" v-show="editType=='city'">
          <p class="nick_sles">
            <select>
              <option>广东</option>                    
            </select>           
          </p>
          <p class="nick_sles">
            <select>
              <option>深圳</option> 
            </select>         
          </p>          
        </div>
          
        </div>
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
      loadtext: '加载中',
      showSex:false,
      showEdit:false,
      editText:'生日',//生日 ，城市，昵称
      editType:'',
      nickname:'',

    }
  },
  created () {
    let that = this;
  },
  mounted(){
    document.querySelector('.edit').style.height = document.documentElement.clientHeight+'px';
  },
  methods: {
    edit(type){
      this.showEdit = true;
      this.editType = type;
      if(type=='name'){
        this.editText = '昵称'
      }
      if(type=='time'){
        this.editText = '生日'
      }
      if(type=='city'){
        this.editText = '城市'
      }
    },
    sub(){
      console.log('保存生日等')
      this.showEdit = false;
    },
    saveSex(val){
      console.log('保存性别'+val)
      this.showSex = false;
    },
  },
}
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
  .edit{
    background: #f3f3f3;
  }
  .icos{
    width: .18rem;
    height: .31rem;
    background: url(../assets/img/per-in.png) 0 0 no-repeat;
    background-size: 100%;
    vertical-align: -.04rem;
    margin-left: .12rem;
    position: relative;
    display: inline-block;
  }
  .per_mc{
    li{
      a{
        vertical-align: middle;
        font-size: .3rem;
        color: #898989;
        padding: .1rem .3rem;
        line-height: .8rem;
        height: .8rem;
        background: #fff;
        display: block;
        overflow: hidden;
        position: relative;
        border-bottom:1px solid #e8e8e8;
      }
      p{
        float: left;
      }
      .per_rcon{
        float: right;
      }
    }
    .per_m_pic_2 {
        background: #f3f3f3;
        padding: .48rem 0;
        text-align: center;
        border-bottom:1px solid #e8e8e8;
        span{
          display: inline-block;
          width: 2rem;
          height: 2rem;
          position: relative;
        }
        img{
          width: 100%;
          height: 100%;
          border-radius: .1rem;
        }
        input{
          width: 100%;
          height: 100%;
          z-index: 10;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
        }
        em{
          position: absolute;
          font-size: .26rem;
          color: #fff;
          height: .50rem;
          line-height: .50rem;
          width: 100%;
          left: 0px;
          bottom: 0px;
          background: rgba(0,0,0,.3);
          border-bottom-right-radius: .1rem;
          border-bottom-left-radius: .1rem;
        }
    }
  }

  .per_tan {
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.75);
    font-size:.32rem;
    line-height:.80rem;
    text-align: center;
    padding:4.5rem .2rem;
    box-sizing: border-box;
  }
  .per_tan label {
    display:block;
  }
  .per_tan .per_tanbox label:nth-of-type(1) {
    border-bottom:1px solid #e1e2e3;
  }
  .per_tan .per_tanbox,.per_tan .per_tanfalse {
    background:#fff;
    border-radius:.08rem;
    margin-bottom: .30rem;
  }
  .per_layer {
    position:fixed;
    left:0;
    top:0;
    right:0;
    width:100%;
    height:100%;
    background:#f3f3f3;
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    -webkit-transform:translateX(100%);
    transform:translateX(100%);
    z-index: 100;
  }
  .per_layer.active {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  }
  .per_layer .nick_name,.per_layer .nick_time,.per_layer .nick_city {
    //display: none;
  }
  .per_layer .nick_ins {
    padding:.20rem 0;
  }
  .per_layer .nick_ins input {
    width:100%;
    background:#fff;
    -webkit-tap-highlight-color: rgba(255,0,0,0);
    -webkit-appearance: none;
    border:none;
    border-top:1px solid #e1e2e3;
    border-bottom:1px solid #e1e2e3;
    height:.40rem;
    line-height: .40rem;
    font-size:.32rem;
    padding:.20rem;
  }
  .per_layer .nick_sles {
    height:.80rem;
    line-height:.80rem;
    margin-bottom:.20rem;
    font-size:.32rem;
    background:#fff;
    position:relative;
    overflow: hidden;
    text-align:right;
    padding-right:.30rem;
  }
  .per_layer .nick_sles select {
    width:100%;
    font-size:.32rem;
    -webkit-appearance:none;
    appearance:none;
    border:none;
    position:absolute;
    left:0;
    top:0;
    height:.80rem;
    padding-left:.20rem;
    text-align: left;
    background:none;
    box-sizing:border-box;
  }
  .per_layer .nick_time,.per_layer .nick_city {
    padding-top:.20rem;
  }
  .play_mt {
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #333;
    position: relative;
    h3{
      font-size: .36rem;
    }
    .mt-btn {
      font-size: .32rem;
      padding: 0 .20rem;
      display: inline-block;
      color: #333;
    }
  }
  .m-back {
    display: inline-block;
    padding: 0 .52rem 0 .30rem;
    height: 100%;
    i{
      display: inline-block;
      width: .18rem;
      height: .31rem;
      background: url(../assets/img/per-in.png) 0 0 no-repeat;
      background-size: 100%;
      vertical-align: middle;
      -webkit-transform:rotate(180deg);
      transform:rotate(180deg);
    }
  }
</style>
