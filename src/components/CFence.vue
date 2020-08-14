<template>
    <div class="fence" title="护栏">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
</template>

<style scoped>
.fence span:nth-child(1):before,
.fence span:nth-child(1):after,
.fence span:nth-child(2):before,
.fence span:nth-child(2):after,
.fence span:nth-child(3):before,
.fence span:nth-child(3):after,
.fence span:nth-child(4):before,
.fence span:nth-child(4):after{
    position: absolute;
  content: "";
}


/*护栏*/
.fence{
  position: absolute;
  top: -32px;
  right: 192px;
  width: 80px;
  height: 48px;
}
.fence span{ position: absolute; }
.fence span:nth-child(1),.fence span:nth-child(2){
  left: 0;
  width: 8px;
  height: 48px;
  border-radius: 1.6px 1.6px 0 0;
  background-color: #d39651;
  box-shadow: -2px 0 0 #ab5e2b inset;
}
.fence span:nth-child(1):before,.fence span:nth-child(2):before{
  width: 11.2px;
  height: 3.2px;
  bottom: -3.2px;
  left: -1.6px;
  background-color: #d0a989;
}
.fence span:nth-child(1):after,
.fence span:nth-child(2):after{
  top: 0;
  left: 2.4px;
  width: 0;
  height: 0;
  border-left: 3.2px solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 8px solid #ab5e2b;
  -webkit-transform: rotate(170deg);
  transform: rotate(170deg);
}
.fence span:nth-child(2):after{
  top: 24px;
  left: 0.8px;
  -webkit-transform: rotate(-12deg);
  transform: rotate(-12deg);
}
.fence span:nth-child(2){
  left: 48px;
}
.fence span:nth-child(3),.fence span:nth-child(4){
  right: 0;
  bottom: 8px;
  height: 8px;
  width: 79.2px;
  border-radius: 1.6px 0 0 1.6px;
  box-shadow: 0 2px 0 #f6ccaa inset;
  background-color: #e7aa62;
}
.fence span:nth-child(3):before,
.fence span:nth-child(4):before,
.fence span:nth-child(3):after,
.fence span:nth-child(4):after{
  top: 2px;
  left: 1.6px;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: #ab5e2b;
}
.fence span:nth-child(3):after,
.fence span:nth-child(4):after{
  left: 48px;
}
.fence span:nth-child(4){
  bottom: 28.8px;
}
</style>