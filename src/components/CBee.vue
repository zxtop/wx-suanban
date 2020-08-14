<template>
    <div class="beeBox" title="蜜蜂鲜花">
        <div class="soil two"></div>
        <div class="soil"></div>
        <div class="flowerpot">
            <div class="flowerpotTop"></div>
            <div class="flowerpotBottom"></div>
        </div>

        <div class="flower">
            <div class="flowerTop">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div class="flowerHead"></div>
        </div>

        <div class="bee">
            <div class="beeBody"></div>
        </div>

        <div class="bee bee2">
            <div class="beeBody"></div>
        </div>

        <div class="triangleBox two">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>

    </div>
</template>

<style scoped>
.beeBox:before,
.soil:before,
.soil:after,
.flowerpot:after,
.flowerpotTop:before,
.flowerpotTop:after,
.flowerTop:before,
.flowerHead:after,
.flowerHead:before,
.bee:before,
.bee:after,
.beeBody:before,
.beeBody:after{
     position: absolute;
  content: "";
}
/*蜜蜂鲜花*/
.beeBox{
  position: absolute;
  top: 0;
  left: 0;
  width: 112px;
  height: 64px;
  transform: scale(.8,.8)
}
.beeBox>div{ position: absolute; }
.beeBox:before{
  width: 112px;
  height: 9.6px;
  background-color: #60ae34;
  border-radius: 8px;
  bottom: -4.8px;
}
.soil,.soil:before{
  width: 32px;
  height: 16px;
  border-radius: 48px 48px 0 0;
}
.soil{
  bottom: 0;
  left: 12.8px;
  background-color: #7e422b;
  z-index: 2
}
.soil:before{
  left: -12.8px;
  background-color: #ab5e2b
}
.soil.two,.soil.two:before{
  width: 28.8px;
  height: 19.2px;
  border-radius: 48px 48px 0 0;
}
.soil:after,.soil.two:after{
  top: 8px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: #7e422b;
  z-index: 2
}
.soil.two{
  bottom: 0;
  left: 48px;
}
.soil.two:before{
  left: -8px;
  background-color: #ab5e2b;
}
.flowerpot{
  width: 52px;
  height: 52px;
  right: 0;
  bottom: 0;
}
.flowerpot:after{
  right: 0;
  bottom: -4px;
  left: 0;
  height: 4px;
  border-radius: 4px;
  background-color: #60ae34;
  z-index: 4;
}
.flowerpot>div{
  position: absolute;
}
.flowerpotTop{
  right: 0;
  bottom: 9.6px;
  width: 44.5px;
  height: 0;
  border-bottom-left-radius: 4px;
  border-bottom: 25.6px solid #ffd729;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  -webkit-transform: rotate(107deg);
  transform: rotate(107deg);
  z-index: 3;
}
.flowerpotTop:before{
  width: 4px;
  height: 48px;
  left: 17.6px;
  top: -9.6px;
  border-radius: 4px;
  background-color: #ef9f29;
  -webkit-transform: rotate(91deg);
  transform: rotate(91deg);
}
.flowerpotTop:after{
  width:5.6px;
  height: 40px;
  left: 18.24px;
  bottom: -19.2px;
  border-radius: 1.6px;
  background-color: #fff;
  -webkit-transform: rotate(91deg);
  transform: rotate(91deg);
}
.flowerpotBottom{
  right: -11.2px;
  bottom: 4.768px;
  width: 28px;
  height: 0;
  border-top-left-radius: 20.8px;
  border-bottom: 25.6px solid #ffd729;
  border-left: 8px solid transparent;
  border-right: 3.2px solid transparent;
  -webkit-transform: rotate(107deg);
  transform: rotate(107deg);
}
/*小花*/
.flower{
  width: 32px;
  height: 64px;
  top: 0;
  left: 24px;
  -webkit-animation:rock 3s ease-in infinite;
}
.flower>div{ position: absolute; }
.flowerTop{
  left: 0;
  width: 32px;
  height: 32px;
  z-index: 2;
}
.flowerTop:before{
  width: 8px;
  height: 8px;
  background-color: #fae134;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  margin: -4px 0 0 -4px;
  z-index: 2
}
.flowerTop p{
  position: absolute;
  top: 50%;
  margin-top: -2.4px;
  width: 32px;
  height: 4.8px;
  background-color: #fff;
  border-radius: 6.4px;
}
.flowerTop p:nth-child(2){
  transform: rotate(45deg);
  transform-origin:50% 50%;/*定义动画的旋转中心点*/
}
.flowerTop p:nth-child(3){
  transform: rotate(90deg);
  transform-origin:50% 50%;/*定义动画的旋转中心点*/
}
.flowerTop p:nth-child(4){
  transform: rotate(135deg);
  transform-origin:50% 50%;/*定义动画的旋转中心点*/
}
.flowerHead {
  bottom: 0;
  left: 8px;
  width: 16px;
  height: 48px;
  border: 3px solid #60ae34;
  border-radius: 100% 0 0 100%/50%;
  border-right: none;
}
.flowerHead:after{
  bottom: 16px;
  left: -8.8px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 11.2px solid #64b033;
  transform: skewX(45deg);
}
.flowerHead:before{
  bottom: 20.8px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 4.8px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 6.4px solid #64b033;
  transform: skewX(-45deg);
}
/*蜜蜂*/
.bee{
  width: 24px;
  height: 12.8px;
  will-change: transform;
  -webkit-animation:bee1 6s ease-in infinite;
  z-index: 5;
}
.bee2{
  right: 0;
  will-change: transform;
  -webkit-animation:bee2 5s ease-in infinite;
}
.bee>div{ position: absolute; }
.bee:before,.bee:after{
  top: 50%;
  right: 7.2px;
  width: 1.6px;
  height: 1.6px;
  border-radius: 1.6px;
  background-color: #feca21;
  margin-top: -0.8px;
}
.bee:before{
  right: 11.2px;
  z-index: 5;
}
.beeBody,.beeBody:before,.beeBody:after{
  left: 0;
  width: 9.6px;
  height: 9.6px;
  border-radius: 9.6px;
  background-color: #442418;
}
.beeBody:before{
  left: 3.2px;
  background-color: #feca21;
}
.beeBody:after{
  left: 8px;
  background-color: #442418;
}



