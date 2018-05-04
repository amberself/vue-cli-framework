<template>
	<div id="home">
		<div>---------------------------------------------</div>
		<div class="title wow flash">接口模块</div>
		<inter />
		<div>---------------------------------------------</div>
		<div class="title wow flash">UI模块</div>
		<ui />
		<div>---------------------------------------------</div>
		<div class="title wow flash">child模块</div>
		<router-view/>
		<!-- router-link传参 -->
		<router-link :to="{path:'/home/child1',query: {name: toChild1Name}}">
			<el-button type="success">child1</el-button>
		</router-link>
		<router-link to="/home/child2">
			<el-button type="success">child2</el-button>
		</router-link>
	</div>
</template>

<script>
	import 'wowjs/css/libs/animate.css'
	import WowJS from 'wowjs'
	import Inter from './inter.vue'
	import Ui from './ui.vue'

	export default {
		name: 'home',
		data() {
			return {
				toChild1Name: 'shbol'
			}
		},
		mounted() {
			console.log(this.$route.query); //获取上一个页面传入的参数对象
			var wow = new WowJS.WOW({
				animateClass: 'animated',
				offset: 100,
				callback: function(box) {}
			});
			wow.init();
		},
		components: {
			Inter,
			Ui
		}
	}
</script>

<style lang="css" scoped>
	.title {
		margin-bottom: 10px;
	}
</style>