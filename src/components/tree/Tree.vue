<template>
	<div id="custom-tree-container">
		<div class="block">
			<div class="header" style="">
				<p class="header-title" style="">{{title}}</p>
				<p v-if="operate" class="header-operation" :style={width:width}>操作</p>
				<p v-else class="header-num" :style="{width:width}">数量</p>
			</div>

			<el-tree class="tree" :class="treeData.length?'':'tree-border'" :data="treeData" node-key="id" default-expand-all :expand-on-click-node="true" :highlight-current='true'>
				<span class="custom-tree-node" slot-scope="{ node, data }">
			        <p v-if="!data.edit"><i  class="tree-pre-icon el-icon-tickets"></i>{{ node.label }}</p>
			        <el-input style="width: 200px;" v-else  autofocus="autofocus" @keyup.enter.native="submit($event,data)" @blur.stop="submit($event,data)" v-model="data.label" size="mini"></el-input>
			        <p v-if="!operate" class="button-group" :style="{width:width}">{{data.num}}</p>
			        <p v-else class="button-group" :style="{width:width}">
			          <i @click.stop="() => append(data)"  class="el-icon-plus"></i>
			          <i @click.stop="() => edit(node, data)" class="el-icon-edit"></i>
			          <i @click.stop="() => remove(node, data)" class="el-icon-delete"></i>
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
			
			return {
				editFlag: true,
				autofocus:false
				//data5: JSON.parse(JSON.stringify(data))
			}

		},
		props:{
			title: { //标题
				default:"行业名称"
			},
			operate: { //是否有操作
				default:true
			},
			width: {  // 宽度
				default:'60px'
			},
			treeData: {
				default:function (){
					return []
				}
			}
		},
		methods: {
			append (data) {
				const newChild = {
					id: id++,
					label: '',
					children: [],
					edit:true
				};
				
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
				this.autofocus = true
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
					this.autofocus = true
					this.$set(data, 'edit', true)
				}
			},

			submit ($event,data) {
				$event.stopPropagation()
				console.log("aaa")
				this.editFlag = true
				this.autofocus = false
				this.$set(data, 'edit', false)
			}
		}
	};
</script>

<style lang="scss">
	#custom-tree-container{
		.block {
			width: 100%;
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
					i{
						color: #8ea3be;
						font-size: 12px;
					}
				}
			}
			.tree-border{
				border-bottom: 1px solid #ccc;
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
				height: 30px;
			}
			.tree-pre-icon{
				margin-right: 2px;
				font-size: 12px;
			}
			
		}
	}
	
	
	
	
</style>