<template>
  <div class="mine">
      <appTitle start="返回" title="我的" end="" />
      <mainContent scrollY/>
  </div>
</template>

<script>
export default {
    name:"mine",
}
</script>

<style lang='less'>
  .mine{
    display: flex;
    flex-direction: column;
  }
</style>