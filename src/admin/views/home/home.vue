<template>
	<div id="home">
		<div class="title wow flash">主页</div>
		<el-button type="success" @click="cross_domain">proxyTable代理请求跨域模拟接口</el-button>
		<el-button type="success" @click="axios_jserver">axios请求模拟接口</el-button>
		<br />
		<br />
		<br />
		<el-button type="success" @click="vuex_jserver">vuex+axios组合请求模拟接口</el-button>
	</div>
</template>

<script>
	import 'wowjs/css/libs/animate.css'
	import WowJS from 'wowjs'

	export default {
		name: 'home',
		mounted() {
			var wow = new WowJS.WOW({
				animateClass: 'animated',
				offset: 100,
				callback: function(box) {}
			});
			wow.init();
		},
		methods: {
			//开发环境跨域时，通过proxyTable代理请求模拟接口，跨域访问http://www.helloui.net网站的数据接口
			cross_domain() {
				let path = "http://127.0.0.1/api/process_get?name=shbol";
				this.$http.get(path).then(function(resp) {
					console.log(resp);
				}).catch(error => {
					console.log(error);
				});
			},
			//通过axios请求模拟接口
			axios_jserver() {
				let path = "/imock_user";
				this.$http.get(path).then(function(resp) {
					console.log(resp.data);
				}).catch(error => {
					console.log(error);
				});
			},
			//通过vuex+axios请求模拟接口
			vuex_jserver() {
				//参数
				let param = {};
				param.itemID = "123"; //参数传递测试

				this.$store.commit("SET_DATA", "vuex_jserver");
				this.$store.dispatch("getIMockOrder", param).then((data) => {
					console.log(data);
				}, (error) => {
					console.log(error);
				});
			}
		}
	}
</script>

<style lang="css" scoped>
	.title {
		margin-bottom: 10px;
	}
</style>