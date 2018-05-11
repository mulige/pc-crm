<template>
	<div>
		<el-form :model="formData" :rules="rules" ref="ruleForm" size="mini" label-width="80px" label-position="left">

			<el-form-item class="events" label="服务事项" prop="events">
				<el-input v-model="formData.events"></el-input>
			</el-form-item>
			<el-form :model="formData.serve" :inline="true" :rules="rules" label-width="80px" label-position="left" size="mini" ref="ruleForm1">
				<el-form-item label="服务目的" prop="region1">

					<el-select v-model="formData.serve.region1" placeholder="请选择">
						<el-option label="区域一" value="'shanghai'"></el-option>
						<el-option label="区域二" value="'beijing'"></el-option>
					</el-select>

				</el-form-item>
				<el-form-item label="服务方式" prop="region2">

					<el-select v-model="formData.serve.region2" placeholder="请选择">
						<el-option label="区域一" value="'shanghai'"></el-option>
						<el-option label="区域二" value="'beijing'"></el-option>
					</el-select>

				</el-form-item>
			</el-form>
			<linkage></linkage>
			<el-form-item label="沟通内容" prop="content">

				<el-input type="textarea" v-model="formData.content" placeholder="请选择">

				</el-input>

			</el-form-item>
			<el-form-item label="备注" prop="bz">

				<el-input type="textarea" v-model="formData.bz" placeholder="输入备注">
				</el-input>

			</el-form-item>

			<el-form-item>

				<el-button type="primary" @click="submit('ruleForm','ruleForm1')">确定
				</el-button>

			</el-form-item>

		</el-form>

	</div>
</template>

<script>
import Linkage from '@/components/Linkage'

export default {
  name: 's',
  data () {
    return {
      formData: {
        events: null,
        serve: {
          region1: null,
          region2: null
        },
        radio2: null,
        bz: null,
        content: null

      },
      rules: {
        events: [{
          required: true,
          message: '请输入服务事项',
          trigger: 'blur'
        }],
        region1: [{
          required: true,
          message: '请选择服务目的',
          trigger: 'change'
        }],
        region2: [{
          required: true,
          message: '请选择服务方式',
          trigger: 'change'
        }],
        content: [{
          required: true,
          message: '请输入服务内容',
          trigger: 'blur'
        }],
        radio2: [{
          required: true,
          message: '请选择审批人',
          trigger: 'change'
        }],
        dataTime: [{
          required: true,
          message: '请选择日期',
          trigger: 'change'
        }],
        region: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }]
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
      // console.log(this.formInline)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submit (formName, formName1) {
      var that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("aa")
        } else {
          console.log('error submit!!')
          return false
        }
      })

      this.$refs[formName1].validate((valid) => {
        if (valid) {
          alert('suc')
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
	.demo-form-inline {
		width: 100%;
		padding-top: 10px;
		padding-left: 20px;
		vertical-align: middle;
		border: 1px solid #ccc;
		display: flex;
		align-items: center;
	}

	.events {
		width: 600px;
	}
</style>
