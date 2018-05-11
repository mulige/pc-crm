<template>
  <el-col :span='formData.span'>
    <el-form-item :label="formData.label" :prop="formData.prop" :rules='formData.rules' :label-width="width">
      <el-input v-model='modelData[formData.model]' v-if="formData.type=='input'" style="width: 100%;" :autofocus='formData.config.autodocus' :clearable="formData.config.autofocus" :disabled="formData.config.disabled" :placeholder="formData.config.placeholder"></el-input>

      <w-select v-model='modelData[formData.model]' v-if="formData.type=='select'" :config='formData.config'></w-select>

      <w-autocomplete v-if="formData.type=='autocomplete'" v-model='modelData[formData.model]' :config='formData.config'>
      </w-autocomplete>

      <!--checkbox-->
      <el-checkbox-group style="width: 100%;" v-model="modelData[formData.model]" v-if="formData.type=='checkbox'">
        <el-checkbox v-for="(checkName,index) in formData.config.checkGroup" :label="checkName" :key="index" :border="formData.config.border"></el-checkbox>
      </el-checkbox-group>

      <!--radio-->
      <el-radio-group v-model="modelData[formData.model]" v-if="formData.type=='radio'">
        <el-radio v-for="(radio,index) in formData.config.radioGroup" :label="radio.key" :key="index">{{radio.value}}</el-radio>
      </el-radio-group>

      <!--textarea-->
      <el-input style="height:formData.config.height;" type="textarea" v-model="modelData[formData.model]" v-if="formData.type=='textarea'" :autosize="formData.config.autosize" :rows="formData.config.rows"></el-input>

      <!--date-->
      <el-date-picker style="width: 100%;" v-if="formData.type=='date'" v-model="modelData[formData.model]" :type="formData.type" :placeholder="formData.config.placeholder" :format="formData.config.format" :value-format="formData.config.valueFormat">
      </el-date-picker>

      <!--dateRange-->
      <el-date-picker v-if="formData.type=='daterange'" v-model="modelData[formData.model]" :type="formData.type" :range-separator="formData.config.separator" :start-placeholder="formData.config.startPlace" :end-placeholder="formData.config.endPlace" :format="formData.config.format"
        :value-format="formData.config.valueFormat">
      </el-date-picker>
    </el-form-item>
  </el-col>
</template>

<script>
import WInput from '@/components/common/Input'
import WSelect from '@/components/common/select/Select'
import WAutocomplete from '@/components/common/Autocomplete'
export default {
  name: 'formType',
  props: {
    formData: {
      default: function () {
        return {
          model: '',
          label: '',
          prop: '',
          rules: null,
          type: '',
          span: 12,
          labelWidth: '',
          config: {}
        }
      }
    },
    modelData: {
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      width: this.formData.labelWidth || '80px',
      model: ''
    }
  },
  created () {
    // this.model = this.modelData[this.formData.model]
    // console.log(this.modelData,"ssass")
  },
  methods: {
    querySearchAsync () {
      // 请求
    }
  },
  components: {
    WInput,
    WSelect,
    WAutocomplete
  },
  watch: {
    modelData: {
      handler: function () {
        // this.modelData = Object.assign({},this.modelData)
        this.model = this.modelData[this.formData.model]
        // console.log(this.modelData[this.formData.model],this.formData.model)
      },
      deep: true
    },
    formData: {
      handler: function () {
        console.log(this.formData, 'hjhh')
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
