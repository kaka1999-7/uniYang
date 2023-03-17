<template>
	<view class="container">
		<view class="cancel-scroll">
			<view class="content">
				<view class="mes-item" :class="{me:item.from==='me'}" v-for="item in aimMes.mes" :key="item.id" >
					<image :src="item.headUrl" mode=""></image>
					<span>
						{{item.text}}
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
				},
				value:"",
				messageList:[{
					account:"member001",
					picture:"../../static/person/1.jpg",
					name:"【每日推送】",
					tittle:"不得不工作的意义到底是啥？",
					lastTime:"晚上 8:00",
					mes:[
						{
							id:"mes1",
							text:"你好啊！",
							from:"adverse",
							headUrl:"../../static/person/1.jpg",
						},
						{
							id:"mes2",
							text:"我很好啊！",
							from:'me',
							headUrl:"../../static/person/head2.webp",
						},
						{
							id:"mes3",
							text:"牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙",
							from:'adverse',
							headUrl:"../../static/person/1.jpg",
						},
						{
							id:"mes4",
							text:"你也牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙牛蛙",
							from:'me',
							headUrl:"../../static/person/head2.webp",
						}
					]
				},
				{
					account:"member002",
					picture:"../../static/person/head1.jpg",
					name:"杨大爷的qq",
					tittle:"为了干饭啊",
					lastTime:"晚上 12:00",
					mes:[
						{
							id:"mes1",
							text:"哈哈哈！",
							from:"adverse",
							headUrl:"../../static/person/head1.jpg",
						},
						{
							id:"mes2",
							text:"哈哈哈哈哈哈哈哈哈哈哈哈！",
							from:'me',
							headUrl:"../../static/person/head2.webp",
						},
						{
							id:"mes3",
							text:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
							from:'adverse',
							headUrl:"../../static/person/head1.jpg",
						},
						{
							id:"mes4",
							text:"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
							from:'me',
							headUrl:"../../static/person/head2.webp",
						}
					]
				},
				{
					account:"member003",
					picture:"../../static/person/head3.webp",
					name:"杨大爷的微信",
					tittle:"为了玩啊",
					lastTime:"晚上 11:00",
					mes:[
						{
							id:"mes1",
							text:"呵呵！",
							from:"adverse",
							headUrl:"../../static/person/head3.webp",
						},
						{
							id:"mes2",
							text:"呵呵呵呵呵呵呵呵呵呵！",
							from:'me',
							headUrl:"../../static/person/head2.webp",
						},
						{
							id:"mes3",
							text:"呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵",
							from:'adverse',
							headUrl:"../../static/person/head3.webp",
						},
						{
							id:"mes4",
							text:"呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵",
							from:'me',
							headUrl:"../../static/person/head2.webp",
						}
					]
				}]
			}
		},
		onLoad(option) {
			// this.aimMes=option
			// console.log(option)
			this.messageList.forEach(el=>{
				if(el.account===option.account){
					this.aimMes=el
				}
			})
			// this.aimMes=this.aimMes?this.messageList[0]:this.aimMes
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
