<template>
	<!-- 个人详情 -->
	<view class="container">
		<image class="bgcimg" :src="curentPerson.bgcImg" mode="aspectFill"></image>
		<view class="content">
			<view class="header">
				<image class="head" :src="curentPerson.bgcImg" mode=""></image>
				<span class="name">{{curentPerson.name}}</span>
				<span class="level">{{curentPerson.level[0]}}</span>
				<view class="location">
					<uni-icons type="location-filled" color="#7e7e7e" size="10"></uni-icons>
					{{curentPerson.location}}
				</view>
				<view class="mor-level">
					{{curentPerson.level[1]}}
				</view>
			</view>
			<view class="experience">
				<view class="expitem">
					<span>{{curentPerson.servicePeople}}</span>
					<span>咨询人数</span>
				</view>
				<view class="expitem">
					<span>{{curentPerson.serviceTime}}</span>
					<span>服务时常</span>
				</view>
				<view class="expitem">
					<span>{{curentPerson.carrerTime}}</span>
					<span>从业年限</span>
				</view>
				<view class="expitem">
					<span>{{curentPerson.fans}}</span>
					<span>粉丝</span>
				</view>
			</view>
			<view class="catagery">
				<span :class="{active:curentCatagery===0}" @click="ckCatagery(0)">咨询</span>
				<span :class="{active:curentCatagery===1}" @click="ckCatagery(1)">回答</span>
			</view>
			<!-- 咨询页 -->
			<view class="consult" v-if="curentCatagery===0">
				<view class="info">
					<view class="tag">
						<span>{{curentPerson.tags}}</span>
						<span>/次</span>
						<span>￥{{curentPerson.price}}</span>
					</view>
					<view class="activity">
						<span v-for="item in curentPerson.activities" :key='item.id'>{{item.tittle}}</span>
					</view>
					<view class="consul-type">
						<span>咨询方式</span>
						<span v-for="item in curentPerson.consulType" :key="item.id">{{item.tittle}}</span>
					</view>
					<view class="consul-date">
						<span>可约日期</span>
						<span v-for="item in curentPerson.consulDate" :key="item.id">{{item.tittle}}</span>
					</view>
				</view>
				<view class="consul-comment">
					<view class="hr-word">
						咨询评价
					</view>
					<view class="item" v-for="item in curentPerson.commentList" :key="item.id">
						<view class="comment">
							<view class="">
								<image :src="item.headImg" class="coment-head" mode="aspectFill">
								</image>
								<span class="name">{{item.name}}</span>
							</view>
							<view class="comment-text">
								{{item.commentText}}
							</view>
						</view>
						<view class="footer">
							<view class="tags">
								<span v-for="item2 in item.tags" :key="item2.id">{{item2.tittle}}</span>
							</view>
							<view class="time">
								<span>
									<image src="../../static/person/ico-greate.png" mode=""></image>
									{{item.praiseNum}}
								</span>
								<span>2023/3/3</span>
							</view>
						</view>
						<view class="hr"></view>
					</view>
				</view>
			</view>
			<!-- 问答页 -->
			<view class="qs" v-else-if="curentCatagery===1">
				<QS v-for="item in curentPerson.questionList" :qs="item" :key="item.id"></QS>
			</view>
		</view>
		<!-- 底部导航 -->
		<view class="bottom">
			<view class="item">
				<image src="../../static/person/ico-message.png" mode=""></image>
				<span>私信</span>
			</view>
			<view class="item">
				<image src="../../static/person/ico-focous.png" mode=""></image>
				<span>关注</span>
			</view>
			<view class="order" @click="ckShowOrder">立即预约</view>
		</view>
		<view class="orderview" :class="{show:showOrderView}">
			<view class="cancel" @click="cancelOrder">
				X
			</view>
			<view class="info">
				<image :src="curentPerson.bgcImg" mode="aspectFill"></image>
				<view class="ct">
					<view class="first-row">
						<span>{{curentPerson.name}}</span>
						<span>{{curentPerson.level[0]}}</span>
						<span>￥{{curentPerson.price}}</span>
					</view>
					<view class="second-row">
						<span>{{curentPerson.servicePeople}}次咨询</span>
					</view>
					<view class="third-row">
						<span>单次低至{{curentPerson.price-50}}元</span>
						<span>单次时长{{curentPerson.time}}分钟</span>
					</view>
				</view>
			</view>
			<view class="consul-type">
				<span>咨询方式</span>
				<span>面对面</span>
				<span>视频</span>
				<span>语音</span>
			</view>
			<view class="consul-times">
				<span>咨询方式</span>
				<button>+</button>
				<span>1</span>
				<button>-</button>
			</view>
			<view class="pay-type">
				<span>支付方式</span>
				<view class="ct">
					<view class="item">
						<image src="../../static/person/wx.png" mode=""></image>&nbsp;微信
						<span @click="ckPayType(0)" :class="{active:order.payActive===0}"></span>
					</view>
					<view class="item">
						<image src="../../static/person/zfb.png" mode=""></image>&nbsp;支付宝
						<span @click="ckPayType(1)" :class="{active:order.payActive===1}"></span>
					</view>
					<view class="item">
						<image src="../../static/person/hb.png" mode=""></image>&nbsp;花呗分期
						<span @click="ckPayType(2)" :class="{active:order.payActive===2}"></span>
					</view>
				</view>
			</view>
			<view class="sure-order">
				<view class="aggrement">
					<span :class="{active:order.aggrement}" @click="ckAggrement"></span>
					同意<a href="javascript:0;">xxx</a>协议
				</view>
				<view class="ct">
					<view class="price">
						<span>￥{{curentPerson.price-50}}</span>
						<span>￥{{curentPerson.price}}</span>
					</view>
					<button>去支付</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import QS from '../../component/commenttool/QS.vue'
	export default {
		data() {
			return {
				showOrderView: false,
				curentCatagery: 0,
				order: {
					aggrement: false,
					// truethPrice:
					payActive: 0,
				},
				curentPerson: {
					id: 'person0',
					name: '杨大爷',
					bgcImg: '../../static/person/head3.webp',
					experienc: '从业1000年 · 1000000+人咨询',
					price: 300,
					level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
					serviceTime: "3400+小时",
					servicePeople: "1000000人",
					consultPeople: 1000000,
					carrerTime: "18年2月",
					fans: '1000人',
					tags: "情绪管理 | 个人成长 | 心里健康",
					location: '宇宙中心',
					time: 50,
					activities: [{
							tittle: '满减活动|200减50',
							id: 'person0act1'
						},
						{
							tittle: '今日报价900',
							id: 'person0act2'
						},
						{
							tittle: '预沟通|29.9',
							id: 'person0act3'
						}
					],
					consulType: [{
							tittle: "视频",
							id: "consul-type1"
						},
						{
							tittle: "面对面",
							id: "consul-type2"
						},
						{
							tittle: "语音",
							id: "consul-type3"
						}
					],
					consulDate: [{
							tittle: "3-14",
							id: "consul-date1"
						},
						{
							tittle: "3-15",
							id: "consul-date2"
						},
						{
							tittle: "3-16",
							id: "consul-date3"
						}
					],
					questionList: [{
							id: "qustion1",
							headImg: '../../static/index/sj3.webp',
							question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
							name: "ybigye",
							tag: '专业心里咨询师',
							answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
						},
						{
							id: "qustion2",
							headImg: '../../static/index/sj2.webp',
							question: "没有压力，压力小睡得香怎么办？",
							name: "yxh",
							tag: '咨询师',
							answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
						},
						{
							id: "qustion3",
							headImg: '../../static/index/sj1.webp',
							question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
							name: "ybigye",
							tag: '专业心里咨询师',
							answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
						},
					],
					commentList: [{
							id: 'comment1',
							name: "匿名",
							headImg: "../../static/person/head3.webp",
							commentText: "人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。",
							tags: [{
									tittle: "goodlike",
									id: "commenttag1"
								},
								{
									tittle: "温暖亲切",
									id: "commenttag2"
								},
								{
									tittle: "和蔼可亲",
									id: "commenttag3"
								},
							],
							praiseNum: 1000
						},
						{
							id: 'comment2',
							name: "匿名",
							headImg: "../../static/person/head3.webp",
							commentText: "人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。",
							tags: [{
									tittle: "耐心倾听",
									id: "comment2tag1"
								},
								{
									tittle: "温暖亲切",
									id: "comment2tag2"
								},
								{
									tittle: "反馈准确",
									id: "comment2tag3"
								},
							],
							praiseNum: 1000
						}
					],
				},
				personList: [{
						id: 'person0',
						name: '杨大爷',
						bgcImg: '../../static/person/head3.webp',
						experienc: '从业1000年 · 1000000+人咨询',
						price: 300,
						level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
						serviceTime: "3400+小时",
						servicePeople: "1000000人",
						consultPeople: 1000000,
						carrerTime: "18年2月",
						fans: '1000人',
						tags: "情绪管理 | 个人成长 | 心里健康",
						location: '四川省广安市广安区',
						time: 50,
						activities: [{
								tittle: '满减活动|200减50',
								id: 'person0act1'
							},
							{
								tittle: '今日报价900',
								id: 'person0act2'
							},
							{
								tittle: '预沟通|29.9',
								id: 'person0act3'
							}
						],
						consulType: [{
								tittle: "视频",
								id: "consul-type1"
							},
							{
								tittle: "面对面",
								id: "consul-type2"
							},
							{
								tittle: "语音",
								id: "consul-type3"
							}
						],
						consulDate: [{
								tittle: "3-14",
								id: "consul-date1"
							},
							{
								tittle: "3-15",
								id: "consul-date2"
							},
							{
								tittle: "3-16",
								id: "consul-date3"
							}
						],
						questionList: [{
								id: "qustion1",
								headImg: '../../static/index/sj3.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion2",
								headImg: '../../static/index/sj2.webp',
								question: "没有压力，压力小睡得香怎么办？",
								name: "yxh",
								tag: '咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion3",
								headImg: '../../static/index/sj1.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
						],
						commentList: [{
								id: 'comment1',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。",
								tags: [{
										tittle: "goodlike",
										id: "commenttag1"
									},
									{
										tittle: "温暖亲切",
										id: "commenttag2"
									},
									{
										tittle: "和蔼可亲",
										id: "commenttag3"
									},
								],
								praiseNum: 1000
							},
							{
								id: 'comment2',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。",
								tags: [{
										tittle: "耐心倾听",
										id: "comment2tag1"
									},
									{
										tittle: "温暖亲切",
										id: "comment2tag2"
									},
									{
										tittle: "反馈准确",
										id: "comment2tag3"
									},
								],
								praiseNum: 1000
							}
						],
					},
					{
						id: 'person1',
						name: '杨二爷',
						bgcImg: '../../static/person/head2.webp',
						experienc: '从业1000年 · 1000000+人咨询',
						price: 500,
						level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
						serviceTime: "9600+小时",
						servicePeople: "10000人",
						consultPeople: 10000,
						carrerTime: "8年2月",
						fans: '1000人',
						tags: "婚姻家庭 | 个人成长 | 亲子教育",
						location: '四川省广安市前锋区',
						time: 50,
						activities: [{
								tittle: '满减活动|200减50',
								id: 'person1act1'
							},
							{
								tittle: '今日报价900',
								id: 'person1act2'
							},
							{
								tittle: '预沟通|29.9',
								id: 'person1act3'
							}
						],
						consulType: [{
								tittle: "视频",
								id: "consul-type1"
							},
							{
								tittle: "面对面",
								id: "consul-type2"
							},
							{
								tittle: "语音",
								id: "consul-type3"
							}
						],
						consulDate: [{
								tittle: "3-14",
								id: "consul-date1"
							},
							{
								tittle: "3-15",
								id: "consul-date2"
							},
							{
								tittle: "3-16",
								id: "consul-date3"
							}
						],
						questionList: [{
								id: "qustion1",
								headImg: '../../static/index/sj3.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion2",
								headImg: '../../static/index/sj2.webp',
								question: "没有压力，压力小睡得香怎么办？",
								name: "yxh",
								tag: '咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion3",
								headImg: '../../static/index/sj1.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
						],
						commentList: [{
								id: 'comment1',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。",
								tags: [{
										tittle: "goodlike",
										id: "commenttag1"
									},
									{
										tittle: "温暖亲切",
										id: "commenttag2"
									},
									{
										tittle: "和蔼可亲",
										id: "commenttag3"
									},
								],
								praiseNum: 1000
							},
							{
								id: 'comment2',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。",
								tags: [{
										tittle: "耐心倾听",
										id: "comment2tag1"
									},
									{
										tittle: "温暖亲切",
										id: "comment2tag2"
									},
									{
										tittle: "反馈准确",
										id: "comment2tag3"
									},
								],
								praiseNum: 1000
							}
						],
					},
					{
						id: 'person2',
						name: '杨三爷',
						bgcImg: '../../static/person/head1.jpg',
						experienc: '从业10年 · 10+人咨询',
						price: 100,
						level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
						serviceTime: "9+小时",
						servicePeople: "10人",
						consultPeople: 10,
						carrerTime: "10年2月",
						fans: '1000人',
						tags: "情绪管理 | 个人成长 | 人际关系",
						location: '湖北省武汉市江汉区',
						time: 50,
						activities: [{
								tittle: '满减活动|200减50',
								id: 'person1act1'
							},
							{
								tittle: '今日报价900',
								id: 'person1act2'
							},
							{
								tittle: '预沟通|29.9',
								id: 'person1act3'
							}
						],
						consulType: [{
								tittle: "视频",
								id: "consul-type1"
							},
							{
								tittle: "面对面",
								id: "consul-type2"
							},
							{
								tittle: "语音",
								id: "consul-type3"
							}
						],
						consulDate: [{
								tittle: "3-14",
								id: "consul-date1"
							},
							{
								tittle: "3-15",
								id: "consul-date2"
							},
							{
								tittle: "3-16",
								id: "consul-date3"
							}
						],
						questionList: [{
								id: "qustion1",
								headImg: '../../static/index/sj3.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion2",
								headImg: '../../static/index/sj2.webp',
								question: "没有压力，压力小睡得香怎么办？",
								name: "yxh",
								tag: '咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion3",
								headImg: '../../static/index/sj1.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
						],
						commentList: [{
								id: 'comment1',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。",
								tags: [{
										tittle: "goodlike",
										id: "commenttag1"
									},
									{
										tittle: "温暖亲切",
										id: "commenttag2"
									},
									{
										tittle: "和蔼可亲",
										id: "commenttag3"
									},
								],
								praiseNum: 1000
							},
							{
								id: 'comment2',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。",
								tags: [{
										tittle: "耐心倾听",
										id: "comment2tag1"
									},
									{
										tittle: "温暖亲切",
										id: "comment2tag2"
									},
									{
										tittle: "反馈准确",
										id: "comment2tag3"
									},
								],
								praiseNum: 1000
							}
						],
					},
					{
						id: 'person3',
						name: '杨四爷',
						bgcImg: '../../static/person/1.jpg',
						experienc: '从业1000年 · 900+人咨询',
						price: 700,
						level: ['宇宙级心里医师', '一级心里咨询师'],
						serviceTime: "888+小时",
						servicePeople: "909人",
						consultPeople: 909,
						carrerTime: "1000年2月",
						fans: '1000人',
						tags: "情绪管理 | 个人成长 | 人际关系",
						location: '湖北省武汉市江夏区',
						time: 50,
						activities: [{
								tittle: '满减活动|200减50',
								id: 'person1act1'
							},
							{
								tittle: '今日报价900',
								id: 'person1act2'
							},
							{
								tittle: '预沟通|29.9',
								id: 'person1act3'
							}
						],
						consulType: [{
								tittle: "视频",
								id: "consul-type1"
							},
							{
								tittle: "面对面",
								id: "consul-type2"
							},
							{
								tittle: "语音",
								id: "consul-type3"
							}
						],
						consulDate: [{
								tittle: "3-14",
								id: "consul-date1"
							},
							{
								tittle: "3-15",
								id: "consul-date2"
							},
							{
								tittle: "3-16",
								id: "consul-date3"
							}
						],
						questionList: [{
								id: "qustion1",
								headImg: '../../static/index/sj3.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion2",
								headImg: '../../static/index/sj2.webp',
								question: "没有压力，压力小睡得香怎么办？",
								name: "yxh",
								tag: '咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
							{
								id: "qustion3",
								headImg: '../../static/index/sj1.webp',
								question: "工作时太过紧张焦虑，精神压力大无法入睡怎么办？",
								name: "ybigye",
								tag: '专业心里咨询师',
								answer: "白马黄金塞，云砂绕梦思。那堪愁苦节，远忆边城儿。萤飞秋窗满，月度霜闺迟。摧残梧桐叶，萧飒沙棠枝。无时独不见，流泪空自知。——李白《塞下曲六首》"
							},
						],
						commentList: [{
								id: 'comment1',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。人生之路千万条，总是踏着别人的脚印前进的人，他的一生会碌碌无为。只有敢走别人从未走过的路，独辟蹊径，才有成功的可能。",
								tags: [{
										tittle: "goodlike",
										id: "commenttag1"
									},
									{
										tittle: "温暖亲切",
										id: "commenttag2"
									},
									{
										tittle: "和蔼可亲",
										id: "commenttag3"
									},
								],
								praiseNum: 1000
							},
							{
								id: 'comment2',
								name: "匿名",
								headImg: "../../static/person/head3.webp",
								commentText: "人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。",
								tags: [{
										tittle: "耐心倾听",
										id: "comment2tag1"
									},
									{
										tittle: "温暖亲切",
										id: "comment2tag2"
									},
									{
										tittle: "反馈准确",
										id: "comment2tag3"
									},
								],
								praiseNum: 1000
							}
						],
					}
				]

			}
		},
		components: {
			QS
		},
		onLoad(option) {
			this.curentPerson = this.personList.find(el => el.id === option.id)
			if (!this.curentPerson) this.curentPerson = this.personList[0]
		},
		methods: {
			ckCatagery(ck) {
				this.curentCatagery = ck
			},
			ckShowOrder() {
				this.showOrderView = true
			},
			ckPayType(ind) {
				this.order.payActive = ind
			},
			cancelOrder() {
				this.showOrderView = false
			},
			ckAggrement() {
				this.order.aggrement = !this.order.aggrement
			}
		}
	}
</script>

<style scoped>
	.container {
		position: relative;
		padding-bottom: 20vh;
		/* padding-right: 100rpx; */
	}

	.bgcimg {
		width: 100%;
		position: relative;
		z-index: 0;
	}

	.content {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		/* height: 30vh; */
		padding: 20rpx 15rpx;
		top: -50rpx;
		background-color: #fff;
		border-top-right-radius: 50rpx;
		border-top-left-radius: 50rpx;
		z-index: 10000;
	}

	.content .head {
		float: left;
		width: 150rpx;
		height: 150rpx;
		margin-left: 15rpx;
		margin-top: -75rpx;
		border-radius: 50%;
	}

	.content .name {
		margin-left: 10rpx;
		margin-top: -3000rpx;
		font-size: 40rpx;
		font-weight: 600;
	}

	.content .level {
		display: inline-block;
		padding: 5rpx 10rpx;
		font-size: 20rpx;
		margin-left: 15rpx;
		border-radius: 30rpx;
		background-color: #ffd683;
	}

	.content .location {
		font-size: 18rpx;
		color: #7e7e7e;
	}

	.content .mor-level {
		margin: 20rpx 15rpx;
		font-size: 22rpx;
		color: #7e7e7e;
	}

	.content .experience {
		width: 90%;
		height: 140rpx;
		margin-left: 5%;
		margin-top: 30rpx;
		display: flex;
		border-radius: 15rpx;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 0 10rpx 2rpx #bfe6e6;
	}

	.content .expitem {
		display: flex;
		flex-direction: column;
		padding-right: 15rpx;
		border-right: #7e7e7e 1rpx solid;
	}

	.content .expitem:last-of-type {
		border-right: none;
	}

	.content .expitem span {
		text-align: center;
	}

	.content .expitem span:nth-child(1) {
		font-size: 30rpx;
	}

	.content .expitem span:nth-child(2) {
		font-size: 20rpx;
		color: #7e7e7e;
	}

	.catagery {
		width: 100%;
		margin-top: 40rpx;
	}

	.catagery span {
		float: left;
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #7e7e7e;
	}

	.catagery .active {
		color: black;
		font-weight: 600;
	}

	.catagery .active::after {
		content: "";
		display: inline-block;
		position: relative;
		width: 90%;
		top: -15rpx;
		border-bottom: 10rpx blue solid;
		border-radius: 10rpx;
	}

	.consult .info .tag {
		overflow: hidden;
	}

	.consult .info .tag span:nth-child(1) {
		float: left;
		font-size: 30rpx;
		font-weight: 600;
		margin-left: 50rpx;
	}

	.consult .info {
		/* background-color: red; */
		padding: 30rpx 10rpx;
		box-shadow: 0 0 10rpx 2rpx #ebebeb;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.consult .info .tag span:nth-child(2),
	.consult .info .tag span:nth-child(3) {
		float: right;
		color: #0055ff;
		font-weight: 600;
	}

	.consult .info .tag span:nth-child(2) {
		padding-top: 10rpx;
		padding-left: 5rpx;
		font-size: 20rpx;
	}

	.consult .info .activity {
		margin: 25rpx 0;
	}

	.consult .info .activity span {
		margin-left: 35rpx;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #ffaa00;
		border: 1rpx solid #ffaa00;
		border-radius: 15rpx;
	}

	.consult .consul-comment {
		box-shadow: 0 0 10rpx 2rpx #ebebeb;
		margin-top: 20rpx;
		padding: 10rpx 0;
		border-radius: 15rpx;
	}

	.consult .consul-type,
	.consult .consul-date {
		margin: 40rpx 10rpx;
		font-size: 27rpx;
	}

	.consult .consul-type span:nth-child(1),
	.consult .consul-date span:nth-child(1) {
		float: left;
	}

	.consult .consul-type span:nth-child(n+2),
	.consult .consul-date span:nth-child(n+2) {
		float: right;
		display: inline-block;
		font-size: 25rpx;
		margin: 2rpx 7rpx;
		padding: 2rpx 5rpx;
		border-radius: 5rpx;
		background-color: #ccc7cb;
	}

	.hr-word {
		margin: 30rpx 20rpx;
		font-size: 35rpx;
		font-weight: 600;
	}

	.comment .coment-head {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.comment .name {
		position: relative;
		top: -15rpx;
		font-size: 30rpx;
	}

	.comment .comment-text {
		position: relative;
		padding-left: 30rpx;
		/* padding-top: 70rpx; */
		font-size: 20rpx;
		color: #737373;
		text-indent: 20rpx;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical
	}

	.consul-comment .footer .tags,
	.consul-comment .footer .time {
		margin: 15rpx 15rpx;
		overflow: hidden;
	}

	.consul-comment .footer .tags span {
		float: left;
		font-size: 20rpx;
		padding: 1rpx 5rpx;
		margin: 0 5rpx;
		background-color: #e3e3e3;
		border-radius: 5rpx;
	}

	.consul-comment .footer .time span {
		font-size: 20rpx;
		padding: 0 10rpx;
		color: #878486;
	}

	.footer .time span:nth-child(1) {
		float: left;
	}

	.consul-comment .footer .time span image {
		width: 30rpx;
		height: 30rpx;
		position: relative;
		margin-right: 5rpx;
		top: 5rpx;
	}

	.consul-comment .footer .time span:nth-child(2) {
		float: right;
	}

	.hr {
		margin-left: 5%;
		width: 90%;
		border-bottom: 1px solid #ccc7cb;
	}

	.bottom {
		position: fixed;
		width: 100%;
		height: 100rpx;
		bottom: 0%;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		z-index: 10000;
	}

	.bottom .item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		font-size: 30rpx;
		/* border: 1rpx solid red; */
	}

	.bottom .item image {
		width: 50rpx;
		height: 50rpx;
	}

	.bottom .order {
		flex: 4;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 10rpx;
		background-image: linear-gradient(to bottom, #959aff 40%, #2f5cff);
		border-radius: 50rpx;
	}

	.orderview {
		position: fixed;
		top: 100vh;
		width: 100%;
		height: 90vh;
		padding: 20rpx 15rpx;
		background-color: #fff;
		z-index: 1000000;
		/* border: 1px solid red; */
	}

	.show {
		/* top: 0; */
		transition: .2s;
		transform: translate(0, -90vh);
	}

	.orderview .cancel {
		margin: 0 0 25rpx 10rpx;
		color: gray;
	}

	.orderview .info image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
	}

	.orderview .info .ct {
		display: inline-block;
		width: 75%;
		height: 100%;
		position: relative;
		top: -20rpx;
		left: 10rpx;
		/* border: 1px solid red; */
	}

	.info .first-row {
		overflow: hidden;
		/* margin-top: -30rpx; */
	}

	.info .ct .first-row span:nth-child(1) {
		float: left;
		font-size: 30rpx;
		font-weight: 600;
	}

	.info .first-row span:nth-child(2) {
		float: left;
		margin-top: 10rpx;
		margin-left: 15rpx;
		padding: 0rpx 10rpx;
		font-size: 20rpx;
		color: #737373;
		background-color: #e3e3e3;
		border-radius: 5rpx;
	}

	.info .first-row span:nth-child(3) {
		float: right;
		color: #ffaa00;
	}

	.info .second-row span {
		font-size: 20rpx;

	}

	.info .third-row span {
		padding: 0 10rpx;
		font-size: 20rpx;
		color: #ffdc72;
		/* background-color: #fffc93; */
		border: 1rpx solid #ffdc72;
		border-radius: 15rpx;
	}

	.info .third-row span:nth-child(2) {
		margin-left: 15rpx;
		color: #878486;
		border: 1rpx solid #b8b5b7;
	}

	.orderview .consul-type,
	.orderview .consul-times {
		margin: 20rpx 0;
		padding: 3rpx 10rpx;
		line-height: 100%;
		/* border: 1px solid red; */
		overflow: hidden;
	}

	.orderview .consul-type span:nth-child(1) {
		float: left;
	}

	.orderview .consul-type span:nth-child(n+2) {
		float: right;
		margin-right: 10rpx;
		padding: 0 10rpx;
		font-size: 25rpx;
		color: #565455;
		background-color: #f1f1f1;
		border: 1rpx solid #b8b5b7;
		border-radius: 15rpx;
	}

	.orderview .consul-type .active {
		color: #0055ff;
	}

	.orderview .consul-times {
		font-size: 30rpx;
	}

	.orderview .consul-times button {
		display: inline-block;
		margin: 0 10rpx;
		font-size: 40rpx;
		line-height: 40rpx;
		text-indent: -12rpx;
		width: 30rpx;
		height: 40rpx;
		text-align: center;
		float: right;
	}

	.orderview .consul-times span:nth-of-type(2) {
		float: right;
		margin: 5rpx 10rpx 0 10rpx;
	}

	.orderview .pay-type {
		padding: 20rpx 15rpx;
	}

	.orderview .pay-type .ct {
		margin-top: 30rpx;
		font-size: 25rpx;
	}

	.orderview .pay-type .item image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
		position: relative;
		top: 5rpx;

	}

	.orderview .pay-type .item span {
		display: inline-block;
		float: right;
		margin-right: 15rpx;
		width: 30rpx;
		height: 30rpx;
		border: 1rpx solid gray;
		border-radius: 50%;
	}

	.orderview .pay-type .item .active {
		background-image: radial-gradient(blue 60%, white 60%);
	}

	.orderview .sure-order {
		width: 100%;
		margin-top: 47%;
		/* border: 1px solid red; */
	}

	.orderview .sure-order .aggrement {
		font-size: 20rpx;
		background-color: #fafafa;
		box-shadow: 0 1.5rpx 0rpx 0 gray;
	}

	.orderview .sure-order .aggrement span {
		display: inline-block;
		margin-right: 15rpx;
		width: 20rpx;
		height: 20rpx;
		border: 1rpx solid gray;
		border-radius: 50%;
		position: relative;
		top: 4rpx;
	}

	.orderview .sure-order .aggrement .active {
		background-image: radial-gradient(blue 60%, white 60%);
	}

	.orderview .sure-order .aggrement a {
		display: inline-block;
	}

	.orderview .sure-order .ct {
		margin-top: 5rpx;
		width: 95%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.orderview .sure-order .ct button {
		width: 400rpx;
		height: 80rpx;
		margin-right: 0rpx;
		color: white;
		background-image: linear-gradient(to bottom, #8389ff 20%, #627aff 50%, #3c3edd 100%);
	}

	.orderview .sure-order .ct view {
		font-size: 30rpx;
	}

	.orderview .sure-order .ct view span:nth-child(1) {
		color: #ffbf00;
	}

	.orderview .sure-order .ct view span:nth-child(2) {
		margin: 0 10rpx;
		color: gray;
		font-size: 20rpx;
		text-decoration: line-through;
	}


	.catagery::after,
	.consult .info,
	.consul-type,
	.consul-date,
	.consul-comment .footer .tags,
	.consul-comment .footer .time {
		content: "";
		display: block;
		clear: both;

	}
</style>
