<template>
	<div>
		<div id="uitable">
			<div class="onepath">
				<div class="title">表格</div>
				<br /> 基础表格：
				<div class="my-table">
					<el-table :data="tableData" stripe border style="width: 100%; border: 1px solid red;">
						<el-table-column prop="date" label="日期" width="180"></el-table-column>
						<el-table-column prop="name" label="姓名" width="180"></el-table-column>
						<el-table-column prop="address" label="地址"></el-table-column>
					</el-table>
				</div>
				<br /> 不同背景色的表格：
				<div>
					<el-table :data="tableData" style="width: 100%" :row-style="rowClass" border>
						<el-table-column prop="date" label="日期" width="180">
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="180">
						</el-table-column>
						<el-table-column prop="address" label="地址">
						</el-table-column>
					</el-table>
				</div>
				<br /> 带操作项：
				<div>
					<el-table :data="tableData2" border style="width: 100%">
						<el-table-column prop="date" label="日期" width="150"></el-table-column>
						<el-table-column prop="name" label="姓名" width="120"></el-table-column>
						<el-table-column prop="province" label="省份" width="120"></el-table-column>
						<el-table-column prop="city" label="市区" width="120"></el-table-column>
						<el-table-column prop="address" label="地址" width="300"></el-table-column>
						<el-table-column prop="zip" label="邮编" width="120"></el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
								<el-button type="text" size="small">编辑</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<br /> 多级表头：
				<div>
					<el-table :data="tableData2" style="width: 100%">
						<el-table-column prop="date" label="日期" width="150">
						</el-table-column>
						<el-table-column label="配送信息">
							<el-table-column prop="name" label="姓名" width="120"></el-table-column>
							<el-table-column label="地址">
								<el-table-column prop="province" label="省份" width="120"></el-table-column>
								<el-table-column prop="city" label="市区" width="120"></el-table-column>
								<el-table-column prop="address" label="地址" width="300"></el-table-column>
								<el-table-column prop="zip" label="邮编" width="120"></el-table-column>
								<el-table-column label="操作">
									<template slot-scope="scope">
										<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
										<el-button type="text" size="small">编辑</el-button>
									</template>
								</el-table-column>
							</el-table-column>
						</el-table-column>
					</el-table>
				</div>
				<br /> 自定义：
				<div>
					<el-table :data="tableData2" style="width: 100%">
						<el-table-column label="日期" width="180">
							<template slot-scope="scope">
								<i class="el-icon-time"></i>
								<span style="margin-left: 10px">{{ scope.row.date }}</span>
							</template>
						</el-table-column>
						<el-table-column label="姓名" width="180">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p>姓名: {{ scope.row.name }}</p>
									<p>住址: {{ scope.row.address }}</p>
									<div slot="reference" class="name-wrapper">
										<el-tag size="medium">{{ scope.row.name }}</el-tag>
									</div>
								</el-popover>
							</template>
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "uitable",
		methods: {
			rowClass: function({
				row,
				rowIndex
			}) {
				if(rowIndex === 1) {
					return {
						"background-color": "red"
					}
				} else if(rowIndex === 3) {
					return {
						"background-color": "yellow"
					}
				}
				return '';
			},
			tableRowClassName({
				row,
				rowIndex
			}) {
				if(rowIndex === 1) {
					return 'warning-row';
				} else if(rowIndex === 3) {
					return 'success-row';
				}
				return '';
			},
			handleClick(row) {
				console.log(row);
			}
		},
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				tableData2: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}]
			}
		}
	}
</script>

<style lang="scss">
	.onepath {
		margin-top: 20px;
	}
	
	.title {
		background-color: cadetblue;
		padding: 5px;
	}
	
	.el-table .warning-row {
		background: yellow;
	}
	
	.el-table .success-row {
		background: #f0f9eb;
	}
	
	.my-table .el-table th {
		font-size: large;
		background-color: chartreuse;
		border: 1px solid red;
	}
	
	.my-table .el-table td {
		border: 1px solid red;
	}
</style>