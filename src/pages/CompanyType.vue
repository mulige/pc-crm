<template>
	<div id="companyType__container">
		<div class="companyType__search">

		</div>
		<div id="companyType__table__container">
			<el-table
					:data="tableData"
					style="width: 100%;"

					size="mini"
					:default-sort = "{prop: 'date', order: 'descending'}"
			>
				<el-table-column
						prop="type"
						sortable
						label="客户类型"
						width="200">
				</el-table-column>
				<el-table-column
						prop="number"
						label="数量"
						sortable
						width="80">
				</el-table-column>

			</el-table>
		</div>
		<div id="compantType__echart__container">

		</div>
	</div>

</template>
<script>
	var echarts = require('echarts');
	export default {
		name: 'companyType',
		data () {
			return {
				tableData: [
					{
						type: '非上市股份公司（外资）',
						number: 35
					},
					{
						type: '外资（合资）有限公司',
						number: 0
					},
					{
						type: '合伙企业',
						number: 0
					},
					{
						type: '集体所有制企业',
						number: 0
					},
					{
						type: '非上市股份公司',
						number: 1
					},
					{
						type: '上市公司',
						number: 0
					},
					{
						type: '有限责任公司',
						number: 0
					},
					{
						type: '有限责任公司（外资/合资）',
						number: 60
					},
					{
						type: '乡镇企业',
						number: 0
					},
					{
						type: '其他',
						number: 1
					},
					{
						type: '政府部门',
						number: 0
					},
					{
						type: '未上市公司',
						number: 4
					},
					{
						type: '事业单位',
						number: 2
					},
					{
						type: '政府或监管机关',
						number: 2
					},

				],
				xData: [],
				yData: [],
			}
		},
		methods: {
			//将数据处理成我们的柱图需要的数据
			getBarDatas() {
				var xdata = [];
				var ydata = [];
				this.tableData.forEach(function(item) {
					xdata.push(item.type);
					ydata.push(item.number);
				})
				this.xData = xdata;
				this.yData = ydata;
				this.draw();
			},
			//画图的方法
			draw() {
				var myChart = echarts.init(document.getElementById('compantType__echart__container'));
				myChart.setOption({
					title: {
						text: '企业类型统计图',
						left: '40%'
					},
					tooltip: {},
					xAxis: {
						data: this.xData,
						axisLabel: {
							rotate: 25
						}
					},
					yAxis: {},
					series: [{
						name: '数量',
						type: 'bar',
						data: this.yData,
						label: {//作用是控制柱图上是否显示提示标签以及数字显示的状态信息
							show: true,
							position: 'inside',
							rotate: 90
						}
					}]
				});
			}
		},
		mounted() {
			this.getBarDatas();
		}
	}
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	#companyType__container {
		box-sizing: border-box;
		width: 100%;
		padding: 30px;
		display: flex;
		#companyType__table__container {
			margin-left: 40px;
			width: 280px;
			height: 400px;
			overflow-y: scroll;
			font-size: 12px;
		}
		#compantType__echart__container {
			flex: 1;
			min-width:400px;
			/*border: 1px solid red;*/
		}
	}
</style>
