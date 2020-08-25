<template>

    <div class="subject-wrap">
        <!-- 背景图片随机加载 -->
        <CBg></CBg>

        <div class="questionform" v-if="!fail && !success"> 
            <div class="title_bg">
                <img :src="dt_img" alt="">
                <span>{{question_index}}/10</span>
            </div>

            <div class="question_pro_ifo">
                <div class="question_proess">
                    <div class="proess_out">
                        <van-progress :percentage="proess_in" color="#59db08" stroke-width="10px" show-pivot="false" class="vanpro" />
                    </div>
                </div>
            </div>

            <!-- 加载题目 -->
            <div class="text-main2">
                <div class="main2_content" style="height:500px;overflow-y:auto">

                    <div class="showQuestion">
                        <div class="question_content" style="font-size:14px" v-html="questionForm.content"></div>
                        <div class="questio_option">
                            <p style="font-size:14px;" v-html="questionForm.option"></p>
                        </div>
                    </div>

                    <!-- 判断题 -->
                    <div class="select_judge" v-if="questionForm.type && questionForm.type.name =='判断题'">
                        <ul ref="btn_out1" id="btn_out1">
                            <li class="btn" 
                            v-for="(item,index) in yes_no_option"
                            :key="index"
                            >
                                <div class="loading-dock">
                                    <button class="submit" @click="handleBtmClick(item)" v-bind:disabled="item.isactive" :class="{wrong:item.close,correct:item.checkmark}">
                                        <span><van-icon name="success" v-if="item.checkmark"/></span>
                                        <span><van-icon name="cross"  v-if="item.close"/></span>
                                        {{item.text}}
                                    </button>
                                </div>                        
                            </li>

                        </ul>
                    </div>

                    <!-- 不是判断题 -->
                    <div
                        class="select_option"
                        v-if="questionForm.type && questionForm.type.name != '判断题'"
                    >
                        <ul ref="btn_out2" id="btn_out2">
                            <li class="btn"
                            v-for="(item,index) in choice_option"
                            :key="index"
                            >
                                <div class="loading-dock">
                                    <button class="submit" @click="handleBtmClick(item)" v-bind:disabled="item.isactive" :class="{wrong:item.close,correct:item.checkmark}">
                                        <span><van-icon name="success" v-if="item.checkmark"/></span>
                                        <span><van-icon name="cross"  v-if="item.close"/></span>
                                        {{item.text}}
                                    </button>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>


        <div class="result_fail" v-if="fail">            
            <c-ghost @outResetQuestionList="beginQuestionClick"></c-ghost>
        </div>

        <div class="result_success" v-if="success">
            <c-box @outResetQuestionList="beginQuestionClick" @outQuestionList="hideSubject"></c-box>
        </div>

        <van-notify id="van-notify" />

    </div>

</template>
<script>
import CBg from "@/components/CBg";
import store from "../../store/index";
import Notify from '@/../static/dist/notify/notify'; //@是mpvue的一个别名，指向src目录
import CGhost from "@/components/CGhost";
import CBox from "@/components/CBox";

