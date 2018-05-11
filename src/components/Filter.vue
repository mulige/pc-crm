<template>
	<!--客户筛选-->

	<el-row>
		<el-col :span="3" class="tab-name">
			{{tab.value}}
		</el-col>
		<el-col :span="20" class="tab-list">
			<a :class="flag==index?'selected':''" v-for="(item,index) in tab.tabList" :key="index" @click="selected(item,index)">{{item.value}}</a>
		</el-col>
	</el-row>
</template>

<script>
export default {
  props: ['tab'],
  data () {
    return {
      flag: -1
    }
  },
  methods: {
    selected (item, index) {
      this.flag = index
      this.$emit('tab-select', item, this.tab.key, this.tab.value)
    }
  },
  created () {
    console.log(this.tab)
  }
}
</script>
"
<style lang="scss" scoped>
.tab-name {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: right;
}

.tab-list {
  display: flex;
  height: auto;
  justify-content: flex-start;
  flex-wrap: wrap;
  line-height: 20px;
  a {
    font-size: 12px;
    color: #333;
    margin: 0 10px;
    height: 20px;
    line-height: 20px;
    &:hover {
      color: #0000ff;
      cursor: default;
    }
  }
  .selected {
    color: #0000ff;
  }
}
</style>
