<template>
	<div class="custom-tree-container">
		<div class="block">
			<div class="header" style="">
				<p class="header-title" style="">行业名称</p>
				<p class="header-num">数量</p>
				<p class="header-operation" style="">操作</p>
			</div>

			<el-tree class="tree" :data="data5" node-key="id" default-expand-all :expand-on-click-node="true">
				<span class="custom-tree-node" slot-scope="{ node, data }">
        <p v-if="!data.edit">{{ node.label }}</p>
        <el-input style="width: 200px;" v-else  autofocus @keyup.enter.native="submit($event,data)" @blur.stop="submit($event,data)" v-model="data.label" size="mini"></el-input>
        <p class="button-group" style="">
          <el-button
            type="text"
            size="mini"
            @click.stop="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click.stop="() => remove(node, data)">
            Delete
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click.stop="() => edit(node,data)">
            Edit
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
				edit: true,
				children: [{
					id: 4,
					label: '农、林、牧、渔',
					children: [{
							id: 9,
							label: '林业',

						}, {
							id: 10,
							label: '畜牧业'
						},
						{
							id: 11,
							label: '渔业'
						},
						{
							id: 12,
							label: '农业'
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
				data4: JSON.parse(JSON.stringify(data)),
				data5: JSON.parse(JSON.stringify(data))
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
				console.log(data, "aaa")
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
				width: 188px;
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
			}
		}
	}
	
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}
	
	.el-tree-node__content {
		border-bottom: 1px solid #ccc;
	}
</style>