<template>
  <div class="page">
        <div class="logo"><img src="../assets/img/logo.png"></div>
        <div class="container">
            <div class="cont_login" v-show="loginkg">
                <div class="login_nav clearfix">
                    <a :class="{cur:type == 'phone'}" href="javascript:void(0);" @click="tab('phone')">手机号快速登录</a>
                    <a :class="{cur:type == 'zhang'}" href="javascript:void(0);" @click="tab('zhang')">账号登录</a>
                </div>
                <!--用户登录-->
                <div class="login_form">
                    <!--手机号快速登录-->
                    <div class="login_box"  v-show="type == 'phone'">
                        <div class="input_box">
                            <input v-model="phoneName" class="input input_phone mobile" id="login_phone" type="text" placeholder="手机号" maxlength="11">
                        </div>
                        <div class="input_box">
                            <input v-model="phoneCode" class="input input_code" id="login_code" type="number" placeholder="验证码" oninput="if(value.length>10)value=value.slice(0,10)">
                            <a href="javascript:void(0);" class="getCode" :class="{gray:loginCodeTxt!='获取验证码'}" id="login_get_code" tid="0" @click="getCode('login')">{{loginCodeTxt}}</a>
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="btn btn_login" id="login_by_phone" @click="phoneLogin">快速登录</a>
                        </div>
                    </div>
                    <!--账号密码登录-->
                    <div class="login_box" v-show="type == 'zhang'">
                        <div class="input_box">
                            <input v-model="zhangName" class="input input_phone" id="login_user" type="text" placeholder="手机号/账号" maxlength="36">
                        </div>
                        <div class="input_box">
                            <input v-model="zhangPass" class="input input_password" id="login_pass" type="password" placeholder="密码" maxlength="36">
                        </div>
                        <div>
                            <a href="javascript:void(0);" class="btn btn_login" id="login_by_user" @click="zhangLogin">登录</a>
                        </div>
                    </div>
                    <div class="atten">
                        <a href="javascript:void(0);" class="fgt_pass" @click="findpass">忘记密码?</a>
                    </div>
                </div>
            </div>
            <!--确认密码-->
            <div class="cont_checkPass" v-show="passKgTwo">
                <div class="cont_title">欢迎您加入</div>
                <div class="checkPass_form">
                    <div class="input_box">
                        <input v-model="findPass" class="input input_password" id="set_password_1" type="password" placeholder="输入密码" maxlength="36">
                    </div>
                    <div class="input_box">
                        <input v-model="findPassAgain" class="input input_password_again" id="set_password_2" type="password" placeholder="再次输入密码" maxlength="36">
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn_sure" id="setPass" @click="findLast">完成</a>
                    </div>
                </div>
            </div>
            <!--手机号召回密码-->
            <div class="cont_forget" v-show="passKgOne">
                <div class="cont_title">找回密码</div>
                <div class="forget_form">
                    <div class="input_box">
                        <input v-model="findName" class="input input_phone mobile" id="forget_phone" type="text" placeholder="手机号" maxlength="11">
                    </div>
                    <div class="input_box">
                        <input v-model="findCode" class="input input_code" type="number" id="forget_code" placeholder="验证码" oninput="if(value.length>10)value=value.slice(0,10)">
                        <a href="javascript:void(0);" class="getCode" :class="{gray:findCodeTxt!='获取验证码'}" id="forget_get_code" tid="1" @click="getCode('find')">{{findCodeTxt}}</a>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn_next" @click="findNext">下一步</a>
                    </div>
                    <div class="atten">
                        已经<a href="javascript:void(0);" class="goLogin" @click="goLogin">账号登录</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <toast type="text" :time="3000" position="top" :text="toastTip" v-model="toasShow"></toast>
        <loading :show="loadshow" text="加载中"></loading> -->
    </div>
</template>

<script>

