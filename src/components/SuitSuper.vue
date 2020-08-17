<template>
    <div class="suitSuper">
        <img :src="data.img" >
    </div>
</template>

<script>
export default {
    name:'suitSuper',
    data () {
        return {
            data:{
                img:'../../static/images/suitChaoren.png',
            }
        }
    }
}
</script>
<style>
.skinSuit{width: 100%;height: 100%;position: absolute;}
.skinSuit .suitSuper{width: 100%;height: 100%;position: absolute;top: -.5px;left: -2px;}
.skinSuit .suitSuper img{width: 100%;height: 100%;}
.eye_super span:after{
    left: 0;
    top:-4.8px;
    width: 8px;
    height: 8px;
}
</style>