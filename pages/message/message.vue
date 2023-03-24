<template>
	<view class="container">
		<view class="item" v-for="item in messageList" :key="item.account"
			@click="toCommunicate(item.account,item.name)">
			<view class="picture">
				<image :src="item.picture" mode=""></image>
			</view>
			<view class="tittle">
				<text>{{item.name}}</text>
				<text>{{item.tittle}}</text>
			</view>
			<view class="time">
				<text>{{item.lastTime}}</text>
			</view>
			<view class="hr"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageList: []
			}
		},
		created() {
			
		},
		onShow() {
			uni.getStorage({
				key: "ydy-memberMes"
			}).then(res => {
				if (res && res[1]) {
					uni.request({
						url: this.baseUrl + 'message/simplelist',
						data:{
							account: res[1].data.account
						}
					}).then(res => {
						if (res[1] && res[1].data) {
							this.messageList = res[1].data
						}
					})
			
				}
			})
			
		},
		methods: {
			toCommunicate(account, name) {
				uni.navigateTo({
					url: `/pages/communicate/communicate?account=${account}&name=${name}`
				})
			}
		}
	}
</script>

<style scoped>
	.container .item {
		display: flex;
		height: 150rpx;
		position: relative;
	}

	.item .hr {
		position: absolute;
		left: 20%;
		top: 100%;
		width: 80%;
		height: 0;
		border: #bababa .5rpx solid;
	}

	.item view:nth-child(2) {
		width: 60%;
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 20rpx;
	}

	.item view:nth-child(1),
	.item view:nth-child(3) {
		flex: 1;
		position: relative;
	}

	.item .picture image {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100rpx;
		height: 100rpx;
	}

	.item .tittle text:nth-child(1) {
		font-weight: 20rpx;
		color: black;
	}

	.item .tittle text:nth-child(2) {
		font-size: 25rpx;
		color: #bababa;
		display: inline-block;
		widows: 80%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item .time text {
		display: inline-block;
		font-size: 15rpx;
		margin-top: 20rpx;
		margin-left: 5rpx;
		color: #bababa;
	}
</style>
