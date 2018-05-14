<template>
  <el-col class="form-table-item" :span='span' :style=[{height:height,lineHeight:height}]>
      <el-col :style={width:labelWidth} class="item-label" v-text='label'></el-col>
      <el-col  class="item-text" v-text='text'></el-col>
      <!-- <p class="tooltip" v-text='text'></p> -->
  </el-col>
</template>

<script>
export default {
  name: 'formTableItem',
  data () {
    return {
      text: this.value
    }
  },
  props: {
    label: { // label值
      default: '默认值'
    },
    height: { // 高度
      default: '45px'
    },
    span: { // 宽度
      default: 12
    },
    value: { // 值
      default: '测试数据'
    },
    dictKey: { // 数据字典
      default: ''
    },
    labelWidth: { // label的宽度
      default: "80px"
    }
  },
  created () {
    if (this.dictKey) {
      let dict = JSON.parse(localStorage.getItem('dict'))[this.dictKey]
      for (let item of dict) {
        if (item.key === this.value) {
          this.text = item.value
        }
      }
    }
  },
  methods: {
  }

}
</script>
<style lang="scss" scoped>
  .form-table-item{
  	display:flex;
    p{
      margin: 0;
      padding: 0;
    }
    .item-label{
    	flex-grow: 0;
    	flex-shrink: 0;
      text-align: right;
      border-style:none solid solid none;
      border-width: 1px;
      border-color:#c9e1f8;
      padding-right:15px;
      background: #eff8ff
    }
    .item-text{
    	flex-grow: 1;
    	flex-shrink: 1;
      border-style:none solid solid none;
      border-width: 1px;
      border-color:aliceblue;
      padding-left:5px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    
  }
</style>
