<template>
	<!--三级联动-->
	<el-form :model="linkage" ref="linkForm" size="mini" :inline="true" :rules="rules" >
		<el-form-item prop="province" label="服务地点" label-width="80px">
			<el-select size v-model="linkage.province" placeholder="请选择">
				<el-option v-for="(item,index) in ssx.province" :label="item.item_name" :value="item.item_code" :key="index">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item prop="city">
			<el-select v-model="linkage.city" placeholder="请选择">
				<el-option v-for="(item,index) in cityList" :label="item.item_name" :value="item.item_code" :key="index">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item prop="county">
			<el-select v-model="linkage.county" placeholder="请选择" >
				<el-option v-for="(item,index) in countyList" :label="item.item_name" :value="item.item_code" :key="index">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item prop="address" >
			<el-input placeholder="请输入详细地址" v-model="linkage.address" class="address" @blur="changeAddress" :disabled="forbidInput"></el-input>
		</el-form-item>
	</el-form>

</template>

<script>
import ssx from '@/utils/ssx.js'
export default {
  name: 'linkage',
  data () {
    return {
      ssx: ssx,
      linkage: {
        province: null,
        city: null,
        county: null,
        address: null
      },
      forbidInput: true,
      cityList: null,
      countyList: null,
      address: null,
      rules: {
        province: [{
          required: true,
          message: '请选择省',
          trigger: 'change'
        }],
        city: [{
          required: true,
          message: '请选择市',
          trigger: 'change'
        }],
        county: [{
          required: true,
          message: '请选择县',
          trigger: 'change'
        }],
        address: [{
          required: true,
          message: '请填写详细地址',
          trigger: 'change'
        }]
      }
    }
  },
  created () {
    console.log(this.ssx)
  },
  mounted () {
    this.$emit('rule-check', this.$refs['linkForm'])
  },
  methods: {
    changeProvince (value) {
      console.log(value)
    },
    changeAddress () {
      console.log('aa', this.linkage)
      this.$emit('address-finish', this.linkage)
    }

  },
  watch: {
    'linkage.province': function (newVal) {
      this.linkage.county = null
      this.linkage.city = null
      this.countyList = null
      if (!newVal) return
      this.cityList = this.ssx.city.filter((currentValue, index, arr) => {
        return currentValue.item_code.slice(0, 2) === newVal.slice(0, 2)
      })
    },
    'linkage.city': function (newVal) {
      this.linkage.county = null
      if (!newVal) return

      this.countyList = this.ssx.county.filter((currentValue, index, arr) => {
        return currentValue.item_code.slice(0, 4) === newVal.slice(0, 4)
      })
    },
    'linkage.county': function (newVal) {
      if (!newVal) {
        this.linkage.address = ''
      }
      this.forbidInput = !newVal
    }
  }

}
</script>

<style>
	.address{
		width: 300px;
	}
</style>
