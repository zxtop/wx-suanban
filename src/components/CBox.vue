<template>
    <div class="open-body">
        <div class="wrapper">

            <div class="bg rotate">
                <img src="../assets/images/light.png" alt="">
            </div>

            <div class="open-has" ref="open_has" :class="{opened:isclick}">

                <h3 class="title-close">
                    <span class="user">闯关成功</span>您获得了一个宝箱
                </h3>

                <h3 class="title-open">
                    恭喜你，
                    <br />成功领取
                    <span class="user">奖励</span>
                </h3>

                <div class="mod-chest">

                    <div class="chest-close show" @click="openBox" :class="{shake:isclick}">
                        <div class="gift" >
                            <img v-show="showimg" src="../assets/images/chest.png" alt="" style="width:134px;height:94px">
                            <img v-show="!showimg" src="../assets/images/chest2.png" alt="" style="width:134px;height:94px">
                        </div>
                        <div class="tips">
                            <i class="arrow">
                                <img src="../assets/images/txt-tips-open.png" alt="" style="width:240px;height:80px">
                            </i>
                        </div>
                    </div>

                    <div class="chest-open" ref="chest_open" :class="{show:isclick}">

                        <div class="mod-chest-cont open-cont">
                            <div class="content1">
                                <div class="icon" >
                                    <img :src="reward.url" style="width:70px;height:40px"/>
                                </div>
                                <div class="gift">
                                    {{reward.name}}
                                </div>
                            </div>
                        </div>

                        <van-button  v-if="!isNextProject"  type="primary" custom-style="margin-top:130px"
                        @click="reLoadQUesionts">继续闯关</van-button>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
import store from '../store/index';

export default {
    name: "box",
    data() {
        return {
            reward:{},
            isNextProject:false,
            isclick:false,
            imgData:'/assets/images/chest.png',
            showimg:true
        };
    },
    created () {
        let name = store.state.currSubject.name;
        //当前 关卡的 Index
        let pIndex = ''
        store.state.subjectList[store.state.currSubjectId].list.forEach((obj, index) => {
            if (obj.name == name) {
                pIndex = index;                  
            }
        });
        if(pIndex == store.state.subjectList[store.state.currSubjectId].list.length - 1){
            this.isNextProject = true;
        }else{
            this.isNextProject = false;
        }
    },

    methods: {
        openBox(e) {
            if(!this.isclick){
                this.isclick = true;
                this.getReward();
                this.showimg = false
            }else{
                return;
            }
        },

        getReward(){
            this.reward = store.state.foods[this.getRandomNumber(7)];
            console.log(this.reward,"奖励。。。");
            store.commit("GET_GOOD",this.reward);
        },
        getRandomNumber (num){
            return Math.floor(Math.random()* num);
        },
        reLoadQUesionts(){
            this.$emit('outResetQuestionList',false)
        },
        reLoadNextProject(){
            console.log('前往下一个科目。。。。。')
            this.$emit('outQuestionList',false)
        }
    }
};
</script>

<style>
.wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 640px;
}
.open-body .bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    top:68px
}

.open-body .bg.rotate img {
    width: 100%;
    -webkit-animation: rotate 10s infinite linear;
}

.open-has {
    position: relative;
    z-index: 2;
    height: 450px;
    width: 320px;
    margin: 0px auto;
}

.open-has .title-close {
    opacity: 1;
    /* -webkit-transition: all 0.5s; */
    width: 100%;
    text-align: center;
}

.open-has .title-open {
    opacity: 0;
    -webkit-transition: all 0.5s;
    position: absolute;
    top: 0px;
    left: 0px;
    text-align: center;
    width: 100%;
}

.open-has h3 {
    color: #865500;
    font-size: 15px;
    text-align: center;
    padding-top: 75px;
    padding-bottom: 33px;
}

.open-has h3 .user {
    color: #ff5400;
    margin: 0px 5px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
    position: relative;
    white-space: nowrap;
    vertical-align: top;
}

.mod-chest .chest-close .tips {
    width: 166px;
    height: 60px;
    position: absolute;
    left: 70px;
    top: 145px;
    -webkit-transition: all 0.5s;
}

.mod-chest .chest-close .tips .arrow {
    width: 26px;
    height: 60px;
    position: absolute;
    display: block;
    top: 0px;
    right: 171.5px;
    -webkit-animation: move 0.7s linear infinite alternate;
}


