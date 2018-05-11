<template>
	<el-row>
		<el-col>
			<div class="warpper">
				<el-table  :header-cell-class-name="headerStyle" :data="jsonData" border @selection-change="handleSelectionChange" :size="size">
					<el-table-column v-if="mutiple" type="selection" width="55" >
					</el-table-column>
					<el-table-column v-if="indexing"  type="index" label="序号" width="50">
					</el-table-column>
					<el-table-column v-for='(label,index) in labels' :sortable="label.sortable" :prop="label.prop"
						:label="label.name" width="arrWidth[index]" show-overflow-tooltip :key="index">
					</el-table-column>
				</el-table>

				<el-pagination v-if="pagination"  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"  :page-sizes="pageSizes" :page-size="currentPageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</el-col>
	</el-row>

</template>

<script>

export default {
  /*
		 arrWidth:[100,100,100]
		 data

		 *
		 *
		 * */

  /*
		 arrWidth:每列宽度Array
		 size:table大小
		 data:表格数据Array
		 labels:表头数据
		 labels:[{
		 	prop:属性名
		 	sortable: true/false 是否排序
		 	name:列名
		 }],

		 pageSizes:页面大小选择数组
		 pageSize:当前选择的页面打小
		 layout:"total, sizes, prev, pager, next, jumper",
		 total:总页数
		 currentPage:当前所在页
		 * */
  props: {
    arrWidth: Array,
    size: {
      default: 'small'
    },
    jsonData: Array,
    labels: Array,
    mutiple: {
      default: false
    },
    indexing: {
      default: false
    },
    currentPage: {
      default: 1
    },
    pageSize: {
      default: 100
    },
    pageSizes: {
      default: function () {
        return [100, 200, 300, 400]
      }
    },
    total: Number,
    pagination: {
      default: false
    }

  }, /* ['arrWidth','size',"tableData",'labels','mutiple',"indexing","currentPage","pageSize","pageSizes","total","pagination"], */
  data () {
    return {
      /* tableData:this.jsonData */
    }
  },
  created () {
    // console.log(this.$route)

    /* if(this.tableData.length==0){
				this.loading = true;
				this.handlePromise()
			}else{
				this.loading = false;
			} */

  },
  computed: {
    currentPageSize () {
      return this.pageSize
    },
    pageNum () {
      return this.currentPage
    }
  },
  methods: {
    /* 多选 处理选择改变后回调
			 val为这一行的数据 arr
			 *
			 * */
    handleSelectionChange (val) {
      console.log(val)
      this.$emit('selection-change', val)
    },
    /* 单选改变时 */
    handleCurrentChange (val) {
      this.currentRow = val
    },

    /* 处理一页显示数量改变 */
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.$emit('size-change', val, this.pageNum)
    },
    /* 处理单前页改变 */
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.$emit('page-num-change', this.currentPageSize, val)
    },

    headerStyle ({row, index}) {
      return 'table-head-th'
    }
  },
  watch: {
  }

}
</script>

<style lang="scss" scoped>
	.warpper {
		width: 100%;
	}
	 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
	.el-table .table-head-th{
        background-color:blue!important;
        font-size: large;
    }
</style>
