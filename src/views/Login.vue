<!--
 * @Author: your name
 * @Date: 2021-12-06 12:56:04
 * @LastEditTime: 2022-07-04 10:32:33
 * @LastEditors: yuanhao
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vueTemplate\src\views\Login.vue
-->
<template>
	<div class='jw_loginBg'>
        <div class="jw_loginTitle">{{loginTitle}}</div>
        <a-form :form='form' class='jw_loginForm' :label-col="{ span: 6 }" :wrapper-col="{ span: 15 }" hideRequiredMark>
            <div class='jw_loginText'>登录</div>
            <div class="jw_formItem">
                <a-form-item label="账号">
                    <a-input 
                        placeholder="请输入账号！" 
                        allowClear 
                        v-decorator="['username',{ rules: [{ required: true, message: '请输入账号！' }] }]"
                    >
                        <!-- <icon-font slot="prefix" type="icon-a-shouye61" /> -->
                    </a-input>
                </a-form-item>
                <a-form-item label="密码">
                    <a-input-password  
                        placeholder="请输入密码！" 
                        allowClear 
                        v-decorator="['password',{ rules: [{ required: true, message: '请输入密码！' }] }]"
                    />
                </a-form-item>
            </div>
            <a-button type="primary" class="jw_loginBtn" block size='large' :loading="loading" @click="login">登录</a-button>
        </a-form>

        <a-row class="jw_footer" :gutter="[24, 8]">
            <a-col class="jw_company">{{staticData.company}}</a-col>
            <a-col>
                <a-space :size="16">
                    <span>地址：{{staticData.addr}}</span>
                    <span>电话：{{staticData.phone}}</span>
                    <span>传真：{{staticData.fax}}</span>
                    <span>邮箱：{{staticData.eMail}}</span>
                </a-space>
            </a-col>
        </a-row>
	</div>
</template>
<script>
const staticData = window.staticContentConfig.staticData
export default {
	data() {
		return {
			form: this.$form.createForm(this),
            loginTitle: '综合能源管理平台',
            loading: false,
            staticData
		}
	},
    mounted() {
        localStorage.clear()
    },
	methods: {
		login(){
			this.form.validateFields((err, values) => {
                if (!err) {
					var params = this.form.getFieldsValue()
					this.$post(this.$api.login.login,params).then(res=>{
                        let {success} = res
                        if(success) {
                            this.$router.push({name:'index'});
                            this.getEnum()
                        }
					})
				}
			})
		},
        /**
         * @description: 获取枚举值
         * @param {*}
         * @return {*}
         */
        getEnum() {
            let urlList = this.$api.enum
            for(let key in urlList) {
                this.$get(urlList[key]).then(res => {
                    let { success, data } = res
                    key = key.replace('Url', '')
                    if(success) {
                        localStorage[key] = JSON.stringify(data) 
                    }
                })
            }
        }
	}
};
</script>
<style scoped lang='less'>
@import '~@a/less/login/index.less';
</style>
