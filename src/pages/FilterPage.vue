<template>
	<div>
		<my-filter :tab="tab" @tab-select="handleFilter"></my-filter>
	</div>
</template>
<script>
import axios from 'axios'
import MyFilter from '@/components/Filter'
import http from '@/utils/http.js'
export default {
  data () {
    return {
      tab: {
        key: '10010',
        value: '近十二个月日均资产',
        tabList: [
          {
            key: '0',
            value: '10-100'
          }, {
            key: '1',
            value: '120-100'
          }, {
            key: '2',
            value: '130120-100'
          }, {
            key: '3',
            value: '140120-100'
          }, {
            key: '4',
            value: '150120-100'
          }, {
            key: '5',
            value: '150120-100'
          }, {
            key: '6',
            value: '150120-100'
          }, {
            key: '7',
            value: '150120-100'
          }
        ]

      },
      filterList: []

    }
  },

  props: ['type'],
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store
    }
  },
  methods: {
    handleFilter (item, key, value) {
      console.log(item, key, value)
    }
  },

  async created () {
    this.$store.dispatch('FETCH_USER', 'as')
    var res = await http.get('https://www.apiopen.top/saApi?page=1a')
    console.log(res, new Date())

    var res1 = await http.get('https://www.apiopen.top/meituApi?page=1')
    console.log(res1, new Date())
  },

  mounted () {

  },
  components: {
    MyFilter
  }
}
</script>
