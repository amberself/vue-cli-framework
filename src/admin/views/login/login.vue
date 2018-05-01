<template>
	<div id="login">
		<h3>登录页</h3>
		<el-button type="success" @click="loginBtn">进入系统</el-button>
	</div>
</template>

<script>
	import WowJS from 'wowjs'

	export default {
		name: 'login',
		methods: {
			loginBtn() {
				//路由本页面跳转页面及传参
				this.$router.push({
					path: '/home',
					query: {
						name: "shbol",
						pw: "123456"
					}
				})
			}
		}
	}
</script>

<style lang="css" scoped>

</style>