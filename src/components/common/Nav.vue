<template>
	<div id="header">
		<nav class="navbar navbar-inverse">
			<div class="nav_left">
				<a href="#">
					<img src="../../../static/img/logo.png" alt="">
				</a>
				<div class="nav_manage">
					<p id="manageBtn" :class="manageShow?'':'activeMana'" @click="showManaHide">系统管理 <span class="sanXia"></span></p>
					<div class="nav_manage_hid" v-show="!manageShow">
						<ul>
							<li>listOne</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="nav_right">
				<div class="nav_right_icon">
					<i class="iconfont icon-liebiaolist29"></i>
					<i class="iconfont icon-gerenxinxi"></i>
				</div>
				<div class="nav_right_showUsr">
					<p id="personBtn" :class="personShow?'':'activePer'" @click="showPersonHide">下午好！汪汪汪 <span class="sanXia"></span></p>
					<div class="nav_right_hid" v-show="!personShow">
						<ul>
							<li>个人信息</li>
							<li>退出登陆</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
	export default {
		name: 'Nav',
		data() {
			return {
				manageShow: true,//true是原来的颜色，false是白色
				personShow: true,
			}
		},
		computed:{

		},
		methods:{
			showManaHide() {
				this.manageShow = false;

			},
			showHide() {
				var _this = this;
				document.body.addEventListener('mousedown',function() {
					if(!_this.manageShow) {
						_this.manageShow = true;
					}
					if(!_this.personShow) {
						_this.personShow = true;
					}
				})

			},
			showPersonHide() {
				this.personShow = false;
			},
		},
		mounted() {
			this.showHide();
		},


	}
</script>
<style lang="scss">
	@import '../../../static/iconnav/iconfont.css';
	#header nav {
		width: 100%;
		box-sizing: border-box;
		height: 50px;
		padding: 0 50px;
		background-color: #222;
		border-color: #090909;
		display: flex;
		justify-content: space-between;
	}
	#header nav .nav_left {
		width: 300px;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	#header nav .nav_left a {
		display: flex;
		height: 100%;
		align-items: center;
	}
	#header nav .nav_left a img {
		width: 119px;
		height: 33px;
	}
	#header .nav_left .nav_manage {
		position: relative;
		height: 100%;
	}
	#header .nav_left .nav_manage p {
		width: 100%;
		height: 100%;
		color: #9d9d9d;
		display: flex;
		align-items: center;
	}
	#manageBtn {
		/*background-color: #333;*/
		padding: 0 0px 0 20px;
		cursor: pointer;
	}
	#header .sanXia {
		width: 0;
		heigt: 0;
		margin-left: 5px;
		border-width: 5px 5px 0;
		border-style: solid;
		border-color: #9d9d9d transparent transparent;
	}
	#header .nav_left .nav_manage:hover p {
		color: #fff;
	}
	#header .nav_left .nav_manage:hover span {
		border-color: #fff transparent transparent;
	}
	#header .nav_left .nav_manage .activeMana {
		color: #fff;
		background-color: #333;
		span {
			border-color: #fff transparent transparent;
		}
	}
	#header .nav_left .nav_manage .nav_manage_hid {
		/*display: none;*/
		position: absolute;
		z-index: 9999;
		top: 100%;
		left: 0;
		width: 119px;
		padding: 5px 0;
		background-color: #fff;
		border: 1px solid #ccc;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
		-webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
	}
	#header .nav_left .nav_manage .nav_manage_hid ul {
		width: 100%;
	}
	#header .nav_left .nav_manage .nav_manage_hid ul li {
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	#header .nav_left .nav_manage .nav_manage_hid ul li:hover {
		background-color: #eee;
	}
	/*title右侧的样式*/
	#header .nav_right {
		display: flex;
		flex: 1;

		width: 100%;
		align-items: center;
		justify-content: flex-end;
	}
	#header .nav_right .nav_right_icon {
		color: #9d9d9d;
		margin-right: 30px;
	}
	#header .nav_right .nav_right_icon i {
		margin-left: 20px;
		cursor: pointer;
	}
	#header .nav_right_showUsr {
		height: 100%;
		line-height: 50px;
		color: #9d9d9d;
		position: relative;
	}
	#header .nav_right_showUsr p {
		height: 100%;
		display: flex;
		align-items: center;
	}
	#header .nav_right .nav_right_icon i:hover {
		color: #fff;
	}
	#personBtn {
		padding: 0 10px 0 10px;
		cursor: pointer;
		/*background-color: #fff;*/
	}
	#header .nav_right_showUsr:hover p {
		color: #fff;
	}
	#header .nav_right_showUsr:hover span {
		border-color: #fff transparent transparent;
	}
	#header .nav_right_showUsr .activePer {
		color: #fff;
		background-color: #333;
		span {
			border-color: #fff transparent transparent;
		}
	}
	/*.nav_right_hid {*/
	/*display: none;*/
	/*}*/
	#header .nav_right_hid {
		/*display: none;*/
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 5px 0;
		background-color: #fff;
		border: 1px solid #ccc;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
		-webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
		z-index: 9999;
	}
	#header .nav_right_hid ul {
		width: 100%;
	}
	#header .nav_right_hid ul li {
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #333;
	}
	#header .nav_right_hid ul li:hover {
		background-color: #eee;
	}
</style>
