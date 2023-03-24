const doctorList=[
	{
		name: "杨大爷",
		account:'doctor01',
		type:"doctor",
		password:"123456",
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
	}
]
const accountList=[{
					account:"admin01",
					password:"123456",
					type:"administrator",
					picture: "../../static/person/1.jpg",
				},
				{
					account:"doctor01",
					password:"123456",
					type:"doctor",
					picture: "../../static/person/1.jpg",
				},
				{
					account:"doctor02",
					password:"123456",
					type:"doctor",
					picture: "../../static/person/head1.jpg",
				},
				{
					account:"member01",
					password:"123456",
					type:"member",
					picture: "../../static/person/head3.webp",
				},
				{
					account:"member02",
					password:"123456",
					type:"member",
					picture: "../../static/person/head2.webp",
				},
			]
module.exports={
	doctorList,
	accountList,
	
}