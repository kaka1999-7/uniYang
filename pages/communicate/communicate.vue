<template>
	<view class="container">
		<view class="cancel-scroll" >
			<!-- <view class="content" id="content" ref="abc">
				<view class="mes-item" :class="{me:item.from===myAccount.account}" v-for="item in aimMes.mes" :key="item.id" >
					<image :src="item.headUrl" mode=""></image>
					<span>
						{{item.text}}
					</span>
				</view>
			</view> -->
			<scroll-view class="content" :scroll-top="scrollTop" :show-scrollbar="false" scroll-y="true" >
				<view class="mes-item" :class="{me:item.from===myAccount.account}" v-for="item in aimMes.mes" :key="item.id" >
					<image :src="item.headUrl" mode=""></image>
					<span>
						{{item.text}}
					</span>
				</view>
			</scroll-view>
		</view>
		<view class="input-box">
			<uni-easyinput type="textarea" maxlength="-1"  suffixIcon="paperplane-filled" @iconClick="sendMes" v-model="value" placeholder="请输入内容"></uni-easyinput>
		</view>
	</view>
</template>

<script>
	import uuid from 'uuid'
	export default {
		data() {
			return {
				scrollTop:0,
				aimMes:{
					name:"kaka",
					account:"member100",
				},
				aimAccount:"",
				myAccount:{},
				value:"",
				platform:"",
				wsIsReady:false,
				ws:{},
				websoketIsReady:false,
				messageList:[]
				}
		},
		onLoad(option) {
			// 回滚到聊天底部
			setTimeout(()=>{this.scrollTop=50000},600)
			// 进入页面打开soket
			if(uni.getSystemInfoSync().platform==='devtools'){
				this.platform=uni.getSystemInfoSync().platform
			uni.connectSocket({
				url:'ws://localhost:8787',
				
			})
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！');
			 
			});
			uni.onSocketClose(function (res) {
			  console.log('WebSocket 已关闭！');
			});
			uni.onSocketMessage((res)=>{
				let data=JSON.parse(res.data)
				this.aimMes.mes.push(data)
				setTimeout(()=>{this.scrollTop+=10},600)
			});
			
			}else{    //其他平台使用原生websocket
				var ws = new WebSocket('ws://localhost:8787');
				this.ws=ws
				ws.onopen = (e)=>{
					this.wsIsReady=true
				    console.log("连接服务器成功");
				}
				 ws.onmessage=(res)=>{
					 let data=JSON.parse(res.data)
					 this.aimMes.mes.push(data)
					 setTimeout(()=>{this.scrollTop+=10},600)
				 }
				 ws.onclose = (e)=>{
				     console.log("服务器关闭");
				 }
				 
				 ws.onerror = function(){
				     console.log("连接出错");
				 }
				 
			}
			this.aimAccount=option.account
			
			
			// this.aimMes=this.aimMes?this.messageList[0]:this.aimMes
			this.$nextTick(e=>{
				uni.setNavigationBarTitle({
					title:this.aimMes.name
				})
				// 链接websocket
				if(this.platform==='devtools')
				{
					uni.sendSocketMessage({
						data:this.myAccount.account,
					})
				}else{
					 // 请求注册链接
					 let interval=setInterval(()=>{
						console.log(this.wsIsReady)
						 if(this.wsIsReady){
							 this.ws.send(this.myAccount.account);
							 clearInterval(interval)
						 }
					 },500)
				}
			})
			uni.getStorage({
				key:"ydy-memberMes"
			}).then(res=>{
				if(res&&res[1]){
					this.myAccount=res[1].data
					uni.request({		//请求数据
						url:this.baseUrl+"communicate",
						data:{
							account:res[1].data.account,
							aimAccount:option.account
						}
					}).then(res=>{
						if(res[1]&&res[1].data){
							this.aimMes=res[1].data
						}
					})
					
				}
			})
		},
		// 退出聊天关闭soket
		beforeDestroy() {
			uni.closeSocket();
			if(this.wsIsReady){
				this.ws.close()
				this.wsIsReady=false
			}
		},
		methods: {
			// 发送消息
			sendMes(){
				let id=uuid.v1()
				let data={
					id,
					text:this.value,
					from:this.myAccount.account,
					headUrl:this.myAccount.headUrl
				}
				this.aimMes.mes.push(data)
				// console.log(this.aimAccount)
				let sendMes={
					data,
					aimAccount:this.aimAccount
				}
				this.value=""
				if(this.platform==='devtools'){
					uni.sendSocketMessage({
					data:JSON.stringify(sendMes)
				})
				}else{
					this.ws.send(JSON.stringify(sendMes))
				}
				setTimeout(()=>{this.scrollTop+=10},600)
			}
		}
	}
</script>

<style scoped>
	/* */
	.container{
		width: 100%;
		min-height: 100vh;
		position: relative;
		background-color: #fafafa;
	}
	.input-box{
		/* border: 1rpx solid red; */
		height: 16vh;
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
		box-sizing: border-box;
		position: relative;
		height: 84vh;
		left: -10rpx;
		/* border: 1rpx solid red; */
		padding: 10rpx 15rpx;
		/* border: 1rpx chocolate solid; */
		/* overflow-y: auto; */
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
		max-width: 70%;
		margin-left: 15rpx;
		padding: 20rpx;
		word-wrap: break-word;
		border-radius: 10rpx;
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
