/*
*author:anlen.wang
*day:2018-01-08

	使用方法
	let postData={'mobile':13512345123}
	this.$axios.post('/sdk-game-data/player-data/index',postData).then((data)=>{
		console.log(data)
	})
*/
import Vue from 'vue';
import qs from 'qs';
import axios from 'axios';
import Mock from 'mockjs';
import {gameList} from './game.js';

let data = [].concat(gameList);

data.forEach(function(res){
    Mock.mock(res.path, res.data);
});


axios.defaults.timeout = 5000;

//POST传参序列化
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
   alert("错误的传参");
  return Promise.reject(error);
});

Vue.prototype.$axios = axios;


export default Vue;
