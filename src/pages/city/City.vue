<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter='letter' :hotCities='hotCities' :cities='cities'></city-list>
    <city-alphabet :cities='cities' @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.handleLoad()
  },
  methods:{
    handleLoad () {
      axios.get('../../../mock/city.json').then(this.loadData)
    },
    loadData (res) {
      res=res.data
      console.log(res)
      if(res.data && res.ret) {
        this.hotCities = res.data.hotCities;
        this.cities = res.data.cities
      }
    },
    handleLetterChange (msg) {
      this.letter = msg
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>

