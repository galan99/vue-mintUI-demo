<template>
  <section id="cmTips" class="cmTips" v-show="msgKg">
      <p>{{msg}}</p>
  </section>
</template>

<script>
export default {
  name: 'tip',
  props:['msg'],
  data() {
      return {
          timer: null,
          msgKg:false,
      };
  },
  watch: {
    'msg':function(val, oldVal){
        console.log(val)        
        if(val||oldVal){
          this.msgKg = true;
          if (this.timer) {
              clearInterval(this.timer);
          }
          this.timer = setTimeout(() => {
              console.log(this)
              this.msgKg = false;
          }, 1000);
        }
    }
  },
}
</script>
