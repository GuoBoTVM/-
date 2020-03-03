<template>
  <div class="index">
      <appTitle start="" title="首页" end="" />
      <mainContent scrollY>
        <template slot="content">
          <button @click="jumpTodetail">跳转</button>
        </template>
      </mainContent>
  </div>
</template>

<script>
export default {
    name:"index",
    methods:{
      jumpTodetail(){
        this.$router.push('/detail')
      }
    }
}
</script>

<style lang='less'>
  .cluindexb{
    display: flex;
    flex-direction: column;
  }
</style>