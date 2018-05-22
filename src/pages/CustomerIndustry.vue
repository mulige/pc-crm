<template>

	<el-row id="customer-industry">
		<el-col class="title" :span="24"><i class="title-icon el-icon-caret-right"></i>客户行业</el-col>
		<el-col class="tree-warpper">
			<tree title="行业名称" :treeData="treeData"></tree>
		</el-col>
		<multiple-input></multiple-input>
	</el-row>

</template>

<script>
	import Tree from '@/components/tree/Tree'
	import MultipleInput from '@/components/multipleInput/multipleInput'
	export default {
		name: 'customerIndustry',
		data() {
			const data = [{
				id: 1,
				label: '客户行业',
				num: 15,
				children: [{
					id: 4,
					label: '农、林、牧、渔',
					num: 15,
					children: [{
							id: 9,
							label: '林业',
							num: 15

						}, {
							id: 10,
							label: '畜牧业',
							num: 15
						},
						{
							id: 11,
							label: '渔业',
							num: 15
						},
						{
							id: 12,
							label: '农业',
							num: 15
						}
					]
				}, {
					id: 2,
					label: '采矿业',
					children: [{
						id: 5,
						label: '煤炭开采'
					}, {
						id: 6,
						label: '石油开采'
					}, {
						id: 9,
						label: '天然气开采'
					}, {
						id: 10,
						label: '黑色金属开采'
					}, {
						id: 11,
						label: '粉红色金属开采'
					}]
				}, {
					id: 3,
					label: '制造业',
					children: [{
						id: 7,
						label: '食品加工业'
					}, {
						id: 8,
						label: '食品制造业'
					}, {
						id: 12,
						label: '纺织业'
					}, {
						id: 13,
						label: '食品制造业'
					}]
				}]
			}];
			return {
				treeData: data
			}
		},
		components: {
			Tree,
			MultipleInput
		}
	}
</script>

<style lang="scss">
	#customer-industry {
		width: 100%;
		border:1px solid #ccc;
		border-top: 1px solid #8ea3be;
		.tree-warpper {
			padding: 10px;
		}
	}
</style>