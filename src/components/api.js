/*
*author:anlen.wang
*day:2018-01-05
*/
import Vue from 'vue';
import Qs from 'qs';
import axios from 'axios';
import router from '../router'


//开始请求
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

//请求完成
axios.interceptors.response.use(function (response) {
    if(response.data.code == -555){
        //未登录
        router.replace({
            path: 'login',
            query: {path: router.currentRoute.fullPath.slice(1)}
        })
    }
    if(response.data.code==0){
        //console.log('请求完成')
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});


export const Ajax= (...rest) => {

    function checkStatus(response) {
        if(response.data.code!=0 && response.data.msg){
            console.log(response.data.msg);
        }
        return response.data
    }

    function checkCode(res) {
        alert('请求出错，请稍后再试！');
        return res
    }

    let data=rest[2];
    let headers={'X-Requested-With': 'XMLHttpRequest'};
    let json={};

    if(rest[0].toLowerCase()!='get'){
        data= rest.length == 3 ? Qs.stringify(data) : data;
        headers= {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        json.data=data;
    }else{
        //data.t=new Date().getTime(); //去除get缓存
        json.params=data;
    }

    
    json.method=rest[0]; // 请求方式
    json.url=rest[1]; // 请求的地址
    json.timeout= 80000; // 超时时间, 单位毫秒
    json.headers=headers;

    return axios(json).then(checkStatus).catch(checkCode);

}

/*
ajax使用
async comeIn(){
    let postData = {
        page: this.curPage, 
        pageSize: this.pageSize,
        sort: this.sort,
    };
    const data=await Ajax('get',`${this.$url}wpk/popups/list`,postData);
    if(data.code==0){

    }
}
*/