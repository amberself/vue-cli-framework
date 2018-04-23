<template>
	<div id="login">
		登录页
		<el-button type="success" @click="loginBtn">进入系统</el-button>
	</div>
</template>

<script>
	import WowJS from 'wowjs'

	export default {
		name: 'login',
		methods: {
			loginBtn() {
				this.$router.push({
					path: '/home'
				})
			}
		}
	}
</script>

<style lang="css" scoped>

</style>