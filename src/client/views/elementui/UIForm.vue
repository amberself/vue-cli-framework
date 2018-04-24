<!--
	elementui form 组件
-->
<template>
	<div id="uiform">
		<div id="radio" class="onepath">
			<div class="title">单选组件</div>
			<br />
			<!--属性：label Radio 的 value、disabled 是否禁用、border 是否显示边框、size Radio 的尺寸，仅在 border 为真时有效、name 原生 name 属性-->
			普通单选：
			<div>
				<el-radio v-model="radio" label="a">备选项</el-radio>
				<el-radio v-model="radio" label="b">备选项</el-radio>
			</div>
			<br /> 禁用的单选：
			<div>
				<el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
				<el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
			</div>
			<br /> 单选组：
			<!--事件：change 属性：text-color 按钮形式的 Radio 激活时的文本颜色、fill 按钮形式的 Radio 激活时的填充色和边框色-->
			<div>
				<el-radio-group v-model="radio2" @change="radioChange">
					<el-radio label="a">备选项</el-radio>
					<el-radio label="b">备选项</el-radio>
					<el-radio label="c">备选项</el-radio>
				</el-radio-group>
			</div>
			<br /> 按钮样式：
			<!--只需要把el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性-->
			<div>
				<div>
					<el-radio-group v-model="radio3">
						<el-radio-button label="上海"></el-radio-button>
						<el-radio-button label="北京"></el-radio-button>
						<el-radio-button label="广州"></el-radio-button>
						<el-radio-button label="深圳"></el-radio-button>
					</el-radio-group>
				</div>
				<div style="margin-top: 20px">
					<el-radio-group v-model="radio4" size="medium">
						<el-radio-button label="上海"></el-radio-button>
						<el-radio-button label="北京"></el-radio-button>
						<el-radio-button label="广州"></el-radio-button>
						<el-radio-button label="深圳"></el-radio-button>
					</el-radio-group>
				</div>
				<div style="margin-top: 20px">
					<el-radio-group v-model="radio5" size="small">
						<el-radio-button label="上海"></el-radio-button>
						<el-radio-button label="北京" disabled></el-radio-button>
						<el-radio-button label="广州"></el-radio-button>
						<el-radio-button label="深圳"></el-radio-button>
					</el-radio-group>
				</div>
				<div style="margin-top: 20px">
					<el-radio-group v-model="radio6" disabled size="mini">
						<el-radio-button label="上海"></el-radio-button>
						<el-radio-button label="北京"></el-radio-button>
						<el-radio-button label="广州"></el-radio-button>
						<el-radio-button label="深圳"></el-radio-button>
					</el-radio-group>
				</div>
			</div>
			<br /> 带有边框：
			<!--设置border属性可以渲染为带有边框的单选框-->
			<div>
				<div>
					<el-radio v-model="radio7" label="1" border>备选项1</el-radio>
					<el-radio v-model="radio7" label="2" border>备选项2</el-radio>
				</div>
				<div style="margin-top: 20px">
					<el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
					<el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
				</div>
				<div style="margin-top: 20px">
					<el-radio-group v-model="radio9" size="small">
						<el-radio label="1" border>备选项1</el-radio>
						<el-radio label="2" border disabled>备选项2</el-radio>
					</el-radio-group>
				</div>
				<div style="margin-top: 20px">
					<el-radio-group v-model="radio10" size="mini" disabled>
						<el-radio label="1" border>备选项1</el-radio>
						<el-radio label="2" border>备选项2</el-radio>
					</el-radio-group>
				</div>
			</div>
		</div>
		<div id="checkbox" class="onepath">
			<div class="title">多选组件</div><br /> 普通多选：
			<br />
			<div>
				<el-checkbox v-model="checked">备选项</el-checkbox>
			</div>
			禁用多选：<br />
			<div>
				<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
				<el-checkbox v-model="checked2" disabled>备选项2</el-checkbox>
			</div>
			多选组：<br />
			<div>
				<el-checkbox-group v-model="checkList" @change="checkboxChange">
					<el-checkbox label="复选框 A"></el-checkbox>
					<el-checkbox label="复选框 B"></el-checkbox>
					<el-checkbox label="复选框 C"></el-checkbox>
					<el-checkbox label="禁用" disabled></el-checkbox>
					<el-checkbox label="选中且禁用" disabled></el-checkbox>
				</el-checkbox-group>
			</div>
			全选效果：<br />
			<div>
				<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
				<div style="margin: 15px 0;"></div>
				<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
					<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
				</el-checkbox-group>
			</div>
			数量限制：<br />
			<div>
				<el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
					<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
				</el-checkbox-group>
			</div>
			按钮样式：<br />
			<div>
				<div>
					<el-checkbox-group v-model="checkboxGroup1">
						<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
					</el-checkbox-group>
				</div>
				<div style="margin-top: 20px">
					<el-checkbox-group v-model="checkboxGroup2" size="medium">
						<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
					</el-checkbox-group>
				</div>
				<div style="margin-top: 20px">
					<el-checkbox-group v-model="checkboxGroup3" size="small">
						<el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
					</el-checkbox-group>
				</div>
				<div style="margin-top: 20px">
					<el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
						<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
					</el-checkbox-group>
				</div>
			</div>
			带边框：<br />
			<div>
				<div>
					<el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
					<el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
				</div>
				<div style="margin-top: 20px">
					<el-checkbox v-model="checked5" label="备选项1中" border size="medium"></el-checkbox>
					<el-checkbox v-model="checked6" label="备选项2中" border size="medium"></el-checkbox>
				</div>
				<div style="margin-top: 20px">
					<el-checkbox-group v-model="checkboxGroup5" size="small">
						<el-checkbox label="备选项1" border></el-checkbox>
						<el-checkbox label="备选项2" border disabled></el-checkbox>
					</el-checkbox-group>
				</div>
				<div style="margin-top: 20px">
					<el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
						<el-checkbox label="备选项1" border></el-checkbox>
						<el-checkbox label="备选项2" border></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
		</div>
		<div id="input" class="onepath">
			<div class="title">输入框</div>
			<br /> 基础用法：
			<br />
			<div>
				<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
			禁用状态：<br />
			<div>
				<el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
			</div>
			可清空：<br />
			<div>
				<el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
			</div>
			带有图标标记：<br />
			<div>
				<div class="demo-input-suffix" style="display: flex;">
					<el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2"></el-input>
					<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
				</div>
			</div>
			文本域：<br />
			<div>
				<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
			</div>
			可自适应的文本域：<br />
			<div>
				<el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
				<div style="margin: 20px 0;"></div>
				<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3"></el-input>
			</div>
			复合型输入框：<br />
			<div>
				<div>
					<el-input placeholder="请输入内容" v-model="input3">
						<template slot="prepend">Http://</template>
					</el-input>
				</div>
				<div style="margin-top: 15px;">
					<el-input placeholder="请输入内容" v-model="input4">
						<template slot="append">.com</template>
					</el-input>
				</div>
				<div style="margin-top: 15px;">
					<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
						<el-select v-model="select" slot="prepend" placeholder="请选择">
							<el-option label="餐厅名" value="1"></el-option>
							<el-option label="订单号" value="2"></el-option>
							<el-option label="用户电话" value="3"></el-option>
						</el-select>
						<el-button slot="append" icon="el-icon-search"></el-button>
					</el-input>
				</div>
			</div>
			尺寸：<br />
			<div class="demo-input-size" style="display: flex;">
				<el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input6"></el-input>
				<el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input7"></el-input>
				<el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input8"></el-input>
				<el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input9"></el-input>
			</div>
			建议：<br />
			<div>
				<el-row class="demo-autocomplete">
					<el-col :span="12">
						<div class="sub-title">激活即列出输入建议</div>
						<el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
					</el-col>
					<el-col :span="12">
						<div class="sub-title">输入后匹配输入建议</div>
						<el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
					</el-col>
				</el-row>
			</div>
			自定义模板：<br />
			<div>
				<el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
					<i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
					<template slot-scope="{ item }">
						<div class="name">{{ item.value }}</div>
						<span class="addr">{{ item.address }}</span>
					</template>
				</el-autocomplete>
			</div>
			远程搜索：<br />
			<div>
				<el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
			</div>
		</div>
	</div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		name: "uiform",
		data() {
			return {
				radio: 'b',
				radio1: '选中且禁用',
				radio2: 'c',
				radio3: '上海',
				radio4: '上海',
				radio5: '上海',
				radio6: '上海',
				radio7: '1',
				radio8: '1',
				radio9: '1',
				radio10: '1',
				checked: true,
				checked1: false,
				checked2: true,
				checkList: ['选中且禁用', '复选框 A'],
				checkAll: false,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true,
				checkedCities1: ['上海', '北京'],
				checkboxGroup1: ['上海'],
				checkboxGroup2: ['上海'],
				checkboxGroup3: ['上海'],
				checkboxGroup4: ['上海'],
				checked3: true,
				checked4: false,
				checked5: false,
				checked6: true,
				checkboxGroup5: [],
				checkboxGroup6: [],
				input: '',
				input1: '',
				input10: '',
				input2: '',
				input21: '',
				textarea: '',
				textarea2: '',
				textarea3: '',
				input3: '',
				input4: '',
				input5: '',
				select: '',
				input6: '',
				input7: '',
				input8: '',
				input9: '',
				restaurants: [],
				state1: '',
				state2: '',
				state3: '',
				state4: ''
			};
		},
		methods: {
			radioChange(e) {
				console.log(e);
			},
			checkboxChange(e) {
				console.log(e);
			},
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false; //全选选择框减号标记，只负责样式控制。 true 显示标记 false 隐藏标记 
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			},
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					cb(results);
				}, 3000 * Math.random());
			},
			createFilter(queryString) {
				return(restaurant) => {
					return(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				return [{
						"value": "三全鲜食（北新泾店）",
						"address": "长宁区新渔路144号"
					},
					{
						"value": "Hot honey 首尔炸鸡（仙霞路）",
						"address": "上海市长宁区淞虹路661号"
					},
					{
						"value": "新旺角茶餐厅",
						"address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
					}
				];
			},
			handleSelect(item) {
				console.log(item);
			},
			handleIconClick(ev) {
				console.log(ev);
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	}
</script>

<style lang="scss" scoped>
	.onepath {
		margin-top: 20px;
	}
	
	.title {
		background-color: cadetblue;
		padding: 5px;
	}
	/*复合型输入框*/
	
	.el-select .el-input {
		width: 130px;
	}
	
	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}
	/*自定义模板*/
	
	.my-autocomplete {
		li {
			line-height: normal;
			padding: 7px;
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.addr {
				font-size: 12px;
				color: #b4b4b4;
			}
			.highlighted .addr {
				color: #ddd;
			}
		}
	}
</style>