<template>
	<div id="uinavifation">
		<div class="onepath">
			<div class="title">NavMenu 导航菜单</div>
			<br /> 顶栏：
			<div>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="3">消息中心</el-menu-item>
					<el-menu-item index="4">
						<a href="https://www.ele.me" target="_blank">订单管理</a>
					</el-menu-item>
				</el-menu>
			</div>
			<br /> 侧栏：
			<div>
				<el-col :span="12">
					<h5>默认样式</h5>
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</div>
			<br />
			<div style="width: 200px;">
				<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
					<el-radio-button :label="false">展开</el-radio-button>
					<el-radio-button :label="true">收起</el-radio-button>
				</el-radio-group>
				<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">导航一</span>
						</template>
						<el-menu-item-group>
							<span slot="title">分组一</span>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<span slot="title">选项4</span>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
					</el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Tabs 标签页</div>
			<br /> 基础用法：
			<div>
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
			</div>
			<br /> 选项卡样式：
			<div>
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
			</div>
			<br /> 卡片化
			<div>
				<el-tabs type="border-card">
					<el-tab-pane label="用户管理">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
			</div>
			<br /> 位置：
			<div>
				<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
					<el-radio-button label="top">top</el-radio-button>
					<el-radio-button label="right">right</el-radio-button>
					<el-radio-button label="bottom">bottom</el-radio-button>
					<el-radio-button label="left">left</el-radio-button>
				</el-radio-group>

				<el-tabs :tab-position="tabPosition" style="height: 200px;">
					<el-tab-pane label="用户管理">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
			</div>
			<br /> 自定义带图标：
			<div>
				<el-tabs type="border-card">
					<el-tab-pane>
						<span slot="label"><i class="el-icon-date"></i> 我的行程</span> 我的行程
					</el-tab-pane>
					<el-tab-pane label="消息中心">消息中心</el-tab-pane>
					<el-tab-pane label="角色管理">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
				</el-tabs>
			</div>
			<br /> 可增减标签页（暂不展示）
		</div>
		<div class="onepath">
			<div class="title">Breadcrumb 面包屑</div>
			<br /> 基础用法：
			<div>
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>
						<a href="/#/ElementUI/UINotice">活动管理</a>
					</el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<br /> 图标分隔符：
			<div>
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>活动管理</el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Dropdown 下拉列菜单</div>
			<br /> 基础用法：
			<div>
				<el-dropdown @command="handleCommand">
					<span class="el-dropdown-link">
					   下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					 </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="a">黄金糕</el-dropdown-item>
						<el-dropdown-item command="b">狮子头</el-dropdown-item>
						<el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
						<el-dropdown-item disabled command="d">双皮奶</el-dropdown-item>
						<el-dropdown-item divided command="e">蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<br /> 按钮触发：
			<div>
				<el-dropdown>
					<el-button type="primary" size="small">
						更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</el-button>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<br /> 点击触发：
			<div>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
				       	下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
				    </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
			<br /> 大小尺寸：
			<div style="display: flex;">
				<el-dropdown split-button type="primary" style="margin-left: 20px;">
					默认尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="medium" split-button type="primary" style="margin-left: 20px;">
					中等尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="small" split-button type="primary" style="margin-left: 20px;">
					小型尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>

				<el-dropdown size="mini" split-button type="primary" style="margin-left: 20px;">
					超小尺寸
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>黄金糕</el-dropdown-item>
						<el-dropdown-item>狮子头</el-dropdown-item>
						<el-dropdown-item>螺蛳粉</el-dropdown-item>
						<el-dropdown-item>双皮奶</el-dropdown-item>
						<el-dropdown-item>蚵仔煎</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "uinavifation",
		data() {
			return {
				activeIndex: '1',
				isCollapse: true,
				activeName: 'second',
				activeName2: 'first',
				tabPosition: 'top'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleCommand(val) {
				console.log(val);
			}
		}
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
	
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>