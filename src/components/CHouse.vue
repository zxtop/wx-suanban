<template>
    <div class="house" title="房子">
			<div class="house1"></div>
			<div class="house21"></div>
			<div class="house22"></div>
			<div class="house2"></div>
			<div class="house31"></div>
			<div class="house32"></div>
			<div class="house3"></div>
			<div class="house4"></div>
			<div class="house5"></div>
			<div class="house6"></div>
			<div class="house7"></div>
			<div class="house8"></div>
			<div class="house9"></div>
		</div>
</template>

<style scoped>
.house6:before,
.house7:before,
.house7:after,
.house8:before,
.house8:after{
    position: absolute;
    content: "";
}
/*房子*/
.house{
  position: absolute;
  top: -104px;
  right: 0;
  width: 192px;
  height: 128px;
  overflow: hidden;
}
.house>div{ position: absolute;}
.house1{
  bottom: 0;
  width: 112px;
  height: 56px;
  background-color: #e75c62;
}
.house2{
  bottom: 56px;
  left: 0;
  border-bottom: 32px solid #e75c62;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  height: 0;
  width: 64.5px;
}
.house21{
  bottom: 56px;
  left: -11.2px;
  border-bottom: 32px solid #fff;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  height: 0;
  width: 134.4px;
}
.house22{
  bottom: 56px;
  left: -4.3px;
  border-bottom: 32px solid #650e10;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  height: 0;
  width: 73.5px;
}
.house3 {
  bottom: 88px;
  left: 24px;
  width: 0;
  height: 0;
  border-left: 32px solid transparent;
  border-right: 32px solid transparent;
  border-bottom: 24px solid #e75c62;
}
.house31 {
  bottom: 88px;
  left: 12.16px;
  width: 0;
  height: 0;
  border-left: 44.8px solid transparent;
  border-right: 44.8px solid transparent;
  border-bottom: 35.2px solid #fff;
}
.house32 {
  bottom: 88px;
  left: 19.2px;
  width: 0;
  height: 0;
  border-left: 37.6px solid transparent;
  border-right: 37.6px solid transparent;
  border-bottom: 30.4px solid #650e10;
}
.house4{
  top: 4px;
  right: 0px;
  width: 116.8px;
  height: 32px;
  background-color: #643c3d;
  transform: skewX(51deg);
}
.house5{
  top: 36px;
  right: -32.8px;
  width: 116.8px;
  height: 35.2px;
  background-color: #573435;
  transform: skewX(36deg);
}
.house6{
  top: 64px;
  right: 0;
  width: 80px;
  height: 5.6px;
  background-color: #fff;
}
.house6:before{
  top: 4.8px;
  width: 80px;
  height: 19.2px;
  background-color: rgba(101, 14, 16, 0.82);
  z-index: 2;
  right: 0;
}
.house7{
  width: 80px;
  height: 57.6px;
  right: 0;
  bottom: 0;
  background: #be2933;
}
.house7:before,.house7:after{
  width: 12.8px;
  height: 22.4px;
  background-color: #482112;
  left: 20.8px;
  top: 8px;
  border: 2.4px solid #fff;
}
.house7:after{
  left: 56px;
}
.house8{
  width: 64px;
  height: 48px;
  background: #3d5246;
  bottom: 0;
  left: 16px;
}
.house8:before{
  top: -8px;
  left: 0;
  width: 80px;
  height: 8px;
  background-color: #fff;
  border-radius: 1.6px;
}
.house8:after{
  bottom: 0;
  left: 0;
  width: 56px;
  height: 35.2px;
  background-color: #6a876e;
}
.house9{
  width: 96px;
  height: 16px;
  background-color: #6db835;
  border-radius: 32px 0 0 0;
  bottom: 0;
  right: 0;
}
</style>