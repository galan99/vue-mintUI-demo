/**
 * Created by anlen.wang on 2018/1/4.
 */
import MyTip from './tip.vue'
const Tip = {
    install: function(Vue){
        Vue.component('Tip',MyTip)
    }
}

// 导出组件
export default Tip
