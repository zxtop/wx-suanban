<template>
    <div id="app">
        <div class="container-user">

            <div v-show="isLog" class="user-panle-log" :class="{'show-in':isLog}">
                <p style="padding:20px;text-align:center">用户登录</p>
                <form>
                    <div class="user-message" style="padding:0px 20px">
                        <van-field
                            :value="formValidate.userMobile"
                            placeholder="请输入手机号"
                            border="true"
                            @change="changemobile"
                            required
                        />
                        <div style="margin-bottom:20px"></div>
                        <van-field
                            :value="formValidate.passWord"
                            placeholder="请输入密码"
                            border="true"
                            @change="changepasword"
                             type="password"
                             required
                        />
                        <div style="margin-bottom:20px"></div>

                    </div>

                    <div>
                        <van-button type="primary" @click="handleSubmit('formValidate')" customStyle="background:#805c4f;color:#fff;border-color:#6b4c41;border-radius:3px;height:30px;margin-right:10px" >登录</van-button>
                        <span>还没注册?</span> <span style="color:blue" @click="changePanle()">点击注册</span>
                    </div>

                </form>

                <div class="user_visitor" style="margin-bottom:20px">
                    <span style="color:#E88D35" @click="handleVisitor">游客登录</span>
                </div>

            </div>

            <div v-show="!isLog" class="user-panle-reg" :class="{'show-in':!isLog}">
                <p style="padding:20px;text-align:center">用户注册</p>
                
                <form>
                    <div class="user-message" style="padding:0px 20px">
                        <van-field
                            :value="regValidate.userMobile"
                            placeholder="请输入手机号"
                            border="true"
                            @change="regchangmobile"
                            required
                        />
                        <div style="margin-bottom:20px"></div>
                        
                        <van-field
                            :value="regValidate.userEmail"
                            placeholder="请输入邮箱"
                            border="true"
                            @change="regchangemail"
                            required
                        />
                        <div style="margin-bottom:20px"></div>

                        <van-field
                            :value="regValidate.passWord"
                            placeholder="请输入密码"
                            border="true"
                            @change="regchangepassword"
                            required
                            type="password"
                        />
                        <div style="margin-bottom:20px"></div>

                        <van-field
                            :value="regValidate.passwdCheck"
                            placeholder="请再次输入密码"
                            border="true"
                            @change="regchangecheck"
                            required
                            type="password"
                        />
                        <div style="margin-bottom:20px"></div>

                        <van-field
                            :value="regValidate.nickName"
                            placeholder="姓名"
                            border="true"
                            @change="regchangename"
                        />
                        <div style="margin-bottom:20px"></div>

                    </div>

                    <div>
                        <van-button type="primary" @click="handleSubmit('regValidate')" customStyle="background:#805c4f;color:#fff;border-color:#6b4c41;border-radius:3px;height:30px;margin-right:10px">提交</van-button>
                        <span>已有账号?</span> <span style="color:blue" @click="changePanle()">点击登录</span>
                    </div>
                    <div style="margin-bottom:20px"></div>


                </form>
                
            </div>

        </div>
        <van-toast id="van-toast" />
    </div>
</template>

<script>
import store from '../store/index'
import Toast from '@/../static/dist/toast/toast'
export default {
    data () {
        return {
            formValidate: {
                userMobile:'',
                passWord: '',
                userType:'user'
            },
            loading:false,
            isLog:true,
            regValidate:{
                userMobile:'',
                userEmail:'',
                passWord:'',
                passwdCheck:'',
                nickName: "",
                userType: "user"
            },
            message:true
        }
    },
    methods: {
        changemobile(event){
            this.formValidate.userMobile = event.mp.detail;
        },
        changepasword(event){
            this.formValidate.passWord = event.mp.detail;
        },
       
        regchangmobile(event){
            this.regValidate.userMobile = event.mp.detail;
        },
        regchangemail(event){
            this.regValidate.userEmail = event.mp.detail;
        },
        regchangepassword(event){
            this.regValidate.passWord = event.mp.detail;
        },
        regchangecheck(event){
            this.regValidate.passwdCheck = event.mp.detail;
        },
        regchangename(event){
            this.regValidate.nickName = event.mp.detail;
        },
        handleSubmit (name) {
            if(name == 'formValidate'){
                if(!this.formValidate.userMobile || !this.formValidate.passWord){
                    Toast('用户名或密码不能为空');
                    return
                }
                store.dispatch("Login",this.formValidate)
                .then((value)=>{
                    if(value.result == 'success'){
                        this.message = false;
                        this.$emit('input',this.message);
                        Toast.success('登录成功');

                        //返回登录信息----记录用户名字和用户id
                        store.commit('LOGIN_ID_NAME',value.user);

                        //年级 学期选择
                        //存储用户设置

                    }else{
                        Toast.fail(value.message);
                    }
                    
                });

            }else{

               if(!this.regValidate.userMobile ||!this.regValidate.userEmail ||!this.regValidate.passWord ||!this.regValidate.passwdCheck){
                    Toast('账号密码不能为空');
                    return
                }
                let regvalue = this.regValidate;
                this.$httpWX.post_a({
                    url:'/api/user/userReg',
                    data:regvalue
                }).then(res => {
                    if(res.result == 'success'){
                        //注册成功
                        Toast.success(res.message);
                        this.formValidate.userMobile = this.regValidate.userMobile;
                        this.regValidate.userMobile = '';
                        this.regValidate.userEmail = '';  
                        this.regValidate.passWord = '';
                        this.regValidate.passwdCheck = '';
                        this.regValidate.nickName = '';
                        this.isLog = !this.isLog;
                    }else{
                        Toast.fail(res.message);
                    }
                })
                .catch(error=>{
                    this.$Message.error('注册失败');
                })

                
            }
        },
        handleReset (name) {
            if(name == 'formValidate'){
                this.formValidate.passWord ='';
                this.formValidate.userMobile = '';
            }
            if(name == 'regValidate'){
                
                this.regValidate.userMobile = '';
                this.regValidate.userEmail = '';
                this.regValidate.passWord = '';
                this.regValidate.passwdCheck = '';
                this.regValidate.nickName = '';

            }
        },
        changePanle(){
            this.isLog = !this.isLog;
            
            this.handleReset('formValidate');
            this.handleReset('regValidate');
        },
        handleVisitor(){
            this.$emit('getVisitor');
            store.dispatch('saveuserId',-1)
        }
        
    }
}
</script>

<style scoped>
.container-user .user-panle-reg,.container-user .user-panle-reg{
  opacity: 0;
}
.container-user .show-in{
  animation: go_in 0.5s;
  opacity: 1;
  visibility: visible;
}

@keyframes go_in{
  0%{opacity: 0;}
  50%{opacity: 0.5;}
  100%{opacity: 1;}
}
</style>
