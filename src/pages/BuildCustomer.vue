<template>
	<el-row id="build-customer">
		<el-col class="title" :span="24"><i class="title-icon el-icon-caret-right"></i>新建融资类客户</el-col>
		<el-col class="build-customer-warpper">
			<el-row class="inner-title"><i class="el-icon-menu title-icon"></i>基本信息</el-row>
			<el-form class="build-form" :model='editData' ref="editForm" size='mini'>
            	<form-item v-for="(formItem,index) in formConfigs" :formItem="formItem" :modelData="editData" :key="index" :span="24"></form-item>
            	<el-button style="margin-left: 20px;" type="primary" size="mini" @click="submit('editForm')">确认</el-button>
          	</el-form>
		</el-col>
	</el-row>
</template>

<script>
	import Item from '@/components/Item'
	export default	{
		name:'buildCustomer',
		data() {
			return {
				formConfigs: [{
					type: 'input',
					label: '客户名称',
					model: 'name',
					rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
					config: {
						placeholder: '请输入客户名称',
						clearable: true,
					}
					
				},{
					type: 'input',
					
					label: '客户简称',
					
					model: 'name1',
					rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
					config: {
						placeholder: '请输入客户简称',
						clearable: true,
					}
					
				},{
					type: 'input',
					span: 12,
					label: '曾用名',
					prop: 'name2',
					model: 'name2',
					config: {
						placeholder: '请输入曾用名',
						clearable: true,
					}
					
				},{
					type: 'select',
					span: 12,
					label: '客户来源',
					prop: 'ly',
					model: 'ly',
					config: {
						placeholder: '请选择',
						selectOption:[{key:"1",value:"网络"},{key:"2",value:"数据"},{key:"3",value:"手机"}],
					}
					
				},{
					type: 'input',
					span: 12,
					label: '客户类型',
					prop: 'lx',
					model: 'lx',
					config: {
						disabled:true,
					}
					
				},{
					type: 'select',
					span: 12,
					label: '承揽部门',
					prop: 'clbm',
					model: 'clbm',
					config: {
						placeholder: '请选择',
						selectOption:[{key:"1",value:"业务部"},{key:"2",value:"科技部"},{key:"3",value:"财务部"}],
					}
				},{
					type: 'radio',
					span: 12,
					label: '是否涉密',
					prop: 'secret',
					model: 'secret',
					config: {
						radioGroup:[{key:"1",value:"是"},{key:"2",value:"否"}],
					}
				},{
					type: 'input',
					span: 12,
					rules: [{ required: true, message: '请选择所属行业', trigger: 'blur' }],
					label: '涉密编号',
					model: 'secretNum',
					config: {
						clearable:true,
					}
				},{
					type: 'select',
					span: 12,
					label: '所属行业',
					rules: [{ required: true, message: '请选择所属行业', trigger: 'change' }],
					prop: 'sshy',
					model: 'sshy',
					config: {
						clearable:true,
						dicName: 'dict',
						keyName: 'FncArStgCode',
					}
				},{
					type: 'input',
					span: 12,
					label: '行业地位',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'select',
					span: 12,
					label: '企业选择',
					rules: [{ required: true, message: '请选择所属行业', trigger: 'change' }],
					prop: 'qyxz',
					model: 'qyxz',
					config: {
						dicName: 'dict',
						keyName: 'FncArStgCode',
					}
				},{
					type: 'input',
					span: 12,
					label: '目标阶段',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'input',
					span: 12,
					label: '公司意向',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'input',
					span: 12,
					label: '目标阶段',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'autocomplete',
					span: 24,
					label: '自动完成',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
						currentView:Item
					}
				},{
					type: 'select',
					span: 12,
					label: '所属行业',
					rules: [{ required: true, message: '请选择所属行业', trigger: 'change' }],
					prop: 'sshy1',
					model: 'sshy1',
					config: {
						clearable:true,
						dicName: 'dict',
						keyName: 'FncArStgCode',
						currentView:Item,
						multiple: true,
					}
				},{
					type: 'input',
					span: 12,
					label: '行业地位',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'select',
					span: 12,
					label: '企业选择',
					rules: [{ required: true, message: '请选择所属行业', trigger: 'change' }],
					prop: 'qyxza',
					model: 'qyxza',
					config: {
						dicName: 'dict',
						keyName: 'FncArStgCode',
						multiple: true,
					}
				},{
					type: 'input',
					span: 12,
					label: '目标阶段',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'input',
					span: 12,
					label: '公司意向',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'input',
					span: 12,
					label: '目标阶段',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'input',
					span: 24,
					label: '目标阶段',
					prop: 'hydw',
					model: 'hydw',
					config: {
						clearable:true,
					}
				},{
					type: 'multipleInput',
					span: 24,
					label: '目标阶段',
					prop: 'sss',
					model: 'sss',
					config: {
						clearable:true,
					}
				},
				],
				editData:{
					name:'',
					name1:'',
					name2:'',
					ly:'',
					lx:'融资类',
					clbm:'1',
					secret:'1',
					secretNum:'002010',
					sshy1:'',
					qyxza: [],
					sss:'撒娇看'
				}
			}
		},
		methods:{
			submit(formName){
				let _this = this
				this.$refs[formName].validate((valid) => {
		          if (valid) {
		          	console.log(_this.editData)
		            //alert('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
			}
		},
		components:{
			Item
		},
		created () {
			console.log(Item)
		}
		
	}
</script>

<style lang="scss">
	#build-customer{
		width: 100%;
		border:1px solid #ccc;
		border-top: 1px solid #8ea3be;
		.build-customer-warpper {
			padding: 10px;
			.build-form{
				padding: 10px 0;
			}
		}
	}
</style>