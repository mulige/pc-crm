<template>
  <el-row class="form-table">
      <form-table-item :labelWidth="item.labelWidth||labelW" :label="item.label" :span="item.span" :height="item.height" :dictKey="item.dictKey" :value="item.prop?form[item.prop]:item.value" v-for="(item,index) in list" :key="index"></form-table-item>
  </el-row>
</template>

<script>
import FormTableItem from './FormTableItem'

export default {
  name: 'formTable',
  props: {
    configs: {
      type: Array,
      default: function () {
        return []
      }
    },
    formData: {
      default: function () {
        return {}
      }
    },
    labelWidth: {
    	default:"80px"
    }

  },
  data () {
    return {
    	labelW: '100px',
      list: [{
        label: '测试label',
        prop: 'test1',
        span: 6,
				
        dictKey: 'FncArStgCode'
      }, {
        label: '测试label1',
        prop: 'test2',
        span: 6

      }, {
        label: '测试label2',
        prop: 'test3',
        span: 6
      }, {
        label: '测试label3',
        prop: 'test4',
        span: 6

      },
      {
        label: '测试label1',
        prop: 'test2',
        span: 24

      }, {
        label: '测试label2',
        prop: 'test3',
        span: 12
      }, {
        label: '测试label3',
        prop: 'test4',
        span: 12

      }],
      form: {
        test4: '打算打算打算打算打算打算打算打算打算打算打算打算',
        test1: '301700-ABANDONED_AT',
        test2: '大多数',
        test3: '大苏打撒旦'

      }
    }
  },
  components: {
    FormTableItem
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
    .form-table{
        border-style: solid none none solid;
        border-color: aliceblue;
        border-width: 1px;
        font-size: 14px;
    }
</style>
