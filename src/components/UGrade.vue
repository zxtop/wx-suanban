<template>
    <form>
        
        <span>请选择年级：</span>
        <picker @change="handlePickerChange" :value="selectedIndex" :range="messages" style="display:inline-block">
            <view class="picker">
                <span style="display:inline-block;background:#e88d35;border-radius:5px;color:#fff;padding:5px 10px;border-width:3px;border-color:#d0853e">{{ messages[selectedIndex] }}</span>
            </view>
        </picker>

        <div style="margin-top:20px"></div>
        <span>请选择学期：</span>
        <picker @change="handletermChange" :value="termIndex" :range="temessages" style="display:inline-block">
            <view class="picker">
                <span style="display:inline-block;background:#e88d35;border-radius:5px;color:#fff;padding:5px 10px;border-width:3px;border-color:#d0853e">{{ temessages[termIndex] }}</span>
            </view>
        </picker>
        <div style="margin-top:15px"></div>
        <div class="form_btn" style="margin-bottom:15px">
            <van-button type="primary" @click="handleSubmit()" customStyle="margin-right:10px;border-radius:3px;background-color:#805c4f;border-color:#6b4c41;height:30px;color:#fff">提交</van-button>
        </div>
    </form>
    
</template>
<script>
import store from '../store/index';
import stateGradeSemester from '@/utils/stateGradeSemester';
// import {SetUserGradeTemId,getUserLevel} from '@/api/user';
    export default {
        data () {
            return {
                selectedIndex: 0,
                termIndex:0,
                messages: [],
                temessages:[],
                isAble:true,
                catchTerm:[]

            }
        },
        watch: {
          selectedIndex:{  
                handler:function(val,oldval){  
                    let curLabel = ''
                    this.data_grade.map((item,index)=>{
                        if(val == item.value){
                            curLabel = item.label
                        }
                    })
                    let cur_data_term = [];
                    this.temessages = [];
                    this.catchTerm.map((item,index)=>{
                        if(item.label.indexOf(curLabel)!==-1){
                            cur_data_term.push(item);
                            this.temessages.push(item.label);
                        }
                    });
                },  
                deep:true  //对象内部的属性监听，也叫深度监听  
            }
        },
        created () {
            let data_grade = [];
            let data_term = [];
            let data_catch = [];
            stateGradeSemester.stateGradeSemester.map((item,index)=>{
                item.grade.map((g_item,g_index)=>{
                    data_grade.push({
                        value:g_item.id,
                        label:g_item.name
                    })
                    this.messages.push(g_item.name)
                })

                item.term.map((t_item,t_index)=>{
                    data_term.push({
                        value:t_item.id,
                        label:t_item.name
                    });
                    data_catch.push({
                        value:t_item.id,
                        label:t_item.name
                    })
                    this.temessages.push(t_item.name)
                })
            });

            this.data_grade = data_grade;
            this.data_term = data_term;
            this.catchTerm = data_catch;

        },
        methods: {
            handlePickerChange (e) {
                this.selectedIndex = e.mp.detail.value;
            },
            handletermChange(e){
                this.termIndex = e.mp.detail.value;
            },
            handleSubmit () {
                //提交成功后提交用户信息
                let obj = {
                    currId:store.state.currId,
                    currNickName:store.state.currNickName,
                    gradeId:this.selectedIndex,
                    termId:this.termIndex
                }

                let objId = {
                    userId:store.state.currId,
                    gradeId:this.selectedIndex,
                    termId:this.termIndex
                }
                
                this.$httpWX.post_a({
                    url:'/api/systemconfig/student/update_student_info',
                    data:objId
                }).then(res => {
                    if(res.result == 'true'){
                        this.$httpWX.post_a({
                            url:'/api/systemconfig/student/student_info?userId='+store.state.currId
                        }).then(res=>{
                            console.log(res,'dddddd');
                            let studentInfo = {
                                studentId: store.state.currId,
                                level: res.student.level,
                                goldCount: res.student.gold_count
                            };
                            store.commit("SET_GOLD",studentInfo);
                            store.dispatch('setusergrade',obj);
                        })
                    }else{
                        //游客登录
                        let studentInfo = {
                            studentId: store.state.currId,
                            level: 1,
                            goldCount: 3000
                        };
                        store.commit("SET_GOLD",studentInfo);
                        store.dispatch('setusergrade',obj);
                    }
                })


                //提交后返回主页面
                this.$emit('input',false)
            }
        }
    }
</script>
