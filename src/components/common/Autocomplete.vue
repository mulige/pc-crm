<template>
  <el-col :span="config.span">
    <!--<el-input  :clearable="config.clearable" :placeholder="config.placeholder" :disabled="config.disabled" :autofocus="config.autofocus" :value='currentValue' @input="handleInput"></el-input>-->

    <el-autocomplete style="width:100%"
          :fetch-suggestions="querySearchAsync"
          :clearable="config.clearable"
          :placeholder="config.placeholder"
          :disabled="config.disabled"
          :autofocus="config.autofocus"
          :value='currentValue'
          @input="handleInput"
          @select="handleSelect">
        <template slot-scope="{ item }" v-if='config.currentView?true:false'>
          <component :is="config.currentView" :item="item"></component>
        </template>
    </el-autocomplete>
  </el-col>
</template>

<script>
import http from '@/utils/http'

export default {
  name: 'WAutoComplete',
  props: {
    config: {
      default: function () {
        return {
          span: 24,
          clearable: false, // 可清除
          placeholder: '请输入', // 默认值
          disabled: false, // 禁止编辑
          autofocus: false, // 自动聚焦
          url: '',
          params: '',
          currentView: null
        }
      }
    },
    value: {}
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.currentValue = value
    },
    handleInput (v) {
      this.$emit('input', v)
      this.setCurrentValue(v)
    },
    async querySearchAsync (queryString, cb) {
      // 数据请求  返回值必须有value字段
      console.log('请求数据')
      if (!this.data) {
        let res = (await http.get(this.config.url, this.config.params)).data
        console.log(res)
        // 需要修改
        this.data = [
          { value: '7' },
          { value: '6' },
          { value: '5' },
          { value: '4' },
          { value: '3' },
          { value: '2' }
        ]
      }
      cb(this.data)
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  created () {},
  watch: {
    value: function (newModel, oldModel) {
      this.setCurrentValue(newModel)
    }
  }
}
</script>

<style>

</style>
