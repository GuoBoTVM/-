<template>
  <div class="tabbar">
      <div class="single_tabbar" @click="changeTab(item,index)" v-for="(item,index) in tabs" :key="index">
        <img :src="item.icon" class="tabbarimg">
        <div class="tabbar_label" :class="{labelActive:tabIndex == index}">{{item.label}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"tabBar",
    data(){
      return{
        tabs:[
          {
            icon:require('@/assets/icon/index.png'),
            label:"首页"
          },{
            icon:require('@/assets/icon/club.png'),
            label:"车汇"
          },{
            icon:require('@/assets/icon/msg.png'),
            label:"消息"
          },{
            icon:require('@/assets/icon/mine.png'),
            label:"我的"
          },
        ],
        tabIndex:0,
      }
    },
    methods:{
      changeTab(item,index){
        this.tabIndex=index;
        this.$emit('select',index)
      }
    }
}
</script>

<style lang='less'>
@import "../assets/css/var.less";

.tabbar{
  border-top: 1px solid black;
  width: 100%;
  // background: @primary;
  .height(70rem);
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;
  .single_tabbar{
    display: flex;
    flex-direction: column;
    .tabbarimg{
      .height(30rem);
      .width(30rem);
      margin: 0 auto;
    }
    .tabbar_label{
      text-align: center;
      color: @primary;
      &.labelActive{
        color: @tabActive;
      }
    }
  }
}
</style>