<template>
	<view class="content">
		<view class="log">
			<image src="../../static/logo.png" mode=""></image>
			<text>世界和我爱着你</text>
		</view>
		<view class="form">
			<uni-forms ref="form" :modelValue="formData">
				<uni-forms-item label="账号" name="account">
					<uni-easyinput type="text" @blur="checkacc" v-model="formData.account" placeholder="请输入账号" />
					<text>{{formData.accmes}}</text>
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput v-model="formData.password" @blur="checkpas" type="password" placeholder="请输入密码" />
					<text>{{formData.pasmes}}</text>
				</uni-forms-item>
			</uni-forms>
			 <checkbox :checked="formData.aggrement" @click="changeCheckbox">
				 同意杨大爷
				<a href="javaScript:void(0);">《用户协议》</a>与
				<a href="javaScript:void(0);">《隐私政策》。</a>
			 </checkbox>
			<button @click="submit" class="sub">登录</button>
		</view>
		<view class="bottom">
			<text>其他方式登录</text>
			<view class="hr"></view>
			<view class="elselog" @click="changeType">
				<image src="../../static/login/qq.png" mode=""></image>
				<image src="../../static/login/wx.png" mode=""></image>
				<image src="../../static/login/weibo.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					account: "",
					accmes: "",
					password: "",
					pasmes: "",
					aggrement: false,
					loginType:"phone"
				},
				registedPerson:[{
					account:"admin01",
					password:"123456",
					type:"administrator"
				},
				{
					account:"doctor01",
					password:"123456",
					type:"doctor"
				},
				{
					account:"doctor02",
					password:"123456",
					type:"doctor"
				},
				{
					account:"member01",
					password:"123456",
					type:"member"
				},
				{
					account:"member02",
					password:"123456",
					type:"member"
				},
				{
					account:"member02",
					password:"123456",
					type:"member"
				}]
			}
		},
		methods: {
			submit() {
				if(!this.formData.aggrement){  //勾选协议
					uni.showModal({
						content:"请同意协议！"
					})
					return
				}
				let mem = this.registedPerson.find(el=>{  //查询信息是否正确
					return (this.formData.account===el.account&&this.formData.password===el.password)
				})
				if(mem){
					uni.setStorage({
						key:"ydy-memberMes",
						data:{
							isLogin:true,
							account:mem.account,
							type:mem.type
						}    //第一个参数为是否登录，第二个参数为用户名,第三个参数为用户类别
					})
					uni.switchTab({
						url:"/pages/index/index"
					})
				}else{
					uni.showModal({
						content:"账号或密码错误！"
					})
				}
				
			},
			checkacc() {
				if (this.formData.account.trim() === "") {
					this.formData.accmes = "账号不能为空"
				} else {
					this.formData.accmes = ""
				}
			},
			checkpas() {
				if (this.formData.password.trim().length < 5 || this.formData.password.trim().length > 15) {
					this.formData.pasmes = "密码为5-15个数字或字符"
				} else {
					this.formData.pasmes = ""
				}
			},
			changeCheckbox() {
				this.formData.aggrement=!this.formData.aggrement
			},
			changeType(){
				
			}
		}
	}
</script>

<style scoped>
	.content {
		margin: 0 auto;
	}

	.log {
		/* border: #007AFF solid 1px; */
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 100rpx;
	}

	.log image {
		display: block;
		width: 150rpx;
		height: 150rpx;
		margin-bottom: 10rpx;
	}

	.log text {
		font-size: 15rpx;
		color: #555555;
	}

	.form {
		margin-top: 100rpx;
		padding: 30rpx;
	}

	.form .sub {
		width: 500rpx;
		height: 90rpx;
		margin-left: 85rpx;
		/* margin-top: -50rpx; */
		line-height: 90rpx;
		border-radius: 45rpx;
		color: white;
		background-color: #00aaff;
	}

	.form text {
		position: absolute;
		font-size: 25rpx;
		color: rgb(255, 0, 0, .8);
	}

	.bottom{
		margin-top: 130rpx;
	}
	.bottom text{
		color: #C0C0C0;
		font-weight: 15rpx;
		margin-left: 35%;
	}
	.bottom .elselog{
		display: flex;
		justify-content: space-around;
		width: 300rpx;
		position: relative;
		top: 20rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	.bottom .elselog image{
		width: 80rpx;
		height: 80rpx;
	}
	.bottom .hr{
		display: block;
		width: 80%;
		margin-left: 10%;
		height: 1rpx;
		background-color: #C0C0C0;
	}
	checkbox {
		display: inline-block;
		width: 100%;
		transform: scale(.6);
		margin-left: -80rpx;
		word-wrap: ;
	}

	checkbox a {
		display: inline;
		color: #007AFF;
	}
</style>
