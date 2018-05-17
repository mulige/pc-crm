<template>
<el-container   id="index__container">

	<el-aside width="auto" style="background:#2a3e50;"  id="index__aside">
		<!--<easy-scrollbar :barOption="options">-->
		<el-scrollbar style="height: 100%;">
		<el-menu  :default-openeds="['1']" background-color="#2a3e50"  text-color="#bfcbd9"
				 active-text-color="#20a0ff"
				 :default-active="$route.path"
				 style="width: 220px;"
				 unique-opened
				 router
		>
			<!--上面的:default-openeds控制的是默认展开的左侧的选择的文件的树形结构-->
			<el-submenu index="1">
				<template slot="title"><i class="el-icon-setting"></i>组件管理</template>
				<el-menu-item  index="/flow"><i class="iconfont icon-customer index__other"></i>水平流程</el-menu-item>
				<el-menu-item index="/companyType"><i class="iconfont icon-xingye index__other"></i>公司类型</el-menu-item>
				<el-menu-item index="/innerMain"><i class="iconfont icon-feiji index__other"></i>内部表格</el-menu-item>
				<el-menu-item index="/formPage"><i class="el-icon-info"></i>默认表单</el-menu-item>
				<el-menu-item index="/vFlow"><i class="el-icon-view"></i>垂直流程</el-menu-item>
				<el-menu-item index="/tree"><i class="el-icon-star-off"></i>树形结构</el-menu-item>
				<!--<el-menu-item index="/countAndShow">CountAndShow</el-menu-item>-->
				<el-menu-item index="/formTable"><i class="el-icon-edit-outline"></i>表单表格</el-menu-item>
				<el-menu-item index="/tabs"><i class="el-icon-share"></i>分组菜单</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title"><i class="el-icon-menu"></i>客户管理</template>
				<el-menu-item index="/customerList"><i class="el-icon-star-on"></i>客户列表</el-menu-item>
				<el-menu-item index="2-2"><i class="el-icon-time"></i>客户行业</el-menu-item>
				<el-menu-item index="2-3"><i class="el-icon-service"></i>客户地区</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title"><i class="el-icon-date"></i>统计分析</template>
					<el-menu-item index="2-4-1"><i class="el-icon-bell"></i></el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title"><i class="el-icon-document"></i>项目管理</template>
				<el-menu-item index="3-1"><i class="el-icon-star-on"></i>股权项目</el-menu-item>
				<el-menu-item index="3-2"><i class="el-icon-time"></i>债券项目</el-menu-item>
				<el-menu-item index="3-3"><i class="el-icon-service"></i>新三板</el-menu-item>
			</el-submenu>
		</el-menu>
		</el-scrollbar>
		<!--</easy-scrollbar>-->
	</el-aside>

	<el-container>


		<el-main style="padding:10px 0 10px 10px">
			<el-scrollbar class="main-scroll" style="height: 100%;">
				<transition name="el-fade-in-linear" mode="out-in">
					<router-view />
				</transition>
			</el-scrollbar>
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
		position: absolute;
		height: 100%;
		width: 100%;
		i.iconfont.index__other {
			display: inline-block;
			line-height: 14px;
			text-align: center;
			font-size: 14px;
			margin-right: 5px;
			width: 24px;
		}
		i[class^=el-icon-]{
			font-size: 14px;
		} 
		.el-scrollbar__wrap {
		  overflow-x: hidden;
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
