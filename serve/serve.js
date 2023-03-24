const express=require('express')
const cors=require('cors')
const ws=require('nodejs-websocket')
const mysql = require('mysql')
// const sql=require('./sql')
const PORT = "3333"
const LOCALHOST=`127.0.0.1:${PORT}`
const serve=express()
const {catagery,personList,originPersonList} = require('./data/data.js')   //医师列表的赛选数据与医师列表
const {doctorList,accountList} = require('./data/account.js')   //医师登录后的页面与所有账号
const {mesAccList,messageList} = require('./data/message.js') 
const { json } = require('express')
serve.use(cors())
serve.get("/",(req,res)=>{
	res.end("nini")
})
serve.get("/physicians/catagery",(req,res)=>{
	res.json(catagery)
})
serve.get("/physicians/personlist",(req,res)=>{
	console.log('aa')
	res.json(originPersonList)
})
serve.get("/person/personlist",(req,res)=>{
	let {id}=req.query
	let result = personList.find(el => el.id === id)
	res.json(result)
})
serve.get("/doctor/doctorinfo",(req,res)=>{
	let {account}=req.query
	// console.log(account)
	let result = doctorList.find(el => el.account === account)
	res.json(result)
})
serve.get("/message/simplelist",(req,res)=>{
	let {account}=req.query
	let tt=JSON.parse(JSON.stringify(messageList))
	var temp=tt.filter(el=>{
		let flag=false
		el.mes.forEach(el=>{
			if(el.from===account){
				flag=true
			}
		})
		return flag
	})
	let aimAcc=[]
	temp.forEach(el=>{
		el.mes.forEach(e=>{
			if(e.from!=account&&aimAcc.indexOf(e.from)<0){
				aimAcc.push(e.from)
			}
		})
	})
	
	let result = mesAccList.filter(el=>{
		let flag=false
		aimAcc.forEach(e=>{
			if(e===el.account){
				flag=true
			}
		})
		return flag
	})
	res.json(result)
})
serve.get("/communicate",(req,res)=>{
	let {account,aimAccount}=req.query
	// console.log(account,aimAccount)
	let res1 = messageList.find(el => {
		let flag1=false
		let flag2=false
		el.mes.forEach(e=>{
			if(e.from===account){
				flag1=true
			}
			if(e.from===aimAccount){
				flag2=true
			}
		})
		return (flag1&&flag2)
	})
	let res2=mesAccList.find(el=>el.account===aimAccount)
	let result={
		...res1,
		...res2
	}
	// console.log(result)
	res.json(result)
})
serve.get("/login",(req,res)=>{
	let {account,password}=req.query
	let result = accountList.find(el => el.account===account&&el.password===password)
	res.json(result)
})
serve.listen(PORT,()=>{
	console.log("服务器以启动在"+PORT+"端口")
})

// 即时通信
let aclist=[]
	accountList.forEach(el=>{
		aclist.push({
			account:el.account,
			conn:null,
			isReady:false
		})
	})
ws.createServer(conn=>{
	conn.on('text',function(str){
		// console.log(aclist)
		// console.log("收到的信息为:"+str)
		if(str.indexOf('{')<0){
			aclist.forEach(el=>{
				if(el.account===str){
					el.isReady=true
					el.conn=conn
				}
			})
			// console.log(aclist)
		}else{
			let data=JSON.parse(str)
			// console.log(data)
			aclist.forEach(el=>{
				if(el.account===data.aimAccount&&el.conn&&el.isReady){
					el.conn.sendText(JSON.stringify(data.data))
					// console.log(el.account,data.aimAccount)
				}
				// if(el.conn){
				// 	el.conn.sendText(JSON.stringify(data.data))
				// 	console.log(aclist)
				// }
			})
			messageList.forEach(el=>{
				let flag1=false
				let flag2=false
				el.mes.forEach(e=>{
					if(e.from===data.aimAccount){
						flag1=true
					}
					if(e.from===data.data.from){
						flag2=true
					}
				})
				console.log(data.aimAccount,data.data)
				if(flag1&&flag2){
					el.mes.push(data.data)
					// console.log(el.mes)
				}
			})
			
		}
	})
	conn.on("close", function (code, reason) {
	    console.log("关闭连接",code)
	});
	conn.on("error", function (code, reason) {
	    console.log("异常关闭",code)
	});
}).listen(8787)

// 数据库
let connection = mysql.createConnection({
	host: 'localHost',
	user: 'root',
	password: '123456',
	port: 3306,
	database: 'yt'
})
// originPersonList.forEach(e=>{
// 	connection.query(`insert into  personInfoList value('${e.id}','${JSON.stringify(e)}');`)
// })

function insertAccount(accountList) {
	try {
		accountList.forEach(el => {
			let insert =`insert into account value("${el.account}","${el.password}","${el.type}","${el.picture}");`
				
			connection.query(insert, (err, res) => {
				
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
	connection.query("select*from messageList;", (err, res) => {
		let temp = []
		res.forEach(e => {
			temp.push({
				relevant: e.relevant,
				mes: JSON.parse(e.mes)
			})
		})
		messageList=temp
	})
	// return temp
}

function selectPersonList() {
	let temp = []
	connection.query("select*from personInfoList;", (err, res) => {
		// console.log(res)
		res.forEach(e => {
			temp.push(JSON.parse(e.info))
		})
		originPersonList=temp
	})
	// return temp
}
// selectPersonList()
// selectMessageList()
console.log("WebSocket建立于端口8787")