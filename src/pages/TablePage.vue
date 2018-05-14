<template>
	<my-table :jsonData="jsonData" :labels="labels" pagination="true" :apiUrl="apiUrl" :total='200' btnCheck=true  @add-item="add-item">
		
	</my-table>

</template>

<script>
import MyTable from '../components/Inner'
import HeTable from '../components/Table2'
export default {
  data () {
    return {
      arrWidth: [100, 100, 100, 100],
      jsonData: [{
        index: 0,
        createdAt: '2016-05-02',
        publishedAt: '王小虎',
        type: 'aaa',
        url: '1212212'

      }, {
        index: 1,
        createdAt: '2016-05-02',
        publishedAt: '王小虎',
        type: 'aaa',
        url: '1212212'
      }, {
        index: 2,
        createdAt: '2016-05-02',
        publishedAt: '王小虎',
        type: 'aaa',
        url: '1212212'
      }, {
        index: 3,
        createdAt: '2016-05-02',
        publishedAt: '王小虎',
        type: 'aaa',
        url: '1212212'
      }],
      labels: [{
        prop: 'createdAt',
        sortable: true,
        name: '日期',
        dicKey: 'FncRndCode'
      },
      {
        prop: 'publishedAt',
        sortable: false,
        name: '项目执行人'
      },
      {
        prop: 'type',
        sortable: true,
        name: '项目详情'
      },
      {
        prop: 'url',
        sortable: false,
        name: '项目说明'
      }
      ],
      mutiple: true,
      indexing: false,
      size: 'small',
      pageSizes: [100, 200, 300, 400],
      pageSize: 200,
      currentPage: 1,
      total: 400,
      pagination: true,
      apiUrl: 'https://www.apiopen.top/meituApi?page=1',
    }
  },
  components: {
    MyTable,
    HeTable
  },
  methods: {
    changePageNum (...arr) {
      console.log(arr)
    },
    changeSize (...c) {
      console.log(c)
    },
    changeSelection (val) {
      console.log(val)
    },
    addItem (){
    	
    }

  },
  created () {

  }

}
</script>

<style>

</style>
