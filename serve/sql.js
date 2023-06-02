const mysql = require('mysql')
const {
	originPersonList
} = require("./data/data")

let acc = [
	{
		account: "admin01",
		password: "123456",
		type: "administrator",
		picture: "../../static/person/1.jpg",
	},
	{
		account: "doctor01",
		password: "123456",
		type: "doctor",
		picture: "../../static/person/1.jpg",
	},
	{
		account: "doctor02",
		password: "123456",
		type: "doctor",
		picture: "../../static/person/head1.jpg",
	},
	{
		account: "member01",
		password: "123456",
		type: "member",
		picture: "../../static/person/head3.webp",
	},
	{
		account: "member02",
		password: "123456",
		type: "member",
		picture: "../../static/person/head2.webp",
	},
	{
		account: "tt",
		password: "tt",
		type: "tt",
		picture: "tt",
	},
]
let mesList = [
	{
		relevant: "doctor02&doctor01",
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
		relevant: "member01&doctor01",
		mes: [{
				id: "mes1",
				text: "呵呵！",
				from: "member01",
				headUrl: "../../static/person/head3.webp",
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
				from: 'member01',
				headUrl: "../../static/person/head3.webp",
			},
			{
				id: "mes4",
				text: "呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵",
				from: 'doctor01',
				headUrl: "../../static/person/1.jpg",
			}
		]
	},
	{
		relevant: "member02&doctor01",
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
let connection = mysql.createConnection({
	host: 'localHost',
	user: 'root',
	password: '123456',
	port: 3306,
	database: 'yt'
})
function insertAccount(accountList) {
	try {
		accountList.forEach(el => {
			let insert =`insert into account value("${el.account}","${el.password}","${el.type}","${el.picture}");`
			connection.query(insert, (err, res) => {
				console.log(res)
			})
		})
	} catch (e) {
		//TODO handle the exception
	}
}

function insertMessage(mesList) {
	try {
		mesList.forEach(el => {
			let insert = `insert into messageList value("${el.relevant}",'${JSON.stringify(el.mes)}');`
			connection.query(insert, (err, res) => {
				console.log(res)
			})
		})
	} catch (e) {
		//TODO handle the exception
	}
}

function selectMessageList() {
	let temp = []
	connection.query("select*from messageList;", (err, res) => {
		res.forEach(e => {
			temp.push({
				relevant: e.relevant,
				mes: JSON.parse(e.mes)
			})
		})

	})
	return temp
}

function selectPersonList() {
	let temp = []
	connection.query("select*from personInfoList;", (err, res) => {
		// console.log(res)
		res.forEach(e => {
			temp.push(JSON.parse(e.info))
		})
	})
	return temp
}
// selectPersonList()
// console.log(selectPersonList())
// selectMessageList()
module.exports = {
	connection,
	insertAccount,
	insertMessage,
	selectPersonList
}
connection.end()
