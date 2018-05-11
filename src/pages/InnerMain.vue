<template>
	<el-row>
		<my-form @query="query"></my-form>
		<inner-table size="'small'" :labels="labels"  :total="total" :pagination="pagination" :mutiple="true"  :delUrl='delUrl' :apiUrl="url" :jsonData="jsonData" :btnCheck="true"  :edit="true" :params="params" :formConfigs="formConfigs" :addFormConfigs="formConfigs" :dialog="dialog" :deleteParams="deleteParams" :addParams="addParams" :addUrl="addUrl" :editParams="editParams" :addDialog='dialog' :editUrl="editUrl" >
		</inner-table>
	</el-row>

</template>

<script>
import myTable from '@/components/Table'
import OutsideTable from '@/components/OutsideTable'
import InnerTable from '@/components/InnerTable'
import myForm from '@/components/Form'
export default {
  name: 'main',
  data () {
    return {
      arrWidth: [100, 100, 100, 100],
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
      total: 400,
      pagination: true,
      url: 'https://www.apiopen.top/meituApi?page=1',
      delUrl: 'https://www.apiopen.top/meituApi?page=1',
      editUrl: 'https://www.apiopen.top/meituApi?page=1',
      addUrl: 'https://www.apiopen.top/meituApi?page=1',
      params: {'usertoken': 'sdsddssdasd'},
      deleteParams: {'usertoken': 'sdsddssdasd'},
      addParams: {'usertoken': 'sdsddssdasd'},
      editParams: {'usertoken': 'sdsddssdasd'},
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
      selectItems: [],
      formConfigs: [{
        type: 'select',
        label: '日期',
        span: 12,
        prop: 'createdAt',
        /* rules:[
			            { required: true, message: '请输入活动名称', trigger: 'blur' },
			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          		], */
        model: 'createdAt',
        config: {
          placeholder: '选择',
          dicName: 'dict',
          keyName: 'FncRndCode'
        }
      },
      {
        type: 'input',
        label: '姓名',
        span: 12,
        prop: 'publishedAt',
        /* rules:[
			            { required: true, message: '请输入活动名称', trigger: 'blur' },
			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          		], */
        model: 'publishedAt',
        config: {
          placeholder: '输入姓名',
          clearable: false,
          disabled: false,
          autofocus: true
        }
      },
      {
        type: 'input',
        label: '地址',
        span: 12,
        prop: 'type',
        /* rules:[
			            { required: true, message: '请输入活动名称', trigger: 'blur' },
			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          		], */
        model: 'type',
        config: {
          placeholder: '输入姓名',
          clearable: false,
          disabled: false,
          autofocus: true
        }

      },
      {
        type: 'autocomplete',
        label: '类型',
        span: 12,
        prop: 'url',
        /* rules:[
			            { required: true, message: '请输入活动名称', trigger: 'blur' },
			            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
	          		], */
        model: 'url',
        config: {
          placeholder: '输入姓名',
          clearable: false,
          disabled: false,
          autofocus: true,
          url: 'https://www.apiopen.top/meituApi?page=1'
        }

      }

      ],
      dialog: {
        title: '修改',
        width: '80%'
      }
    }
  },
  computed: {

  },
  methods: {
    query (formData) {
      console.log(formData)
      var params = Object.assign({}, formData)
      this.params = params
    }

  },
  components: {
    myTable,
    myForm,
    OutsideTable,
    InnerTable
  },
  created () {
    localStorage.setItem(
      'dict',
      JSON.stringify({
        IvsFndStCode: [],

        FncPrjTpCode: [
          { key: '301500-11', value: '私募融资' },
          { key: '301500-12', value: '三板定增' },
          { key: '301500-13', value: '拆红筹并融资' },
          { key: '301500-14', value: '分拆融资' },
          { key: '301500-15', value: '其它,' },
          { key: '301500-21', value: '私有化' },
          { key: '301500-22', value: '合并' },
          { key: '301500-23', value: '出售' },
          { key: '301500-24', value: '老股出售' },
          { key: '301500-25', value: '借壳,' },
          { key: '301500-26', value: '跨境收购' },
          { key: '301500-27', value: '战略投资/融资' },
          { key: '301500-28', value: '敌意收购/反敌意收购' },
          { key: '301500-29', value: '其它' },
          { key: '301500-31', value: '新三板' },
          { key: '301500-32', value: 'IPO' },
          { key: '301500-33', value: '分拆三板' },
          { key: '301500-34', value: '其它' }
        ],

        FncRndCode: [
          { key: '301300-1', value: 'NA/无' },
          { key: '301300-10', value: 'B' },
          { key: '301300-11', value: 'B+' },
          { key: '301300-12', value: 'C' },
          { key: '301300-13', value: 'C+' },
          { key: '301300-14', value: 'D' },
          { key: '301300-15', value: 'D+' },
          { key: '301300-16', value: 'E' },
          { key: '301300-17', value: 'F' },
          { key: '301300-18', value: 'G' },
          { key: '301300-19', value: '其他轮' },
          { key: '301300-2', value: '不明确' },
          { key: '301300-20', value: 'Pre IPO' },
          { key: '301300-21', value: 'IPO 上市及以后' },
          { key: '301300-22', value: '战略投资' },
          { key: '301300-23', value: '新三板' },
          { key: '301300-24', value: '已上市' },
          { key: '301300-25', value: '已被收购' },
          { key: '301300-3', value: '尚未获投' },
          { key: '301300-4', value: '种子轮' },
          { key: '301300-5', value: '天使轮' },
          { key: '301300-6', value: 'Pre A' },
          { key: '301300-7', value: 'A' },
          { key: '301300-8', value: 'A+' },
          { key: '301300-9', value: 'Pre B' }
        ],

        FncArStgCode: [
          { key: '301700-ABANDONED_AT', value: '已终止' },
          { key: '301700-DEAL_NEGOTIATED_AT', value: '交易谈判' },
          { key: '301700-DELIVERED_AT', value: '在交割' },
          { key: '301700-DUE_DILIGENCE_AT', value: '第三方尽调' },
          { key: '301700-EL_SIGNED_AT', value: '已签署EL' },
          { key: '301700-INTEREST_COLLECTED_AT', value: '意向收集' },
          { key: '301700-MATERIAL_COLLECTED_AT', value: '资料准备' },
          { key: '301700-ON_ROADSHOW_AT', value: '在路演' },
          { key: '301700-PAUSED_AT', value: '已暂停' },
          {
            key: '301700-REPORT_SUBMITTED_AT',
            value: '初次提交CallReport日期'
          },
          { key: '301700-TO_CLOSED_AT', value: '已完成' },
          { key: '301700-TO_CLOSING_AT', value: '收费中' },
          { key: '301700-TO_EXECUTION_AT', value: '启动日期' },
          { key: '301700-TO_INTERESTING_AT', value: '正在接触' },
          { key: '301700-TO_PURSUE_AT', value: 'BSC日期' }
        ],

        FncPrjClCode: [
          { key: '301900-ALPHA', value: 'ALPHA投融资项目' },
          { key: '301900-FA', value: 'FA投融资项目' }
        ]
      })
    )
  }

}
</script>

<style lang="">

</style>
