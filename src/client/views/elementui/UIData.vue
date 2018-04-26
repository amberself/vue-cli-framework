<template>
	<div id="uidata">
		<div class="onepath">
			<div class="title">Tag标签</div>
			<br /> 基础用法：
			<div>
				<el-tag id="tag1">标签一</el-tag>
				<el-tag id="tag2" type="success">标签二</el-tag>
				<el-tag id="tag3" type="info">标签三</el-tag>
				<el-tag id="tag4" type="warning">标签四</el-tag>
				<el-tag id="tag5" type="danger" closable @close="closeTag">标签五</el-tag>
			</div>
			<br /> 动态编辑标签：
			<div>
				<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
					{{tag}}
				</el-tag>
				<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
				</el-input>
				<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
			</div>
			<br /> 不同尺寸：
			<div>
				<el-tag closable>默认标签</el-tag>
				<el-tag size="medium" closable>中等标签</el-tag>
				<el-tag size="small" closable>小型标签</el-tag>
				<el-tag size="mini" closable>超小标签</el-tag>
			</div>
		</div>
		<div class="onepath">
			<div class="title">progress进度条</div>
			<br /> 线形进度条 — 百分比外显：
			<div>
				<el-progress :percentage="0"></el-progress>
				<el-progress :percentage="70"></el-progress>
				<el-progress :percentage="80" color="#8e71c7"></el-progress>
				<el-progress :percentage="100" status="success"></el-progress>
				<el-progress :percentage="50" status="exception"></el-progress>
			</div>
			<br /> 线形进度条 — 百分比内显：
			<div>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
				<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
			</div>
			<br /> 环形进度条：
			<div>
				<el-progress type="circle" :percentage="0"></el-progress>
				<el-progress type="circle" :percentage="25"></el-progress>
				<el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
				<el-progress type="circle" :percentage="100" status="success"></el-progress>
				<el-progress type="circle" :percentage="50" status="exception"></el-progress>
			</div>
		</div>
		<div class="onepath">
			<div class="title">pagination 分页</div>
			<br /> 基础用法：
			<div>
				<div class="block">
					<span class="demonstration">页数较少时的效果</span>
					<el-pagination layout="prev, pager, next" :total="50"></el-pagination>
				</div>
				<div class="block">
					<span class="demonstration">大于 7 页时的效果</span>
					<el-pagination layout="prev, pager, next" :total="1000" @current-change="handleCurrentChange" @prev-click="handlePrevClick" @next-click="handleNextClick"></el-pagination>
				</div>
			</div>
			<br /> 设置最大页码按钮数：
			<!-- 显示 :total/:page-size 页/条数据 ， 每次跳5条 , 默认每页10条数据-->
			<div>
				<el-pagination :page-size="10" :pager-count="5" layout="prev, pager, next" :total="1000"></el-pagination>
			</div>
			<br /> 带有背景色的分页：
			<div>
				<el-pagination background layout="prev, pager, next" :page-size="1" :total="100"></el-pagination>
			</div>
			<br /> 附加功能:
			<div>
				<!--layout 指定需要显示的布局界面  -->
				<div class="block">
					<span class="demonstration">完整功能</span>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="5" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400"></el-pagination>
				</div>
			</div>
		</div>
		<div class="onepath">
			<div class="title">Badge 标记</div>
			<br /> 基础用法：
			<div style="margin-top: 20px;">
				<el-badge :value="12" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
			</div>
			<br /> 定义最大值：
			<div style="margin-top: 20px;">
				<el-badge :value="200" :max="99" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
			</div>
			<br /> 自定义内容：
			<div style="margin-top: 20px;">
				<el-badge value="new" class="item">
					<el-button size="small">评论</el-button>
				</el-badge>
			</div>
			<br /> 小红点：
			<div style="margin-top: 20px;">
				<el-badge is-dot class="item">数据查询</el-badge>
				<el-badge is-dot class="item" style="margin-left: 20px;">
					<el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
				</el-badge>
			</div>
		</div>

		<div class="onepath">
			<div class="title">Tree 树形控件</div>
			<br /> 基础用法：
			<div>
					
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "uidata",
		data() {
			return {
				dynamicTags: ['标签一', '标签二', '标签三'],
				inputVisible: false,
				inputValue: ''
			}
		},
		methods: {
			closeTag(e) {
				e.srcElement.parentElement.remove();
			},
			handleClose(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				let inputValue = this.inputValue;
				if(inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			handlePrevClick(val) {
				console.log(`上一页: ${val}`);
			},
			handleNextClick(val) {
				console.log(`下一页: ${val}`);
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
	/*Tag标签*/
	
	.el-tag+.el-tag {
		margin-left: 10px;
	}
	
	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}
	
	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
</style>