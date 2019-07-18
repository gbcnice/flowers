<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://img02.hua.com/slider/19_qixi_0725_m.jpg"></div>
        <div class="swiper-slide"><img src="https://img02.hua.com/slider/18_birthday_m.jpg"></div>
        <div class="swiper-slide"><img src="https://img02.hua.com/slider/17_xingzuo_jxz_m.jpg"></div>
        <div class="swiper-slide"><img src="https://img02.hua.com/slider/18_youflower_m.jpg"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })        
    }
}
</script>
<style>
    .swiper-container{
		width:100%;
		height: 100%;
    }
		img{
			width:100%;
			height: 100%;
		}
</style>
