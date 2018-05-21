<template>
	<el-row id="customer-msg">
		<el-col class="title">客户信息</el-col>
		<div id="tabs">
			<el-menu default-active="1-1" class="el-menu-vertical">
				<el-menu-item-group title="客户信息">
					<el-menu-item @click="active=1" index="1-1">基础信息</el-menu-item>
					<el-menu-item @click="active=2" index="1-2">联系人</el-menu-item>
					<el-menu-item @click="active=3" index="1-3">拜访纪录</el-menu-item>
				</el-menu-item-group>
			</el-menu>
			<section class="tab-content">
				<el-row>
					<form-table v-show="active==1" class="base-msg" :tableData="tableData" :configs="configs" labelWidth="100px"></form-table>
				</el-row>
			</section>
		</div>
	</el-row>
</template>

<script>
	export default {
		name: 'CustomerMsg',
		data() {
			return {
				active:'1',
				configs: [{
						label: '组织机构代码',
						prop: 'test1',
						span: 12,
						dictKey: 'FncArStgCode'
					}, {
						label: '客户简称',
						prop: 'test2',
						span: 12

					}, {
						label: '客户全称',
						prop: 'test3',
						span: 12
					}, {
						label: '机构分类',
						prop: 'test4',
						span: 12

					},
					{
						label: '固定电话',
						prop: 'test2',
						span: 12

					}, {
						label: '电子邮箱',
						prop: 'test3',
						span: 12
					}, {
						label: '公司传真',
						prop: 'test4',
						span: 12

					},
					{
						label: '邮编',
						prop: 'test2',
						span: 12

					}, {
						label: '地址(省、市)',
						prop: 'test3',
						span: 24
					}, {
						label: '客户维护人',
						prop: 'test4',
						span: 12,
						
					}, {
						label: '客户级别',
						prop: 'test4',
						span: 12,
						
					},
					{
						label: '承揽部门',
						prop: 'test5',
						span: 24,
						height:"auto"

					}, {
						label: '公司地址',
						prop: 'test3',
						span: 12,
						height:"64px"
					}, {
						label: '目前状态',
						prop: 'test4',
						span: 12
					},
					{
						label: '承揽部门',
						prop: 'test2',
						span: 12

					}, {
						label: '公司地址',
						prop: 'test3',
						span: 12
					}, {
						label: '目前状态',
						prop: 'test4',
						span: 12
					}
				],
				tableData: {
					test4: '打算打算打算打算打算打算打算打算打算',
					test1: '301700-ABANDONED_AT',
					test2: '大多数',
					test3: '大苏打撒旦',
					test5: '打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算打算算打算'
				}
			}
		},
		components: {

		}
	}
</script>

<style lang="scss">
	#customer-msg {
		width: 100%;
		border: 1px solid #ccc;
		border-top: 1px solid #8ea3be;
		position: absolute;
		height: 100%;
		#tabs {
			width: 100%;
			display: flex;
			padding: 10px;
			.el-menu-vertical {
				border: 1px solid #e6e6e6;
				width: 120px;
				flex-shrink: 0;
				flex-grow: 0;
				.el-menu-item-group__title {
					color: #333;
					background: #eee;
				}
				.el-menu-item {
					height: 30px;
					line-height: 30px;
					font-size: 12px;
				}
				.el-menu-item.is-active {
					color: #fff;
					background: #cc0031;
				}
			}
			.tab-content {
				margin-left: 8px;
				padding-right: 20px;
				flex-shrink: 1;
				flex-grow: 1;
				.base-msg{
					font-size: 12px;
				}
			}
		}
	}
</style>