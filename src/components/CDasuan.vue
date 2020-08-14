<template>

  <div class="eggWrapper" title="大蒜" ref="eggexp">

    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <div class="egg" @click="harvestEgg">
      <div class="grass" ref="grass">
          <div class="suanmiao" v-for="(item,index) in domData" :key="index" 
          :style="{height:item.height,left:item.left,opacity:item.opacity,transform:item.transform,zIndex:item.zIndex}"
          ></div>
      </div>
    </div>

    <!-- <div class="egg-progress-wrap">
      <p>{{eggprogress}}%</p>
      <div class="egg-progress">
        <div class="egg-progress-item" :style="'width:' + eggprogress + '%' "></div>
      </div>
    </div> -->

  </div>

</template>

<script>
export default {
    data () {
        return {
            domData:[
                
            ]
        }
    },
    mounted () {
        var numberOfBlades = 100;
        for (var i = 0; i < numberOfBlades; i++) {
            this.assignRandomStyles({});
        }
        // console.log(this.domData,"ddddd")
    },
    methods: {
        assignRandomStyles(obj) {
            var randomHeight = Math.floor(Math.random() * 9);
            var randomLeft = Math.floor(Math.random() * (wx.getSystemInfoSync().windowWidth - 8));
            var randomRotation = Math.floor(Math.random() * 10) - 3;
            obj.height = randomHeight*16 + "px";
            obj.zIndex = randomHeight;
            obj.opacity = randomHeight * 0.2;
            obj.left = randomLeft + "px";
            obj.transform = "rotate(" + randomRotation + "deg)";
            this.domData.push(obj);
        }
    }
}
</script>
<style scoped>
.eggWrapper span:before{
    position: absolute;
    content: "";
}
/*鸡蛋*/
.eggWrapper{
  position: absolute;
  bottom: 43%;
  left: 7%;
  width: 128px;
  height: 96px;
  z-index: 6;
}
.eggWrapper span{ position: absolute; }
.eggWrapper span:nth-child(1),
.eggWrapper span:nth-child(1):before{
  left: 5%;
  bottom: 0;
  width: 90%;
  height: 9.6px;
  background-color: #9fd444;
  border-radius: 16px 16px 0 0;
}
.eggWrapper span:nth-child(1):before{
  left: 12.5%;
  width: 75%;
  bottom: 8px;
}
.eggWrapper span:nth-child(2),
.eggWrapper span:nth-child(2):before{
  left: 10%;
  bottom: 0;
  width: 80%;
  height: 9.6px;
  background-color: #77b723;
  border-radius: 16px 16px 0 0;
}
.eggWrapper span:nth-child(2):before{
  left: 13%;
  width: 74%;
  bottom: 8px;
}
.eggWrapper span:nth-child(3),
.eggWrapper span:nth-child(3):before{
  left: 20%;
  bottom: 0;
  width: 60%;
  height: 12.8px;
  background-color: #bfe85c;
  border-radius: 16px 16px 0 0;
  z-index: 7
}
.eggWrapper span:nth-child(3):before{
  bottom: 4.8px;
}
.eggWrapper span:nth-child(4),
.eggWrapper span:nth-child(4):before{
  left: 22.5%;
  bottom: 0;
  width: 55%;
  height: 9.6px;
  background-color: #a0d231;
  border-radius: 16px 16px 0 0;
  z-index: 7
}
.eggWrapper span:nth-child(4):before{
  bottom: 4.8px;
}
.egg{
  position: absolute;
  bottom: 0;
  left: 40%;
  width: 72px;
  height: 144px;
  margin-left: -20px;
  
  z-index: 6;
  display: block;
  overflow: hidden;
  -webkit-animation-name:greenpulse;
  -webkit-animation-duration: 2s;
}
.egg:before{
  top: -1.6px;
  left: -6.4px;
  width: 40px;
  height: 41.6px;
  border-radius: 50%;
}


.egg-num {
  position: absolute;
  top: -12.8px;
  left: -1px;
  width: 100%;
  color: red;
  text-align: center;
}

.grass{
	  left: 40%;
    width: 72px;
    height: 144px;
}
/*小草*/
.grass > div {
    animation: breeze 8s cubic-bezier(.8, -0.5, .25, 1.5) infinite;
    background-color: #0b0;
    border-right: solid 5px #0c0;
    border-top-right-radius: 100%;
    bottom: 0;
    position: absolute;
    transform-origin: bottom;
    transition: all 100ms ease-in-out;
    width: 2px;
}
@keyframes breeze {
    0%, 100% {
      transform: auto;
    }
    50% {
      transform: rotate(5deg);
    }
}
.suanmiao:after {
    bottom: 16px;
    left: -8.8px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 11.2px solid #64b033;
    transform: skewX(45deg);
}
.suanmiao:before {
    bottom: 20.8px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 4.8px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 6.4px solid #64b033;
    transform: skewX(-45deg);
}
@-webkit-keyframes greenpulse {
  from { -webkit-box-shadow: 0 0 18px #f1ff93; }
  50% { -webkit-box-shadow: 0 0 36px rgba(205,229,41,.5); }
  to { -webkit-box-shadow: 0 0 18px #f1ff93; }
}
</style>