<template>
	<div id="child1">
		child1
	</div>
</template>

<script>
	export default {
		name: 'child1',
		mounted() {
			console.log(this.$route.query);
		}
	}
</script>

<style lang="css" scoped>
	#child1 {
		width: 100px;
		height: 100px;
		background-color: #67C23A;
		color: white;
		margin-bottom: 10px;
		text-align: center;
	}
</style>