<template>
	<div id="customer-list">
		
		<el-row>
			<el-col :span="24" class="title"><i class="el-icon-caret-right title-icon"></i>所有客户</el-col>
			<el-col class="query-form" :span="24" style="">
				<el-form :model='modelData' ref="editForm" size='mini'>
            		<form-type v-for="(item,index) in customerForm" :key="index" :formData="item" :modelData="modelData"></form-type>
            		<el-button class="query" type="primary" size="mini" icon="el-icon-search" @click="query">确定</el-button>
          		</el-form>
			</el-col>
			
			<el-col class="customer-table" :span="24">
				<el-col :span="24">
					
				</el-col>
				<inner-table :jsonData="jsonData" :labels="labels" :pagination="true" :apiUrl="url" :queryParams="queryParams"></inner-table>
			</el-col>
		</el-row>
	</div>	
</template>

<script>
	import	FormType from "@/components/FormType"
	import	InnerTable from "@/components/InnerTable"
	export default {
		name: 'customerList',
		data() {
		  return {
		    customerForm: [{
		    	type: 'radioButton',
		    	label: '客户状态',
		    	model: 'customStatus',
		    	span: 24,
		    	config:{
		    		radioGroup:[{key:'1',value:'全部'},{key:'2',value:'有效客户'},{key:'3',value:'潜在客户'},{key:'4',value:'意向客户'}],
		    		border:true,
		    		textColor:"#fff",
		    		fill:'#8ea3be',
		    	}
		    },{
		    	type: 'radioButton',
		    	label: '客户级别',
		    	model: 'customLevel',
		    	span: 24,
		    	config:{
		    		radioGroup:[{key:'A',value:'A'},{key:'B',value:'B'},{key:'C',value:'C'}],
		    		border:true,
		    		fill:'#8ea3be',
		    		textColor:"#fff",
		    	}
		    },{
		    	type: 'select',
		    	label: '地区',
		    	model: 'area',
		    	span: 12,
		    	config:{
		    		placeholder: "请选择地区",
		    		selectOption: [{key:'A',value:'A'},{key:'B',value:'B'},{key:'C',value:'C'}]
		    	}
		    },{
		    	type: 'select',
		    	label: '部门',
		    	model: 'area',
		    	span: 12,
		    	config:{
		    		placeholder: "请选择部门",
		    		selectOption: [{key:'A',value:'A'},{key:'B',value:'B'},{key:'C',value:'C'}]
		    	}
		    },{
		    	type: 'select',
		    	label: '需求意向',
		    	model: 'aim',
		    	span: 24,
		    	config:{
		    		placeholder: "请选择",
		    		selectOption: [{key:'A',value:'A'},{key:'B',value:'B'},{key:'C',value:'C'}],
		    		width:'440px'
		    	}
		    },{
		    	type: 'input',
		    	label: '客户名称',
		    	model: 'name',
		    	span: 12,
		    	config:{
		    		placeholder: "请输入客户民称",
		    	}
		    }],
		    modelData:{
		    	customStatus:'1',
		    	customLevel:'',
		    	area: '',
		    	department:'',
		    	aim:''	
		    },
		  	labels:[{
		        prop: 'createdAt',
		        sortable: true,
		        name: '客户名称',
		      },
		      {
		        prop: 'publishedAt',
		        sortable: false,
		        name: '客户类型'
		      },
		      {
		        prop: 'type',
		        sortable: true,
		        name: '承揽部门'
		      },
		      {
		        prop: 'url',
		        sortable: false,
		        name: '客户级别'
		      }],
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
		      url: 'https://www.apiopen.top/meituApi?page=1',
		      queryParams:{},
		      
		  }
		},
		methods:{
			query() {
				this.queryParams = Object.assign({},this.modelData)
			}
		},
		components:{
			FormType,
			InnerTable,
		}
	}
</script>

<style lang="scss">
	#customer-list{
		width: 100%;
		border-top: 1px solid #8ea3be;
		border-left:1px solid #ccc;
		.title{
			height: 30px;
			line-height: 30px;
			border-bottom: 1px solid #ccc;
			background: #eee;
			font-size: 14px;
			color:#333;
			.el-icon-caret-right{
				color: #8ea3be;
				margin-right: 2px;
			}
		}
		.query-form{
			border-bottom: 1px solid #8ea3be;
			padding: 10px 10px;
			margin-bottom: 10px;
			.query{
				margin-left: 20px;
				background: #8ea3be;
				border-color: #8ea3be;
			}
		}
		.customer-table{
			padding: 20px;
		}
		
	}
	
</style>