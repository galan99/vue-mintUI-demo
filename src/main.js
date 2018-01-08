import Vue from 'vue'
import App from './App'
import router from './router'
//import 'mint-ui/lib/style.css';

//按需加载mint-ui组件
import { Toast,Indicator,Spinner,InfiniteScroll } from 'mint-ui';
window.Toast= Toast;
window.Indicator= Indicator;
Vue.component(Spinner.name, Spinner);
Vue.use(InfiniteScroll);

import {Ajax} from './components/api'
Vue.prototype.$ajax = Ajax;

//添加mockjs拦截请求，模拟返回服务器数据
if(process.env.NODE_ENV === 'development') {
  require('./mock/index.js');
}

Vue.config.productionTip = false


/* 同级组件通信通道Bus ，将Bus注册为全局事件 */
const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
});

/* 配置请求域名 */
let $url = '';
let $http = document.location.protocol + "//";
let $host = window.location.host;
if (location.href.indexOf('//localhost') != -1) {
    //本地接口地址
    $url = '';
} else if (location.href.indexOf('//192.168') != -1) {
    //测试接口地址
    $url = $http + $host + "/";
} else {
    // 线上接口地址
    $url = $http + $host + "/";
}
Vue.prototype.$url = $url;

/* eslint-disable no-new */
new Vue({
  created(){
	var devieWidth= Math.min(640,document.documentElement.clientWidth,document.documentElement.clientHeight);
	var fonSize= devieWidth > 1080 ? 144 : devieWidth / 6.4;
	document.documentElement.style.fontSize=fonSize+'px';
  },
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