.mod-chest .chest-close:active {
    -webkit-transform: scale(1.05);
    -webkit-transition: all 0.3s;
}

.mod-chest .chest-close.shake .gift {
    -webkit-animation: shake 1.2s linear;
    -webkit-animation-fill-mode: forwards;
}

.mod-chest .chest-close.shake .tips {
    opacity: 0;
}

.open-has.opened .title-open {
    opacity: 1;
}

.open-has.opened .title-close {
    opacity: 0;
}

.open-has.opened .mod-chest .chest-open {
    -webkit-transform: translate(0px, 150px);
}

.open-has .mod-chest-cont {
    text-align: center;
    overflow: hidden;
    opacity: 0;
    -webkit-transform: translate(0px, 30px);
    z-index: 9;
    -webkit-animation-fill-mode: forwards;
}

.open-has .chest-open.show .mod-chest-cont {
    -webkit-animation: move2 0.2s 0s linear;
    -webkit-animation-fill-mode: forwards;
}

.open-has .mod-chest-cont .gift {
    color: #ff6000;
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 30px;
}

.open-has .mod-chest-cont .gift .icon {
    width: 58px;
    height: 0px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@-webkit-keyframes move {
    0% {
        -webkit-transform: translate(0px, 0px);
    }

    100% {
        -webkit-transform: translate(0px, -5px);
    }
}

@-webkit-keyframes move2 {
    0% {
        -webkit-transform: translate(0px, 30px);
        opacity: 0;
    }

    70% {
        -webkit-transform: translate(0px, -20px);
        opacity: 1;
    }

    100% {
        -webkit-transform: translate(0px, 0px);
        opacity: 1;
    }
}

@-webkit-keyframes shake {
    0% {
        transform: scale(1);
        -webkit-transform: scale3d(1, 1, 1);
    }

    6% {
        -webkit-transform: scale(0.9) rotate(-8deg);
        -webkit-transform: scale3d(1, 1, 1) rotate(0, 0, 1, -8deg);
    }

    18%,
    30%,
    42% {
        -webkit-transform: scale(1.1) rotate(8deg);
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 8deg);
    }

    12%,
    24%,
    36%,
    48% {
        -webkit-transform: scale(1.1) rotate(-8deg);
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -8deg);
    }

    54% {
        -webkit-transform: scale(1);
        -webkit-transform: scale3d(1, 1, 1);
    }

    60% {
        -webkit-transform: scale(1);
        -webkit-transform: scale3d(1, 1, 1);
    }

    80% {
        -webkit-transform: scale(1) translate(0px, 150px);
        -webkit-transform: scale3d(1, 1, 1) translate3d(0px, 150px, 0);
    }

    90% {
        -webkit-transform: scale(1) translate(0px, 130px);
        -webkit-transform: scale3d(1, 1, 1) translate3d(0px, 130px, 0);
    }

    100% {
        -webkit-transform: scale(1) translate(0px, 150px);
        -webkit-transform: scale3d(1, 1, 1) translate3d(0px, 150px, 0);
    }
}

/**箱子样式 */
.mod-chest-cont {
    width: 276px;
    margin: 27px auto 118px;
    position: relative;
}

.mod-chest-cont .content1 {
    position: relative;
    z-index: 2;
    padding: 13px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    border: 2px solid #fec500;
}

.mod-chest-cont h3 {
    color: #865500;
    font-size: 15px;
}

.mod-chest {
    position: relative;
    width: 100%;
}

.mod-chest .chest-close {
    width: 320px;
    height: 135px;
    opacity: 0;
    position: relative;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 0px;
    margin-left: -160px;
}

.mod-chest .chest-close .gift {
    width: 320px;
    height: 135px;
    position: absolute;
    left: 98px;
    top: 0px;
}

.mod-chest .chest-open {
    width: 320px;
    height: 150px;
    opacity: 0;
    position: relative;
    z-index: 1;
    position: absolute;
    left: 0px;
    top: 0px;
    text-align: center;
}

.mod-chest .chest-open .mod-chest-cont {
    position: absolute;
    bottom: 31px;
    left: 50%;
    margin-left: -138px;
}
.mod-chest .show {
    z-index: 2;
    opacity: 1;
}

.chest_btn{
    margin-top: 20px;
}
</style>