<template>
    <div class="clouds" title="白云">
		  	<div class="cloud x1"></div>
		  	<div class="cloud x2"></div>
		  	<div class="cloud x3"></div>
		</div> 
</template>

<style scoped>
/*白云*/

.clouds{
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.cloud {
  position: absolute;
  top: 32px;
  width: 80px;
  height: 24px;
  border-radius: 48px;
  background-color: #cfeffd;
}
.cloud:before {
  content: '';
  position: absolute;
  background: #cfeffd;
  width: 80px;
  height: 12.8px;
  border-radius: 8px;
  bottom: 0;
  
}
.cloud.x1{
  left: -30%;
  -webkit-animation:cloud 80s linear infinite;
}
.cloud.x1:before{
  left: -16px;
}
.cloud.x2{
  right: -30%;
  top: 128px;
  width: 64px;
  height: 25.6px;
  -webkit-animation:cloudx2 150s linear infinite;
}
.cloud.x2:before{
  width: 48px;
  height: 9.6px;
  right: 28.8px;
}
.cloud.x3{
  left: -50%;
  top: 176px;
  width: 48px;
  height: 22.4px;
  -webkit-animation:cloudx3 120s linear infinite;
}
.cloud.x3:before{
  width: 32px;
  height: 6.4px;
  left: 28.8px;
}



@-webkit-keyframes cloud {
  0% { left:-30%; }
  50% { left:120%; }
  100% { left:-30%; }
}
@-webkit-keyframes cloudx2 {
  0% { right:-30%; }
  50% { right:130%; }
  100% { right:-30%; }
}
@-webkit-keyframes cloudx3 {
  0% { left:-50%; }
  50% { left:150%; }
  100% { left:-50%; }
}
</style>