let regMobile=/^1[34578]\d{9}$/;
export default {
  name: 'new',
  components: {
    
  },
  data () {
    return {
      toastTip:'',//提示文字
      toasShow:false,//
      loadshow: false,
      loginCodeTxt:'获取验证码',
      findCodeTxt:'获取验证码',
      type:'phone',//切换登录方式 phone zhang
      phoneName:'',
      phoneCode:'',
      zhangName:'',
      zhangPass:'',
      findPass:'',
      findPassAgain:'',
      findName:'',
      findCode:'',
      loginkg:true,
      passKgOne:false,
      passKgTwo:false,
      loginTimer:null,
      findTimer:null,
      routerType:this.$route.query.type,//上个路由
    }
  },
  destroyed (){
    clearInterval(this.loginTimer)
    clearInterval(this.findTimer)
  },
  created () {
    let that = this;
    console.log(this.routerType)   
  },
  methods: {
    tab(val){
      this.type = val;
    },
    //登录验证码  找回密码验证
    getCode(type){
      if(type == 'login'){
        if(!this.phoneName.match(regMobile)){
          Toast({
            message:'请输入正确手机号',
            position:'top'
          })
          return false
        }
        
        if(this.loginCodeTxt!='获取验证码'){
          return false;
        }

        this.loadshow = true;
        let num = 60;
        this.loginCodeTxt = `获取验证码(${num}s)` 
        let postData={'mobile':this.phoneName}
        this.$ajax('get',`${this.$url}config/list`,postData).then((data)=>{
          this.loadshow = false;
          if(data.code == 0){               
            this.loginTimer= setInterval( ()=>{
              this.loginCodeTxt = `获取验证码(${num}s)`
              if(num<=0){
                clearInterval(this.loginTimer)
                this.loginCodeTxt = `获取验证码`
              }
              num--   
            },1000)
          }
        });
        
      }else{
        if(!this.findName.match(regMobile)){
          Toast({
            message:'请输入正确手机号',
            position:'top'
          })
          return false
        }

        if(this.findCodeTxt!='获取验证码'){
          return false;
        }

        this.loadshow = true;
        let num = 60;
        this.findCodeTxt = `获取验证码(${num}s)` 
        let postData={'mobile':this.phoneName}
        this.$ajax('get',`${this.$url}config/list`,postData).then((data)=>{
          this.loadshow = false;
          if(data.code == 0){               
            this.findTimer= setInterval( ()=>{
              this.findCodeTxt = `获取验证码(${num}s)`
              if(num<=0){
                clearInterval(this.findTimer)
                this.findCodeTxt = `获取验证码`
              }
              num--   
            },1000)
          }
        });
      }
    },
    phoneLogin(){
      //快速登录
      if(!this.phoneName.match(regMobile)){
        Toast({
          message:'请输入正确手机号',
          position:'top',
        })
        return false
      }
      if(!this.phoneCode){
        Toast({
          message:'请输入验证码',
          position:'top'
        })
        return false
      }
      console.log('快速登录')
    },
    zhangLogin(){
      //账号登录
      if(!this.zhangName){
        Toast({
          message:'请输入账号',
          position:'top'
        })
        return false
      }
      if(!this.zhangPass){
        Toast({
          message:'请输入密码',
          position:'top'
        })
        return false
      }
      console.log('账号登录')
    },
    findpass(){
      //去找密码
      this.loginkg = false;
      this.passKgOne = true;
    },
    findNext(){
      //找回密码 下一步
      if(!this.findName.match(regMobile)){
        Toast({
          message:'请输入正确手机号',
          position:'top'
        })
        return false
      }
      if(!this.findCode){
        Toast({
          message:'请输入验证码',
          position:'top'
        })
        return false
      }
      console.log('找回密码')
      this.passKgOne = false;
      this.passKgTwo = true;
    },
    findLast(){
      //设置密码完成
      if(!this.findPass){
        Toast({
          message:'请输入密码',
          position:'top'
        })
        return false
      }
      if(this.findPassAgain!=this.findPass){
        Toast({
          message:'两次密码不一致',
          position:'top'
        })
        return false
      }
      this.passKgTwo = false;
      this.loginkg = true;
      this.type = 'zhang';
    },
    goLogin(){
      //去登陆
      this.passKgOne = false;
      this.loginkg = true;
      this.type = 'zhang';
    },

  },
}
</script>


<style scoped lang="less" type="text/less" rel="stylesheet/less">
.page {
  width: 6.4rem;
  margin: 0 auto;
  padding-top: 0.5rem;
}

.page .logo {
  width: 2.4rem;
  margin: 0 auto;
}

.page .container {
  padding: 0 0.6rem;
}

.input_box {
  position: relative;
}

.input_box::after {
  position: absolute;
  width: 1px;
  height: 0.22rem;
  background-color: #bdd4ea;
  content: " ";
  top: 0.28rem;
  left: 0.95rem;
}

.input {
  width: 100%;
  height: 0.7rem;
  border: 1px solid #81c4fa;
  border-radius: 0.35rem;
  margin-bottom: 0.24rem;
  font-size: 0.28rem;
  color: #333;
  position: relative;
  padding-left: 1.2rem;
  box-sizing: border-box;
  background: #fff no-repeat 0.35rem center;
  background-size: 0.29rem auto;
  outline: none;
}

.input::-webkit-input-placeholder {
  color: #b3b3b3;
}

.input_phone {
  background-image: url("../assets/img/icon_login_user.png");
}

.input_code {
  background-image: url("../assets/img/icon_login_code.png");
}

.input_password {
  background-image: url("../assets/img/icon_login_password.png");
}

.input_password_again {
  background-image: url("../assets/img/icon_login_password_again.png");
}

.btn {
  display: block;
  width: 100%;
  height: 0.78rem;
  border: 0.01rem solid #2384de;
  background: -webkit-gradient(linear, 0 0, 0 bottom, from(#4bb0ff), to(#2b99ff));
  border-radius: 0.4rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
  box-shadow: 0 1px 0.1rem #2b99ff;
}

.btn:active {
  opacity: 0.9;
}

.cont_login {
  margin-top: 0.5rem;
}

.cont_login .login_nav a {
  line-height: 0.72rem;
  display: block;
  float: left;
  width: 50%;
  text-align: center;
  font-size: 0.3rem;
  color: #9a9a9a;
  border-bottom: 0.04rem solid #ccc;
}

.cont_login .login_nav .cur {
  color: #36a0ff;
  border-bottom: 0.04rem solid #36a0ff;
}

.cont_login .login_form {
  margin-top: 0.4rem;
}

.container .atten {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.3rem;
  color: #a9a9a9;
}

.container .atten a {
  color: #55afff;
}

.getCode {
  font-size: 0.24rem;
  color: #43aaff;
  position: absolute;
  top: 0.12rem;
  right: 0.2rem;
  padding: .1rem;
}

.gray {
  color: gray;
}

.cont_title {
  text-align: center;
  font-size: 0.52rem;
  color: #195ec6;
  margin: 0.1rem 0 0.5rem;
}
</style>
