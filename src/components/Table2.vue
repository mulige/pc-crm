<template>
	<el-row>
		<el-col>
			<div class="warpper">
				<el-table :header-cell-class-name="headerStyle" :data="tableData" border @selection-change="handleSelectionChange" @select="handleSelect" @select-all="handleSelectAll" :size="size">
					<el-table-column v-if="mutiple" type="selection" width="55">
					</el-table-column>
					<el-table-column v-if="indexing" type="index" label="序号" width="50">
					</el-table-column>
					<el-table-column :sortable="false" prop="name" label="名字" width="100" show-overflow-tooltip key="0">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<!--<el-row>
								<el-col :span="7">
									<el-input size="mini"></el-input>

								</el-col>
								<el-col :span="7" >
									<el-input size="mini"></el-input>
								</el-col>
								<el-col :span="7">
									<el-input size="mini"></el-input>
								</el-col>
							</el-row>-->
							<el-form :inline="true" size="mini" :model="scope.row">
								<el-form-item v-for="(item,index) in scope.row.input" :label="item.name" :key="index">
									<el-input :disabled="item.disabled" class="inner-input" v-model="item.value" ></el-input>
								</el-form-item>
							</el-form>
							<!--<div v-if="a">
								<el-button size="mini" @click="a=false">编辑</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</div>
							<div v-else>
								<el-button size="mini" @click="a=true">啊就卡死</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</div>-->

						</template>

					</el-table-column>
				</el-table>

				<el-pagination v-if="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="pageSizes" :page-size="currentPageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
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
      default: 'mini'
    },
    tableData: Array,
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
  },

  data () {
    return {
      headerClass: 'header-row',
      a: true
    }
  },
  created () {
    console.log(this.$route)
  },
  computed: {
    currentPageSize () {
      return this.pageSize
    },
    pageNum () {
      return this.currentPage
    },
    myData () {
      return this.tableData
    }
  },
  methods: {
    /* 多选 处理选择改变后回调
			 val为这一行的数据 arr
			 *
			 * */
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
      this.$emit('selection-change', val)
    },
    handleSelect (val, row) {
      // console.log(val,row)
    },

    handleSelectAll (val) {
      // console.log(val)
    },

    /*
			 * 单选改变时
			 *
			 * */
    handleCurrentChange (val) {
      this.currentRow = val
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      // this.currentPageSize = val;
      this.$emit('size-change', val, this.pageNum)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      // this.pageNum = val;
      this.$emit('page-num-change', this.currentPageSize, val)
    },

    headerStyle ({
      row,
      index
    }) {
      return 'table-head-th'
    }

  },
  watch: {
    myData: {
      handler: function (newV) {
        console.log(newV)
      },
      deep: true
    }
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

	.inner-input {
		width: 60px;
	}
</style>
