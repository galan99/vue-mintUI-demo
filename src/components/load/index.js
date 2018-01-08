/**
 * Created by anlen.wang on 2018/1/4.
 */
import MyLoad from './load.vue'
const Loading = {
    install: function(Vue){
        Vue.component('Loading',MyLoad)
    }
}

// 导出组件
export default Loading
