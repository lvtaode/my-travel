<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom"> 当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">
              {{currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom"> 热门城市</div>
        <div class="btn-list">
         <div class="btn-wrapper" 
              v-for="item of hotCities" 
              :key="item.id"
              @click="handleCityClick(item.name)">
            <div class="btn">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(items,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom"> {{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom" 
            v-for="(city,i) of items" 
            :key='i' @click="handleCityClick(city.name)">
            {{city.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
    &:before
      border-color #cccccc
.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height .45rem
    font-size .28rem
    background #eee
    text-indent .2rem
    color #666
  .btn-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .btn-wrapper
      float left
      width 33.33%
      .btn
        margin .1rem
        padding .1rem 0
        border-radius .06rem
        text-align center
        border .02rem solid #ccc
  .item-list
    .item
      line-height .7rem
      text-indent .2rem
</style>
