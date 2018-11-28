<template>
  <ul class="list">
    <li class="item" 
      v-for="item of letters" 
      :key="item"
      :ref='item'
      @click="handleLetterClick"
      @touchstart='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'>
    {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus:false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick:function (e){
      console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true;
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
       if(this.timer){
         clearTimeout(this.timer)
       }
       this.timer = setTimeout(()=>{
         const touchY = e.touches[0].clientY-79
          const index = Math.floor((touchY - this.startY)/20)
          if(index >= 0 && index<this.letters.length){
            this.$emit('change',this.letters[index])
          }
       },16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false;
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

