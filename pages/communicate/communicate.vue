<template>
	<view class="container">
		<view class="cancel-scroll">
			<view class="content">
				<view class="mes-item">
					<image src="../../static/logo.png" mode=""></image>
					<span>
						sdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafasdfaadafafafafa
					</span>
				</view>
				<view class="mes-item me">
					<image src="../../static/person/head2.webp" mode=""></image>
					<span>
						大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发
					</span>
				</view>
				<view class="mes-item">
					<image src="../../static/logo.png" mode=""></image>
					<span>
						大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发
					</span>
				</view>
				<view class="mes-item me">
					<image src="../../static/person/head2.webp" mode=""></image>
					<span>
						大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发大大发啊发发发发发发发发发
					</span>
				</view>
			</view>
		</view>
		<view class="input-box">
			<uni-easyinput type="textarea" maxlength="-1"  suffixIcon="paperplane-filled" @iconClick="sendMes" v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aimMes:{
					name:"kaka",
					account:"member100",
					headUrl:"../../static/login/weibo.png",
					mes:[
						{
							id:"mes1",
							text:"你好啊！",
							from:"adverse"
						},
						{
							id:"mes2",
							text:"我很好啊！",
							from:'me'
						}
					]
				},
				value:"",
				messageList:[{
					account:"member001",
					headUrl:"../../static/login/weibo.png",
					name:"【每日推送】",
					tittle:"不得不工作的意义到底是啥？",
					lastTime:"晚上 8:00"
				}]
			}
		},
		onLoad(option) {
			// this.aimMes=option
			// console.log(option)
			uni.setNavigationBarTitle({
				title:this.aimMes.name
			})
			uni.getStorage({
				key:"ydy-memberMes"
			}).then(res=>{
				if(res&&res[1]){
					console.log(res[1].data)
				}
			})
		},
		methods: {
			sendMes(){
				
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 100%;
		min-height: 100vh;
		position: relative;
		background-color: #fafafa;
	}
	.input-box{
		width: 100%;
		position: fixed;
		bottom: 2rpx;
	}
	.input-box uni-easyinput{
		padding-left: 15rpx;	
	}
	.content{
		margin: 10rpx;
		margin-bottom: 25%;
		position: relative;
		/* border: 1rpx solid red; */
		padding: 10rpx;
		overflow-y: auto;
	}
	.cancel-scroll {
		overflow: hidden;
	}
	/* {
		content: "";
		position: absolute;
		width: 20rpx;
		height: 100%;
		top: 0;
		right: -10rpx;
		background-color: #fff;
		z-index: 100000000;
	} */
	.content .mes-item{
		width: 100%;
		margin-top: 20rpx;
		overflow: hidden;
	}
	.content .mes-item:nth-child(n+2){
		margin-top: 30rpx;
	}
	.content .mes-item image{
		width: 70rpx;
		height: 70rpx;
		float: left;
	}
	.content .mes-item span{
		float: left;
		width: 70%;
		margin-left: 15rpx;
		padding: 20rpx;
		word-wrap: break-word;
		background-color: #ffffff;
	}
	.content .me image{
		float: right;
	}
	.content .me span{
		float: right;
		margin-right: 15rpx;
	}
</style>
