<!--
	门户网站入口
-->
<template>
	<div>
		this is portal
	</div>
</template>

<script>
	export default {
		name: "",
		props: {
			tObject: {
				type: Object,
				default: {}
			},
			tNumber: {
				type: Number,
				default: 0
			},
			tArray: {
				type: Array,
				default: []
			},
			tBoolean: {
				type: Boolean,
				default: false
			},
			tString: {
				type: String,
				default: ""
			}
		},
		data() {
			return {};
		},
		created() {},
		mounted() {},
		methods: {},
		components: {}
	}
</script>

<style lang="css" scoped>

</style>