<template>
  <div class="indexpage">
      <index v-if="tabIndex == 0" />
      <club v-if="tabIndex == 1" />
      <message v-if="tabIndex == 2" />
      <mine v-if="tabIndex == 3" />
      <tabBar @select="changeIndex"></tabBar>
  </div>
</template>

<script>
export default {
  name:"indexPage",
  data(){
    return{
      tabIndex:0,
    }
  },
  methods:{
    //监听子组件传过来的事件,改变tabIndex
    changeIndex(index){
      this.tabIndex=index;
    }
  }
}
</script>

<style>
.indexpage{
    position: fixed;
    height:100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
}
</style>