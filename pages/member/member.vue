<template>
	<view class="content">
		<view class="header" @click="toLogin">
			<image :src="loginMes.headUrl"></image>
			<view class="mes" v-if="!loginMes.isLogin">
				<text>请登录/注册</text>
				<text>手机号：***</text>
			</view>
			<view class="mes" v-else>
				<text>{{loginMes.account}}</text>
				<text>身份：{{loginMes.type}}</text>
			</view>
			<text class="trig"></text>
		</view>
		<view class="body">
			<view class="item">
				<image src="../../static/member/order.png" mode=""></image>
				<text>我的预约</text>
				<text></text>
				<text></text>
			</view>
			<view class="item">
				<image src="../../static/member/feedback.png" mode=""></image>
				<text>消息反馈</text>
				<text></text>
				<text></text>
			</view>
			<view class="item">
				<image src="../../static/member/help.png" mode=""></image>
				<text>帮助</text>
				<text></text>
				<text></text>
			</view>
			<view class="item" @click="toSetting">
				<image src="../../static/member/setting.png" mode=""></image>
				<text>设置</text>
				<text></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginMes:{
					isLogin:false
				}
			}
		},
		onShow(){
			uni.getStorage({
				key:"ydy-memberMes"
			}).then(res=>{
				if(res&&res[1]){
					this.loginMes=res[1].data
				}
			})
		},
		methods: {
			toLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			toSetting(){
				
				uni.navigateTo({
					url:'../setting/setting',
					fail() {
						
					}
				})
			}
		}
	}
</script>

<style scoped>
		.content{
			margin: 0 auto;
			background-color: #eeedf1;
		}
		.content .header{
			height: 150rpx;
			background-color: white;
		}
		.content .header image{
			height: 130rpx;
			width: 130rpx;
			float: left;
			margin-top: 10rpx;
			margin-left: 30rpx;
			border-radius: 50%;
		}
		.content .header .mes {
			display: inline-block;
			float: left;
			margin-left: 50rpx;
			margin-top: 30rpx;
			/* border: red solid 1px; */
		}
		.content .header .mes text:nth-child(1){
			display: block;
			font-size: 35rpx;
			font-weight: 30rpx;
			/* border: red solid 1px; */
		}
		.content .header .mes text:nth-child(2){
			display: inline-block;
			font-size: 20rpx;
			color: #C0C0C0;
			margin-top: 10rpx;
		}
		.content .header .trig{
			float: right;
			display: inline-block;
			width: 40rpx;
			height: 40rpx;
			margin-top: 50rpx;
			margin-right: 50rpx;
			border: #999999 8rpx solid;
			border-bottom:transparent 8rpx solid;
			border-left:transparent 8rpx solid;
			border-radius: 10rpx;
			transform: rotateZ(45deg);
		}
		.body{
			margin-top: 50rpx;
			background-color: white;
		}
		.body .item{
			height: 100rpx;
			padding: 0;
		}
		.body .item image{
			float: left;
			margin-top: 10rpx;
			width: 80rpx;
			height: 80rpx;
		}
		.body .item text{
			float: left;
			margin-left: 40rpx;
			margin-top: 25rpx;
		}
		.body .item text:nth-of-type(2){    //小三角
			float: right;
			display: inline-block;
			width: 20rpx;
			height: 20rpx;
			margin-top: 30rpx;
			margin-right: 50rpx;
			border: #999999 8rpx solid;
			border-bottom:transparent 8rpx solid;
			border-left:transparent 8rpx solid;
			border-radius: 10rpx;
			transform: rotateZ(45deg);
		}
		.body .item text:nth-of-type(3){
			display: block;
			width: 100%;
			height: 1rpx;
			background-color: #C0C0C0;
			margin-left: 100rpx;
		}
</style>
