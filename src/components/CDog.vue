<template>
  <div class="trough" title="小狗">
    <div class="dog">
      <div class="dog-head">
        <div class="dog-ears ears-left"></div>
        <div class="dog-ears ears-right"></div>
        <div class="dog-eyes"></div>
        <div class="dog-mouth">
          <div class="dog-nose"></div>
          <div class="dog-tongue"></div>
        </div>
      </div>
      <div class="dog-tail"></div>
      <div class="dog-body">
        <div class="dog-foot"></div>
      </div>
      <div class="ball"></div>
    </div>
  </div>
</template>

<style scoped>
.trough:before,
.trough span:before,
.trough span:after{
  position: absolute;
  content: "";
}

.trough{
  position: absolute;
    bottom: 13%;
    right: 9%;
    width: 80px;
    height: 64px;
}

.trough:before{
    bottom: -3.2px;
    width: 64px;
    height: 6.4px;
    border-radius: 50%;
    background-color: #5bb576;
    z-index: 1;
}


.dog {
	position: absolute;
    bottom: 7%;
    right: 20%;
    width: 160px;
    height: 186px;
    zoom: 0.43;
}
@-webkit-keyframes head {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    30% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    40% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    80% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    90% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
@keyframes head {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    30% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    40% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    80% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
    }
    90% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}

.dog-head {
    width: 100px;
    height: 90px;
    position: absolute;
    z-index: 5;
    top: 30px;
    left: calc(50% - 50px);
    background-color: #efc092;
    border-radius: 50%;
    -webkit-animation: head 6s linear infinite;
    animation: head 6s linear infinite;
}
.dog-head:before,
.dog-head:after {
    content: "";
    width: 79px;
    height: 50px;
    position: absolute;
    z-index: 5;
    top: 44px;
    background-color: #efc092;
    border-radius: 50%;
}
.dog-head:before {
    left: -7px;
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
}
.dog-head:after {
    right: -7px;
    -webkit-transform: rotate(-49deg);
    transform: rotate(-49deg);
}
.dog-mouth {
    width: 60px;
    height: 35px;
    background-color: #fee2d2;
    position: absolute;
    bottom: -15px;
    left: 20px;
    z-index: 10;
    border-radius: 50%;
}
.dog-mouth:after {
    content: "";
    width: 10px;
    height: 40px;
    background-color: #fee2d2;
    position: absolute;
    bottom: 30px;
    left: 24px;
    z-index: 10;
    border-radius: 20px;
}
.dog-nose {
    width: 16px;
    height: 10px;
    position: absolute;
    top: 8px;
    left: calc(50% - 8px);
    background-color: #000;
    border-radius: 50%;
}
@-webkit-keyframes tongue {
    0% {
        height: 10px;
    }
    30% {
        height: 10px;
    }
    40% {
        height: 20px;
    }
    60% {
        height: 10px;
    }
    80% {
        height: 20px;
    }
    90% {
        height: 10px;
    }
    100% {
        height: 10px;
    }
}
@keyframes tongue {
    0% {
        height: 10px;
    }
    30% {
        height: 10px;
    }
    40% {
        height: 20px;
    }
    60% {
        height: 10px;
    }
    80% {
        height: 20px;
    }
    90% {
        height: 10px;
    }
    100% {
        height: 10px;
    }
}
.dog-tongue {
    width: 20px;
    height: 10px;
    position: absolute;
    top: 24px;
    left: calc(50% - 10px);
    background-color: #f4a4ad;
    border-radius: 0 0 10px 10px;
    -webkit-animation: tongue 4s linear infinite;
    animation: tongue 4s linear infinite;
}
.dog-eyes {
    width: 10px;
    height: 16px;
    background-color: #000;
    position: absolute;
    top: 52px;
    left: 28px;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 33px 0px 0px #000;
}
.dog-eyes:after {
    content: "";
    width: 92px;
    height: 50px;
    position: absolute;
    top: -50px;
    left: -24px;
    background-color: #efc092;
    border-radius: 50%;
}
.dog-ears {
    width: 80px;
    height: 50px;
    position: absolute;
    z-index: 0;
    top: -2px;
    border-radius: 150px 0 150px 0;
    background-color: #efc092;
}
.dog-ears:after {
    content: "";
    width: 50px;
    height: 30px;
    position: absolute;
    z-index: 0;
    top: 8px;
    left: 20px;
    border-radius: 150px 0 150px 0;
    -webkit-transform: rotate(-176deg);
    transform: rotate(-176deg);
    background-color: #fee2d2;
}
.ears-left {
    left: -22px;
    -webkit-transform: rotate(-105deg);
    transform: rotate(-105deg);
}
.ears-right {
    right: -22px;
    -webkit-transform: rotate(-22deg);
    transform: rotate(-22deg);
}
.dog-body {
    width: 54px;
    height: 60px;
    position: absolute;
    top: 120px;
    left: calc(50% - 35px);
    background-color: #d58b4e;
    border-radius: 49px 0 0 20px;
}
.dog-body:before {
    content: "";
    width: 50px;
    height: 60px;
    position: absolute;
    top: 3px;
    left: calc(50% - 17px);
    background-color: #efbf8e;
    border-radius: 100px 100px 0 0;
}
.dog-body:after {
    content: "";
    width: 15px;
    height: 30px;
    position: absolute;
    top: 32px;
    left: 28px;
    background-color: #d58b4e;
    border-radius: 100px 100px 0 0;
}
.dog-foot {
    width: 20px;
    height: 13px;
    position: absolute;
    z-index: 5;
    bottom: -3px;
    left: 8px;
    background-color: #fce2d3;
    border-radius: 10px 10px 0 0;
    box-shadow: 33px 0 0 #fce2d3;
}
@-webkit-keyframes tail {
    0% {
        -webkit-transform: rotate(-47deg);
        transform: rotate(-47deg);
    }
    100% {
        -webkit-transform: rotate(-57deg);
        transform: rotate(-57deg);
    }
}
@keyframes tail {
    0% {
        -webkit-transform: rotate(-47deg);
        transform: rotate(-47deg);
    }
    100% {
        -webkit-transform: rotate(-57deg);
        transform: rotate(-57deg);
    }
}
.dog-tail {
    width: 10px;
    height: 50px;
    position: absolute;
    top: 120px;
    left: calc(50% - 45px);
    background-color: #ecc093;
    -webkit-transform: rotate(-47deg);
    transform: rotate(-47deg);
    border-radius: 10px 0 0 0px / 50px 0 0 0px;
    -webkit-animation: tail .08s infinite alternate;
    animation: tail .08s infinite alternate;
}
.ball {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0px;
    border-radius: 50%;
    background-color: #6E64F0;
}
</style>