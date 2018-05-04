<template>
	<div class="global-confirm">
		<div class="confirm-layer"></div>
		<div class="confirm-box">
			<div class="title">
				<div class="title-name">提示</div>
				<div class="close-icon">X</div>
			</div>
			<div class="message">是否要删除?</div>
			<div class="btn">
				<div class="btn-clean">取消</div>
				<div class="btn-ok">确定</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GlobalConfirm",
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.confirm-layer {
		position: fixed;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    opacity: 0.5;
	    background: #000;
	    z-index: 2000;
	}
	
	.confirm-box {
		position: fixed;
	    top: 220px;
	    left: 0;
	    right: 0;
	    width: 420px;
	    background-color: #fff;
	    margin: auto;
	    border-radius: 4px;
	    border: 1px solid #ebeef5;
	    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
	    text-align: left;
	    overflow: hidden;
	    z-index: 3000;
	    .title{
	    	position: relative;
		    display: flex;
		    height: 39px;
		    padding-top: 10px;
		    .title-name{
		        font-size: 17px;
    			margin-left: 10px;
		    }
		    .close-icon{
		    	width: 20px;
			    margin-left: 334px;
			    cursor: pointer;
			    height: 24px;
			    padding-left: 10px;
			    background-color: #dcdfe6;
		    }
	    }
	    .message{
	    	margin-left: 44px;
		    width: 333px;
		    font-size: 14px;
	    }
	    .btn{
	    	position: relative;
		    display: flex;
		    margin-top: 30px;
		    margin-bottom: 20px;
		    .btn-clean{
		    	border: 1px solid #d7d0d0;
			    width: 50px;
			    font-size: 14px;
			    text-align: center;
			    padding-top: 5px;
			    padding-bottom: 5px;
			    border-radius: 5px;
			    cursor: pointer;
			    margin-left: 292px;
		    }
		    .btn-ok{
		    	border: 1px solid #d7d0d0;
			    width: 50px;
			    font-size: 14px;
			    text-align: center;
			    padding-top: 5px;
			    padding-bottom: 5px;
			    border-radius: 5px;
			    margin-left: 8px;
			    background-color: #409eff;
			    color: white;
			    cursor: pointer;
		    }
	    }
	}
</style>