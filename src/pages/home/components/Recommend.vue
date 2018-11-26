<template>
  <div>
    <div class="title"> 热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn"> 查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
  .title
    line-height .75rem
    background #eeeeee
    text-indent .2rem
    margin-top .2rem
  .item
    overflow hidden
    display flex
    height 2rem
    .item-img
      width 1.8rem
      height 1.8rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-btn
        background #ff9300
        padding 0 .2rem
        border-radius .05rem
        margin-top .16rem
        color #fff
        line-height .44rem
</style>
