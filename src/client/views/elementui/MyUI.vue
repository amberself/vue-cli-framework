<template>
	<div>
		<div id="myui">
			<div class="onepath">
				<div class="title">基础下拉列选择组件</div>
				<br />
				<div style="width: 400px;">
					<base-select :opts="opts" @disp-selectCallBack="selectCallBack"></base-select>
				</div>
				<div class="title">可输入下拉列选择组件</div>
				<br />
				<div style="width: 400px;">
					<base-input-select :opts="opts" @disp-selectCallBack="selectCallBack"></base-input-select>
				</div>
			</div>
			<div class="onepath">
				<div class="title">基础表格组件</div>
				<br />
				<div>
					<base-table>
						<!--定义每列比例-->
						<colgroup slot="slotColgroup">
							<col v-for="col in tcols" :width="col" />
						</colgroup>
						<!--定义表格标题-->
						<thead slot="slotThead">
							<tr v-for="item in thead">
								<th v-for="ichild in item" :colspan="ichild.colspan ? ichild.colspan : 1" :rowspan="ichild.rowspan ? ichild.rowspan : 1">
									<div>{{ichild.title}}</div>
								</th>
							</tr>
						</thead>
						<!--展示表格数据-->
						<tr slot="slotContent" v-for="item in tdatas" :id="item.id">
							<td>
								<div>{{item.dateTime}}</div>
							</td>
							<td>
								<div>{{item.name}}</div>
							</td>
							<td>
								<div>{{item.province}}</div>
							</td>
							<td>
								<div>{{item.city}}</div>
							</td>
							<td>
								<div>{{item.address}}</div>
							</td>
							<td>
								<div>{{item.tel}}</div>
							</td>
							<td>
								<div>
									<button type="button" class="tbtn" :id="item.id" @click="detailHandle">
										查看
									</button>
									<button type="button" class="tbtn" :id="item.id">
										编辑
									</button>
									<button type="button" class="tbtn" :id="item.id">
										告警设置
									</button>
									<button type="button" class="tbtn" :id="item.id">
										删除
									</button>
								</div>
							</td>
						</tr>
					</base-table>
				</div>
			</div>
			<div class="onepath">
				<div class="title">分页组件</div>
				<br />
				<br /> 基本样式：
				<div>
					<base-pagination :total="total" :currentPage='currentPage' :pageSize='pageSize' @pagechange="pagechange"></base-pagination>
				</div>
				<br />
				<br /> 样式2
				<base-pagination-t2 :total="total" :currentPage='currentPage' :pageSize='pageSize' @pagechange="pagechange"></base-pagination-t2>
			</div>
			<div class="onepath">
				<div class="title">询问框组件</div>
				<br />
				<button @click="confirmHandle">confirm</button>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseSelect from '../../components/base-select.vue'
	import BaseTable from '../../components/base-table.vue'
	import BasePagination from '../../components/base-pagination.vue'
	import BasePaginationT2 from '../../components/base-pagination-t2.vue'
	import BaseInputSelect from '../../components/base-input-select.vue'
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
				}, {
					id: 'ID6',
					value: '烤肉'
				}, {
					id: 'ID7',
					value: '黄金糕'
				}, {
					id: 'ID8',
					value: '双皮奶'
				}, {
					id: 'ID9',
					value: '蚵仔煎'
				}, {
					id: 'ID10',
					value: '龙须面'
				}, {
					id: 'ID11',
					value: '北京烤鸭'
				}, {
					id: 'ID12',
					value: '烤肉'
				}],
				tcols: [1, 1, 1, 1, 1, 1, 3],
				thead: [
					[{
						title: "设备列表",
						colspan: 7,
						rowspan: 1
					}],
					[{
						title: "日期",
					}, {
						title: "姓名",
					}, {
						title: "省份",
					}, {
						title: "市区",
					}, {
						title: "地址",
					}, {
						title: "邮编",
					}, {
						title: "操作",
					}, ]
				],
				tdatas: [{
					id: "ID1",
					dateTime: "2016-01-01",
					name: "王小虎",
					province: "上海",
					city: "上海市",
					address: "上海市",
					tel: "200333"
				}, {
					id: "ID2",
					dateTime: "2020-01-01",
					name: "张三",
					province: "福建",
					city: "厦门市",
					address: "厦门市",
					tel: "361000"
				}],
				total: 50, // 记录总条数
				pageSize: 10, // 每页显示条数
				currentPage: 1, // 当前的页数
			}
		},
		components: {
			BaseSelect,
			BaseInputSelect,
			BaseTable,
			BasePagination,
			BasePaginationT2
		},
		methods: {
			selectCallBack(itemID) {
				console.log(itemID);
			},
			detailHandle(e) {
				console.log(e.target.id);
			},
			pagechange: function(currentPage) {
				console.log(currentPage);
			},
			confirmHandle: function(e) {
				this.$globalConfirm("提示", "确认要删除吗？", () => {
					console.log("确定");
				}, () => {
					console.log("取消");
				});
			}
		},
		mounted() {

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
		margin-top: 10px;
	}
</style>