<!--
	elementui base 组件
-->
<template>
	<div id="uibase">
		<div id="layout" class="onepath">
			<div class="title">layout布局 24列规则 el-row表示行，el-col表示列，列用:span属性设置所占比例</div>
			<br />
			<div>
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple-dark"></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple-light"></div>
					</el-col>
					<el-col :span="8">
						<div class="grid-content bg-purple"></div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div id="container" class="onepath">
			<div class="title">container布局容器 分为el-header、el-main、el-footer、el-aside四种，需包裹在el-container里</div>
			<br />
			<div>
				<el-container>
					<el-header>Header</el-header>
					<el-main>Main</el-main>
				</el-container>
			</div>
			<div class="container-margin-top">
				<el-container>
					<el-header>Header</el-header>
					<el-container>
						<el-aside width="200px">Aside</el-aside>
						<el-container>
							<el-main>Main</el-main>
							<el-footer>Footer</el-footer>
						</el-container>
					</el-container>
				</el-container>
			</div>
			<div class="container-margin-top">
				<el-container>
					<el-aside width="200px">Aside</el-aside>
					<el-container>
						<el-header>Header</el-header>
						<el-main>Main</el-main>
						<el-footer>Footer</el-footer>
					</el-container>
				</el-container>
			</div>
		</div>
		<div id="icon" class="onepath">
			<div class="title">图标</div>
			<br />
			<div>
				<i class="el-icon-loading"></i>
				<i class="el-icon-edit"></i>
				<i class="el-icon-share"></i>
				<i class="el-icon-delete"></i>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			</div>
		</div>
		<div id="button" class="onepath">
			<div class="title">按钮 属性：size 尺寸、type 类型、plain 是否朴素按钮、round 是否圆角按钮、circle 是否圆形按钮、loading 是否加载中状态、disabled 是否禁用状态、icon 图标类名、autofocus 是否默认聚焦、native-type 原生 type 属性</div>
			<br />
			<div>
				<el-row>
					<el-button>默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="success">成功按钮</el-button>
					<el-button type="info">信息按钮</el-button>
					<el-button type="warning">警告按钮</el-button>
					<el-button type="danger">危险按钮</el-button>
					<el-button :loading="true">加载中</el-button>
				</el-row>

				<el-row>
					<el-button plain>朴素按钮</el-button>
					<el-button type="primary" plain>主要按钮</el-button>
					<el-button type="success" plain>成功按钮</el-button>
					<el-button type="info" plain>信息按钮</el-button>
					<el-button type="warning" plain>警告按钮</el-button>
					<el-button type="danger" plain>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button round>圆角按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="success" round>成功按钮</el-button>
					<el-button type="info" round>信息按钮</el-button>
					<el-button type="warning" round>警告按钮</el-button>
					<el-button type="danger" round>危险按钮</el-button>
				</el-row>

				<el-row>
					<el-button icon="el-icon-search" circle></el-button>
					<el-button type="primary" icon="el-icon-edit" circle></el-button>
					<el-button type="success" icon="el-icon-check" circle></el-button>
					<el-button type="info" icon="el-icon-message" circle></el-button>
					<el-button type="warning" icon="el-icon-star-off" circle></el-button>
					<el-button type="danger" icon="el-icon-delete" circle></el-button>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "uibase",
	}
</script>

<style lang="scss" scoped>
	.onepath {
		margin-top: 20px;
	}
	
	.title {
		background-color: cadetblue;
		padding: 5px;
	}
	/*layout布局*/
	
	.el-row {
		margin-bottom: 5px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	/*container布局容器*/
	
	.container-margin-top {
		margin-top: 5px;
	}
	
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
	/*layout布局*/
</style>