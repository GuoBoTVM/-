<template>
  <div class="title">
    <div class="left">
      {{start}}
      <slot v-if="!start" name="start">返回</slot>
    </div>
    <div class="middle">
      {{title}}
      <slot v-if="!title" name="title">消息</slot>
    </div>
    <div class="end">
      {{end}}
      <slot v-if="!end" name="end">菜单</slot>
    </div>

  </div>
</template>

<script>
export default {
    name:"appTitle",
    props:['start','title','end']
}
</script>

<style lang='less'>
@import '../assets/css/var.less';
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .height(70rem);
  background: @titleBack;
  color:@titleColor;
  .fontSize(24rem);
  .left{
    margin-left: 0.5rem;
    width: 1.5rem;
  }
  .end{
    margin-right: 0.5rem;
    width: 1.5rem;
  }
}

</style>