export default{
    data () {
        return {
            dt_img:'/static/images/dt.png',
            question_index: 0, //当前展示的第几题
            params: {
                subject_id: 20,
                term_id: 0,
                type_ids: [],
                version_id: 0,
                difficulty: 0,
                knowledge_points: [],
                page: 1,
                chapters: [],
                abilities: [],
                teacher_id: 0
            }, //查询条件
            question_types_xx: [85,88], // 单选和判断 (小学的题目类型)
            uid:"37",
            u_yes_num: 0,      //当前用户作对的题目数量
            u_gold_count: 0,
            questionForm: {},  //页面展示题目的实体
            questionslist: [], //返回的题库

            yes_no_option:[
                {text: "对",isactive:false,checkmark:false,close:false},
                {text: "错",isactive:false,checkmark:false,close:false}
            ],
            choice_option:[
                {text: "A",isactive:false,checkmark:false,close:false},
                {text: "B",isactive:false,checkmark:false,close:false},
                {text: "C",isactive:false,checkmark:false,close:false},
                {text: "D",isactive:false,checkmark:false,close:false}
            ],
            checkmark: false,      // 对号的图标  默认不显示
            close: false,          // 查号的图标  默认不显示
            u_level: 0,
            fail: false,    //挑战失败
            success: false,   //挑战成功

        }
    },
    components: {
        CBg,
        CGhost,
        CBox
    },
    created () {

       
    },
    computed: {
        proess_in(){
          return this.question_index * 10
      }
    },
    mounted () {
        let _that = this;
        this.params.term_id = store.state.user.termId;
        this.params.difficulty = store.state.currSubject.difficulty;
        console.log('当前题目租的params.....',this.params);
        this.uid = store.state.user.uid;
        this.u_gold_count = store.state.user.money;

        this.$httpWX.post({
            url: '/api/v1/teacher-questions/error/query',
            data: this.params
        }).then(res => {
            this.questionslist = [];
            console.log(res,"试题加载完毕。。。。。。。")
            res.data.map((item,index)=>{
                // console.log(item.content)
                item.content = _that.imgTagAddStyle(item.content);
                if(item.content){
                    item.content = item.content.replace(new RegExp('http://daincy.iok.la:81','g'),'https://api.tk.ejex.net');
                }
                if(item.option){
                    item.option = item.option.replace(new RegExp('http://daincy.iok.la:81','g'),'https://api.tk.ejex.net');
                }
                if(item.answer[0]){
                    if(item.answer[0].indexOf('对')>-1 ||item.answer[0].indexOf('错')>-1){
                        item.type = {
                            name:'判断题'
                        }
                    }else{
                        item.type = {
                            name:'单选题'
                        }
                    }
                }
            });
            this.questionslist = res.data;
            this.showQuestion();
        })
    },
    methods: {
        beginQuestionClick(){
            let _that = this;
            this.fail = false;
            this.success = false;
            this.u_yes_num = 0;

            this.params.term_id = store.state.user.termId;
            this.params.difficulty = store.state.currSubject.difficulty;
            console.log('当前题目租的params.....',this.params);
            this.uid = store.state.user.uid;
            this.u_gold_count = store.state.user.money;

            this.$httpWX.post({
                url: '/api/v1/teacher-questions/error/query',
                data: this.params
            }).then(res => {
                this.questionslist = [];
                console.log(res,"试题加载完毕。。。。。。。")

                res.data.map((item,index)=>{
                    item.content = _that.imgTagAddStyle(item.content);

                    if(item.content){
                        item.content = item.content.replace(new RegExp('http://daincy.iok.la:81','g'),'https://api.tk.ejex.net');
                    }
                    if(item.option){
                        item.option = item.option.replace(new RegExp('http://daincy.iok.la:81','g'),'https://api.tk.ejex.net');
                    }
                    if(item.answer[0]){
                        if(item.answer[0].indexOf('对')>-1 ||item.answer[0].indexOf('错')>-1){
                            item.type = {
                                name:'判断题'
                            }
                        }else{
                            item.type = {
                                name:'单选题'
                            }
                        }
                    }
                });
                this.questionslist = res.data;
                this.showQuestion();
            })
        },
        showQuestion(){
            this.questionForm = this.questionslist[0];
            this.question_index = 0;
        },
        handleBtmClick(data){
            // console.log(data,"点击选项");
            if(data.text == this.questionForm.answer){ //回答正确
                data.checkmark = true;
                this.u_yes_num += 1;
                this.updataUserData();  //更新用户成绩
                this.addUserQuestion(this.uid,this.questionForm._id,true) //记录正确答案
            }else{
                data.close = true; //回答错误
                this.addUserQuestion(this.uid,this.questionForm._id,false) //记录错误答案
            }

            this.yes_no_option.forEach(function(obj){
                obj.isactive = true;
            });
            this.choice_option.forEach(function(obj){
                obj.isactive = true;
            })
            
            //切换下一题
            this.nextQuestion();
        },
        updataUserData(){
             if (this.u_yes_num == 10) {
                this.u_level += 1;
            }

            this.u_gold_count += 10;
            var studentInfo = {
                studentId: this.uid,
                level: this.u_level,
                goldCount: this.u_gold_count
            };

            store.commit("SET_GOLD",studentInfo)

            this.$httpWX.post_a({
                url: '/api/systemconfig/student/update_student_levelgold',
                data: studentInfo
            }).then(res => {
                console.log(res,"更新等级和金币")
            })

            // 存入store显示
            // this.$store.commit("SAVE_GAME")
        },

        addUserQuestion(uid, _id, type){ //记录答案信息
            if(type){
                this.$httpWX.post_a({
                    url:'/api/systemconfig/student/add_student_point_yes?userId='+uid+'&titleId='+_id
                }).then(res => {
                    console.log('回答正确...',res);
                })
            }else{
                //添加到错题
                var StudentPointNo = {
                    studentId: uid,
                    titleId: _id,
                    subjectId: this.questionForm.subject?this.questionForm.subject.id:'',
                    typeId: this.questionForm.type?this.questionForm.type.id:'',
                    difficulty: this.questionForm.difficulty,
                    versionId: 0,
                    termId: this.questionForm.term?this.questionForm.term.id:''
                };
               
                this.$httpWX.post_a({
                    url:'/api/systemconfig/student/add_student_point_no',
                    data:StudentPointNo
                }).then(res => {
                    console.log('回答错误...',res);
                })
            }
        },

        //切换下一个题目
        nextQuestion() {
            let _that = this;
            Notify({ type: 'primary', message: '下一题' ,onClose:function(){
                _that.yes_no_option.forEach(function(obj){
                    obj.isactive = false;
                    obj.checkmark = false;
                    obj.close = false;
                });
                _that.choice_option.forEach(function(obj){
                    obj.isactive = false;
                    obj.checkmark = false;
                    obj.close = false;
                });
                _that.question_index += 1;
                if (_that.question_index == 10) {
                    _that.showResult();
                } else {
                    _that.questionForm = _that.questionslist[_that.question_index];
                }
            }});
        },

        //做完10道题的结果
        showResult(){
            this.questionslist = null;
            this.question_index = 0;
            console.log('最终结果是：'+ this.u_yes_num)
            if (this.u_yes_num == 10) {
                console.log("全部答对");
                this.success = true;
                //激活下一关
                // this.$store.dispatch("activenewleve", this.$store.state.currSubjectId);
                this.activenewleve();
            } else {
                console.log("继续加油");
                this.fail = true;
            }
        },

        //激活下一关
        activenewleve(){
            // 当前关卡的名字
            var name = store.state.currSubject.name;
            // 设置当前关卡为已通过
            if(store.state.currSubject.learning ===1){
                store.state.currSubject.learning = 2;
                //当前 关卡的 Index
                var pIndex = ''
                store.state.subjectList[store.state.currSubjectId].list.forEach((obj, index) => {
                    if (obj.name == name) {
                        pIndex = index;                  
                    }
                });
                if(pIndex<store.state.subjectList[store.state.currSubjectId].list.length -1){
                    // console.log("比较。。。。。");
                    store.state.currSubject = store.state.subjectList[store.state.currSubjectId].list[pIndex + 1];
                    store.state.currSubject.learning = 1;
                    // Vue.prototype.$popUp('激活关卡', state.currSubject.name);
                    // Notify({ type: 'success', message: '激活关卡'+ store.state.currSubject.name });
                }else{
                    console.log('最后一题。。。。')
                    return
                }
            }    
        },

        imgTagAddStyle (htmlstr) {
            // 正则匹配所有img标签
            // var regex0 = new RegExp("(i?)(\<img)([^\>]+\>)","gmi");
            // 正则匹配不含style="" 或 style='' 的img标签
            // eslint-disable-next-line no-useless-escape
            var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", 'gmi')
            // 给不含style="" 或 style='' 的img标签加上style=""
            htmlstr = htmlstr.replace(regex1, '$2 style=""$3')
            // console.log('增加style=""后的html字符串：' + htmlstr)
            // 正则匹配含有style的img标签
            // eslint-disable-next-line no-useless-escape
            var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", 'gmi')
            // 在img标签的style里面增加css样式(这里增加的样式：display:block;max-width:100%;height:auto;border:5px solid red;)
            htmlstr = htmlstr.replace(regex2, '$2max-width:100%;height:auto;$3')
            // console.log('在img标签的style里面增加样式后的html字符串：' + htmlstr)
            return htmlstr
        }

    }
}
</script>

