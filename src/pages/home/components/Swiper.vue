<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key="item.id">
        <img class='swiper-img' :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption:{
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id:'0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/35/3620a92584b40002.jpg_750x200_24f14e7c.jpg'
      },
      {
        id:'0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg'
      }]
    }
  }
}
</script>
 
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 26.67%
  .swiper-img
    width 100%
</style>
 