<template>
    <div class="peakBox" title="山峰风车">

			<div class="peak1"></div>
			<div class="peak2"></div>
			<div class="peak3"></div>
			<div class="peak4"></div>
			<div class="peak5"></div>
			<div class="peak6"></div>

			<div class="peak7">
				<div class="peak71"></div>
				<div class="peak72"></div>
			</div>

			<div class="peak8"></div>
			<div class="peak9"></div>

			<div class="windmill">
				<div class="windmill1"></div>
				<div class="windmill2"></div>
				<div class="windmill3"></div>
				<div class="windmill4"></div>
				<div class="windmill5">
					<div class="windmill51"></div>
					<div class="windmill52"></div>
				</div>
			</div>

		</div>
</template>

<style scoped>
/*山峰*/
.peakBox{
  position: absolute;
  top: 5%;
  height: 50%;
  width: 100%;
}
.peakBox>div{position: absolute;}
.peak1{
  bottom: 32px;
  border-bottom: 80px solid #9adcf9;
  border-left: 64px solid transparent;
  border-right: 64px solid transparent;
  height: 0;
  width: 96px;
  left: -113px;
}
.peak2{
  content: "";
  left: 48px;
  bottom: 72px;
  width: 64px;
  height: 16px;
  border-top-right-radius: 64px;
  background: #9adcf9;
  transform: skew(38deg,-43deg);
}
.peak3,.peak4{
  left: 40px;
  bottom: 32px;
  width: 0;
  height: 0;
  border-left: 128px solid transparent;
  border-right: 128px solid transparent;
  border-bottom: 128px solid #9adcf9;
}
.peak4{
  left: 108.8px;
  bottom: 48px;
  border-bottom: 128px solid #92dafa;
}
.peak5{
  content: "";
  height: 16px;
  width: 144px;
  left: 272px;
  bottom: 72px;
  background: #92dafa;
  border-top-left-radius: 64px;
  transform: skew(-45deg,45deg);
}
.peak6{
  width: 100%;
  height: 56px;
  bottom: 0;
  left: 0;
  background-color: #73dbc5;
}
.peak7{
  left: 32px;
  bottom: 56px;
  width: 224px;
  height: 224px;
  overflow: hidden;
}
.peak7:before{
  position: absolute;
  content: "";  
  bottom: -104px;
  left: 32px;
  width: 160px;
  height: 160px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-image:-webkit-linear-gradient(60deg, #76d6f5, #72dcb8); 
  background-image:linear-gradient(60deg, #76d6f5, #72dcb8);
}
.peak71 {
  position: absolute;
  left: 6.4px;
  bottom: -17.6px;
  width: 0;
  height: 0;
  border-left: 88px solid transparent;
  border-right: 0rem solid transparent;
  border-bottom: 88px solid #cfeffd;
  transform: skew(-22deg,-22deg);
}
.peak72 {
  position: absolute;
  content: "";
  left: 67.2px;
  bottom: 0px;
  width: 32px;
  height: 4.8px;
  border-bottom-right-radius: 1.6px;
  background: #cfeffd;
  transform: skew(70deg,-68deg);
}
.peak8{
  width: 192px;
  height: 0;
  right: 0;
  bottom: 56px;
  border-bottom: 24px solid #a0e8dd;
  border-left: 24px solid transparent;
  border-right: 0px solid transparent;
}
.peak8:before{
  position: absolute;
  content: "";
  border-bottom: 16px solid #a0e8dd;
  border-left: 16px solid transparent;
  border-right: 0px solid transparent;
  height: 0;
  width: 48px;
  right: 0;
  top: -16px;
}
.peak9{
  left: 0;
  bottom: -40px;
  right:0;
  height: 64px;
  background-image: -webkit-linear-gradient(0deg, #7acaab, #4f8b74);
  background-image: linear-gradient(0deg, #7acaab, #4f8b74);
}
.peak9:before{
  position: absolute;
  content: "";
  left: 0;
  bottom: 64px;
  width: 112px;
  height: 16px;
  border-top-right-radius: 64px;
  background: #4f8b74;
}
.peak9:after{
  position: absolute;
  content: "";
  left: 110.4px;
  bottom: 56px;
  width: 81.6px;
  height: 16px;
  border-bottom-left-radius: 64px;
  border-bottom-right-radius: 64px;
  background: #73dbc5;
}


/*风车塔*/
.windmill{
  bottom: 80px;
  right: 72px;
  width: 80px;
  height: 128px;
  z-index: 4
}
.windmill>div{ position: absolute;}
.windmill1 {
  width: 50px;
  height: 0;
  right: 0;
  bottom: 0;
  border-bottom: 80px solid #d1d6d7;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
}
.windmill1:before {
  position: absolute;
  content: "";
  width: 9px;
  height: 0;
  right: -8px;
  bottom: -80px;
  border-bottom: 80px solid #f4f5f6;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
}
.windmill2,.windmill3{
  left: 50%;
  bottom: 44.8px;
  width: 16px;
  height: 19.2px;
  background-color: #d39651;
  border-radius: 16px 16px 0 0;
  margin-left: -11.2px;
  box-shadow: 3px 0px 5px #a26f35 inset;
}
.windmill3{
  bottom: 8px;
}
.windmill2:before,.windmill3:before{
  position: absolute;
  left: -1.6px;
  bottom: -4.8px;
  content: "";
  width: 19.2px;
  height: 4.8px;
  background-color: #b1d9d4;
}

.windmill4 {
  bottom: 88px;
  left: 16px;
  width: 0;
  height: 0;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-bottom: 32px solid #e25258;
}

.windmill4:before{
  position: absolute;
  content: "";
  bottom: -40px;
  left: -24px;
  width: 48px;
  height: 8px;
  background-color: #c4c7c7;
}

.windmill4:after{
  position: absolute;
  content: "";
  right: -16px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 32px solid #be2933;
  transform: skew(26deg,0deg);
}

.windmill5{
  top: -32px;
  width: 80px;
  height: 80px;
  -webkit-animation:rotate 5s linear infinite;
  z-index: 2;
}

.windmill5>div{ position: absolute;}
.windmill5:before{
  position: absolute;
  left: 50%;
  top: 50%;
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: -4px 0 0 -4px;
  background-color: #fff;
  z-index: 2;
}
.windmill51,.windmill52{
  top: 50%;
  width: 80px;
  height: 3.2px;
  margin-top: -1.6px;
  background-color: #b5b2b2;
}
.windmill52{
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.windmill51:before,.windmill52:before,.windmill51:after,.windmill52:after{
  position: absolute;
  content: "";
  width: 28.8px;
  height: 8px;
  border-radius: 0 0 1.6px 1.6px;
  background-color: #fff7e0;
}
.windmill51:before,.windmill52:before{
  top: 1.6px;
  right: 51px;
}

.windmill51:after,.windmill52:after{
  bottom: 3.2px;
  right: 0;
  border-radius: 1.6px 1.6px 0 0;     
}

@-webkit-keyframes rotate {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>