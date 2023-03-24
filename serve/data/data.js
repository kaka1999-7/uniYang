const catagery = [{
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
]


const originPersonList = [{
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
]
const personList = [{
		id: 'person0',
		name: '杨大爷',
		bgcImg: '../../static/person/head3.webp',
		experienc: '从业1000年 · 1000000+人咨询',
		price: 250,
		originPrice: 300,
		oprPrice: 300,
		times: 1,
		level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
		serviceTime: "3400+小时",
		servicePeople: "1000000人",
		consultPeople: 1000000,
		carrerTime: "18年2月",
		fans: '1000人',
		tags: "情绪管理 | 个人成长 | 心里健康",
		location: '四川省广安市广安区',
		time: 50,
		accpetType: ['视频', '语音', '面对面'],
		tagList: ['海外专家', '职场发展', '情绪管理', '个人成长', '心里健康', '人际关系', '婚姻家庭', '恋爱情感', '情绪压力', '亲子教育',
			'性心理', '家庭关系'
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
				id: "consul-type1",
				isCurent: false
			},
			{
				tittle: "面对面",
				id: "consul-type2",
				isCurent: false
			},
			{
				tittle: "语音",
				id: "consul-type3",
				isCurent: false
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
		price: 450,
		originPrice: 500,
		oprPrice: 500,
		times: 1,
		level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
		serviceTime: "9600+小时",
		servicePeople: "10000人",
		consultPeople: 10000,
		carrerTime: "8年2月",
		fans: '1000人',
		tags: "婚姻家庭 | 个人成长 | 亲子教育",
		location: '四川省广安市前锋区',
		time: 50,
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
				id: "consul-type1",
				isCurent: false,
			},
			{
				tittle: "语音",
				id: "consul-type3",
				isCurent: false,
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
		price: 50,
		originPrice: 100,
		oprPrice: 100,
		times: 1,
		level: ['宇宙级心里医师', '一级心里咨询师/CPS助理'],
		serviceTime: "9+小时",
		servicePeople: "10人",
		consultPeople: 10,
		carrerTime: "10年2月",
		fans: '1000人',
		tags: "情绪管理 | 个人成长 | 人际关系",
		location: '湖北省武汉市江汉区',
		time: 50,
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
				tittle: "面对面",
				id: "consul-type2",
				isCurent: false,
			},
			{
				tittle: "语音",
				id: "consul-type3",
				isCurent: false,
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
		price: 650,
		originPrice: 700,
		oprPrice: 700,
		times: 1,
		level: ['宇宙级心里医师', '一级心里咨询师'],
		serviceTime: "888+小时",
		servicePeople: "909人",
		consultPeople: 909,
		carrerTime: "1000年2月",
		fans: '1000人',
		tags: "情绪管理 | 个人成长 | 人际关系",
		location: '湖北省武汉市江夏区',
		time: 50,
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
				tittle: "面对面",
				id: "consul-type2",
				isCurent: false,
			},
			{
				tittle: "语音",
				id: "consul-type3",
				isCurent: false,
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
module.exports = {
	catagery,
	originPersonList,
	personList
}
