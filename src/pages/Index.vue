<template>
<el-container style="height: 540px;" id="index__container">

	<el-aside width="auto" style="height: 100%;"  id="index__aside">
		<!--<easy-scrollbar :barOption="options">-->
		<el-scrollbar style="height: 540px;background: #324057;">
		<el-menu  :default-openeds="['1', '3']" background-color="#324057"  text-color="#bfcbd9"
				 active-text-color="#20a0ff"
				 :default-active="$route.path"
				 style="width: 220px;"
				 unique-opened
				 router
		>
			<!--上面的:default-openeds控制的是默认展开的左侧的选择的文件的树形结构-->
			<el-submenu index="1">
				<template slot="title"><i class="el-icon-fir iconfont icon-ai62"></i>导航一</template>
					
						<el-menu-item  index="/flow"><i class="iconfont icon-customer index__other"></i>流程</el-menu-item>
					
					
						<el-menu-item index="/companyType"><i class="iconfont icon-xingye index__other"></i>公司类型</el-menu-item>
					
					
						<el-menu-item index="/innerMain"><i class="iconfont icon-feiji index__other"></i>innerMain</el-menu-item>
					
					
						<el-menu-item index="/formPage">表单</el-menu-item>
					
					
						<el-menu-item index="/vFlow">垂直流程</el-menu-item>
					
					
						<el-menu-item index="/tree">Tree</el-menu-item>
					
					
						<el-menu-item index="/countAndShow">CountAndShow</el-menu-item>
					
					
						<el-menu-item index="/formTable">formTable</el-menu-item>
					
					
						<el-menu-item index="/tabs">tabs分组</el-menu-item>
					
			</el-submenu>
			<el-submenu index="2">
				<template slot="title"><i class="el-icon-menu"></i>导航二</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项4-1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title"><i class="el-icon-setting"></i>导航三</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="3-1">选项1</el-menu-item>
					<el-menu-item index="3-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="3-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="3-4">
					<template slot="title">选项4</template>
					<el-menu-item index="3-4-1">选项4-1</el-menu-item>
				</el-submenu>
			</el-submenu>
		</el-menu>
		</el-scrollbar>
		<!--</easy-scrollbar>-->
	</el-aside>

	<el-container>


		<el-main  style="width: 1040px;overflow: auto;">
			<transition name="el-fade-in-linear" mode="out-in">
				<router-view />
			</transition>
			<!--<el-table :data="tableData">-->
				<!--<el-table-column prop="date" label="日期" width="140">-->
				<!--</el-table-column>-->
				<!--<el-table-column prop="name" label="姓名" width="120">-->
				<!--</el-table-column>-->
				<!--<el-table-column prop="address" label="地址">-->
				<!--</el-table-column>-->
			<!--</el-table>-->
		</el-main>
	</el-container>
</el-container>
</template>
<style lang="scss">
	@import '../../static/icons/iconfont.css';
	a {
		text-decoration: none;
	}
	#index__container {

		i.iconfont.index__other {
			font-size: 12px;
			margin-right: 5px;
		}
	}
	.index-menu{
		
	}
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
	
	.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>

<script>
	export default {
		name: 'index',
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item),
				options:{
					barColor:"#fff",   //滚动条颜色
				    barWidth:6,           //滚动条宽度
				    railColor:"#fff",     //导轨颜色
				    barMarginRight:0,     //垂直滚动条距离整个容器右侧距离单位（px）
				    barMaginBottom:0,     //水平滚动条距离底部距离单位（px)
				    barOpacityMin:1,      //滚动条非激活状态下的透明度
				    zIndex:"auto",        //滚动条z-Index
				    autohidemode:true,     //自动隐藏模式
				    horizrailenabled:true,//是否显示水平滚动条
				}
			}
		}
	};
</script>
