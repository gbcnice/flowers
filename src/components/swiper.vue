<template>
    <div class="detail-swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="url" class="detail-banner">
                    <span>1/5</span>
                </div>
                <div class="swiper-slide">
                    <img :src="url" class="detail-banner">
                    <span>2/5</span>
                </div>
                <div class="swiper-slide">
                    <img :src="url" class="detail-banner">
                    <span>3/5</span>
                </div>
            </div>
            <!-- 如果需要分页器 -->
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    data(){
        return {
            url:"",
            info:[]
        }
    },
    props:["id","idx"],
    created(){
        this.$axios.get("http://localhost:4000/secdetail/",{
            params:{
                id:this.id,
            }
        }).then((res)=>{
            this.info=res.data[0].fenlei.filter((item)=>{
                return (item.ItemCode == this.idx)
            })
            this.url = this.info[0].url
        })
    },
    watch:{
        info() {
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    
                    
                })  
            })//延迟回调函数的执行，直到dom就绪
        }
    }
}
</script>

<style>

</style>
