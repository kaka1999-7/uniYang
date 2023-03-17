<template>
	<view class="container">
		<doctor v-if="isDoctor"></doctor>
		<view class="" v-else >
			<!-- 搜索导航 -->
			<view class="search_container">
				<view class="search">
					<input type="text" :placeholder="search_placeholder">
				</view>
				<uni-icons type="chat-filled" size="30" color="#a8a8a8"></uni-icons>
			</view>
			<view class="main">
				<!-- 轮播 -->
				<view class="banner">
					<swiper indicator-dots="true" class="swiper" circular="true" autoplay="true" interval="5000">
						<swiper-item v-for="(item,index) in swiperImg" :key="item.id">
							<image :src="item.url" mode="scaleToFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<!-- 导航 -->
				<view class="first-nav">
					<view class="first-nav-fir">
						<view class="tittle">
							<image src="../../static/index/ico-message.png" mode=""></image> 心理咨询
						</view>
						<span>888,888</span>
						<span>人在这里改变</span>
						<span>马上了解&nbsp;></span>
						<img class="bgcimg" src="../../static/index/nav.jpeg" alt="">
			
					</view>
					<view class="first-nav-sec">
						<view class="">
							<view class="tittle">
								<image src="../../static/index/ico-course.png" mode=""></image>
								<span>心理课程</span>
							</view>
							<span class="txt">9,999在学...</span>
						</view>
						<view class="">
							<view class="tittle">
								<image src="../../static/index/ico-test.png" mode=""></image>
								<span>测试</span>
							</view>
							<span class="txt">9,998在测试...</span>
						</view>
					</view>
				</view>
				<view class="second-nav">
					<view class="item" @click="toPhysiciansList('恋爱情感')">
						<image src="../../static/index/ico-nav-love.png" mode=""></image>
						<span>恋爱情感</span>
					</view>
					<view class="item" @click="toPhysiciansList('婚姻家庭')">
						<image src="../../static/index/ico-nav-mary.png" mode=""></image>
						<span>婚姻家庭</span>
					</view>
					<view class="item" @click="toPhysiciansList('情绪压力')">
						<image src="../../static/index/ico-nav-cry.png" mode=""></image>
						<span>情绪压力</span>
					</view>
					<view class="item" @click="toPhysiciansList('职场发展')">
						<image src="../../static/index/ico-nav-briefcase.png" mode=""></image>
						<span>职场发展</span>
					</view>
					<view class="item" @click="toPhysiciansList('个人成长')">
						<image src="../../static/index/ico-nav-grow.png" mode=""></image>
						<span>个人成长</span>
					</view>
					<view class="item" @click="toPhysiciansList('亲子教育')">
						<image src="../../static/index/ico-nav-child.png" mode=""></image>
						<span>亲子教育</span>
					</view>
					<view class="item" @click="toPhysiciansList('海外专家')">
						<image src="../../static/index/ico-nav-professor.png" mode=""></image>
						<span>海外专家</span>
					</view>
					<view class="item" @click="toPhysiciansList('人际关系')">
						<image src="../../static/index/ico-nav-friends.png" mode=""></image>
						<span>人际关系</span>
					</view>
					<view class="item" @click="toPhysiciansList('心里健康')">
						<image src="../../static/index/ico-nav-healthy.png" mode=""></image>
						<span>心里健康</span>
					</view>
					<view class="item" @click="toPhysiciansList('全部')">
						<image src="../../static/index/ico-nav-all.png" mode=""></image>
						<span>全部</span>
					</view>
				</view>
				<view class="hr"></view>
				<view class="h4">心灵·广场</view>
				<!-- 评论区 -->
				<view class="comment">
					<view class="tab">
						<span v-for="(item,index) in catagery" :key="item.id" :class="{active:item.isCurent}"
							@click="ckCatagery(item,index)">{{item.tittle}}</span>
					</view>
					<view v-if="curentCatagery!=2">
						<comment v-for="item in catagery[curentCatagery].commentList" :key="item.id" :person='item'></comment>
					</view>
					<view v-if="curentCatagery===2">
						<qs v-for="item in catagery[2].qsList" :qs="item" :key="item.id"></qs>
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	// 医师页面
	import doctor from '../../component/doctor/doctor.vue';
	// 评论组件
	import comment from '../../component/commenttool/comfocous.vue';
	// 问答评论组件
	import qs from '../../component/commenttool/QS.vue';
	export default {
		data() {
			return {
				title: 'Hello',
				value: "",
				search_placeholder: "焦虑测试",
				isDoctor:false,
				swiperImg: [{
						url: "../../static/index/sj1.webp",
						id: "swiperImg1"
					},
					{
						url: "../../static/index/sj2.webp",
						id: "swiperImg2",
					},
					{
						url: "../../static/index/sj3.webp",
						id: "swiperImg3"
					}
				],
				curentCatagery: 0,
				catagery: [{
						tittle: '关注',
						id: "catageryInt1",
						isCurent: true,
						commentList: [{
								id: 'indperson1',
								name: "YT",
								tags: [{
										tittle: 'lv9 倾听卡卡 ',
										id: 'indpersontag1'
									},
									{
										tittle: '精华答主',
										id: 'indpersontag2'
									},
								],
								coment: '我坚信，有自信才能有成绩，有成绩就会更自信。如果说失败乃成功之母，那么自信就是成功之基。天并不都是蓝的，云并不都是白的，但自信的风采却是一束永恒的灿烂的恒久的光辉，这一束光辉将永远照着你的目标前进，不再迷茫。',
								showAll:false,
								imgHead: '../../static/index/sj2.webp',
								imgUrl: [{
										url: '../../static/index/sj2.webp',
										id: 'personimg1'
									},
									{
										url: '../../static/index/sj2.webp',
										id: 'personimg2'
									}
								],
								label: '我的日记',
								time: '24小时前',
							},
							{
								id: 'indperson2',
								name: "杨大爷",
								tags: [{
										tittle: 'lv100 倾听卡卡 ',
										id: 'indperson2tag1'
									},
									{
										tittle: '精华答主',
										id: 'indperson2tag2'
									},
								],
								coment: '遇事能忍则忍，但要保留一份傲气，别让人一再践踏；擦亮你的眼睛，看清这个现实社会，有人笑里藏刀，有人背后使招。慢慢领悟，深深感触，愿你有眼力把这些都看透；渐渐成长，悄悄坚强，愿你有能力与生活握手言和。',
								showAll:false,
								imgHead: '../../static/index/sj1.webp',
								imgUrl: [{
										url: '../../static/index/sj1.webp',
										id: 'person2img1'
									},
									{
										url: '../../static/index/sj2.webp',
										id: 'person2img2'
									}
								],
								label: '我的日记',
								time: '24小时前',
							},
						]
					},
					{
						tittle: '热门',
						id: "catageryInt2",
						isCurent: false,
						commentList: [{
									id: 'indperson1',
									name: "YT",
									tags: [{
											tittle: 'lv9 倾听卡卡 ',
											id: 'indpersontag1'
										},
										{
											tittle: '精华答主',
											id: 'indpersontag2'
										},
									],
									coment: '我坚信，有自信才能有成绩，有成绩就会更自信。如果说失败乃成功之母，那么自信就是成功之基。天并不都是蓝的，云并不都是白的，但自信的风采却是一束永恒的灿烂的恒久的光辉，这一束光辉将永远照着你的目标前进，不再迷茫。',
									showAll:false,
									imgHead: '../../static/index/sj1.webp',
									imgUrl: [{
											url: '../../static/index/sj1.webp',
											id: 'personimg1'
										},
										{
											url: '../../static/index/sj3.webp',
											id: 'personimg2'
										}
									],
									label: '我的日记',
									time: '24小时前',
								},
							]
						
					},
					{
						tittle: '心里咨询',
						id: "catageryInt3",
						isCurent: false,
						qsList:[
							{
								id:"qustion1",
								headImg:'../../static/index/sj3.webp',
								question:"工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name:"ybigye",
								tag:'专业心里咨询师',
								showAll:false,
								answer:"白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id:"qustion2",
								headImg:'../../static/index/sj2.webp',
								question:"没有压力，压力小睡得香怎么办？",
								name:"yxh",
								tag:'咨询师',
								showAll:false,
								answer:"白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id:"qustion3",
								headImg:'../../static/index/sj1.webp',
								question:"工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name:"ybigye",
								tag:'专业心里咨询师',
								showAll:false,
								answer:"白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
						]
					},
					{
						tittle: '动态',
						id: "catageryInt4",
						isCurent: false,
						commentList: [{
									id: 'indperson1',
									name: "YT",
									tags: [{
											tittle: 'lv9 倾听卡卡 ',
											id: 'indpersontag1'
										},
										{
											tittle: '精华答主',
											id: 'indpersontag2'
										},
									],
									showAll:false,
									coment: '我坚信，有自信才能有成绩，有成绩就会更自信。如果说失败乃成功之母，那么自信就是成功之基。天并不都是蓝的，云并不都是白的，但自信的风采却是一束永恒的灿烂的恒久的光辉，这一束光辉将永远照着你的目标前进，不再迷茫。',
									imgHead: '../../static/index/sj2.webp',
									imgUrl: [{
											url: '../../static/index/sj2.webp',
											id: 'personimg1'
										},
										{
											url: '../../static/index/sj2.webp',
											id: 'personimg2'
										}
									],
									label: '我的日记',
									time: '24小时前',
								},
								{
									id: 'indperson2',
									name: "杨大爷",
									tags: [{
											tittle: 'lv100 倾听卡卡 ',
											id: 'indperson2tag1'
										},
										{
											tittle: '精华答主',
											id: 'indperson2tag2'
										},
									],
									showAll:false,
									coment: '遇事能忍则忍，但要保留一份傲气，别让人一再践踏；擦亮你的眼睛，看清这个现实社会，有人笑里藏刀，有人背后使招。慢慢领悟，深深感触，愿你有眼力把这些都看透；渐渐成长，悄悄坚强，愿你有能力与生活握手言和。',
									imgHead: '../../static/index/sj1.webp',
									imgUrl: [{
											url: '../../static/index/sj1.webp',
											id: 'person2img1'
										},
										{
											url: '../../static/index/sj2.webp',
											id: 'person2img2'
										}
									],
									label: '我的日记',
									time: '24小时前',
								},
								{
									id: 'indperson3',
									name: "杨er爷",
									tags: [{
											tittle: 'lv100 倾听卡卡 ',
											id: 'indperson3tag1'
										},
										{
											tittle: '精华答主',
											id: 'indperson3tag2'
										},
									],
									showAll:false,
									coment: '遇事能忍则忍，但要保留一份傲气，别让人一再践踏；擦亮你的眼睛，看清这个现实社会，有人笑里藏刀，有人背后使招。慢慢领悟，深深感触，愿你有眼力把这些都看透；渐渐成长，悄悄坚强，愿你有能力与生活握手言和。',
									imgHead: '../../static/index/sj1.webp',
									imgUrl: [{
											url: '../../static/index/sj3.webp',
											id: 'person3img1'
										},
										{
											url: '../../static/index/sj2.webp',
											id: 'person3img2'
										}
									],
									label: '我的日记',
									time: '24小时前',
								},
								{
									id: 'indperson4',
									name: "杨大爷",
									tags: [{
											tittle: 'lv100 倾听卡卡 ',
											id: 'indperson4tag1'
										},
										{
											tittle: '精华答主',
											id: 'indperson2tag2'
										},
									],
									showAll:false,
									coment: '遇事能忍则忍，但要保留一份傲气，别让人一再践踏；擦亮你的眼睛，看清这个现实社会，有人笑里藏刀，有人背后使招。慢慢领悟，深深感触，愿你有眼力把这些都看透；渐渐成长，悄悄坚强，愿你有能力与生活握手言和。',
									imgHead: '../../static/index/sj1.webp',
									imgUrl: [{
											url: '../../static/index/sj1.webp',
											id: 'person2img1'
										},
										{
											url: '../../static/index/sj2.webp',
											id: 'person2img2'
										}
									],
									label: '我的日记',
									time: '24小时前',
								},
							]
					}
				],
			}
		},
		onShow() {
			uni.getStorage({
				key:"ydy-memberMes",
			}).then((res)=>{
				res[1].data.type==='doctor'&&(this.isDoctor=true)
				res[1].data.type==='member'&&(this.isDoctor=false)
			})
		},
		components: {
			comment,
			qs,
			doctor
		},
		methods: {
			ckShowAll(person){
				person.showAll=!person.showAll
			},
			iconClick() {

			},
			ckCatagery(item, index) {
				this.catagery.forEach(el => el.isCurent = false)
				item.isCurent = !item.isCurent
				this.curentCatagery = index
			},
			toPhysiciansList(keyword) {
				uni.navigateTo({
					url: `../physiciansList/physiciansList?keyword=${keyword}`
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		min-height: 200vh;
		background-color: #f3f3f3;
		box-sizing: border-box;
		background-color: #f3f3f3;
	}

	.hr {
		width: 100%;
		height: 0;
		margin: 20rpx 0;
		border-bottom: 1px solid gray;
	}

	.h4 {
		font-size: 18px;
		margin: 18px 0;
		font-weight: bold;
	}

	/* 搜索 */
	.search_container {
		height: 80rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		top: 0rpx;
		left: 0;
		z-index: 100000;
		box-sizing: border-box;
		padding: 0 10rpx;
		background-color: #f3f3f3;
	}

	.search_container .search {
		box-sizing: border-box;
		margin-top: 3rpx;
		margin-right: 20rpx;
		width: 95%;
		height: 70rpx;
		padding-top: 8rpx;
		padding-left: 30rpx;
		border: 1.5px solid darkgray;
		border-radius: 35px;
		background-color: #f3f3f3;
	}

	.container .main {
		width: 96%;
		margin: 0 auto;
		padding-top: 20rpx;
	}

	/* 轮播 */
	.banner {
		margin-top: 80rpx;
		/* padding: 5px; */
		background-color: #f3f3f3;
		border: 1px solid transparent;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.banner image {
		width: 100%;
	}

	/* 导航 */
	.first-nav {
		height: 300rpx;
		margin-top: 20rpx;
		display: flex;
		/* border: 1px black solid; */
	}

	.first-nav .first-nav-fir {
		flex: 1;
		padding: 5rpx;
		position: relative;
		overflow: hidden;
		border-radius: 20px;
		box-shadow: 3rpx 3rpx 2rpx gray;
		background-color: #fefff2;
	}

	.first-nav .first-nav-fir .bgcimg {
		width: 200rpx;
		height: 200rpx;
		position: absolute;
		bottom: -20rpx;
		right: -60rpx;
		opacity: .7;
	}

	.first-nav .first-nav-fir .tittle {
		display: flex;
		font-weight: 600;
		align-items: center;
	}

	.first-nav .first-nav-fir span:nth-of-type(1) {
		display: block;
		margin-left: 30rpx;
		margin-top: 30rpx;
		color: #ffaa00;
		font-size: 40rpx;
	}

	.first-nav .first-nav-fir span:nth-of-type(2) {
		display: block;
		margin-left: 33rpx;
		margin-top: 10rpx;
		color: #767676;
		font-size: 20rpx;
	}

	.first-nav .first-nav-fir span:nth-of-type(3) {
		display: block;
		margin-left: 33rpx;
		margin-top: 50rpx;
		color: #ffaa00;
		font-size: 20rpx;
	}

	.first-nav .first-nav-fir .tittle image {
		width: 50rpx;
		height: 50rpx;
		margin: 5rpx 20rpx 0 20rpx;
	}

	.first-nav .first-nav-sec {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.first-nav .first-nav-sec>view {
		height: 45%;
		width: 80%;
		box-sizing: border-box;
		padding: 5rpx 10rpx;
		position: relative;
		overflow: hidden;
		border-radius: 20px;
		background-color: #ffeeff;
		box-shadow: 3rpx 3rpx 2rpx gray;
	}

	.first-nav .first-nav-sec>view:nth-of-type(2) {
		background-color: #e7fbff;
	}

	.first-nav .first-nav-sec view .tittle {
		display: flex;
		font-weight: 600;
		font-size: 30rpx;
		align-items: center;
	}

	.first-nav .first-nav-sec .txt {
		display: block;
		margin-top: 30rpx;
		margin-left: 30rpx;
		font-size: 20rpx;
		color: #767676;
	}

	.first-nav .first-nav-sec view image {
		width: 50rpx;
		height: 50rpx;
	}

	.second-nav {
		width: 100%;
		height: 250rpx;
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		/* border: 1px solid black; */
	}

	.second-nav .item {
		flex: 19%;
		height: 49%;
		/* border: 1px solid black; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.second-nav .item image {
		width: 60rpx;
		height: 60rpx;
	}

	.second-nav .item span {
		display: block;
		font-size: 20rpx;
	}

	/* 评论区 */
	.comment {
		min-height: 30vh;
		margin-top: 30rpx;
		/* border: 1px solid black; */
	}

	.comment .tab {
		position: sticky;
		top: 80rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 20rpx 0;
		font-size: 25rpx;
		font-weight: 600;
		/* border: 1px solid black; */
		z-index: 1000000;
		background-color: #f3f3f3;
	}

	.comment .tab span {
		position: relative;
		z-index: 1;

	}

	.comment .tab .active::before {
		content: "";
		display: inline-block;
		width: 60%;
		height: 20rpx;
		background-color: #aefffd;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		/* x,y偏移，模糊大小，模糊延申距离， */
		box-shadow: 0rpx 0rpx 10rpx 5rpx #aefffd;
		z-index: -1;
	}

	.comment .tab .active::after {
		content: "";
		position: absolute;
		left: 50%;
		top: 90%;
		transform: translate(-50%, -50%);
		width: 60%;
		height: 60%;
		border: 5px solid transparent;
		border-bottom: 5px solid #0593ff;
		border-radius: 50%;
	}
</style>
