<template>
	<!--select模板组件-->
	<div>
		<span>{{item.key}}</span>
		<span>{{item.value}}</span>
		<span>潇洒</span>
	</div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  }

}

</script>

<style>
</style>