@-webkit-keyframes rock {
  0% { transform: rotate(-5deg) translate3d(0, 0, 0);}
  50% { transform: rotate(5deg) translate3d(30%, 0, 0);}
  100% { transform: rotate(-5deg) translate3d(0, 0, 0);}
}
@-webkit-keyframes bee1 {
  0% { transform: rotateY(0deg) translate3d(0, 0, 0);}
  25% { transform: rotateY(0deg) translate3d(50%, 100%, 0);}
  49.9% { transform: rotateY(0deg) translate3d(100%, 0, 0);}
  50% { transform: rotateY(180deg) translate3d(-100%, 0, 0);}
  75% { transform: rotateY(180deg) translate3d(-50%, -100%, 0);}
  99.9% { transform: rotateY(180deg) translate3d(0, 0, 0);}
  100% { transform: rotateY(0deg) translate3d(0, 0, 0);}
}
@-webkit-keyframes bee2 {
  0% { transform: rotateY(180deg) translate3d(0, 0, 0);}
  25% { transform: rotateY(180deg) translate3d(50%, 80%, 0);}
  49.9% { transform: rotateY(180deg) translate3d(80%, 0, 0);}
  50% { transform: rotateY(0deg) translate3d(-80%, 0, 0);}
  75% { transform: rotateY(0deg) translate3d(-50%, -80%, 0);}
  99.9% { transform: rotateY(0deg) translate3d(0, 0, 0);}
  100% { transform: rotateY(180deg) translate3d(0, 0, 0);}
}
</style>