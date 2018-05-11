<template>
  <el-row style="width: 100%;">
    <el-form :model="formData">
      <form-type :formData='item' v-for="(item,index) in formLabelAlign" :modelData="formData" :key="index"></form-type>
    </el-form>
  </el-row>
</template>

<script>
import myTable from '@/components/Table'
import OutsideTable from '@/components/OutsideTable'
import InnerTable from '@/components/InnerTable'
import myForm from '@/components/Form'
import FormType from '@/components/FormType'
import Item from '@/components/Item'
export default {
  name: 'main',
  data () {
    return {
      radio2: '',
      a: 'sa',
      formData: {
        inputKey: 'asda',
        selectKey: [],
        autoCom: 'hhjj',
        checkKey: [],
        radioKey: 'sads',
        textareaKey: 'asssa',
        dateKey: '',
        daterangeKey: []
      },
      formLabelAlign: [
        {
          type: 'input',
          label: '小红',
          span: 12,
          prop: 'inputKey',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          model: 'inputKey',
          config: {
            placeholder: '请输入aa',
            clearable: true
          }
        },
        {
          type: 'select',
          label: '小红',
          span: 24,
          prop: 'selectKey',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'selectKey',
          config: {
            span: 24,
            placeholder: '请输入sadsa',
            selectOption: [
              { key: 'ass', value: '喜哦' },
              { key: 'assa', value: '飒飒' },
              { key: 'dasdsa', value: 'da是大多数da' }
            ],
            multiple: true,
            currentView: Item
          }
        },
        {
          type: 'autocomplete',
          label: '小红',
          span: 10,
          prop: 'autoCom',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'autoCom',
          config: {
            placeholder: '请输入sadsa',
            multiple: true
          }
        },

        {
          type: 'checkbox',
          label: '小红',
          span: 24,
          prop: 'checkKey',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'checkKey',
          config: {
            checkGroup: ['中国', 'sassafras'],
            border: true
          }
        },
        {
          type: 'radio',
          label: '小红',
          span: 10,
          prop: 'radioKey',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'radioKey',
          config: {
            radioGroup: [
              { key: 'sads', value: '以' },
              { key: 'saasasds', value: '撒以' },
              { key: 'sadass', value: '撒' }
            ]
          }
        },
        {
          type: 'textarea',
          label: '小红',
          span: 10,
          prop: 'textareaKey',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'textareaKey',
          config: {
            rows: 3
          }
        },
        {
          type: 'date',
          label: '小红',
          span: 10,
          prop: 'dateKey',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'dateKey',
          config: {
            placeholder: '选择日期',
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd'
          }
        },
        {
          type: 'daterange',
          label: '小红',
          span: 10,
          prop: 'daterangeKey',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          model: 'daterangeKey',
          config: {
            startPlace: '选择开始日期',
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            separator: '-',
            endPlace: '选择结束日期'
          }
        }
      ],
      arrWidth: [100, 100, 100, 100],
      labels: [
        {
          prop: 'createdAt',
          sortable: true,
          name: '日期'
        },
        {
          prop: 'publishedAt',
          sortable: false,
          name: '姓名'
        },
        {
          prop: 'type',
          sortable: true,
          name: '地址'
        },
        {
          prop: 'url',
          sortable: false,
          name: '操作'
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
      params: {},
      jsonData: [
        {
          index: 0,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',
          url: '1212212'
        },
        {
          index: 1,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',

          url: '1212212'
        },
        {
          index: 2,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',

          url: '1212212'
        },
        {
          index: 3,
          createdAt: '2016-05-02',
          publishedAt: '王小虎',
          type: 'aaa',

          url: '1212212'
        }
      ],
      selectItems: []
    }
  },
  computed: {},
  methods: {
    query (formData) {
      console.log(formData)
      var params = Object.assign({}, formData)
      this.params = params
    },
    changePageNum (...arr) {
      console.log(arr)
    },
    changeSize (...c) {
      console.log(c)
    },
    changeSelection (val) {
      // console.log(val)
      this.selectItems = val
    },
    removeItem (val, all, key) {
      var newArr = all.slice(0)
      for (var i = 0; i < val.length; i++) {
        for (var j = 0; j < newArr.length; j++) {
          if (val[i][key] === newArr[j][key]) {
            newArr.splice(j, 1)
            break
          }
        }
      }
      return newArr
    },
    handleDelete () {
      this.jsonData = this.removeItem(this.selectItems, this.jsonData, 'index')
      // console.log(this.jsonData)
    },
    addItem () {
      console.log('add')
    }
  },
  components: {
    myTable,
    myForm,
    OutsideTable,
    InnerTable,
    FormType,
    Item
  },
  created () {},
  watch: {
    formData: {
      handler: function () {
        console.log(this.formData)
      },
      deep: true
    }
  }
}
</script>

<style lang="">

</style>
