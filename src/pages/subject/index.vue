<template>

    <div class="subject-wrap">
        
        <!-- 背景图片随机加载 -->
        <CBg></CBg>

        <div class="questionform">
            <div class="title_bg">
                <img :src="dt_img" alt="">
                <span>{{question_index}}/10</span>
            </div>
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

</template>
<script>
import CBg from "@/components/CBg";
import store from "../../store/index";
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
        }
    },
    components: {
        CBg
    },
    created () {

       
    },
    computed: {
        proess_in(){
          return this.question_index * 10
      }
    },
    mounted () {
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
        showQuestion(){
            this.questionForm = this.questionslist[0];
            this.question_index = 0;
        },
        handleBtmClick(data){
            // console.log(data,"点击选项");
            if(data.text == this.questionForm.answer){
                data.checkmark = true;
            }else{
                data.close = true;
            }
            this.yes_no_option.forEach(function(obj){
                obj.isactive = true;
            });
            this.choice_option.forEach(function(obj){
                obj.isactive = true;
            })
            
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