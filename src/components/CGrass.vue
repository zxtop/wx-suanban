<template>
    <div class="grass1" title="草">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<div class="triangleBox">
				<div class="item"></div> 
				<div class="item"></div> 
				<div class="item"></div> 
				<div class="item"></div>
			</div>
		</div>
</template>

<style scoped>

.grass1{
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #b7f03b;
  box-shadow: 0 0 5px #fff;
}
.grass1>span{
  position: absolute;
  display: block;
}
.grass1>span:nth-child(1),
.grass1>span:nth-child(2){
  height: 30%;
  width: 100%;
  top: 0;
  left: 0;
  background-image:-webkit-linear-gradient(225deg, rgba(164, 214, 51, 0.26), #b7f03b); 
  background-image:linear-gradient(225deg, rgba(164, 214, 51, 0.26), #b7f03b);
}
.grass1>span:nth-child(2){
  top: 35%;
}
.grass1>span:nth-child(3){
  height: 30%;
  width: 100%;
  bottom: 0;
  background-image:-webkit-linear-gradient(180deg, #38862c, #b7f03b); 
  background-image:linear-gradient(180deg, #38862c, #b7f03b);

}
.grass1>span:nth-child(4){
  height: 30%;
  width: 80%;
  bottom: 30%;
  left: 0;
  border-radius: 0 160px 160px 0;
  background-image:-webkit-linear-gradient(180deg, #5dac34, #b7f03b); 
  background-image:linear-gradient(180deg, #5dac34, #b7f03b);
}
.grass1>span:nth-child(5),.grass1>span:nth-child(6){
  height: 13%;
}
.grass1>span:nth-child(5){
  width: 95%;
  right: 0;
  bottom: 30%;
  border-radius: 80px 0 0 80px;
  background-image:-webkit-linear-gradient(225deg, #b1e837, #b7f03b); 
  background-image:linear-gradient(225deg, #b1e837, #b7f03b);
}
.grass1>span:nth-child(6){
  width: 70%;
  left: 0;
  bottom: 18%;
  border-radius: 0 80px 80px 0;
  background-image:-webkit-linear-gradient(225deg, #b1e837, #b7f03b); 
  background-image:linear-gradient(225deg, #b1e837, #b7f03b);
}
.grass1>span:nth-child(5):before,.grass1>span:nth-child(6):before,.grass1>span:nth-child(6):after{
  position: absolute;
  width: 80%;
  left: 16px;
  content: "";
  height: 12.8px;
  border-radius: 16px;
}
.grass1>span:nth-child(5):before{
  bottom: 8px;
  background-image:-webkit-linear-gradient(225deg, #bdf641, #b7f03b); 
  background-image:linear-gradient(225deg, #bdf641, #b7f03b);
}
.grass1>span:nth-child(6):before{
  top: 4px;
  height: 16px;
  background-image:-webkit-linear-gradient(225deg, #c2f64e, #b7f03b); 
  background-image:linear-gradient(225deg, #c2f64e, #b7f03b);
}
.grass1>span:nth-child(6):after{
  width: 65%;
  top: 12.8px;
  height: 16px;
  background-image:-webkit-linear-gradient(225deg, #c2f64e, #b7f03b); 
  background-image:linear-gradient(225deg, #c2f64e, #b7f03b);
}


/*三角形*/
.triangleBox {
  position: absolute;
  width: 100%;
  top: 35.5%;
  left: 0;
  height: 5%;
  display: flex;
  align-items: flex-end;
}
.triangleBox.two{
  top: 51.2px;
  width: 90%;
  height: 16px;
  z-index: 5;
}
.triangleBox .item{
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 8px solid #60ae34;
  margin: 0 8px;
}
.triangleBox .item:nth-child(1),
.triangleBox .item:nth-child(4){ margin-left: 16px;}
</style>