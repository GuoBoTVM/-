<template>
  <div id="app">
    <transition
        :enter-active-class="enterClass"
        :leave-active-class="leaveClass"
      >
      <router-view/>

    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      enterClass:"animated slideInRight",
      leaveClass:"animated slideOutLeft"
    }
  },
  watch:{
    '$route'(to,from){
      //根据路由长度,来判断是否进入详情页,不太准确,后期更正
      let toDepath=to.fullPath.length;
      let fromDepath=from.fullPath.length;
      if(toDepath>fromDepath){
        //进去详情页
        this.enterClass="animated slideInRight"
        this.leaveClass="animated slideOutLeft"
      }else{
        //离开详情页
        this.enterClass="animated slideInLeft"
        this.leaveClass="animated slideOutRight"
      }
      console.log(toDepath,fromDepath)
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
