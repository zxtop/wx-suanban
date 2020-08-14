<template>
    <div class="sunlight" title="太阳光">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
</template>

<style scoped>
/*太阳光 sunlight*/
.sunlight{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sunlight span{ 
  position: absolute; 
  top: -10%;
  height: 150%;
  width: 48px;
  background-color: #fff;
  left: 20%;
  transform: rotate(-14deg);
  z-index: 20;
}
.sunlight span:nth-child(1){
  -webkit-animation:sunlight-1 11s ease-in infinite;
}
.sunlight span:nth-child(2){
  left: 28%;
  -webkit-animation:sunlight-2 11.5s ease-in infinite;
}
.sunlight span:nth-child(3){
  left: 65%;
  width: 80px;
  transform: rotate(-18deg);
  -webkit-animation:sunlight-3 13s ease-in infinite;
}
.sunlight span:nth-child(4){
  left: 108%;
  width: 25.6px;
  transform: rotate(-22deg);
  -webkit-animation:sunlight-3 15s ease-in infinite;
}

@-webkit-keyframes sunlight-1{
  0% { opacity: 0;}
  50% { opacity: .15;}
  100% { opacity: 0;}
}

@-webkit-keyframes sunlight-2{
  0% { opacity: 0;}
  50% { opacity: .1;}
  100% { opacity: 0;}
}
@-webkit-keyframes sunlight-3{
  0% { opacity: 0;}
  50% { opacity: .08;}
  100% { opacity: 0;}
}
</style>