<template>
	<div id="uiform2">
		<div class="onepath">
			<div class="title">Cascader级联选择器</div>
			<br /> 基础用法：
			<div style="display: flex;">
				<div class="block">
					<span class="demonstration">默认 click 触发子菜单</span>
					<el-cascader :options="options" v-model="selectedOptions" @change="handleChange">
					</el-cascader>
				</div>
				<div class="block" style="margin-left: 20px;">
					<span class="demonstration">hover 触发子菜单</span>
					<el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange">
					</el-cascader>
				</div>
			</div>
			<br /> 只显示最后一级：
			<div>
				<el-cascader :options="options" :show-all-levels="false" @change="handleChange"></el-cascader>
			</div>
			<br /> 选择即改变：
			<div>
				<el-cascader :options="options" change-on-select @change="handleChange"></el-cascader>
			</div>
			<br /> 动态加载次级选项：
			<div>
				<el-cascader :options="options2" @active-item-change="handleItemChange" :props="props"></el-cascader>
			</div>
			<br /> 可搜索：
			<div>
				<div style="display: flex;">
					<div class="block">
						<span class="demonstration">只可选择最后一级菜单的选项</span>
						<el-cascader placeholder="试试搜索：指南" :options="options" filterable></el-cascader>
					</div>
					<div class="block" style="margin-left: 20px;">
						<span class="demonstration">可选择任意一级菜单的选项</span>
						<el-cascader placeholder="试试搜索：指南" :options="options" filterable change-on-select></el-cascader>
					</div>
				</div>
			</div>
		</div>
		<div class="onepath">
			<div class="title">switch开关</div>
			<br /> 基础用法：
			<div>
				<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
			</div>
			<br /> 文字描述：
			<div>
				<el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费">
				</el-switch>
				<el-switch style="display: block" v-model="value4" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
				</el-switch>
			</div>
			<br /> 扩展类型：
			<div>
				<el-tooltip :content="'Switch value: ' + value5" placement="top">
					<el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949" active-value="100" inactive-value="0">
					</el-switch>
				</el-tooltip>
			</div>
		</div>
		<div class="onepath">
			<div class="title">slider滑块</div>
			<br /> 基础用法：
			<div>
				<div class="block">
					<span class="demonstration">自定义初始值</span>
					<el-slider v-model="slider2"></el-slider>
				</div>
				<div class="block">
					<span class="demonstration">格式化 Tooltip</span>
					<el-slider v-model="slider3" :format-tooltip="formatTooltip"></el-slider>
				</div>
			</div>
			<br /> 离散值：
			<div>
				<div class="block">
					<span class="demonstration">不显示间断点</span>
					<el-slider v-model="slider4" :step="10"></el-slider>
				</div>
				<div class="block">
					<span class="demonstration">显示间断点</span>
					<el-slider v-model="slider5" :step="10" show-stops></el-slider>
				</div>
			</div>
			<br /> 带输入框：
			<div>
				<div class="block">
					<el-slider v-model="slider6" show-input>
					</el-slider>
				</div>
			</div>
			<br /> 范围选择：
			<div>
				<div class="block">
					<el-slider v-model="slider7" range show-stops :max="10"></el-slider>
				</div>
			</div>
			<br /> 竖形：
			<div>
				<div class="block">
					<el-slider v-model="slider8" vertical height="200px"></el-slider>
				</div>
			</div>
		</div>
		<div class="onepath">
			<div class="title">TimePicker 时间选择器</div>
			<br /> 固定时间点：
			<div>
				<el-time-select v-model="tp1" :picker-options="{
				    start: '08:30',
				    step: '00:15',
				    end: '18:30'
				  }" placeholder="选择时间">
				</el-time-select>
			</div>
			<br /> 固定时间范围：
			<div>
				<el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
				      start: '08:30',
				      step: '00:15',
				      end: '18:30'
				    }">
				</el-time-select>
				<el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{
				      start: '08:30',
				      step: '00:15',
				      end: '18:30',
				      minTime: startTime
				    }">
				</el-time-select>
			</div>
			<br /> 任意时间点：
			<div>
				<el-time-picker v-model="tp2" :picker-options="{
				      selectableRange: '01:30:00 - 20:30:00'
				    }" placeholder="任意时间点">
				</el-time-picker>
			</div>
			<br /> 任意时间范围：
			<div>
				<el-time-picker is-range v-model="tp3" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
			</div>
		</div>
		<div class="onepath">
			<div class="title">DatePicker 日期选择器</div>
			<br /> 选择日：可通过format设置返回的时间格式
			<div style="display: flex;">
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker v-model="dp1" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">带快捷选项</span>
					<el-date-picker v-model="dp2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
					</el-date-picker>
				</div>
			</div>
			<br /> 选择日期范围:
			<div style="display: flex;">
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker v-model="dp3" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">带快捷选项</span>
					<el-date-picker v-model="dp4" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
					</el-date-picker>
				</div>
			</div>
		</div>
		<div class="onepath">
			<div class="title">DateTimePicker 日期时间选择器</div>
			<br /> 日期和时间点
			<div style="display: flex;">
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker v-model="dtp1" type="datetime" placeholder="选择日期时间">
					</el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">带快捷选项</span>
					<el-date-picker v-model="dtp2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions1">
					</el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">设置默认时间</span>
					<el-date-picker v-model="dtp3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
					</el-date-picker>
				</div>
			</div>
			<br /> 日期和时间范围
			<div style="display: flex;">
				<div class="block">
					<span class="demonstration">默认</span>
					<el-date-picker v-model="dtp4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</div>
				<div class="block">
					<span class="demonstration">带快捷选项</span>
					<el-date-picker v-model="dtp5" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
					</el-date-picker>
				</div>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Rate 评分</div>
			<br /> 基础用法：
			<div>
				<div class="block">
					<span class="demonstration">默认不区分颜色</span>
					<el-rate v-model="rate1" @change='rateChange'></el-rate>
				</div>
				<div class="block">
					<span class="demonstration">区分颜色</span>
					<el-rate v-model="rate2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" @change='rateChange'></el-rate>
				</div>
			</div>
			<br /> 辅助文字：
			<div>
				<el-rate v-model="rate3" show-text :texts="rate3Text"></el-rate>
			</div>
			<br /> 只读：
			<div>
				<el-rate v-model="rate4" disabled show-score text-color="#ff9900" score-template="{value}">
				</el-rate>
			</div>
		</div>
		<div class="onepath">
			<div class="title">颜色选择器</div>
			<br /> 基础用法：
			<div style="display: flex;">
				<div class="block">
					<span class="demonstration">有默认值</span>
					<el-color-picker v-model="color1"></el-color-picker>
				</div>
				<div class="block" style="margin-left: 20px;">
					<span class="demonstration">无默认值</span>
					<el-color-picker v-model="color2"></el-color-picker>
				</div>
			</div>
			<br /> 透明度：
			<div>
				<el-color-picker v-model="color3" show-alpha></el-color-picker>
			</div>
			<br /> 颜色预设：
			<div>
				<el-color-picker v-model="color4" show-alpha :predefine="predefineColors"></el-color-picker>
			</div>
			<br /> 不同尺寸：
			<div style="display: flex;">
				<el-color-picker v-model="color4"></el-color-picker>
				<el-color-picker v-model="color4" size="medium"></el-color-picker>
				<el-color-picker v-model="color4" size="small"></el-color-picker>
				<el-color-picker v-model="color4" size="mini"></el-color-picker>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Transfer 穿梭框</div>
			<br /> 基础用法：
			<div>
				<el-transfer v-model="tran1" :data="data"></el-transfer>
			</div>
			<br /> 可搜索：
			<div>
				<el-transfer filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="tran2" :data="data2"></el-transfer>
			</div>
			<br /> 数据别名：
			<div>
				<el-transfer v-model="tran3" :props="{
				      key: 'value',
				      label: 'desc'
				    }" :data="data3">
				</el-transfer>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "uiform2",
		data() {
			const generateData = _ => {
				const data = [];
				for(let i = 1; i <= 15; i++) {
					data.push({
						key: i,
						label: `备选项 ${ i }`,
						disabled: i % 4 === 0
					});
				}
				return data;
			};
			const generateData2 = _ => {
				const data = [];
				const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
				const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
				cities.forEach((city, index) => {
					data.push({
						label: city,
						key: index,
						pinyin: pinyin[index]
					});
				});
				return data;
			};
			const generateData3 = _ => {
				const data = [];
				for(let i = 1; i <= 15; i++) {
					data.push({
						value: i,
						desc: `备选项 ${ i }`,
						disabled: i % 4 === 0
					});
				}
				return data;
			};
			return {
				options: opts,
				selectedOptions: [],
				selectedOptions2: [],
				options2: [{
					label: '江苏',
					cities: []
				}, {
					label: '浙江',
					cities: []
				}],
				props: {
					value: 'label',
					children: 'cities'
				},
				value2: true,
				value3: true,
				value4: true,
				value5: '100',
				slider2: 20,
				slider3: 30,
				slider4: 40,
				slider5: 50,
				slider6: 60,
				slider7: [4, 8],
				slider8: 70,
				tp1: '',
				startTime: '',
				endTime: '',
				tp2: new Date(2018, 4, 25, 13, 10),
				tp3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				dp1: '',
				dp2: '',
				pickerOptions1,
				pickerOptions2,
				dp3: '',
				dp4: '',
				dtp1: '',
				dtp2: '',
				dtp3: '',
				dtp4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				dtp5: '',
				rate1: null,
				rate2: null,
				rate3: null,
				rate3Text: ['极差', '失望', '一般', '满意', '惊喜'],
				rate4: 3.7,
				color1: '#409EFF',
				color2: '',
				color3: 'rgba(19, 206, 102, 0.8)',
				color4: 'rgba(255, 69, 0, 0.68)',
				predefineColors: [
					'#ff4500',
					'#ff8c00',
					'#ffd700',
					'#90ee90',
					'#00ced1',
					'#1e90ff',
					'#c71585',
					'rgba(255, 69, 0, 0.68)',
					'rgb(255, 120, 0)',
					'hsv(51, 100, 98)',
					'hsva(120, 40, 94, 0.5)',
					'hsl(181, 100%, 37%)',
					'hsla(209, 100%, 56%, 0.73)',
					'#c7158577'
				],
				color4: '#409EFF',
				data: generateData(),
				tran1: [1, 4],
				data2: generateData2(),
				tran2: [],
				data3: generateData3(),
				tran3: []
			};
		},
		methods: {
			filterMethod(query, item) {
				return item.pinyin.indexOf(query) > -1;
			},
			handleChange(value) {
				console.log(value);
			},
			handleItemChange(val) {
				console.log('active item:', val);
				setTimeout(_ => {
					if(val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
						this.options2[0].cities = [{
							label: '南京'
						}];
					} else if(val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
						this.options2[1].cities = [{
							label: '杭州'
						}];
					}
				}, 300);
			},
			formatTooltip(val) {
				return val / 100;
			},
			rateChange(val) {
				console.log(val);
			}
		}
	}

	let opts = [{
		value: 'zhinan',
		disabled: true,
		label: '指南',
		children: [{
			value: 'shejiyuanze',
			label: '设计原则',
			children: [{
				value: 'yizhi',
				label: '一致'
			}, {
				value: 'fankui',
				label: '反馈'
			}, {
				value: 'xiaolv',
				label: '效率'
			}, {
				value: 'kekong',
				label: '可控'
			}]
		}, {
			value: 'daohang',
			label: '导航',
			children: [{
				value: 'cexiangdaohang',
				label: '侧向导航'
			}, {
				value: 'dingbudaohang',
				label: '顶部导航'
			}]
		}]
	}, {
		value: 'zujian',
		label: '组件',
		children: [{
			value: 'basic',
			label: 'Basic',
			children: [{
				value: 'layout',
				label: 'Layout 布局'
			}, {
				value: 'color',
				label: 'Color 色彩'
			}, {
				value: 'typography',
				label: 'Typography 字体'
			}, {
				value: 'icon',
				label: 'Icon 图标'
			}, {
				value: 'button',
				label: 'Button 按钮'
			}]
		}, {
			value: 'form',
			label: 'Form',
			children: [{
				value: 'radio',
				label: 'Radio 单选框'
			}, {
				value: 'checkbox',
				label: 'Checkbox 多选框'
			}, {
				value: 'input',
				label: 'Input 输入框'
			}, {
				value: 'input-number',
				label: 'InputNumber 计数器'
			}, {
				value: 'select',
				label: 'Select 选择器'
			}, {
				value: 'cascader',
				label: 'Cascader 级联选择器'
			}, {
				value: 'switch',
				label: 'Switch 开关'
			}, {
				value: 'slider',
				label: 'Slider 滑块'
			}, {
				value: 'time-picker',
				label: 'TimePicker 时间选择器'
			}, {
				value: 'date-picker',
				label: 'DatePicker 日期选择器'
			}, {
				value: 'datetime-picker',
				label: 'DateTimePicker 日期时间选择器'
			}, {
				value: 'upload',
				label: 'Upload 上传'
			}, {
				value: 'rate',
				label: 'Rate 评分'
			}, {
				value: 'form',
				label: 'Form 表单'
			}]
		}, {
			value: 'data',
			label: 'Data',
			children: [{
				value: 'table',
				label: 'Table 表格'
			}, {
				value: 'tag',
				label: 'Tag 标签'
			}, {
				value: 'progress',
				label: 'Progress 进度条'
			}, {
				value: 'tree',
				label: 'Tree 树形控件'
			}, {
				value: 'pagination',
				label: 'Pagination 分页'
			}, {
				value: 'badge',
				label: 'Badge 标记'
			}]
		}, {
			value: 'notice',
			label: 'Notice',
			children: [{
				value: 'alert',
				label: 'Alert 警告'
			}, {
				value: 'loading',
				label: 'Loading 加载'
			}, {
				value: 'message',
				label: 'Message 消息提示'
			}, {
				value: 'message-box',
				label: 'MessageBox 弹框'
			}, {
				value: 'notification',
				label: 'Notification 通知'
			}]
		}, {
			value: 'navigation',
			label: 'Navigation',
			children: [{
				value: 'menu',
				label: 'NavMenu 导航菜单'
			}, {
				value: 'tabs',
				label: 'Tabs 标签页'
			}, {
				value: 'breadcrumb',
				label: 'Breadcrumb 面包屑'
			}, {
				value: 'dropdown',
				label: 'Dropdown 下拉菜单'
			}, {
				value: 'steps',
				label: 'Steps 步骤条'
			}]
		}, {
			value: 'others',
			label: 'Others',
			children: [{
				value: 'dialog',
				label: 'Dialog 对话框'
			}, {
				value: 'tooltip',
				label: 'Tooltip 文字提示'
			}, {
				value: 'popover',
				label: 'Popover 弹出框'
			}, {
				value: 'card',
				label: 'Card 卡片'
			}, {
				value: 'carousel',
				label: 'Carousel 走马灯'
			}, {
				value: 'collapse',
				label: 'Collapse 折叠面板'
			}]
		}]
	}, {
		value: 'ziyuan',
		label: '资源',
		children: [{
			value: 'axure',
			label: 'Axure Components'
		}, {
			value: 'sketch',
			label: 'Sketch Templates'
		}, {
			value: 'jiaohu',
			label: '组件交互文档'
		}]
	}];

	let pickerOptions1 = {
		disabledDate(time) {
			return time.getTime() > Date.now();
		},
		shortcuts: [{
			text: '今天',
			onClick(picker) {
				picker.$emit('pick', new Date());
			}
		}, {
			text: '昨天',
			onClick(picker) {
				const date = new Date();
				date.setTime(date.getTime() - 3600 * 1000 * 24);
				picker.$emit('pick', date);
			}
		}, {
			text: '一周前',
			onClick(picker) {
				const date = new Date();
				date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
				picker.$emit('pick', date);
			}
		}]
	}

	let pickerOptions2 = {
		shortcuts: [{
			text: '最近一周',
			onClick(picker) {
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
				picker.$emit('pick', [start, end]);
			}
		}, {
			text: '最近一个月',
			onClick(picker) {
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
				picker.$emit('pick', [start, end]);
			}
		}, {
			text: '最近三个月',
			onClick(picker) {
				const end = new Date();
				const start = new Date();
				start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
				picker.$emit('pick', [start, end]);
			}
		}]
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
	
	@import url("//unpkg.com/element-ui@2.3.6/lib/theme-chalk/index.css");
</style>