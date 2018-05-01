<template>
	<div>
		<el-button type="success" @click="cross_domain">proxyTable代理请求跨域模拟接口</el-button>
		<el-button type="success" @click="axios_jserver">axios请求模拟接口</el-button>
		<el-button type="success" @click="vuex_jserver">vuex+axios组合请求模拟接口</el-button>
	</div>
</template>

<script>
	export default {
		name: 'inter',
		methods: {
			//开发环境跨域时，通过proxyTable代理请求模拟接口
			cross_domain() {
				let path = "http://127.0.0.1/api/imock_crossdomain";
				this.$http.get(path).then(function(resp) {
					console.log(resp.data);
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

<style>

</style>