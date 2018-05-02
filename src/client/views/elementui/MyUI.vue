<template>
	<div>
		<div id="myui">
			<div class="onepath">
				<div class="title">基础下拉列选择组件</div>
				<br />
				<div style="width: 200px;">
					<base-select :opts="opts" @disp-selectCallBack="selectCallBack"></base-select>
				</div>
			</div>
			<div class="onepath">
				<div class="title">基础表格组件</div>
				<br />
				<div>
					<base-table></base-table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseSelect from '../../components/base-select.vue'
	import BaseTable from '../../components/base-table.vue'

	export default {
		name: "myui",
		data() {
			return {
				opts: [{
					id: 'ID1',
					value: '黄金糕'
				}, {
					id: 'ID2',
					value: '双皮奶'
				}, {
					id: 'ID3',
					value: '蚵仔煎'
				}, {
					id: 'ID4',
					value: '龙须面'
				}, {
					id: 'ID5',
					value: '北京烤鸭'
				}]
			}
		},
		components: {
			BaseSelect,
			BaseTable
		},
		methods: {
			selectCallBack(itemID) {
				console.log(itemID);
			}
		}
	}
</script>

<style lang="css" scoped>
	.onepath {
		margin-top: 20px;
	}
	
	.title {
		background-color: cadetblue;
		padding: 5px;
	}
</style>