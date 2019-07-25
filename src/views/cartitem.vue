<template>
    <div>
         <div class="emptycart">
              <img src="../assets/images/cart.jpg">
              <p class="text">这里什么都没有啊</p>
         </div>
         <div class="guess-title">
                 <h2>猜你喜欢</h2>
         </div>
         <!-- <ul class="list-item">
               <li v-for="(item,index) in list" :key="index">
                  <img :src="item.img">
               </li>
         </ul> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
      },
     created(){
         this.getDate()
  },
  methods:{
      getDate(){
           this.$axios.get("http://localhost:3000/cart").then((res)=>{
                     console.log(res.data)
                     this.list=res.data            
        })
      }
  }
}
</script>

<style>
.emptycart{
     width:100%;
     height: 2.7rem;
     background-color: white;
     padding:0.88rem 0 0.64rem 0;
     margin-top:0.02rem;
     text-align: center;
 }
 .emptycart img{
     width:2rem;
     height:2rem;
     vertical-align: middle;
 }
 .emptycart .text{
     width:100%;
     margin-top:0.32rem;
     font-size: 0.25rem;
 }
.guess-title{
    width:100%;
    height:1.12rem;
    box-sizing: border-box;
    padding:0 0.32rem;
    text-align: center;
    line-height:1.12rem;
    margin-top:0.4rem;
    background-color: white;
}
.list-item {
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.list-item li{
 width:3.52rem;
 height:4.88rem;
 background-color: aqua;

}
</style>

