<template>
    <div class="hatsFrog">
        <img :src="data.img" >
    </div>
</template>

<script>
export default {
    name:'hatFrog',
    data () {
        return {
            data:{
                img:'../../static/images/hatMogu.png',
            }
        }
    }
}
</script>
<style>
.skinsHat{width: 100%;height: 100%;position: absolute;}
.skinsHat .hatsFrog{width: 100%;height: 100%;position: absolute;top: 2px;left: -2px;}
.skinsHat .hatsFrog img{width: 100%;height: 100%;}
.eye_hat span:after{
    left: 0;
    top:-4.8px;
    width: 8px;
    height: 8px;
}
</style>