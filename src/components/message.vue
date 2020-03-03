<template>
  <div class="msg">
      <appTitle start="" title="消息" end="" />
      <mainContent scrollY/>
  </div>
</template>

<script>
export default {
    name:"message",
}
</script>

<style lang='less'>
  .msg{
    display: flex;
    flex-direction: column;
  }
</style>