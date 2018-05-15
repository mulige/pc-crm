<template>
	<div class="block">
		<!--<div class="count__left">-->
			<!--<el-tree-->
					<!--:data="data4"-->
					<!--show-checkbox-->
					<!--node-key="id"-->
					<!--default-expand-all-->
					<!--:expand-on-click-node="false"-->
					<!--:render-content="renderContent">-->
			<!--</el-tree>-->
		<!--</div>-->
		<div class="count__right">
			<div id="count__right__container">

			</div>
		</div>
	</div>
</template>
<script>
	var echarts = require('echarts');
	let id = 1000;

	export default {
		data() {
			const data = [{
				id: 1,
				label: '一级 1',
				children: [{
					id: 4,
					label: '二级 1-1',
					children: [{
						id: 9,
						label: '三级 1-1-1'
					}, {
						id: 10,
						label: '三级 1-1-2'
					}]
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
				data4: JSON.parse(JSON.stringify(data)),
				barData: [
				{
					topArea: '华北',
					children: [
						{
							childrenArea: '北京',
							number: 4,
						},
						{
							childrenArea: '天津',
							number: 1,
						},
						{
							childrenArea: '河北',
							number: 0,
						},
						{
							childrenArea: '山西',
							number: 3,
						},
						{
							childrenArea: '内蒙',
							number: 1,
						},
					],
				},
					{
					topArea: '华东',
					children: [
						{
							childrenArea: '上海',
							number: 0,
						},
						{
							childrenArea: '江苏',
							number: 9,
						},
						{
							childrenArea: '浙江',
							number: 5,
						},
						{
							childrenArea: '山东',
							number: 7,
						},
						{
							childrenArea: '安徽',
							number: 0,
						},
					],
				},
					{
					topArea: '华中',
					children: [
						{
							childrenArea: '湖北',
							number: 5,
						},
						{
							childrenArea: '湖南',
							number: 2,
						},
						{
							childrenArea: '河南',
							number: 3,
						},
						{
							childrenArea: '云南',
							number: 1,
						},


					],
				},
				],
				xAxis: [
					{
						type: 'category',
						data: []
					}
				],
				series: [],
				lengends: {data: []},
			}
		},

		methods: {
			//将上面的数据处理成我们堆叠柱图需要的数据
			changeToBarData() {
				var datas = this.barData;
				var newArr = [];
				datas.forEach(function(item, index) {
					newArr.push(item.topArea)
				});
				this.xAxis[0].data = newArr;
				var newSeries = [];
				var legends = [];
				datas.forEach(function(item, index) {
					var newArr1 = [];
					var names = [];
					item.children.forEach(function(item1, index) {
						newArr1.push(item1.number);
						names.push(item1.childrenArea);
						legends.push(item1.childrenArea);
					});
					console.log(newArr1);
					console.log(item.children[0].childrenArea)
					newSeries.push({
						name: item.children[0].childrenArea,
						type: 'bar',
//						stack: '数量',
						data: newArr1,
					})
				});
				this.series = newSeries;
				this.lengends.data = legends;
				var options = {
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: this.legends,
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: this.xAxis,
					yAxis : [
						{
							type : 'value'
						}
					],
					series: this.series,
				};
				var option = {
					tooltip : {
						trigger: 'axis',
						axisPointer : {            // 坐标轴指示器，坐标轴触发有效
							type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis : [
						{
							type : 'category',
							data : ['周一','周二','周三','周四','周五','周六','周日']
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'直接访问',
							type:'bar',
							data:[320, 332, 301, 334, 390, 330, 320]
						},
						{
							name:'邮件营销',
							type:'bar',
							stack: '广告',
							data:[120, 132, 101, 134, 90, 230, 210]
						},
						{
							name:'联盟广告',
							type:'bar',
							stack: '广告',
							data:[220, 182, 191, 234, 290, 330, 310]
						},
						{
							name:'视频广告',
							type:'bar',
							stack: '广告',
							data:[150, 232, 201, 154, 190, 330, 410]
						},
						{
							name:'搜索引擎',
							type:'bar',
							data:[862, 1018, 964, 1026, 1679, 1600, 1570],
							markLine : {
								lineStyle: {
									normal: {
										type: 'dashed'
									}
								},
								data : [
									[{type : 'min'}, {type : 'max'}]
								]
							}
						},
						{
							name:'百度',
							type:'bar',
							barWidth : 5,
							stack: '搜索引擎',
							data:[620, 732, 701, 734, 1090, 1130, 1120]
						},
						{
							name:'谷歌',
							type:'bar',
							stack: '搜索引擎',
							data:[120, 132, 101, 134, 290, 230, 220]
						},
						{
							name:'必应',
							type:'bar',
							stack: '搜索引擎',
							data:[60, 72, 71, 74, 190, 130, 110]
						},
						{
							name:'其他',
							type:'bar',
							stack: '搜索引擎',
							data:[62, 82, 91, 84, 109, 110, 120]
						}
					]
				};
				return options;
			},
			drow() {
				var _this = this;
				var myChart = echarts.init(document.getElementById('count__right__container'));
				var options = this.changeToBarData();
				console.log(options)
				myChart.setOption(options);
			},
		},
		mounted() {
			this.drow();
		},
	};
</script>
<style lang="scss">
	.count__right {
		width: 500px;
		height: 500px;
		border: 1px solid red;
		#count__right__container {
			width: 100%;
			height: 100%;
		}
	}
</style>
