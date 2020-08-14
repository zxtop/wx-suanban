<template>
    <div class="leafBox" title="叶子">
        <div class="leafItem leaf1"></div>
        <div class="leafItem leaf2"></div>
        <div class="leafItem leaf3"></div>
        <div class="leafItem leaf4"></div>
    </div>
</template>

<style scoped>

/*叶子*/
.leafBox{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 80px;
  overflow: hidden;
}
.leafBox .leafItem{
  content: '';
  position: absolute;
}
.leafBox .leaf1{
  left: -40px;
  bottom: 35.2px;
  width: 64px;
  height: 40px;
  border-top-left-radius: 80px;
  background: #236b37;
  transform: skew(120deg);
}
.leafBox .leaf2{
  left: -24.8px;
  bottom: 8px;
  width: 65.6px;
  height: 48px;
  border-bottom-right-radius: 80px;
  background: #0e4e20;
  transform: skew(-35deg,-30deg);
}
.leafBox .leaf3{
  left: -24px;
  bottom: -12.8px;
  width: 64px;
  height: 40px;
  border-top-left-radius: 80px;
  background: #236b37;
  transform: skew(120deg,-12deg);
}
.leafBox .leaf4{
  left: -8px;
  bottom: -32px;
  width: 65.6px;
  height: 48px;
  border-bottom-right-radius: 80px;
  background: #0e4e20;
  transform: skew(-35deg,-29deg);
}

</style>