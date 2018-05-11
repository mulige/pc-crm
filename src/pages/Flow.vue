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
		<div id="flow__showFlow">
			<span class="flow__left flow__turn" ></span>
			<span class="flow__right flow__turn" ></span>
			<div class="flow__showFlow__list">
				<ul class="flow__container">
					<li v-for = "(item, index) in flowData" :key = 'index' class="swiper-slide">
						<div class="Flow__showFlow__messageOne" :class = "index + 1 ==flowData.length?'done':'donot'">{{item.messageOne}}</div>
						<div class="flow__crossBar" :class = "index + 1 ==flowData.length?'done':'donot'"></div>
						<div class="flow__solidLine" :class = "index + 1 ==flowData.length?'done':'donot'"></div>
						<div class="flow__circular" :class = "index + 1 ==flowData.length?'done':'donot'"></div>
						<div class="flow__dottedLine" :class = "index + 1 ==flowData.length?'done':'donot'"></div>
						<div class="Flow__showFlow__messageTwo"></div>
					</li>
				</ul>
			</div>
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
						messageTwo: '项目创建',
					},
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					},
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					},
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					},
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					},{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					},{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					},
					{
						date: '2018-5-1',
						messageOne: '项目创建',
						messageTwo: '项目创建',
					}

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
			//鼠标移动到流程图区域执行的函数，显示之前隐藏的两个图标
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


		},
		mounted() {
			this.showTurnBtn();
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
		#flow__showFlow {
			position: relative;
			display: flex;
			justify-content: center;
			>span {
				width: 32px;
				height: 32px;
				position: absolute;
				z-index: 999;
				display: none;
			}

			.flow__left {
				top: 60%;
				left: 2%;
				background-image: url(../../static/img/right.png);
				-webkit-background-size: cover;
				background-size: cover;
				transform:rotate(180deg);
				-ms-transform:rotate(180deg); 	/* IE 9 */
				-moz-transform:rotate(180deg); 	/* Firefox */
				-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
				-o-transform:rotate(180deg);
			}
			.flow__right {
				top: 60%;
				right: 2%;
				background-image: url(../../static/img/right.png);
				-webkit-background-size: cover;
				background-size: cover;
			}
			.flow__showFlow__list {
				width: 100%;
				overflow: hidden;
			}
			ul {
				display: flex;
				padding: 30px 0px;
				/*width: 10000px;*/
				overflow: auto;
			}
			li {
				list-style: none;
				position: relative;
				height: 100%;
			}
			.Flow__showFlow__messageOne {
				width: 150px;
				position: absolute;
				text-align: center;
				top: -25px;
			}
			.flow__crossBar {
				width: 150px;
				height: 15px;
			}
			.flow__solidLine {
				width: 150px;
				height: 3px;
				margin-top: 3px;
			}
			.flow__circular {
				width: 12px;
				height: 12px;
				position: absolute;
				right: -6px;
				bottom: -6px;
			}
			.flow__dottedLine {
				height: 25px;
				position: absolute;
				right: 0px;
				top: -25px;
			}
			//显示的项目名称的位置
			.Flow__showFlow__messageOne.done {
				color: red;
			}
			.Flow__showFlow__messageOne.donot {
				color: blue;
			}
			//横条位置的样式
			//已完成的样式
			.flow__crossBar.done {
				background-color: red;
			}
			//未完成的样式
			.flow__crossBar.donot {
				background-color: blue;
			}
			//实线位置的样式
			//已完成的样式
			.flow__solidLine.done {
				background-color: red;
			}
			//未完成的样式
			.flow__solidLine.donot {
				background-color: blue;
			}
			//圆的位置的样式
			//已完成的样式
			.flow__circular.done {
				background-image: url(../../static/img/Implemented.png);
				-webkit-background-size: cover;
				background-size: cover;
			}
			//未已完成的样式
			.flow__circular.donot {
				background-image: url(../../static/img/DonotImplement.png);
				-webkit-background-size: cover;
				background-size: cover;
			}
			//虚线位置的样式
			//现在是虚线的样式
			//已完成的样式
			.flow__dottedLine.done {
				border-right: 1px dashed red;
			}
			//未完成的样式
			.flow__dottedLine.donot {
				border-right: 1px solid blue;
			}

		}
	}
</style>
