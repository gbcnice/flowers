<template>
<div class="swiper-container">
   <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
			<img :src="item.src"/>
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
export default {
    data(){
       return {
           list:[]
       }
    },
  created(){
       this.$axios.get("http://localhost:3000/team").then((res)=>{
                     console.log(res.data[0].tit[0].play)
                     this.list=res.data[0].tit[0].play
        })
  },
  mounted(){
       
  },
  watch:{
      list(){  
			this.$nextTick(()=>{
					var mySwiper = new Swiper ('.swiper-container', {
				    loop: true, // 循环模式选项
				    autoplay: {
				    delay: 3000,    
				     disableOnInteraction: false,
				    },
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				    }
	     		})      
			})
			  
		}
  }
}
</script>
<style>
    .swiper-container{
		width:100%;
		height: 100%;
    }
		.swiper-container img{
			width:100%;
			height: 100%;
		}
</style>

