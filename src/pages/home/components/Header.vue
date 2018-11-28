<template>
  <div class="header">
    <div class="header-left"><span class="back-icon iconfont">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>请输入城市/景点/游玩主题</div>
    <router-link to='/city'>
      <div class="header-right">{{this.city}} <span class="arrow-icon iconfont">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
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
      color #fff
      .arrow-icon
        font-size .24rem
        margin-left -0.04rem
</style>
