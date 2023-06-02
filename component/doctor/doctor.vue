<template>
	<view class="container">
		<view class="head item" @click="upLoadImg">
			<span>头像</span>
			<image :src="info.imgUrl" mode=""></image>
		</view>
		<view class="item">
			<span>昵称</span>
			<uni-easyinput class="" trim="all" clearSize='0' placeholder="请输入昵称" v-model="info.name">
			</uni-easyinput>
		</view>
		<view class="item sex">
			<span>性别</span>
			<uni-data-select v-model="info.sex" :localdata="[{value:0,text:'女'},{value:1,text:'男'}]"></uni-data-select>
		</view>
		<view class="item">
			<span>城市</span>
			<uni-easyinput class="" trim="all" clearSize='0' placeholder="请输入省市区" v-model="info.city">
			</uni-easyinput>
		</view>
		<view class="item">
			<span>生日</span>
			<uni-datetime-picker type="date" :value="info.birthDay" start="1950-1-1" :end="Date.now() + 1000000000" />
		</view>
		<view class="item">
			<span>技能/职称荣誉</span>
			<view class="level" v-for="(item,index) in info.level" :key="item.id">
				{{item.text}}
				<span @click="del(index,info.level)">X</span>
			</view>
			<uni-easyinput class="add" trim="all" v-model="tempLevel" clearSize='0' @confirm="add(info.level,'level')"
				placeholder="添加,按回车键结束">
			</uni-easyinput>
		</view>
		<view class="item">
			<span>擅长领域</span>
			<view class="level" v-for="(item,index) in info.tags" :key="item.id">
				{{item.text}}
				<span @click="del(index,info.tags)">X</span>
			</view>
			<uni-easyinput class="add" trim="all" v-model="tempTag" clearSize='0' @confirm="add(info.tags)"
				placeholder="添加,按回车键结束">
			</uni-easyinput>
		</view>
		<view class="item">
			<span>时间设置</span>
			<view class="date" v-for="(item,index) in info.time" :key="item.id">
				<b>{{item.date}}日</b>
				<span :class="{active:item.part[0]==='全天'}" @click="ckTime(0,item)">全天</span>
				<span :class="{active:item.part[1]==='上午'}" @click="ckTime(1,item)">上午</span>
				<span :class="{active:item.part[2]==='下午'}" @click="ckTime(2,item)">下午</span>
				<span :class="{active:item.part[3]==='晚上'}" @click="ckTime(3,item)">晚上</span>
			</view>
		</view>
	</view>
</template>

<script>
	import uuid from 'uuid'
	export default {
		data() {
			return {
				tempLevel: '',
				tempTag: '',
				info: {
					name: "杨大爷",
					id:'doctor01',
					imgUrl: '../../static/index/sj2.webp',
					birthDay: "1950-1-1",
					sex: 1,
					city: "湖北省武汉市江夏区",
					level: [{
							id: "level1",
							text: "一级心理咨询师"
						},
						{
							id: "level2",
							text: "二级心理咨询师"
						},
						{
							id: "level3",
							text: "三级心理咨询师"
						},
						{
							id: "level4",
							text: "四级心理咨询师"
						}
					],
					tags: [{
							id: 'tag1',
							text: "个人成长"
						},
						{
							id: 'tag2',
							text: "恋爱心理"
						},
						{
							id: 'tag3',
							text: "人际关系"
						},
						{
							id: 'tag4',
							text: "婚姻家庭"
						}
					],
					time: [{
						id: "time1",
						date: 26,
						part: ['全天', '上午', '', '']
					},
					{
						id: "time2",
						date: 27,
						part: ['全天', '上午', '', '']
					},
					{
						id: "time3",
						date: 28,
						part: ['全天', '上午', '', '']
					},
					{
						id: "time4",
						date: 29,
						part: ['全天', '上午', '', '']
					}],
				},
			}
		},
		created() {
			// console.log('aa')
			uni.getStorage({
				key:"ydy-memberMes"
			}).then(res=>{
				console.log()
				uni.request({
					url:this.baseUrl+"doctor/doctorinfo",
					data:{
						account:res[1].data.account
					}
				}).then((res)=>{
					if(res[1]&&res[1].data){
						this.info=res[1].data
					}
				})
			})
			
		},
		methods: {
			// 添加职业职称
			del(index, parent) {
				parent.splice(index, 1)
			},
			add(parent, level) {
				let id = uuid.v1()
				parent.push({
					id,
					text: level ? this.tempLevel : this.tempTag
				})
				level && (this.tempLevel = "")
				level || (this.tempTag = "")
			},
			upLoadImg() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success: (res) => {
						// res.tempFilePaths[0] = res.tempFiles[0].path
						// this.info.imgUrl=res.tempFilePaths[0]
						this.info.imgUrl = res.tempFilePaths[0]
					},
					complete() {

					}
				})
			},
			ckTime(type, parent) {
				var text
				switch (type) {
					case 0:
					text='全天'
						break;
					case 1:
					text='上午'
						break;
					case 2:
					text='下午'
						break;
					case 3:
					text='晚上'
						break;
					default:
						break;
				}
				if(parent.part[type] === ""){
					parent.part.splice(type,1,text)
				}else{
					parent.part.splice(type,1,"")
				}
				// console.log(this.info.time[index].part)
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 10rpx 20rpx;
		/* border: 1rpx solid red; */
		min-height: 90vh;
		background-color: #fff;
	}

	.head {
		overflow: hidden;
	}

	.item {
		padding: 15rpx;
		position: relative;
		border-bottom: 1rpx solid #eaeaea;
		/* border: 1rpx solid red; */
	}

	.head image {
		float: right;
		/* margin-right: 50rpx; */
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.head span {
		float: left;
		height: 90rpx;
		line-height: 90rpx;
		font-size: 20rpx;
	}

	.item span {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 20rpx;
	}

	.item .level {
		padding: 10rpx 10rpx;
		position: relative;
		font-size: 30rpx;
		/* background-color: #f0f0f0; */
		margin-bottom: 15rpx;
		border: 1.5rpx solid #eaeaea;
		border-radius: 10rpx;
	}

	.item .level span {
		font-size: 20rpx;
		position: absolute;
		top: -20rpx;
		right: 10rpx;
		color: #686868;
	}

	.item .date span {
		display: inline-block;
		padding: 0;
		width: 15%;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		margin-right: 10rpx;
		border-radius: 10rpx;
		border: #a8a8a8 1rpx solid;
	}

	.item .date .active {
		color: white;
		background-color: #4c58ff;
		border: #a8a8a8 1rpx solid;
	}
</style>
