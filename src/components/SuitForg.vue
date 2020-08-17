<template>
    <div class="suitFrog">
        <img :src="data.img" >
    </div>
</template>

<script>
export default {
    name:'suitFrog',
    data () {
        return {
            data:{
                img:'../../static/images/suitFrog.png',
            }
        }
    }
}
</script>
<style>
.skinSuit{width: 100%;height: 100%;position: absolute;}
.skinSuit .suitFrog{width: 100%;height: 100%;position: absolute;top: 1.5px;left: -1.3px;}
.skinSuit .suitFrog img{width: 100%;height: 100%;}

/* .eye span:after{
  left: -.2rem;
  top: -1rem;
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border-radius: 50%;
  z-index: 6;
  -webkit-animation:eye 1.4s ease-in infinite;
} */
</style>