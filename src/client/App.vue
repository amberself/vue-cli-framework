<template>
	<div id="app">
		<global-confirm v-if=false></global-confirm>
		<router-view/>
	</div>
</template>

<script>
	import GlobalConfirm from './components/global-confirm.vue'

	export default {
		name: 'App',
		components: {
			GlobalConfirm
		}
	}
</script>

<style lang="css" scoped></style>