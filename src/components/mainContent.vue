<template>
  <div class="maincontent" :class="{yscroll:scrollY}">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
    name:"mainContent",
    props:{
      scrollY:Boolean,
    }
}
</script>

<style lang='less'>
.maincontent{
  display: flex;
  &.yscroll{
    overflow-y: scroll;
  }
}
</style>