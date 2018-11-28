<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="header-back iconfont">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    position relative
    height $headerHeight
    background $bgColor
    font-size .32rem
    text-align center
    color #fff
    line-height $headerHeight
    .header-back
      position absolute
      font-size .4rem
      left 0
      top 0
      width .64rem
      text-align center
      color #fff
</style>
