<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class='swiper-img' src="http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class='swiper-img' src="http://img1.qunarzz.com/piao/fusion/1811/35/3620a92584b40002.jpg_750x200_24f14e7c.jpg" alt="">
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
      swiperOption:{}
    }
  }
}
</script>
 
<style lang="stylus" scoped>
.swiper-img
  width 100%
</style>
 