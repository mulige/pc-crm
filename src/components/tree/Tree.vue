<template>
	<div class="custom-tree-container">
		<div class="block">
			<div class="header" style="">
				<p class="header-title" style="">{{title}}</p>
				<p v-if="operate" class="header-operation" :style={width:width}>操作</p>
				<p v-else class="header-num" :style="{width:width}">数量</p>
			</div>

			<el-tree class="tree" :data="data5" node-key="id" default-expand-all :expand-on-click-node="true" :highlight-current='true'>
				<span class="custom-tree-node" slot-scope="{ node, data }">
			        <p v-if="!data.edit">{{ node.label }}</p>
			        <el-input style="width: 200px;" v-else  autofocus @keyup.enter.native="submit($event,data)" @blur.stop="submit($event,data)" v-model="data.label" size="mini"></el-input>
			        <p v-if="!operate" class="button-group" :style="{width:width}">{{data.num}}</p>
			        <p v-else class="button-group" :style="{width:width}">
			          <el-button
			            type="primary"
			            size="mini"
			            @click.stop="() => append(data)">
			           	 添加
			          </el-button>
			          <el-button
			            type="danger"
			            size="mini"
			            @click.stop="() => remove(node, data)">
			                        删除
			          </el-button>
			          <el-button
			            type="warning"
			            size="mini"
			            @click.stop="() => edit(node,data)">
			                         编辑
			          </el-button>
			        </p>
			      </span>
			</el-tree>
		</div>
	</div>
</template>
<script>
	let id = 1000;

	export default {
		data() {
			const data = [{
				id: 1,
				label: '客户行业',
				num:15,
				children: [{
					id: 4,
					label: '农、林、牧、渔',
					num:15,
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
				}]
			}, {
				id: 2,
				label: '一级 2',
				children: [{
					id: 5,
					label: '二级 2-1'
				}, {
					id: 6,
					label: '二级 2-2'
				}]
			}, {
				id: 3,
				label: '一级 3',
				children: [{
					id: 7,
					label: '二级 3-1'
				}, {
					id: 8,
					label: '二级 3-2'
				}]
			}];
			return {
				editFlag: true,
				data5: JSON.parse(JSON.stringify(data))
			}

		},
		props:{
			title: {
				default:"行业名称"
			},
			operate: {
				default:true
			},
			width: {
				default:'200px'
			}
		},
		methods: {
			append (data) {
				const newChild = {
					id: id++,
					label: 'testtest',
					children: []
				};
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},

			remove (node, data) {
				console.log(node,data, "aaa")
				const parent = node.parent;
				const children = parent.data.children || parent.data
				const index = children.findIndex(d => d.id === data.id)
				children.splice(index, 1)
			},

			edit (node, data) {
				if (this.editFlag) {
					this.editValue = data.label
					this.editFlag = false
					this.$set(data, 'edit', true)
				}
			},

			submit ($event,data) {
				$event.stopPropagation()
				console.log("aaa")
				this.editFlag = true
				this.$set(data, 'edit', false)
			}
		}
	};
</script>

<style lang="scss">
	.block {
		padding-left: 10%;
		width: 80%;
		.header {
			display: flex;
			justify-content: space-between;
			height: 30px;
			line-height: 30px;
			font-size: 12px;
			border: 1px solid #ccc;
			border-bottom: none;
			background: #eff8ff;
			.header-title {
				padding-left: 10px;
			}
			.header-operation {
				width: 188px;
				text-align: center;
				border-left: 1px solid #ccc
			}
			.header-num{
				width: 180px;
				text-align: center;
				border-left: 1px solid #ccc
			}
		}
		.tree {
			border: 1px solid #ccc;
			border-bottom: none;
			.button-group {
				width: 180px;
				border-left: 1px solid #ccc;
				text-align: center;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;
			}
		}
		.custom-tree-node {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			font-size: 12px;
		}
		
		.el-tree-node__content {
			border-bottom: 1px solid #ccc;
		}
		.el-tree-node__content{
			height: 36px;
		}
	}
	
	
	
</style>