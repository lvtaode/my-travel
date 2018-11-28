<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities='hotCities' :cities='cities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
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
      cities: {}
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
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>