<style>
.question_tile {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}
.title_bg {
    position: static;
    margin: 0 auto;
    width: 100%;
    /* height: 1.2rem; */
    font-size: 19.2px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
}
.title_bg img{width: 100px;vertical-align: middle;height:25px}
.title_bg span{color: #fff;font-size: 24px;vertical-align: middle;}
/* 进度条样式 */
.question_pro_ifo{
    /* padding:0 8px */
}
.question_proess{
    border-radius: 8px;
    padding:6.4px 6.4px;
    width: 90%;
    height: 26.7px;
    position: relative;
    background: #f6bc1c;
    overflow: hidden;
    margin: 0 auto;
}
.proess_out{
    width: 100%;
    background: #a55a2b;
    height: 18.4px;
    /* padding: 1.6px 6.4px; */
    border-radius: 8px;
    margin-top: 2.5px;
    padding-top: 5px;
}
.vanpro .van-progress{width: 91%;margin: 0 auto;}
.showQuestion {
    background-color: #ffffff;
    margin: 2%;
    border-radius: 10px;
    padding: 16px;
    line-height: 32px;
}
.showQuestion img{
    width: 100%;
}
.showQuestion .question_content img{
    width: 100%!important;
}
.questio_option{
    margin-top: 32px;
}


.select_judge {
    width: 100%;
    margin: auto;
}
.select_judge ul {
    display: table;
    margin: 0 auto;
}
.select_judge ul li {
    text-align: center;
    float: left;
    margin: 48px;
}


.select_option {
    width: 100%;
    margin: auto;
}
.select_option ul {
    display: table;
    margin: 0 auto;
}
.select_option ul li {
    text-align: center;
    float: left;
    margin: 16px;
}

.btn {
    width: 50px;
    height: 50px;
}





.loading-dock {
    width: 5em;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

button.submit {
    cursor: pointer;
    width: 50px;
    height: 50px;
    font-size: 17px;
    font-weight: 600;
    color: #56a1f1;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #56a1f1;
    transition: all 0.2s;
    letter-spacing: 1px;
    font-family: "Helvetica Neue", sans-serif;
}

button.submit span {    
    font-size: 16px;    
}

button.submit.correct {
    animation: fade-to-original 0.5s linear;
}
button.submit.correct {
    background: #58c996;
    color: white;
    border: 2px solid #58c996;
}

button.submit.wrong {
    animation: fade-to-original 0.5s linear;
}
button.submit.wrong {
    background: #ea2a3c;
    color: white;
    border: 2px solid #ea2a3c;
}
</style>