<!-- 医师列表信息卡片 -->
<template>
	<view class="person-list">
		<view class="card">
			<image class="doctor-pct" :src="person.headUrl" mode=""></image>
			<view class="info">
				<view class="first-row">
					<span>{{person.name}}</span>
					<span>{{person.experienc}}</span>
					<span>￥{{person.price}}</span>
				</view>
				<view class="second-row">
					<span>{{person.level}}</span>
				</view>
				<view class="third-row">
					<span>{{person.tags}}</span>
					<span><uni-icons type="location-filled" color="#7e7e7e" size="10"></uni-icons>{{person.location}}</span>
				</view>
				<view class="forth-row">
					<span v-for="item in person.activities" :key="item.id">{{item.tittle}}</span>
				</view>
			</view>
			<view class="comment">
				<view class="tittle">
					<image src="../../static/member/help.png" mode=""></image>
					<span>来访者评价</span>
				</view>
				<view class="content">
					<image src="../../static/commponents/ico-quotation.png" mode=""></image>
					<span>
					{{person.comment}}
					</span>
				</view>
			</view>
		</view>
		<view class="hr"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			person:{
				// require:true,
				// type:Object
			}
		}
	}
</script>

<style scoped>
	.person-list{
		margin-top: 30rpx;
		font-size: 30rpx;
		padding-bottom: 20rpx;
		position: relative;
	}
	.card .doctor-pct{
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		position: absolute;
	}
	.card .info{
		margin-left: 100rpx;
	}
	
	.card .info .first-row span:nth-child(1){
		font-weight: 600;
	}
	.card .info .first-row span:nth-child(2){
		margin-left: 15rpx;
		font-size: 18rpx;
	}
	.card .info .first-row span:nth-child(3){
		float: right;
		font-weight: 600;
		color: #3c69ff;
		margin-right: 10rpx;
	}
	.card .info .second-row{
		margin-top: 10rpx;
		font-size: 20rpx;
		color: #737373;
	}
	.card .info .third-row span:nth-child(1){
		margin-top: 15rpx;
		padding: 0 10rpx;
		font-size: 20rpx;
		color: #212121;
		border-radius: 5rpx;
		background-color: #ccd0e6;
	}
	.card .info .third-row span:nth-child(2){
		float: right;
		font-size: 18rpx;
		color: #7e7e7e;
	}
	.card .info .forth-row span{
		display: inline-block;
		margin: 15rpx 10rpx 10rpx 0;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #ffaa00;
		border: 1.5rpx solid #ffaa00;
		border-radius: 7rpx;
	}
	.comment .tittle{
		position: absolute;
		margin-top: 20rpx;
	}
	.comment .tittle image{
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		border-radius: 50%;
		top:10rpx;
		left: 15rpx;
	}
	.comment .tittle span{
		font-size: 25rpx;
		margin-left: 55rpx;
	}
	.comment .content{
		position: relative;
		padding-left: 30rpx;
		padding-top: 70rpx;
		font-size: 20rpx;
		color: #737373;
		text-indent: 10rpx;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical
	}
	.comment .content::before{
		content: "";
		display: inline-block;
		width: 1rem;
	}
	.comment .content image{
		position: absolute;
		left: 40rpx;
		top:65rpx;
		width: 30rpx;
		height: 30rpx;
	}
	.hr{
		width: 100%;
		position: absolute;
		bottom: 3rpx;
		border-bottom: 1rpx solid #d4d4d4;
	}
</style>