# vue-mintUI-demo

> 利用vue2、mockjs实现前后分离，开发时vue-cli proxyTable 可以解决开发环境的跨域问题，所以针对没有接口数据时采用mockjs方法，有接口时采用修改vue-cli的config文件里index.js的参数proxyTable来开发。

> UI采用的是[Mint UI](http://mint-ui.github.io/#!/zh-cn)，基于 Vue.js 的移动端组件库

> 要想统一处理所有http请求和响应，就得用上 axios 的拦截器。通过配置http response inteceptor，当后端接口返回-555 （未授权），让用户重新登录。

```code
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
    return response;
}, function (error) {
    return Promise.reject(error);
});
```

通过上面这两步，就可以在前端实现登录拦截了。登出功能也就很简单，只需要把当前token清除，再跳转到首页即可。

> 如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

# 说明 

因该例子是以公司项目开发的，并没完全做完，所以仅提供学习参考。

## 技术栈

> vue </br>

> vue-router </br>

> axios </br>

> mockjs </br>

> webpack </br>

## 执行命令

通过npm安装本地服务第三方依赖模块(需要已安装Node.js)，使用npm安装依赖模块可能会很慢，建议换成cnpm<br/>

npm install -g cnpm --registry=http://registry.npm.taobao.org<br/>

> cnpm install </br>

> npm run dev </br>

> npm run build </br>

