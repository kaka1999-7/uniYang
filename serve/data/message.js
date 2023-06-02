const mesAccList = [
	{
		account: "doctor01",
		picture: "../../static/person/1.jpg",
		name: "杨医师",
		tittle: "不得不工作的意义到底是啥？",
		lastTime: "晚上 8:00",
	},
	{
		account: "doctor02",
		picture: "../../static/person/head1.jpg",
		name: "洋医师",
		tittle: "为了干饭啊",
		lastTime: "晚上 12:00",
	},
	{
		account: "member01",
		picture: "../../static/person/head3.webp",
		name: "成员1",
		tittle: "为了玩啊",
		lastTime: "晚上 11:00",
	},
	{
		account: "member02",
		picture: "../../static/person/head2.webp",
		name: "成员2",
		tittle: "为了玩啊",
		lastTime: "晚上 11:00",
	}
]
const messageList = [
	{
		relevant:"doctor02&doctor01",
		mes: [{
				id: "mes1",
				text: "哈哈哈！",
				from: "doctor02",
				headUrl: "../../static/person/head1.jpg",
			},
			{
				id: "mes2",
				text: "哈哈哈哈哈哈哈哈哈哈哈哈！",
				from: 'doctor01',
				headUrl: "../../static/person/1.jpg",
			},
			{
				id: "mes3",
				text: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
				from: 'doctor02',
				headUrl: "../../static/person/head1.jpg",
			},
			{
				id: "mes4",
				text: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
				from: 'doctor01',
				headUrl: "../../static/person/1.jpg",
			}
		]
	},
	{
		relevant:"member01&doctor01",
		mes: [
			{
					id: "mes1",
					text: "测试内容1",
					from: "member01",
					headUrl: "../../static/person/head3.webp",
				},
				{
					id: "mes2",
					text: "测试内容2",
					from: 'doctor01',
					headUrl: "../../static/person/1.jpg",
				}
		]
	},
	{
		relevant:"member02&doctor01",
		mes: [{
				id: "mes1",
				text: "呵呵！",
				from: "member02",
				headUrl: "../../static/person/head2.webp",
			},
			{
				id: "mes2",
				text: "呵呵呵呵呵呵呵呵呵呵！",
				from: 'doctor01',
				headUrl: "../../static/person/1.jpg",
			},
			{
				id: "mes3",
				text: "呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵",
				from: 'member02',
				headUrl: "../../static/person/head2.webp",
			},
			{
				id: "mes4",
				text: "呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵",
				from: 'doctor01',
				headUrl: "../../static/person/1.jpg",
			}
		]
	}
]
module.exports = {
	messageList,
	mesAccList
}
