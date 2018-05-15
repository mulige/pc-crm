<template>
	<!--下面的区域创建的是我们显示的流程的位置-->
	<div id="flow">
		<div class="examples">
			<div class="ex_left">
				<span>图例说明：</span>
				<span class="implemented flow__img"></span>
				<i>已完成</i>
				<span class="implementing flow__img"></span>
				<i>执行中</i>
				<span class="donotImplement flow__img"></span>
				<i>未执行</i>
			</div>
			<span class="ex_right">
				<!--注：若内容过多，鼠标点击左右按钮，可横向滚动。-->
			</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Flow",
		data() {
			return {
				flowData: [
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建1',
						statusNow: false,
					},
					{
						date: '2018-5-1',
						messageOne: '需求分析',
						messageTwo: '项目创建1',
						statusNow: false,
					},
					{
						date: '2018-5-1',
						messageOne: '项目整理',
						messageTwo: '项目创建1',
						statusNow: false,
					},
					{
						date: '2018-5-1',
						messageOne: '项目立项',
						messageTwo: '项目创建1',
						statusNow: false,
					},
					{
						date: '2018-5-1',
						messageOne: '项目整理',
						messageTwo: '项目创建1',
						statusNow: false,
					},
					{
						date: '2018-5-1',
						messageOne: '项目审核',
						messageTwo: '项目创建1',
						statusNow: false,
					},
					{
						date: '2018-5-1',
						messageOne: '项目执行',
						messageTwo: '项目创建1',
						statusNow: false,
					},

				],
				turn__times: 0,
				left__spaceing: 0,
			}
		},
		computed: {
			len: function() {
				return this.flowData.length
			}
		},
		methods: {
			//鼠标移动到流程图区域执行的函数，显示之前隐藏的两个图标，在判断这个是不是显示的时候应该首先查看现在的显示的条数是不是超过了页面的宽度
			showTurnBtn() {
				var ele = document.getElementById('flow__showFlow');
				var styles = Array.from(document.getElementsByClassName('flow__turn'));
//			console.log(styles)
				if(ele) {
					ele.addEventListener('mouseover', function() {
						styles.forEach(function(item) {
							item.style.display = 'block';
						})
					})
					ele.addEventListener('mouseout', function() {
						styles.forEach(function(item) {
							item.style.display = 'none';
						})
					})
				}

			},
			//替换我们现在的数据的方法
			changeDatas() {
				var newData =  [
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建1',
						statusNow: 'done',
					},
					{
						date: '2018-5-1',
						messageOne: '需求分析',
						messageTwo: '项目创建1',
						statusNow: 'done',
					},
					{
						date: '2018-5-1',
						messageOne: '项目整理',
						messageTwo: '项目创建1',
						statusNow: 'doing',
					},
				]
			},

		},
		mounted() {
			this.showTurnBtn();//显示点击按钮的方法
			this.changeDatas();//请求数据后通过方法，将我们显示的进程的进行中或者已完成的位置进行一个替换
		}
	}
</script>
<style lang="scss">
	#flow {
		::-webkit-scrollbar {display:none}
		.examples {
			margin-bottom: 30px;
			display: flex;
			justify-content: space-between;
			.ex_left {
				display: flex;
				align-items: center;
				i {
					font-style: normal;
					display: inline-block;
					height: 21px;
					line-height: 21px;
				}

				span.flow__img {
					display: inline-block;
					width: 16px;
					height: 16px;
					margin: 0 5px;
				}
				.implemented {
					background-image: url(../../static/img/Implemented.png);
					-webkit-background-size: cover;
					background-size: cover;
				}
				.implementing {
					background-image: url(../../static/img/Implementing.png);
					-webkit-background-size: cover;
					background-size: cover;
				}
				.donotImplement {
					background-image: url(../../static/img/DonotImplement.png);
					-webkit-background-size: cover;
					background-size: cover;
				}
			}
			.ex_right {
				display: flex;
				align-items: center;
				color: #8c939d;
			}
		}

	}
</style>
