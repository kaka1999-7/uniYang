<!-- 评论下方工具栏 -->
<template>
	<view class="content">
		<view class="left">
			<image src="../../static/commponents/ico-transmit.png" mode=""></image>
			<image src="../../static/commponents/ico-comment.png" mode=""></image>
			<image v-if="flag" :src="greate" @click="handelGreate" mode=""></image>
		</view>
		<image src="../../static/commponents/ico-more.png" mode=""></image>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				greate:"../../static/commponents/ico-greate.png",
				flag:true
			}
		},
		methods:{
			handelGreate(){
				this.flag=false
				if("../../static/commponents/ico-greate.png"===this.greate){
					this.greate="../../static/commponents/ico-greate-act.png"
				}else{
					this.greate="../../static/commponents/ico-greate.png"
				}
				this.flag=true
			}
		}
	}
</script>

<style scoped>
	.content .left{
		width: 50%;
		display: inline-block;
	}
	.content .left image{
		margin-left: 20%;
	}
	.content .left image:nth-child(1){
		margin-left: 10%;
	}
	.content image{
		width: 40rpx;
		height: 40rpx;
	}
	.content image:nth-child(1){
		width: 35rpx;
		height: 35rpx
	}
	.content>image{
		float: right;
		margin-right: 5%;
	}
</style>