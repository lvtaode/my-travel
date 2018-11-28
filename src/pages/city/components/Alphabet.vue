<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.list
  position absolute
  z-index 10
  right 0
  top 1.58rem
  bottom 0  
  display flex
  flex-direction column
  width .4rem
  justify-content center
  .item
    line-height .4rem
    color $bgColor
    text-align center
</style>

