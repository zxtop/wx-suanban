<template>

    <div class="subject-wrap">
        <!-- 背景图片随机加载 -->
        <CBg></CBg>
    </div>

</template>
<script>
import CBg from "@/components/CBg";
export default{
    data () {
        return {
            
        }
    },
    components: {
        CBg
    },
    created () {
        // this.$httpWX.post({
        //     url: '/api/v1/teacher-questions/error/query',
        //     data: {
        //         'categoryType': 'SaleGoodsType@sim',
        //         'streamNo': 'web_bss153570682909641893',
        //         'reqSource': 'MALL_H5',
        //         'appid': 'string',
        //         'timestamp': 1535706829096,
        //         'sign': 'string'
        //     }
        // }).then(res => {
        //     console.log(res)
        // })
    }
}
</script>

<style>
</style>