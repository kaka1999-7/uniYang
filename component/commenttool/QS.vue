<!-- 问答评论组件 -->
<template>
	<view class="card">
		<span class="question">{{qs.question}}</span>
		<view class="answer_person">
			<image :src="qs.headImg" mode="aspectFill"></image>
			<span>{{qs.name}}</span>
			<span class="tag">{{qs.tag}}</span>
		</view>
		<span class="answer">{{qs.answer}}</span>
		<commenttool></commenttool>
	</view>
	
</template>

<script>
	import commenttool from './commenttool.vue';
	export default{
		data(){
			return {
				
			}
		},
		props:{
			qs:{
				require:true,
				type:Object
			}
		},
		components:{
			commenttool
		}
	}
</script>

<style scoped> 
	.card{
		margin: 20rpx 10rpx 10rpx 20rpx;
		background-color: #f5f5f5;
		box-shadow: 3rpx 3rpx 10rpx gray;
		padding: 20rpx 0 0 20rpx;
	}
	.card .question{
		font-size: 30rpx;
		font-weight: 600;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical
	}
	.card .question::before{
		content: "问";
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
		color: white;
		text-align: center;
		line-height: 50rpx;
		border-radius: 5rpx;
		background-image: linear-gradient(to right bottom,#db99dd,#9ca3dd 60%);
	}
	.answer_person {
		margin: 30rpx 0;
		font-size: 20rpx;	
	}
	.answer_person image{
		width: 30rpx;
		height: 30rpx;
		position: relative;
		top: 5rpx;
		margin-right: 10rpx;
		border-radius: 50%;
	}
	.answer_person .tag {
		display: inline-block;
		padding: 0rpx 10rpx;
		margin-right: 10rpx;
		font-size: 20rpx;
		transform: scale(.8);
	}
	.answer_person .tag{
		color:#40bcff ;
		background-color: #ceeeff;
		border-radius: 15rpx;
	}
	.answer{
		font-size: 20rpx;
		margin-bottom: 30rpx;
		color: #707070;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical
	}
	.answer::before{
		content: "答";
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
		color: white;
		text-align: center;
		line-height: 30rpx;
		border-radius: 5rpx;
		background-image: linear-gradient(to right bottom,#a9dd9a,#ddbd3c 70%);
	}
</style>