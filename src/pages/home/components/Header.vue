<template>
  <div class="header">
    <div class="header-left"><span class="back-icon iconfont">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>请输入城市/景点/游玩主题</div>
    <div class="header-right">城市 <span class="arrow-icon iconfont">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header
    display flex
    height .86rem
    background $bgColor
    color #fff
    line-height $headerHeight
    .header-left
      width .54rem
      .back-icon
        text-align center
        font-size .35rem
        margin-left .1rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      background-color #fff
      margin-top .12rem
      margin-left .12rem
      color #ccc
      padding-left .16rem
      border-radius .15rem
    .header-right
      width 1.2rem
      text-align center
      .arrow-icon
        font-size .24rem
        margin-left -.04rem
</style>
