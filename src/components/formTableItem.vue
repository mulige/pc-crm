<template>
  <el-col class="form-table-item" :span='span' :style=[{height:height,lineHeight:height}]>
      <el-col :span='labelSpan' class="item-label" v-text='label'></el-col>
      <el-col style="width:100%" class="item-text" v-text='text'></el-col>
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
    labelSpan: { // label的宽度
      default: 12
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
    display: flex;
    position: relative;
    p{
      margin: 0;
      padding: 0;
    }
    .item-label{
      text-align: right;
      border-style:none solid solid none;
      border-width: 1px;
      border-color:#c9e1f8;
      padding-right:15px;
      background: #eff8ff
    }
    .item-text{
      border-style:none solid solid none;
      border-width: 1px;
      border-color:aliceblue;
      padding-left:5px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    // .tooltip{
    //   height: 24px;
    //   font-size: 12px;
    //   line-height: 24px;
    //   width: auto;
    //   position: absolute;
    //   left: 30%;
    //   top:-24px;
    //   background: #000;
    //   color: #fff
    // }
  }
</style>
