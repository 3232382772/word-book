<template>
   <div class="toast" v-show="isShow">
       {{message}}
   </div>
</template>

<script>
export default {
   data() {
       return {
           isShow:false,
           message:''
       }
   },
   methods:{
       show(message,duration) {
           this.message = message;
           this.isShow = true;
            setTimeout(() => {
                this.isShow = false;
                this.message = ''
            },duration)
       }
   }
}
</script>

<style  scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 15px 25px;
        color: #fff;
        background: rgba(0, 0, 0, .7);
        z-index: 999;
        border-radius: 10px;
        text-align: center;
    }
    
</style>
