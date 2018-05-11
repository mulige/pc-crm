<template>
       <el-option :label="value" :value="key"><slot></slot></el-option>
</template>

<script>
export default {
  name: 'WOption',
  props: ['label', 'value'],
  data () {
    return {}
  },
  methods: {},
  created () {},
  watch: {}
}
</script>

<style>

</style>
