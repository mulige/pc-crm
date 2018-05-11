<template>
	<div>
		<my-table :arrWidth='arrWidth' :tableData="jsonData" :labels="labels" :total="total" :pageSize="pageSize" :pagination="pagination" @size-change="changeSize" @page-num-change="changePageNum" @selection-change="changeSelection">
		</my-table>

		<he-table :arrWidth='arrWidth' :tableData="jsonData" :mutiple="mutiple" :labels="labels" :total="total" :pageSize="pageSize" :pagination="pagination" @size-change="changeSize" @page-num-change="changePageNum" @selection-change="changeSelection">
		</he-table>
	</div>

</template>

<script>
import MyTable from '../components/Table'
import HeTable from '../components/Table2'
export default {
  data () {
    return {
      arrWidth: [100, 100, 100, 100],
      jsonData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: 'aaa',
        input: [{
          name: '小红',
          value: '10',
          disabled: true
        }, {
          name: '小s',
          value: '10',
          disabled: true
        }, {
          name: '小理',
          value: '10',
          disabled: true
        }],
        id: '1212212',
        id1: '1212212',
        id2: '1212212',
        id3: '1212212'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: 'aab',
        input: [{
          name: '小红',
          value: '10'
        }, {
          name: '小s',
          value: '10'
        }, {
          name: '小理',
          value: '10'
        }],
        id: '1212212sad',
        id1: '1212212',
        id2: '1212212',
        id3: '1212212'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: 'aac',
        input: [{
          name: '小红',
          value: ''
        }, {
          name: '小s',
          value: ''
        }, {
          name: '小理',
          value: ''
        }],
        id: '1212212122',
        id1: '1212212',
        id2: '1212212',
        id3: '1212212'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路',
        input: [{
          name: '小红',
          value: ''
        }, {
          name: '小s',
          value: ''
        }, {
          name: '小理',
          value: ''
        }],
        id: '1212212sasa',
        id1: '1212212',
        id2: '1212212',
        id3: '1212212'
      }],
      labels: [{
        prop: 'date',
        sortable: true,
        name: '日期'
      },
      {
        prop: 'name',
        sortable: false,
        name: '姓名'
      },
      {
        prop: 'address',
        sortable: true,
        name: '地址'
      },
      {
        prop: 'input',
        sortable: false,
        name: '操作'
      },
      {
        prop: 'id',
        sortable: false,
        name: '客户编号'
      },
      {
        prop: 'id1',
        sortable: false,
        name: '客户编号'
      },
      {
        prop: 'id2',
        sortable: false,
        name: '客户编号'
      },
      {
        prop: 'id3',
        sortable: false,
        name: '客户编号'
      }
      ],
      mutiple: true,
      indexing: false,
      size: 'small',
      pageSizes: [100, 200, 300, 400],
      pageSize: 200,
      currentPage: 1,
      total: 400,
      pagination: true
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
    }

  },
  created () {

  }

}
</script>

<style>

</style>
