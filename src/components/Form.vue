<template>
	<!--innerMain页面使用-->
	<div>
		<el-form :inline="true" :model="formInline" ref="ruleForm" class="demo-form-inline" size="mini" :rules="rules">
			<el-form-item label="审批人" prop="radio2">
				<el-radio-group v-model="formInline.radio2">
					<el-radio :label="3">个人</el-radio>
					<el-radio :label="6">团队</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="创建日期" prop="dataTime">
				<el-date-picker v-model="formInline.dataTime" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy/MM/dd">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="开户进度" prop="region">

				<el-select v-model="formInline.region" placeholder="请选择">
					<el-option label="区域一" value="'shanghai'"></el-option>
					<el-option label="区域二" value="'beijing'"></el-option>
				</el-select>

			</el-form-item>

			<el-form-item>
			<el-button type="primary" @click="onSubmit('ruleForm')">查询</el-button>
		</el-form-item>
		</el-form>
		<!--<linkage @change-address="receiveAddress"></linkage>-->
	</div>
</template>

<script>
import Linkage from '@/components/Linkage'

export default {
  name: 's',
  data () {
    return {
      formInline: {
        dataTime: null,
        region: '',
        radio2: null
      },
      rules: {
        radio2: [
					  {required: true, message: '请选择审批人', trigger: 'change'}
        ],
        dataTime: [{required: true, message: '请选择日期', trigger: 'change'}],
        region: [{required: true, message: '请选择活动区域', trigger: 'change'}]
      }

    }
  },
  components: {
    Linkage
  },
  created () {

  },
  watch: {
    radio2 (newProp) {
      console.log(newProp)
    }
  },
  methods: {
    onSubmit (formName) {
      var _this = this
      var formInline = _this.formInline
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.$emit('query', formInline)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    receiveAddress (...address) {
      console.log(address)
    }
  }

}
</script>

<style lang="scss" scoped>
	.demo-form-inline{
		width: 100%;
		padding-top: 10px;
		padding-left: 20px;
		margin-bottom: 10px;
		vertical-align: middle;
		border-bottom: 1px solid #eee;
		display: flex;
		align-items: center;
	}
</style>
