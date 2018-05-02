<template>
	<div class="base-table">
		<table cellpadding="0" cellspacing="0" border="0">
			<colgroup>
				<col width="1">
				<col width="1">
				<col width="1">
				<col width="1">
				<col width="1">
				<col width="1">
				<col width="3">
			</colgroup>
			<thead>
				<tr>
					<th colspan="1" rowspan="3">
						<div>日期</div>
					</th>
					<th colspan="6" rowspan="1">
						<div>配送信息</div>
					</th>
				</tr>
				<tr>
					<th colspan="1" rowspan="2">
						<div>姓名</div>
					</th>
					<th colspan="5" rowspan="1">
						<div>位置</div>
					</th>
				</tr>
				<tr>
					<th colspan="1" rowspan="1">
						<div>省份</div>
					</th>
					<th colspan="1" rowspan="1">
						<div>市区</div>
					</th>
					<th colspan="1" rowspan="1">
						<div>地址</div>
					</th>
					<th colspan="1" rowspan="1">
						<div>邮编</div>
					</th>
					<th colspan="1" rowspan="1">
						<div>操作</div>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<div>2016-05-03</div>
					</td>
					<td>
						<div>王小虎</div>
					</td>
					<td>
						<div>上海</div>
					</td>
					<td>
						<div>普陀区</div>
					</td>
					<td>
						<div>上海市普陀区金沙江路 1518 弄</div>
					</td>
					<td>
						<div>200333</div>
					</td>
					<td>
						<div>
							<i>查看</i>
							<i>编辑</i>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: "BaseTable",
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.base-table {
		width: 100%;
		overflow: hidden;
		table {
			table-layout: fixed;
			border-collapse: separate;
			width: 1000px;
			colgroup {
				col {
					display: table-column;
				}
			}
			thead {
				color: #909399;
				font-weight: 500;
				text-align: left;
				tr {
					display: table-row;
					vertical-align: inherit;
					border-color: inherit;
					th {
						background: #f5f7fa;
						border-bottom: 1px solid #ebeef5;
						border-right: 1px solid #ebeef5;
						div {
							padding-top: 10px;
							padding-bottom: 10px;
							padding-left: 10px;
						}
					}
				}
			}
			tbody {
				font-size: 14px;
				color: #606266;
				display: table-row-group;
				vertical-align: middle;
				border-color: inherit;
				border-collapse: separate;
				tr {
					background-color: white;
					display: table-row;
					vertical-align: inherit;
					border-color: inherit;
					td {
						border-bottom: 1px solid #ebeef5;
						border-right: 1px solid #ebeef5;
						padding: 12px 0;
						min-width: 0;
						box-sizing: border-box;
						text-overflow: ellipsis;
						vertical-align: middle;
						position: relative;
						div {
							padding-left: 10px;
							box-sizing: border-box;
							white-space: normal;
							word-break: break-all;
							line-height: 23px;
							padding-right: 10px;
							overflow: hidden;
							text-overflow: ellipsis;
							display: block;
						}
					}
				}
			}
		}
	}
</style>