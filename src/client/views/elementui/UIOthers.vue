<template>
	<div id="uiothers">
		<div class="onepath">
			<div class="title">Dialog 对话框</div>
			<br /> 基础用法：
			<div>
				<el-button type="text" @click="dialogVisible = true">点击打开头尾部居中对齐的 Dialog</el-button>
				<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
					<span>这是一段信息</span>
					<span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible = false">取 消</el-button>
				    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  				</span>
				</el-dialog>
			</div>
			<br /> 自定义内容：
			<div>
				<!-- Table -->
				<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

				<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
					<el-table :data="gridData">
						<el-table-column property="date" label="日期" width="150"></el-table-column>
						<el-table-column property="name" label="姓名" width="200"></el-table-column>
						<el-table-column property="address" label="地址"></el-table-column>
					</el-table>
				</el-dialog>

				<!-- Form -->
				<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
				<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
					<el-form :model="form">
						<el-form-item label="活动名称" :label-width="formLabelWidth">
							<el-input v-model="form.name" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="活动区域" :label-width="formLabelWidth">
							<el-select v-model="form.region" placeholder="请选择活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
					</div>
				</el-dialog>
			</div>
			<br /> 嵌套Dialog
			<div>
				<el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

				<el-dialog title="外层 Dialog" :visible.sync="outerVisible">
					<el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
					</el-dialog>
					<div slot="footer" class="dialog-footer">
						<el-button @click="outerVisible = false">取 消</el-button>
						<el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
					</div>
				</el-dialog>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Tooltip 文字提示</div>
			<br /> 基础用法：
			<div>
				<div class="box">
					<div class="top">
						<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
							<el-button>上边</el-button>
						</el-tooltip>
					</div>
					<div class="left">
						<el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
							<el-button>左边</el-button>
						</el-tooltip>
					</div>

					<div class="right">
						<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
							<el-button>右边</el-button>
						</el-tooltip>
					</div>
					<div class="bottom">
						<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
							<el-button>下边</el-button>
						</el-tooltip>
					</div>
				</div>
			</div>
			<br /> 不同主题：
			<div>
				<el-tooltip content="Top center" placement="top">
					<el-button>Dark</el-button>
				</el-tooltip>
				<el-tooltip content="Bottom center" placement="bottom" effect="light">
					<el-button>Light</el-button>
				</el-tooltip>
			</div>
			<br /> 展示多行文本或者是设置文本内容的格式：
			<div>
				<el-tooltip placement="top">
					<div slot="content">多行信息<br/>第二行信息</div>
					<el-button>Top center</el-button>
				</el-tooltip>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Popover 弹出框</div>
			<br /> 基础用法：
			<div>
				<el-popover ref="popover1" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
				<el-popover ref="popover2" placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"></el-popover>
				<el-button v-popover:popover1>hover 激活</el-button>
				<el-button v-popover:popover2>click 激活</el-button>
				<el-popover placement="right" title="标题" width="200" trigger="focus" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
					<el-button slot="reference">focus 激活</el-button>
				</el-popover>
			</div>
			<br /> 嵌套信息:
			<div>
				<el-popover ref="popover4" placement="right" width="400" trigger="click">
					<el-table :data="gridData">
						<el-table-column width="150" property="date" label="日期"></el-table-column>
						<el-table-column width="100" property="name" label="姓名"></el-table-column>
						<el-table-column width="300" property="address" label="地址"></el-table-column>
					</el-table>
				</el-popover>
				<el-button v-popover:popover4>click 激活</el-button>
			</div>
			<br /> 类Dialog嵌套操作（较轻量）：
			<div>
				<el-popover ref="popover5" placement="top" width="160" v-model="visible2">
					<p>这是一段内容这是一段内容确定删除吗？</p>
					<div style="text-align: right; margin: 0">
						<el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
						<el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
					</div>
				</el-popover>
				<el-button v-popover:popover5>删除</el-button>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Carousel 走马灯</div>
			<br /> 基础用法：
			<div>
				<div class="block" style="width: 500px;">
					<span class="demonstration">默认 Hover 指示器触发</span>
					<el-carousel height="150px">
						<el-carousel-item v-for="item in 4" :key="item">
							<h3>{{ item }}</h3>
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="block" style="width: 500px;">
					<span class="demonstration">Click 指示器触发</span>
					<el-carousel trigger="click" height="150px">
						<el-carousel-item v-for="item in 4" :key="item">
							<h3>{{ item }}</h3>
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<br /> 选项卡外设：(若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏)
			<div class="block" style="width: 500px;">
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="item in 4" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
			</div>
			<br /> 卡片化:
			<div style="width: 500px;">
				<el-carousel :interval="4000" type="card" height="200px">
					<el-carousel-item v-for="item in 6" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Collapse 折叠面板</div>
			<br /> 基础用法：
			<div>
				<el-collapse v-model="activeNames" @change="handleChange">
					<el-collapse-item title="一致性 Consistency" name="1">
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback" name="2">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency" name="3">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability" name="4">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
				</el-collapse>
			</div>
			<br /> 手风琴效果：
			<div>
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item title="一致性 Consistency" name="1">
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback" name="2">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency" name="3">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability" name="4">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
				</el-collapse>
			</div>
			<br /> 自定义效果：
			<div>
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item name="1">
						<template slot="title">
							一致性 Consistency<i class="header-icon el-icon-info"></i>
						</template>
						<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
					</el-collapse-item>
					<el-collapse-item title="反馈 Feedback" name="2">
						<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
					</el-collapse-item>
					<el-collapse-item title="效率 Efficiency" name="3">
						<div>简化流程：设计简洁直观的操作流程；</div>
						<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
					</el-collapse-item>
					<el-collapse-item title="可控 Controllability" name="4">
						<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
					</el-collapse-item>
				</el-collapse>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "uiothers",
		data() {
			return {
				dialogVisible: false,
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
				outerVisible: false,
				innerVisible: false,
				visible2: false,
				activeNames: ['1'],
				activeName: ['3']
			}
		},
		methods: {
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			handleChange(val) {
				console.log(val);
			}
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
	
	.box {
		width: 400px;
		margin-left: 300px;
		.top {
			text-align: center;
		}
		.left {
			float: left;
			width: 60px;
		}
		.right {
			float: right;
			width: 60px;
		}
		.bottom {
			clear: both;
			text-align: center;
		}
		.item {
			margin: 4px;
		}
		.left .el-tooltip__popper,
		.right .el-tooltip__popper {
			padding: 8px 10px;
		}
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>