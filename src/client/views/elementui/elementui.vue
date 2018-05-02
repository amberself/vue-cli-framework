<!--
	elementui 展示页
-->
<template>
	<div>
		<router-link to="/ElementUI/UIBase">
			<button>基本组件</button>
		</router-link>
		<router-link to="/ElementUI/UIForm1">
			<button>表单组件1</button>
		</router-link>
		<router-link to="/ElementUI/UIForm2">
			<button>表单组件2</button>
		</router-link>
		<router-link to="/ElementUI/UIData">
			<button>数据展示组件</button>
		</router-link>
		<router-link to="/ElementUI/UINotice">
			<button>UINotice</button>
		</router-link>
		<router-link to="/ElementUI/UINavigation">
			<button>UINavigation</button>
		</router-link>
		<router-link to="/ElementUI/UITable">
			<button>UITable</button>
		</router-link>
		<router-link to="/ElementUI/UIOthers">
			<button>UIOthers</button>
		</router-link>
		<router-link to="/ElementUI/MyUI">
			<button>MyUI</button>
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