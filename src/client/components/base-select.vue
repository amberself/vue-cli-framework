<template>
	<div class="base-select">
		<div :class="{selectBox:true,selectFocus:inFocus}">
			<div class="selectInput" @click="selectClickHandle">
				<input v-model="inputModel" type="text" autocomplete="off" :placeholder="placeholderStr" readonly="readonly" @blur="selectBlurHandle" value="" />
				<div class="selectIcon">
					<i><img src="../assets/img/base-select.png" /></i>
				</div>
			</div>
		</div>
		<div v-if="contentDisplay" :class="[{selectContent:true} , contentVisible ? {opacity1:true} : {opacity0:true}]">
			<ul>
				<li :class="{itemSelected : itemSelectedClass(item.id)}" v-for="item in opts" :id="item.id" @click="itemSelectedHandle">{{item.value}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BaseSelect",
		data() {
			return {
				id: "",
				inputModel: "",
				contentVisible: false,
				inFocus: false,
				contentDisplay: false
			}
		},
		props: {
			opts: {
				type: Array,
				default: {}
			},
			placeholderStr: {
				type: String,
				default: "请选择"
			}
		},
		methods: {
			selectClickHandle() {
				if(this.contentVisible) {
					this.contentVisible = false;
				} else {
					this.contentVisible = true;
				}
			},
			selectBlurHandle() {
				if(this.contentVisible) {
					let _this = this;
					_this.contentVisible = false;
				}
			},
			itemSelectedHandle(el) {
				this.contentVisible = false;
				this.inputModel = el.target.innerText;
				this.id = el.target.id;
				this.$emit('disp-selectCallBack', this.id);
			},
			itemSelectedClass(itemID) {
				let selected = false;
				if(itemID == this.id) {
					selected = true;
				}
				return selected;
			}
		},
		watch: {
			contentVisible(val) {
				let _this = this;
				if(val) {
					this.inFocus = true;
					_this.contentDisplay = true;
				} else {
					this.inFocus = false;
					setTimeout(function() {
						_this.contentDisplay = false;
					}, 300)
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.base-select {
		position: relative;
	}
	
	.selectBox {
		width: 100%;
		height: 40px;
		border: solid 1px #DCDFE6;
		border-radius: 5px;
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		.selectInput {
			display: block;
			position: relative;
			width: 100%;
			font-size: 14px;
			cursor: pointer;
			input {
				position: relative;
				width: 97%;
				height: 34px;
				border: none;
				padding-left: 3%;
				font-size: 16px;
				margin-top: 2px;
				cursor: pointer;
				overflow: hidden;
			}
			.selectIcon {
				position: absolute;
				top: 0px;
				right: 2px;
				pointer-events: none;
				background-color: white;
				width: 22px;
				height: 40px;
				i {
					margin-left: -5px;
					display: block;
					margin-top: 10px;
				}
			}
		}
	}
	
	.selectFocus {
		border-color: #409EFF;
	}
	
	.selectContent {
		z-index: 10000;
		position: absolute;
		background-color: white;
		margin-top: 2px;
		width: 100%;
		max-height: 300px;
		border: solid 1px #DCDFE6;
		border-radius: 5px;
		box-shadow: 0px 0px 2px gray;
		overflow-y: auto;
		transition: opacity .3s linear;
		ul {
			list-style: none;
			padding: 6px 0;
			margin: 0;
			box-sizing: border-box;
			li {
				font-size: 16px;
				padding: 0 15px;
				position: relative;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #606266;
				height: 34px;
				line-height: 34px;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				cursor: pointer;
			}
			li:hover {
				background-color: #F5F7FA;
			}
		}
	}
	
	.opacity0 {
		opacity: 0;
	}
	
	.opacity1 {
		opacity: 1;
	}
	
	.itemSelected {
		background-color: #F5F7FA;
	}
</style>