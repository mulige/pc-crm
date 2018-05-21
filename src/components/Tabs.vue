<template>
  <div id="tabs">
  	<el-menu class="el-menu-vertical">
        <el-menu-item-group title="项目信息">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组二">
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
          <el-menu-item index="1-5">选项5</el-menu-item>
        </el-menu-item-group>
    </el-menu>
   <!-- <section class="tab-content" style="height: 500px;border:1px solid #e6e6e6;padding: 20px;">
    	<div>
    		选项1
    	</div>
    </section>-->
  </div>
</template>

<script>
	export default {
	  name:'tabs',
	  data() {
	  	return {
	  	  activeName: 'first'	
	  	}
	  }
	}
</script>

<style lang="scss">
	.nav-title{
		
	}
	#tabs{
		display: flex;
	  .el-menu-vertical{
	  	border:1px solid #e6e6e6;
	  	width:120px;
	  	flex-shrink:0;
	  	flex-grow:0;
	  	.el-menu-item-group__title{
		  color: #333;
		  background: #eee;
	    }
	    .el-menu-item{
	  	  height:30px;
	  	  line-height: 30px;
	  	  font-size: 12px;
	    }
	    .el-menu-item.is-active {
    	  color: #fff;
    	  background:#cc0031;
	    }	
	  }	
	  .tab-content{
	  	margin-left: 8px;
	  	flex-shrink:1;
	  	flex-grow:1;
	  }	
	  
	}
	
</style>