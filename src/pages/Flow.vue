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
			<!--<span class="flow__left flow__turn" ></span>-->
			<!--<span class="flow__right flow__turn" ></span>-->
			<div  id="flow__show__list">
				<ul id="flow__container">
					<li v-for = "(item, index) in flowData" :key = 'index' class="swiper-slide">
						<div class="Flow__showFlow__messageOne" >{{item.messageOne}}</div>
						<div class="flow__crossBar" :class="getClassName(item)"></div>
						<div class="flow__solidLine" :class="getClassName(item)"></div>
						<div class="flow__circular" :class="getClassName(item)"></div>
						<div class="flow__dottedLine" :class="getClassName(item)"></div>
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
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '需求分析',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '项目整理',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '项目立项',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '项目整理',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '项目审核',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '项目执行',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '进度分析',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
					{
						date: '2018-5-1',
						messageOne: '问题研究',
						messageTwo: '项目创建1',
						statusNow: 'false',
					},
				],
				turn__times: 0,
				left__spaceing: 0,
				canDrop: 0,//判断当前的状态能不能进行拖动，0是能，1，不能向右拖，-1不能向左拖
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
			//一个确定当前的这个显示的位置的class类名的函数
			getClassName(item) {
				if(item.statusNow != 'false') {
					if(item.statusNow == 'doing') {
						return 'doing'
					}else {
						return 'done'
					}
				}else {
					return 'donot'
				}
			},
			//现在获取的是我们现在对应的数据的位置，里面包含了我们现在的项目的进行的状态信息
			changeDatas() {
				var _this = this;
				var newDatas = [
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
				];
				//进行数据的替换
//				newDatas.forEach(function(item, index) {
//					this.flowData[index] = item;
//				});
				var len = newDatas.length;
				_this.flowData = newDatas.concat(_this.flowData.slice(len-1));
				console.log(_this.flowData)
			},
			//点击显示的位置进行拖动
			flow__dorp() {
				var _this = this;
				var content = document.getElementById('flow__show__list');
				content.addEventListener('mousedown',function(e) {
					var e=e||event;

					e.preventDefault();
					var clX = e.clientX;

					window.addEventListener('mousemove',function(e) {
						var e=e||event;
						var newClx = e.clientX;
						var result = '';
						if(newClx> clX) {
							result = 'right'
						}else {
							result =  'left'
						}
						_this.contentDrop(result);
						content.addEventListener('mouseup',function() {
							console.log('uuuuuuuuuuuuup');
							content.addEventListener('mousedown',null);
							window.addEventListener('mousemove',null);
						})
					});

				})
			},
			//移动的方法
			contentDrop(result) {
				console.log('in');
				var tanslateItem = document.getElementById('flow__container');

				if(result == 'left'&& this.canDrop!= -1) {
					this.canDrop--;
					tanslateItem.style.transform = 'translateX(-500px)';
					console.log(tanslateItem.style.transform)
				}else if(result == 'right' && this.canDrop != 1) {
					this.canDrop++;
					tanslateItem.style.transform = 'translateX(500px)';
				}
			},

		},
		mounted() {
//			this.showTurnBtn();
			this.changeDatas();
			this.flow__dorp();
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
			width: 100%;
			height: 80px;
			/*overflow: hidden;*/
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
			#flow__show__list {
				width: 100%;
				overflow: hidden;
				position: relative;
				height: 100%;
			}
			ul {
				display: flex;
				padding: 30px 0px;
				width: 2000px;
				overflow: auto;
				position: absolute;
				-webkit-user-select:none;
				-moz-user-select:none;
				-ms-user-select:none;
				user-select:none;
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
				color: blue;
			}
			.Flow__showFlow__messageOne.doing {
				color: orange;
			}
			.Flow__showFlow__messageOne.donot {
				color: #808080;
			}
			//横条位置的样式
			//已完成的样式
			.flow__crossBar.done {
				background-color: blue;
			}
			.flow__crossBar.doing {
				background-color: orange;
			}
			//未完成的样式
			.flow__crossBar.donot {
				background-color: #808080;
			}
			//实线位置的样式
			//已完成的样式
			.flow__solidLine.done {
				background-color: blue;
			}
			.flow__solidLine.doing {
				 background-color: orange;
			 }
			//未完成的样式
			.flow__solidLine.donot {
				background-color: #808080;
			}
			//圆的位置的样式
			//已完成的样式
			.flow__circular.done {
				background-image: url(../../static/img/Implemented.png);
				-webkit-background-size: cover;
				background-size: cover;
			}
			.flow__circular.doing {
				background-image: url(../../static/img/Implementing.png);
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
				border-right: 1px solid blue;
			}
			.flow__dottedLine.doing {
				border-right: 1px dashed orange;
			}
			//未完成的样式
			.flow__dottedLine.donot {
				border-right: 1px solid #808080;
			}
		}
	}
</style>
