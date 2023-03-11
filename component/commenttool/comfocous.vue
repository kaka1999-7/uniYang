<!-- 关注评论组件 -->
<template>
	<view class="card">
		<view class="head">
			<image :src="person.imgHead" class="headpct" mode="scaleToFill"></image>
			<span>{{person.name}}</span>
			<view class="tag">
				<span v-for="item in person.tags" :key="item.id">{{item.tittle}}</span>
			</view>
		</view>
		<view class="comment">
			<span class="text" :class="{notShowAll:!isShowAll}">{{person.coment}}</span>
			<span class="showallbtn" @click="ckShowAll()">全部</span>
			<image v-for="item in person.imgUrl" :src="item.url" :key="item.id" class="compct" mode="aspectFill"></image>
		</view>
		<view class="label">
			<span><image src="../../static/commponents/ico-label.png" alt=""></image> 我的日记</span>
			<span>{{person.time}}</span>
		</view>
		<commenttool></commenttool>
	</view>
</template> 

<script>
	import commenttool from './commenttool.vue';
	export default {
		data(){
			return{
				isShowAll:false
				}
		},
		props:{
			person:{
				require:true,
				type:Object,
			}
		},
		methods:{
			ckShowAll(){
				// this.person.showAll=!this.person.showAll
				this.isShowAll=!this.isShowAll
			}
		},
		components:{
			commenttool,
		}
	}
</script >

<style scoped>
	.card{
		margin: 20rpx 10rpx 10rpx 20rpx;
		background-color: #f5f5f5;
		box-shadow: 3rpx 3rpx 10rpx gray;
		padding: 20rpx 0 0 20rpx;
	}
	.head{
		position: relative;
		padding-left: 80rpx;
		min-height: 80rpx;
		display: flex;
		flex-direction: column;
	}
	.card .head .headpct{
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		left: 0;
		top: 0;
		border-radius: 50%;
	}
	.head>span{
		font-size: 25rpx;
		font-weight: 600;
		flex: 2;
	}
	.head .tag {
		flex: 1;
		display: inline-block;
		font-size: 15rpx;
		font-weight: 600;
		float: left;
	}
	.head .tag span{
		display: inline-block;
		padding: 0rpx 10rpx;
		margin-right: 10rpx;
	}
	.head .tag span:nth-child(2n+1){
		color:#40bcff ;
		background-color: #ceeeff;
		border-radius: 15rpx;
	}
	.head .tag span:nth-child(2n){
		color: #ff5821;
		background-color: #ffd7ce;
		border-radius: 15rpx;
	}
	.comment{
		margin: 30rpx 10rpx;
	}
	
	.comment span{
		display:inline-block;
		color: #616161;
		font-size: 30rxp;
		font-weight: 300;
		overflow: hidden;
		word-wrap: break-word;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 111;
		-webkit-box-orient: vertical
		
	}
	.comment .text{
		// line-height: 40rpx;
		// height: 120rpx;
	}
	.comment .notShowAll{
		-webkit-line-clamp: 3;
	}
	.comment .showallbtn{
		font-size: 30rxp;
		color: #40bcff;
		margin-top: 10rpx;
		margin-left: 30rpx;
	}
	.comment .compct{
		display: inline-block;
		margin-top: 20rpx;
		width: 200rpx;
		height:  200rpx;
	}
	.label{ 
		
	}
	.label span:nth-of-type(1){
		display: inline-block;
		width: auto;
		color: #459bdd;
		line-height: 40rpx;
		text-align: center;
		padding: 0rpx 15rpx;
		font-size: 20rpx;
		border-radius: 25rpx;
		background-image: linear-gradient(to right bottom,#99f5ff,#d7fff0 60%);
	}
	.label span:nth-of-type(1) image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
		position: relative;
		bottom: -8rpx;
	}
	.label span:nth-of-type(2){
		display: block;
		margin:20rpx 20rpx 20rpx 20rpx;
		color: gray;
		font-size: 18rpx;
	}
</style>
