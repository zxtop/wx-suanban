<template>
    <div class="suitDefault">
        <img :src="data.img" >
    </div>
</template>

<script>
export default {
    name:'suitDefault',
    data () {
        return {
            data:{
                img:'../../static/images/st.png'
            }
        }
    }
}
</script>
<style scoped>
.skinSuit{width: 100%;height: 100%;position: absolute;}
.skinSuit .suitDefault{width: 100%;height: 100%;position: absolute;top: 5.5px;}
.skinSuit .suitDefault img{width: 100%;height: 100%;}
</style>