<!-- 医师列表 -->
<template>
	<view class="container">
		<!-- 搜索 -->
		<view class="search_container">
			<view class="search">
				<input type="text" :placeholder="search_placeholder">
			</view>
			<uni-icons type="chat-filled" size="30" color="#a8a8a8"></uni-icons>
		</view>
		<view class="card">
			<view class="card_item">
				<image src="../../static/physiciansList/2.jpg" mode="aspectFill"></image>
				<span class="tittle">心理体验</span>
				<span class="detail">梳理问题，定位根源</span>
			</view>
			<view class="card_item">
				<image src="../../static/physiciansList/1.jpg" mode="scaleToFill"></image>
				<span class="tittle">定制咨询</span>
				<span class="detail">1对1有效解决困扰</span>
			</view>
			<view class="card_item">
				<image src="../../static/physiciansList/1.jpg" mode="scaleToFill"></image>
				<span class="tittle">对抗抑郁</span>
				<span class="detail">驱散阴霾，拥抱阳光</span>
			</view>
			<view class="card_item">
				<image src="../../static/physiciansList/2.jpg" mode="aspectFill"></image>
				<span class="tittle">精神心理</span>
				<span class="detail">立即咨询精神科医生</span>
			</view>
		</view>
		<!-- 导航 -->
		<view class="catagery">
			<view class="catagery1">
				<view class="tittle">
					<span v-for="(item,index) in catagery" :key="item.id" :class="{active:item.isCurent}"
						@click="ckCatagery(index)">{{item.tittle}} <span></span></span>
				</view>
			</view>
			<scroll-view class="tag" scroll-x="true" @scroll="scroll" :show-scrollbar='false' scroll-left="0">
				<view class=" tag-item" v-for="item in tags" :key="item.id" :class="{active:item.isCurent}"
					@click="ckItem(item,tags);ckTag(item.tittle)">{{item.tittle}}</view>
			</scroll-view>
			<!-- 详细选项卡 -->
			<view class="ct" :class="{hidden:curentCatagery>=5}">
				<view class="city" v-if="curentCatagery===0">
					<view class="city-content" v-if="true">
						<scroll-view :scroll-top="scrollTop" scroll-y="true" :show-scrollbar='false'
							class="item scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
							<view class="">热门城市</view>
							<view v-for="item in catagery[0].provinceList" :class="{active:item.isCurent}"
								:key="item.id" @click="ckItem(item,catagery[0],'filter')">{{item.tittle}}</view>
						</scroll-view>
						<scroll-view :scroll-top="scrollTop" scroll-y="true" :show-scrollbar='false'
							class="item scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
							<template v-for="item in catagery[0].provinceList" v-if="item.isCurent">
								<view v-for="item2 in item.cityList" :key="item2.id" :class="{active:item2.isCurent}"
									@click="ckItem(item2,item,'filter')">{{item2.tittle}}</view>
							</template>

						</scroll-view>
						<scroll-view :scroll-top="scrollTop" scroll-y="true" :show-scrollbar='false'
							class="item scroll-Y" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
							<template v-for="item in catagery[0].provinceList" v-if="item.isCurent">
								<template v-for="item2 in item.cityList" v-if="item2.isCurent">
									<view v-for="item3 in item2.areaList" :key="item3.id"
										:class="{active:item3.isCurent}"
										@click="ckItem(item3,item2,'filter'); cityFilter('filter')">
										{{item3.tittle}}
									</view>
								</template>
							</template>
						</scroll-view>
					</view>
					<button @click="catagerySure('nolimitcity')">不限城市</button>
				</view>
				<view class="price" v-else-if="curentCatagery===1">
					<view class="tittle">
						咨询价格
					</view>
					<view class="main">
						<span v-for="(item,index) in catagery[1].priceList" :key="item.id"
							:class="{active:item.isCurent}" @click="ckItem(item)">{{item.price}}</span>
					</view>
					<view class="btn">
						<button @click="catageryReset('price')">重置</button>
						<button @click="catagerySure('price')">确认</button>
					</view>
				</view>
				<view class="time" v-else-if="curentCatagery===2">
					<view class="tittle">
						咨询时间按（可多选）
					</view>
					<view class="alldate">
						<view v-for="item in catagery[2].dateList" :key="item.id" :class="{active:item.isCurent}"
							@click="ckItem(item)" class="day">
							<span>{{item.date}}</span>
							<span>{{item.week}}</span>
						</view>
					</view>
					<view class="time-part">
						<span v-for="item in catagery[2].partList" :key="item.id" :class="{active:item.isCurent}"
							@click="ckItem(item,catagery[2].partList)">{{item.tittle}}</span>
					</view>
					<view class="btn">
						<button @click="catageryReset('time')">重置</button>
						<button @click="catagerySure('time')">确认</button>
					</view>
				</view>
				<view class="sort" v-else-if="curentCatagery===3">
					<view class="tittle">
						排序方式
					</view>
					<view class="main">
						<span v-for="item in catagery[3].sortList" :class="{active:item.isCurent}"
							@click="ckItem(item,catagery[3].sortList); catagerySure('sort')">{{item.tittle}}</span>
					</view>
				</view>
				<view class="filter" v-else-if="curentCatagery===4">
					<scroll-view :scroll-top="scrollTop" scroll-y="true" class="filter-content scroll-Y"
						@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll">
						<view v-for="item in catagery[4].filterList" :key="item.id">
							<view class="tittle">
								{{item.tittle}}
							</view>
							<view class="main">
								<span v-for="item2 in item.filterItem" :class="{active:item2.isCurent}"
									@click="ckItem(item2,item.filterItem)">{{item2.tittle}}</span>
							</view>
						</view>

					</scroll-view>

					<view class="btn">
						<button @click="catageryReset('filter')">重置</button>
						<button @click="catagerySure('filter')">确认</button>
					</view>
				</view>

			</view>
		</view>
		<!-- 医师列表 -->
		<Person v-for="item in personList" :person="item" :key="item.id" @click.native="toPerson(item)"></Person>
	</view>
