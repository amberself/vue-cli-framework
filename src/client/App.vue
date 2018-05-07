<!--mapState，mapGetters,mapMutations,mapActions-->
<!--console.log(this.$store.getters.getConfirmVisible);-->
<template>
	<div id="app">
		<global-confirm v-if="confirmVisible" :title="confirmTitle" :text="confirmText" @disp-cleanCallBack="confirmCleanHandle" @disp-okCallBack="confirmOKHandle"></global-confirm>
		<router-view/>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import GlobalConfirm from './components/global-confirm.vue'
	import Vue from 'vue';

	Vue.prototype.$globalConfirm = function($title, $msg, $successCallback, $cleanCallback) {
		let _this = this;
		_this.$store.commit("SET_CONFIRM_VISIBLE", true);
		_this.$store.commit("SET_CONFIRM_TITLE", $title);
		_this.$store.commit("SET_CONFIRM_TEXT", $msg);
		_this.$store.commit("SET_CONFIRM_CLEAN", function() {
			_this.$store.commit("SET_CONFIRM_VISIBLE", false);
			$cleanCallback();
		});
		_this.$store.commit("SET_CONFIRM_OK", function() {
			_this.$store.commit("SET_CONFIRM_VISIBLE", false);
			$successCallback();
		});
	};

	export default {
		name: 'App',
		components: {
			GlobalConfirm
		},
		computed: {
			...mapGetters({
				confirmVisible: "getConfirmVisible",
				confirmTitle: "getConfirmTitle",
				confirmText: "getConfirmText",
				confirmCleanHandle: "getConfirmCleanHandle",
				confirmOKHandle: "getConfirmOKHandle"
			})
		}
	}
</script>

<style lang="css" scoped></style>