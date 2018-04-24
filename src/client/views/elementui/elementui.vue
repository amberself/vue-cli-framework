<!--
	elementui 展示页
-->
<template>
	<div>
		<router-link to="/ElementUI/UIBase">
			<button>Base</button>
		</router-link>
		<router-link to="/ElementUI/UIForm">
			<button>Form</button>
		</router-link>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "elementui"
	}
</script>

<style lang="css" scoped>

</style>