</template>

<script>
	import Person from "../../component/physiciansList/card.vue"
	import axios from 'axios'
	export default {
		data() {
			return {
				option: {},
				search_placeholder: "缓解焦虑",
				filter: {
					location: ["", "", ""],
					price: [],
					time: [],
					sort: "",
					tag:"全部",
					filter: []
				},
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				tags: [{
						tittle: '全部',
						id: 'headtag1',
						isCurent: true
					},
					{
						tittle: '情绪管理',
						id: 'headtag2',
						isCurent: false
					},
					{
						tittle: '个人成长',
						id: 'headtag3',
						isCurent: false
					},
					{
						tittle: '心里健康',
						id: 'headtag4',
						isCurent: false
					},
					{
						tittle: '恋爱情感',
						id: 'headtag5',
						isCurent: false
					},
					{
						tittle: '家庭关系',
						id: 'headtag6',
						isCurent: false
					},
					{
						tittle: '性心理',
						id: 'headtag7',
						isCurent: false
					},
					{
						tittle: '婚姻家庭',
						id: 'headtag8',
						isCurent: false
					},
					{
						tittle: '亲子教育',
						id: 'headtag9',
						isCurent: false
					}
				],
				catagery : [{
						tittle: "城市",
						isCurent: false,
						id: 'catagery1',
						provinceList: [{
								tittle: '四川省',
								isCurent: false,
								id: 'province1',
								cityList: [{
										tittle: "不限",
										isCurent: true,
										id: 'city1',
										areaList: [{
											tittle: '不限',
											isCurent: true,
											id: 'area1'
										}, ]
									},
									{
										tittle: "广安市",
										isCurent: false,
										id: 'city2',
										areaList: [{
												tittle: '不限',
												isCurent: true,
												id: 'area1'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area2'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area3'
											},
											{
												tittle: '前锋区',
												isCurent: false,
												id: 'area4'
											},
											{
												tittle: '前锋区',
												isCurent: false,
												id: 'area5'
											}
										]
									},
									{
										tittle: "广安市",
										isCurent: false,
										id: 'city3',
										areaList: [{
												tittle: '不限',
												isCurent: true,
												id: 'area1'
											},
											{
												tittle: '前锋区',
												isCurent: false,
												id: 'area2'
											},
											{
												tittle: '前锋区',
												isCurent: false,
												id: 'area3'
											},
											{
												tittle: '前锋区',
												isCurent: false,
												id: 'area4'
											},
											{
												tittle: '前锋区',
												isCurent: false,
												id: 'area5'
											}
										]
									},
									{
										tittle: "广安市",
										isCurent: false,
										id: 'city4',
										areaList: [{
												tittle: '不限',
												isCurent: true,
												id: 'area1'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area2'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area3'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area4'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area5'
											}
										]
									}
								]
							},
							{
								tittle: '湖北省',
								isCurent: false,
								id: 'province2',
								cityList: [{
										tittle: "不限",
										isCurent: true,
										id: 'city1',
										areaList: [{
											tittle: '不限',
											isCurent: true,
											id: 'area1'
										}, ]
									},
									{
										tittle: "武汉市",
										isCurent: false,
										id: 'city2',
										areaList: [{
												tittle: '不限',
												isCurent: true,
												id: 'area1'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area2'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area3'
											},
											{
												tittle: '江汉区',
												isCurent: false,
												id: 'area4'
											},
											{
												tittle: '江汉区',
												isCurent: false,
												id: 'area5'
											}
										]
									},
									{
										tittle: "武汉市",
										isCurent: false,
										id: 'city3',
										areaList: [{
												tittle: '不限',
												isCurent: true,
												id: 'area1'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area2'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area3'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area4'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area5'
											}
										]
									},
									{
										tittle: "武汉市",
										isCurent: false,
										id: 'city4',
										areaList: [{
												tittle: '不限',
												isCurent: true,
												id: 'area1'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area2'
											},
											{
												tittle: '广安区',
												isCurent: false,
												id: 'area3'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area4'
											},
											{
												tittle: '江夏区',
												isCurent: false,
												id: 'area5'
											}
										]
									}
								]
							},
				
						],
				
				
					},
					{
						tittle: "价格",
						isCurent: false,
						id: 'catagery2',
						priceList: [{
								price: "100-200",
								isCurent: true,
								id: "price1"
							},
							{
								price: "200-400",
								isCurent: false,
								id: "price2"
							},
							{
								price: "400-555",
								isCurent: false,
								id: "price3"
							},
							{
								price: "555-700",
								isCurent: false,
								id: "price4"
							},
							{
								price: "700-900",
								isCurent: false,
								id: "price5"
							},
							{
								price: "900-1100",
								isCurent: false,
								id: "price6"
							},
						]
					},
					{
						tittle: "时间",
						isCurent: false,
						id: 'catagery3',
						dateList: [{
								date: 1,
								week: '周一',
								isCurent: true,
								id: "date1"
							},
							{
								date: 2,
								week: '周二',
								isCurent: false,
								id: "date2"
							},
							{
								date: 3,
								week: '周三',
								isCurent: false,
								id: "date3"
							},
							{
								date: 4,
								week: '周四',
								isCurent: false,
								id: "date4"
							},
							{
								date: 5,
								week: '周五',
								isCurent: false,
								id: "date5"
							},
							{
								date: 6,
								week: '周六',
								isCurent: false,
								id: "date6"
							},
							{
								date: 7,
								week: '周日',
								isCurent: false,
								id: "date7"
							}
						],
						partList: [{
								tittle: "全天",
								isCurent: true,
								id: "part1"
							},
							{
								tittle: "上午",
								isCurent: false,
								id: "part2"
							},
							{
								tittle: "下午",
								isCurent: false,
								id: "part3"
							},
							{
								tittle: "晚上",
								isCurent: false,
								id: "part4"
							}
						]
					},
					{
						tittle: "排序",
						isCurent: false,
						id: 'catagery4',
						sortList: [{
								tittle: "默认排序",
								isCurent: false
							},
							{
								tittle: "低价优先",
								isCurent: false
							},
							{
								tittle: "预约最多",
								isCurent: false
							}
						]
					},
					{
						tittle: "筛选",
						isCurent: false,
						id: 'catagery5',
						filterList: [{
								id: "sex",
								tittle: "咨询师性别",
								filterItem: [{
										tittle: '不限',
										isCurent: true,
									},
									{
										tittle: '男',
										isCurent: false,
									},
									{
										tittle: '女',
										isCurent: false,
									}
								]
							},
							{
								id: "consulGroup",
								tittle: "咨询群体",
								filterItem: [{
										tittle: '不限',
										isCurent: true,
									},
									{
										tittle: '老人',
										isCurent: false,
									},
									{
										tittle: '儿童',
										isCurent: false,
									},
									{
										tittle: '青少年',
										isCurent: false,
									},
									{
										tittle: '中年人',
										isCurent: false,
									},
									{
										tittle: '学生',
										isCurent: false,
									},
									{
										tittle: '职场人',
										isCurent: false,
									},
									{
										tittle: '第三者',
										isCurent: false,
									},
									{
										tittle: '孕妇',
										isCurent: false,
									},
									{
										tittle: '夫妻',
										isCurent: false,
									},
									{
										tittle: 'LGBTQ',
										isCurent: false,
									}
								]
							},
							{
								id: "accpetType",
								tittle: "咨询方式",
								filterItem: [{
										tittle: '不限',
										isCurent: true,
									},
									{
										tittle: '视频',
										isCurent: false,
									},
									{
										tittle: '语音',
										isCurent: false,
									},
									{
										tittle: '面对面',
										isCurent: false,
									}
								]
							},
							{
								id: "sketchyAge",
								tittle: "咨询师年龄",
								filterItem: [{
										tittle: '不限',
										isCurent: true,
									},
									{
										tittle: '60后',
										isCurent: false,
									},
									{
										tittle: '70后',
										isCurent: false,
									},
									{
										tittle: '80后',
										isCurent: false,
									},
									{
										tittle: '90后',
										isCurent: false,
									}
								]
							},
						]
					}
				],
				
				curentCatagery: 1000,
				originPersonList : [{
						id: 'person0',
						name: '杨大爷',
						experienc: '从业18年 · 1000000+人咨询',
						consultPeople: 1000000,
						price: 300,
						accpetType: ['视频', '语音', '面对面'],
						tagList: ['海外专家', '职场发展', '情绪管理', '个人成长', '心里健康', '人际关系', '婚姻家庭', '恋爱情感', '情绪压力', '亲子教育', '性心理',
							'家庭关系'
						],
						sex: '男',
						consulGroup: ['老人', "儿童", "青少年"],
						sketchyAge: '90后',
						timeList: [{
								id: "time1",
								date: 1,
								part: ['全天', '', '', '']
							},
							{
								id: "time2",
								date: 2,
								part: ['', '上午', '', '']
							},
						],
						level: '宇宙级心里医师',
						tags: "情绪管理 | 个人成长 | 心里健康",
						location: '四川省广安市广安区',
						headUrl: "../../static/physiciansList/head3.webp",
						activities: [{
								tittle: '满减活动',
								id: 'person0act1'
							},
							{
								tittle: '今日报价',
								id: 'person0act2'
							},
							{
								tittle: '预沟通',
								id: 'person0act3'
							}
						],
						comment: "情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理"
					},
					{
						id: 'person1',
						name: '杨二爷',
						experienc: '从业1000年 · 10000+人咨询',
						consultPeople: 10000,
						price: 500,
						level: '宇宙级心里医师',
						tags: "婚姻家庭 | 个人成长 | 亲子教育",
						location: '四川省广安市前锋区',
						headUrl: "../../static/physiciansList/head2.webp",
						tagList: ['海外专家', '职场发展', '情绪管理', '个人成长'],
						sex: '女',
						accpetType: ['视频', '语音'],
						consulGroup: ['中年人', "学生"],
						sketchyAge: '80后',
						timeList: [{
								id: "time2",
								date: 5,
								part: ['全天', '上午', '', '']
							},
							{
								id: "time1",
								date: 6,
								part: ['全天', '上午', '', '']
							},
						],
						activities: [{
								tittle: '满减活动',
								id: 'person1act1'
							},
							{
								tittle: '今日报价',
								id: 'person1act2'
							},
							{
								tittle: '预沟通',
								id: 'person1act3'
							}
						],
						comment: "情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理"
					},
					{
						id: 'person2',
						name: '杨三爷',
						experienc: '从业10年 · 10+人咨询',
						consultPeople: 10,
						price: 100,
						level: '宇宙级心里医师',
						tags: "心里健康 | 人际关系 | 家庭关系",
						location: '湖北省武汉市江汉区',
						headUrl: "../../static/physiciansList/head1.jpg",
						accpetType: ['语音', '面对面'],
						tagList: ['心里健康', '人际关系', '婚姻家庭', '家庭关系'],
						sex: '男',
						consulGroup: ['职场人', "第三者"],
						sketchyAge: '70后',
						timeList: [{
								id: "time1",
								date: 3,
								part: ['', '上午', '', '']
							},
							{
								id: "time2",
								date: 4,
								part: ['全天', '', '', '']
							}
						],
						activities: [{
								tittle: '满减活动',
								id: 'person2act1'
							},
							{
								tittle: '今日报价',
								id: 'person2act2'
							},
							{
								tittle: '预沟通',
								id: 'person2act3'
							}
						],
						comment: "情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理"
					},
					{
						id: 'person3',
						name: '杨四爷',
						experienc: '从业1000年 · 900+人咨询',
						consultPeople: 900,
						price: 700,
						level: '宇宙级心里医师',
						tags: "恋爱情感 | 情绪压力 | 亲子教育",
						location: '湖北省武汉市江夏区',
						headUrl: "../../static/physiciansList/1.jpg",
						accpetType: ['语音', '面对面'],
						tagList: ['恋爱情感', '情绪压力', '亲子教育', '性心理'],
						sex: '女',
						consulGroup: ['孕妇', "夫妻", "LGBTQ"],
						sketchyAge: '60后',
						timeList: [{
							id: "time3",
							date: 7,
							part: ['全天', '', '', '']
						}],
						activities: [{
								tittle: '满减活动',
								id: 'person3act1'
							},
							{
								tittle: '今日报价',
								id: 'person3act2'
							},
							{
								tittle: '预沟通',
								id: 'person3act3'
							}
						],
						comment: "情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理情绪管理"
					},
				],
				personList:[],
				}
		},
		created() {
			// 适应h5请求
			uni.request({
				method:"get",
				url:this.baseUrl+'physicians/catagery'
			}).then(res=>{
				if(res[1]&&res[1].data){
					this.catagery=res[1].data
				}
			})
			
			uni.request({
				method:"get",
				url:this.baseUrl+'physicians/personlist'
			}).then(res=>{
				if(res[1]&&res[1].data){
					this.originPersonList=res[1].data
				}
				this.personList=JSON.parse(JSON.stringify(this.originPersonList))
			})
		},
		onLoad(options) {
			// this.option = options
			// uni.request({
			// 	method:"get",
			// 	url:this.baseUrl+'physicians/catagery'
			// }).then(res=>{
			// 	if(res[1]&&res[1].data){
			// 		this.catagery=res[1].data
			// 	}
			// })
			
			// uni.request({
			// 	method:"get",
			// 	url:this.baseUrl+'physicians/personlist'
			// }).then(res=>{
			// 	if(res[1]&&res[1].data){
			// 		this.originPersonList=res[1].data
			// 	}
			// 	this.personList=JSON.parse(JSON.stringify(this.originPersonList))
			// })
			
		},
		components: {
			Person
		},
		methods: {
			// 前往个人详情页
			toPerson(item) {
				uni.navigateTo({
					url: `/pages/person/person?id=${item.id}`
				})
			},
			ckTag(tag){
				this.filter.tag=tag
				this.filterArr()
			},
			// 生成过滤列表
			filterArr() {
				this.personList = []
				// 城市筛选
				let cityFilter = ""
				this.filter.location.forEach(el => {
					if (el != "不限") cityFilter += el
				})
				if (cityFilter != "") {
					this.originPersonList.forEach(el => {
						if (el.location.indexOf(cityFilter) > -1) {
							this.personList.push(JSON.parse(JSON.stringify(el)))
						}
					})
				} else {
					this.personList = JSON.parse(JSON.stringify(this.originPersonList))
				}

				// 价格筛选
				if (this.filter.price.length >= 1) {
					this.personList = this.personList.filter(e => {
						let exit = false
						this.filter.price.forEach(el => {
							let arr = el.split("-")
							let min = parseInt(arr[0])
							let max = parseInt(arr[1])
							if (e.price >= min && e.price < max) {
								exit = true
							}
						})
						return exit
					})
				}
				// 时间筛选
				if(this.filter.time.length>0){
					this.personList=this.personList.filter(el=>{
						let flag=false
						el.timeList.forEach(el=>{
							this.filter.time.forEach(e=>{
								if(el.date===e.date&&el.part[0]==='全天'){
									flag=true
								}
								if(el.date===e.date&&el.part[0]===""){
									for(let i=0;i<el.part.length;i++ ){
										(e.part.join("").indexOf(el.part[i])>=0&&el.part[i]!="")&&(flag=true);
									}
								}
							})
						})
						return flag
					})
					this.filter.time=[]
				}
				
				// 排序
				if (this.filter.sort != "") {
					if (this.filter.sort === '默认排序') {
						this.filter.sort = ""
						this.filterArr()
					} else if (this.filter.sort === '低价优先') {
						let temp = JSON.parse(JSON.stringify(this.personList))
						temp.sort((el1, el2) => (el1.price - el2.price))
						this.personList = temp
					} else if (this.filter.sort === '预约最多') {
						let temp = JSON.parse(JSON.stringify(this.personList))
						temp.sort((el1, el2) => (el2.consultPeople - el1.consultPeople))
						this.personList = temp
					}
				}
				// 医师标签筛选
				if(this.filter.tag!=""){
					if(this.filter.tag!='全部'){
						this.personList=this.personList.filter(el=>{
							if(el.tagList.join("").indexOf(this.filter.tag)>=0){
								return true
							}
							return false
						})
					}
				}
				
				// 各种筛选
				if(this.filter.filter.length>0){
					
					
					this.personList=this.personList.filter(el=>{
						let flag=true
						this.filter.filter.forEach(e=>{
							if(e.filter!='不限'){
								let ckstr=""
								let str=""
								if(Object.prototype.toString.call(el[e.id]).indexOf("Array")>=0){
									str=el[e.id].join("")
								}else{
									str=el[e.id]
								}
								if(Object.prototype.toString.call(e.filter).indexOf("Array")>=0){
									ckstr=e.filter.join("")
								}else{
									ckstr=e.filter
								}
								if(str.indexOf(ckstr)<0){
									flag=false
								}
							}
						})
						return flag
					})
					this.filter.filter=[]
				}
			},
			// 获取城市过滤参数
			cityFilter(type) {
				if (type === "filter") {
					let filterPromise = new Promise(resolve => {
						this.catagery[0].provinceList.forEach((el, index) => {
							if (el.isCurent) {
								this.filter.location[0] = el.tittle
								resolve(el)
							}
						})
					}).then(res => {
						let index
						res.cityList.forEach((el, ind) => {
							if (el.isCurent) {
								this.filter.location[1] = el.tittle
								index = ind
							}
						})
						return Promise.resolve(res.cityList[index])
					}).then(res => {
						res.areaList.forEach((el) => {
							if (el.isCurent) {
								this.filter.location[2] = el.tittle
							}
						})
						this.filterArr()
						this.catagery.forEach(el => {
							el.isCurent = false
						})
						this.curentCatagery = 1000
					})
				}

			},
			// 点击一级分类列表
			ckCatagery(ind) {
				if (ind === this.curentCatagery) {
					this.catagery[ind].isCurent = false
					this.curentCatagery = 1000
					return
				}
				this.catagery.forEach(el => {
					el.isCurent = false
				})
				this.catagery[ind].isCurent = true
				this.curentCatagery = ind
			},
			// 取消分类详情页展示,同时获取过滤信息
			catagerySure(type) {
				if (type === 'price') {
					this.filter.price = []
					this.catagery[1].priceList.forEach(el => {
						if (el.isCurent) this.filter.price.push(el.price)
					})
				}
				if (type === 'sort') {
					this.catagery[3].sortList.forEach(el => {
						if (el.isCurent) this.filter.sort = el.tittle
					})
				}
				if (type === 'nolimitcity') {
					this.catagery[0].provinceList.forEach(el => el.isCurent = false)
					this.filter.location = ["", "", ""]
				}
				if (type === 'time') {
					this.catagery[2].dateList.forEach(el => {
						if(el.isCurent){
							this.filter.time.push({
								date:el.date
							})
						}
					})
					var temp=[]
					this.catagery[2].partList.forEach(el => {
						if(el.isCurent){
							temp.push(el.tittle)
						}else{
							temp.push("")
						}
					})
					this.filter.time.forEach(e=>{
						e.part=temp
					})
					console.log(this.filter.time)
				}
				if(type==='filter'){
					this.catagery[4].filterList.forEach(el=>{
						el.filterItem.forEach(e=>{
							if(e.isCurent){
								this.filter.filter.push({
									id:el.id,
									filter:e.tittle
								})
							}
						})
					})
				}
				this.filterArr()

				this.catagery.forEach(el => {
					el.isCurent = false
				})
				this.curentCatagery = 1000
			},
			ckItem(item, parent, filter) {
				if (filter) {
					if (parent.cityList) {
						parent.cityList.forEach(el => {
							el.isCurent = false
							el.areaList.forEach(el => el.isCurent = false)
							// el.areaList[0].isCurent=true
						})
						// parent.cityList[0].isCurent=true
					} else if (parent.provinceList) {
						parent.provinceList.forEach(el => {
							el.isCurent = false
							el.cityList.forEach(el => {
								el.isCurent = false
								el.areaList.forEach(el => el.isCurent = false)
								// el.areaList[0].isCurent=true
							})
							// el.cityList[0].isCurent=true
						})
					} else if (parent.areaList) {
						parent.areaList.forEach(el => el.isCurent = false)
						// parent.areaList[0].isCurent=true
					}
					item.isCurent = !item.isCurent
					return
				}
				if (parent && parent[0].tittle != "全天") {
					parent.forEach(el => el.isCurent = false)
					item.isCurent = !item.isCurent
				} else if (parent && parent[0].tittle === "全天") {
					if (item.tittle === "全天") {
						parent.forEach(el => el.isCurent = false)
						item.isCurent = true
					} else {
						item.isCurent = !item.isCurent
						parent[0].isCurent = false
					}
				} else {
					item.isCurent = !item.isCurent
				}

			},
			catageryReset(tag) {
				if (tag = "price") {
					this.catagery[1].priceList.forEach(el => el.isCurent = false)
					this.catagery[1].priceList[0].isCurent = true
				}
				if (tag = "time") {
					this.catagery[2].dateList.forEach(el => el.isCurent = false)
					this.catagery[2].partList.forEach(el => el.isCurent = false)
					this.catagery[2].dateList[0].isCurent = true
					this.catagery[2].partList[0].isCurent = true
				}
				if (tag = "filter") {
					this.catagery[4].filterList.forEach(el => {
						el.filterItem.forEach(el => el.isCurent = false)
						el.filterItem[0].isCurent = true
					})
				}
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			upper: function(e) {
				// console.log("向上滚")
			},
			lower: function(e) {
				// console.log("向下滚")
			},
		}
	}
</script>

<style scoped>
	.container {
		min-height: 200vh;
		padding: 20rpx;
	}

	.search_container {
		height: 80rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: sticky;
		top: 0rpx;
		left: 0;
		z-index: 100000;
		box-sizing: border-box;
		padding: 0 10rpx;
		background-color: white;
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

	.card {
		margin-top: 30rpx;
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		/* border: 1px red solid; */
	}

	.card .card_item {
		position: relative;
		width: 49%;
		height: 47%;
		border-radius: 5rpx;
		overflow: hidden;
	}

	.card .card_item image {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
	}

	.card .card_item:nth-child(2) image,
	.card .card_item:nth-child(3) image {}

	.card .card_item .tittle {
		display: block;
		margin: 10rpx 0 30rpx 20rpx;
		font-size: 30rpx;
		font-weight: 600;
		word-spacing: 5px;
		color: white;

	}

	.card .card_item .detail {
		margin-left: 30rpx;
		font-size: 18rpx;
		color: #f23cff;
		transform: scale(.5);
		/* font-weight: 300; */
		word-spacing: 5px
	}

	.catagery {
		margin-top: 30rpx;
		width: 100%;
		position: sticky;
		z-index: 10000;
		top: 81rpx;
		background-color: #fff;
		/* border: #f23cff 1px solid; */
	}

	.catagery1 .tittle {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: space-around;
		font-size: 27rpx;
	}

	.catagery1 .tittle span span {
		/* content: ""; */
		display: inline-block;
		width: 10rpx;
		height: 10rpx;
		margin-left: 15rpx;
		/* margin-bottom: -2rpx; */
		border: 4rpx solid #474747;
		border-left: 2rpx solid transparent;
		border-top: 2rpx solid transparent;
		border-radius: 2rpx;
		transform: rotate(45deg);
		transition: .3s linear;
	}

	.catagery1 .tittle .active {
		color: #3c69ff;
		/* transform: rotate(-45deg); */
	}

	.catagery1 .tittle .active span {
		border-color: #3c69ff;
		border-left: 2rpx solid transparent;
		border-top: 2rpx solid transparent;
		transform: rotate(-135deg);
	}

	.tag {
		box-sizing: border-box;
		position: sticky;
		top: 130rpx;
		width: 100%;
		margin: 15rpx 0 10rpx 0;
		line-height: 100%;
		display: flex;
		justify-content: space-around;
		/* padding: 4rpx; */
		white-space: nowrap;
		border-radius: 10rpx;
		background-color: #ececec;
	}

	.tag .tag-item {
		display: inline-block;
		width: auto;
		min-width: 15%;
		padding: 0 15rpx;
		margin-left: 5rpx;
		font-size: 25rpx;
		text-align: center;
	}

	.tag .active {
		color: #3c69ff;
		background-color: #fff;
		border-radius: 8rpx;
	}

	.city-content {
		width: 100%;
		height: 40vh;
		position: relative;
		display: flex;
		font-size: 30rpx;
		background-color: #fff;
	}

	.city-content .item {
		flex: 1;
		height: 93%;
		display: flex;
		flex-direction: column;
		position: relative;
		text-indent: 50rpx;
		font-size: 27rpx;
		/* text-align: center; */
		overflow: hidden;
	}

	.city-content .item::after {
		content: "";
		height: 100%;
		width: 30rpx;
		background-color: #fff;
		position: absolute;
		z-index: 100000000;
		right: 0;
		top: 0;
	}

	/* .city-content .item:nth-child(2)::after{
		content: "";
		height: 100%;
		width: 30rpx;
		background-color: #aaaaff;
		position: absolute;
		right: 400rpx;
		top: 0;
	} */
	.city-content .item:nth-child(1) {
		background-color: #f7fffe;
	}

	.city-content .item .active {
		color: #3c69ff;
	}

	.city-content .item view {
		height: 50rpx;
		line-height: 50rpx;
	}

	.city button {
		width: 30%;
		height: 50rpx;
		float: right;
		font-size: 30rpx;
		line-height: 50rpx;
		margin-top: -5rpx;
		margin-right: 10rpx;
		color: white;
		background-color: #5e73ff;
	}

	.city::after {
		content: "";
		display: block;
		clear: both;
	}

	.price .tittle,
	.filter .tittle,
	.sort .tittle {
		padding: 15rpx 10rpx;
		font-size: 25rpx;
		color: #8a8a8a;
	}

	.price .main {
		/* box-shadow: 0 1rpx 7rpx 0 gray; */
	}

	.price .main span,
	.filter .main span,
	.sort .main span {
		float: left;
		display: inline-block;
		width: 30%;
		height: 50rpx;
		margin-left: 2.3%;
		margin-top: 15rpx;
		line-height: 50rpx;
		text-align: center;
		border-radius: 5px;
		background-color: #e6e6e6;
	}

	.price .main .active,
	.filter .main .active,
	.sort .main .active {
		background-color: #3c69ff;
		color: white;
	}

	.price .main::after,
	.filter .main::after,
	.sort .main::after {
		content: "";
		display: block;
		clear: both;
		margin-bottom: 25rpx;
	}

	.btn {
		display: flex;
		justify-content: space-around;
		margin-top: 10rpx;
		box-shadow: 0 -1rpx 7rpx 0 #efefef;
	}

	.btn button {
		width: 50%;
		border: none;
		outline: none;
		border-radius: 0rpx;
		background-color: #fff;
	}

	.btn button:nth-child(1) {
		color: #6d6d6d;
	}

	.btn button:nth-child(2) {
		color: #3c69ff;
	}

	.time .tittle {
		padding: 15rpx 10rpx;
		font-size: 25rpx;
		color: #8a8a8a;
	}

	.time .alldate .day {
		width: 13%;
		height: 100rpx;
		margin: 15rpx 0 15rpx 1.1%;
		box-sizing: border-box;
		padding: 15rpx 0;
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 5rpx;
		background-color: #efefef;
	}

	.time .alldate .day span {
		text-align: center;
	}

	.time .alldate .day span:nth-child(1) {
		flex: 2;
		font-size: 30rpx;
	}

	.time .alldate .day span:nth-child(2) {
		flex: 1;
		font-size: 20rpx;
		color: #616161;
	}

	.time .alldate::after {
		content: "";
		display: block;
		clear: both;
	}

	.time .alldate .active span,
	.time .active {
		background-color: #3c69ff !important;
		color: #fff !important;
	}

	.time .time-part {
		margin-top: 20rpx;
	}

	.time .time-part span {
		float: left;
		height: 50rpx;
		width: 15%;
		margin-left: 8%;
		margin-bottom: 15rpx;
		text-align: center;
		line-height: 50rpx;
		font-size: 30rpx;
		border-radius: 5rpx;
		background-color: #efefef;
	}

	.time .time-part::after {
		content: "";
		display: block;
		clear: both;
	}

	.filter .filter-content {
		height: 40vh;
		overflow: hidden;
	}

	.ct {
		width: 100%;
		margin-top: -10rpx;
		/* min-height: 40vh; */
		background-color: #fff;
		position: absolute;
	}

	.hidden {
		display: none;
	}
</style>
