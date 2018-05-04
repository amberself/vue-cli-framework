<template>
	<div id="uinotice">
		<div class="onepath">
			<div class="title">alert 警告</div>
			<br /> 基础用法：
			<div>
				<el-alert title="带关闭回调函数" type="success" close-text="关闭" @close="alterClose"></el-alert>
				<el-alert title="带图标" type="info" show-icon></el-alert>
				<el-alert title="文字居中" type="warning" center></el-alert>
				<el-alert title="主体文字" type="error" description="这里是一段辅助性文字"></el-alert>
			</div>
			<br /> 完整用法：
			<div>
				<el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
				<el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
				<el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
				<el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></el-alert>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Loading 加载（通过import支持全局方法）</div>
			<br /> 区域加载：
			<div>
				<el-table id="etble" v-loading="loading" :data="tableData" style="width: 100%" element-loading-text="加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
					<el-table-column prop="date" label="日期" width="180"></el-table-column>
					<el-table-column prop="name" label="姓名" width="180"></el-table-column>
					<el-table-column prop="address" label="地址"></el-table-column>
				</el-table>
			</div>
			<br /> 全屏加载：
			<div>
				<el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">
					指令方式
				</el-button>
				<el-button type="primary" @click="openFullScreen2">
					服务方式
				</el-button>
				<el-button type="primary" @click="openFullScreen3">
					脚本方式
				</el-button>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Message 消息提示（通过import支持全局方法）</div>
			<br /> 基础用法：
			<div>
				<el-button :plain="true" @click="open">基本提示</el-button>
				<el-button :plain="true" @click="open2">带关闭图标</el-button>
				<el-button :plain="true" @click="open3">文字居中</el-button>
				<el-button :plain="true" @click="open4">错误</el-button>
				<el-button :plain="true" @click="open5">1秒关闭</el-button>
			</div>
			<br /> 使用 HTML 片段：
			<div>
				<el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
			</div>
			<br /> 脚本用法：
			<div>
				<el-button :plain="true" @click="open6">脚本打开提示框</el-button>
			</div>
		</div>
		<div class="onepath">
			<div class="title">MessageBox 弹框（通过import支持全局方法）</div>
			<br /> 消息提示：
			<div>
				<el-button type="text" @click="mbopen">点击打开 Message Box</el-button>
			</div>
			<br /> 确认消息：
			<div>
				<el-button type="text" @click="mbopen2">点击打开 Message Box</el-button>
			</div>
			<br /> 提交内容：
			<div>
				<el-button type="text" @click="mbopen3">点击打开 Message Box</el-button>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Notification 通知</div>
			<br /> 基本用法：
			<div>
				<el-button plain @click="notifopen">
					可自动关闭（自定义样式）
				</el-button>
				<el-button plain @click="notifopen1">
					不会自动关闭（默认样式）
				</el-button>
				<el-button plain @click="notifopen2">
					不会自动关闭（success样式）
				</el-button>
			</div>
			<br /> 自定义弹出位置：
			<div>
				<el-button plain @click="notifopen7">
					右上角
				</el-button>
				<el-button plain @click="notifopen8">
					右下角
				</el-button>
				<el-button plain @click="notifopen9">
					左下角
				</el-button>
				<el-button plain @click="notifopen10">
					左上角
				</el-button>
			</div>
			<br /> 带有偏移：
			<div>
				<el-button plain @click="notifopen11">
					偏移的消息
				</el-button>
			</div>
			<br /> 隐藏关闭：
			<div>
				<el-button plain @click="notifopen12">
					隐藏关闭按钮
				</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Loading, Message } from 'element-ui';

	export default {
		name: "uinotice",
		data() {
			return {
				loading: true,
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				fullscreenLoading: false
			}
		},
		methods: {
			alterClose() {
				console.log("alter 关闭回调！");
			},
			openFullScreen() {
				this.fullscreenLoading = true;
				setTimeout(() => {
					this.fullscreenLoading = false;
				}, 2000);
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				setTimeout(() => {
					loading.close();
				}, 2000);
			},
			openFullScreen3() {
				let loadingInstance = Loading.service({
					fullscreen: true
				});
				setTimeout(() => {
					loadingInstance.close();
				}, 2000);
			},
			open() {
				this.$message('这是一条消息提示');
			},
			open2() {
				this.$message({
					showClose: true,
					message: '恭喜你，这是一条成功消息',
					type: 'success'
				});
			},
			open3() {
				this.$message({
					center: true,
					message: '警告哦，这是一条警告消息',
					type: 'warning'
				});
			},
			open4() {
				this.$message.error('错了哦，这是一条错误消息');
			},
			open5() {
				this.$message({
					duration: 1000,
					message: '1秒关闭',
					type: 'warning'
				});
			},
			openHTML() {
				this.$message({
					dangerouslyUseHTMLString: true,
					message: '<strong>这是 <i>HTML</i> 片段</strong>'
				});
			},
			open6() {
				Message.success({
					message: '恭喜你，这是一条成功消息'
				});
			},
			mbopen() {
				this.$alert('这是一段内容', '标题名称', {
					confirmButtonText: '确定',
					callback: action => {
						console.log(action);
					}
				});
			},
			mbopen2() {
				this.$confirm('此操作将永久删除该文件, 是否继续?(布局居中)', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					console.log("成功！");
				}).catch(() => {
					console.log("取消！");
				});
			},
			mbopen3() {
				this.$prompt('请输入邮箱', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage: '邮箱格式不正确'
				}).then(({
					value
				}) => {
					console.log("提交成功:", value);
				}).catch(() => {
					console.log("取消");
				});
			},
			notifopen() {
				const h = this.$createElement;

				this.$notify({
					title: '提示',
					message: h('i', {
						style: 'color: teal'
					}, '自定义样式')
				});
			},
			notifopen1() {
				this.$notify({
					title: '提示',
					message: '默认样式',
					duration: 0
				});
			},
			notifopen2() {
				this.$notify({
					type: 'success',
					title: '提示',
					message: 'success样式',
					duration: 0
				});
			},
			notifopen7() {
				this.$notify({
					title: '自定义位置',
					message: '右上角弹出的消息'
				});
			},
			notifopen8() {
				this.$notify({
					title: '自定义位置',
					message: '右下角弹出的消息',
					position: 'bottom-right'
				});
			},
			notifopen9() {
				this.$notify({
					title: '自定义位置',
					message: '左下角弹出的消息',
					position: 'bottom-left'
				});
			},
			notifopen10() {
				this.$notify({
					title: '自定义位置',
					message: '左上角弹出的消息',
					position: 'top-left'
				});
			},
			notifopen11() {
				this.$notify({
					title: '偏移',
					message: '这是一条带有垂直偏移的提示消息',
					offset: 500
				});
			},
			notifopen12() {
				this.$notify({
					title: 'Info',
					message: '这是一条没有关闭按钮的消息',
					showClose: false
				});
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
</style>