<template>
    <div class="car">
        <header class="header-T">
              <span class="iconfont">&#xe517;</span>
              <h2 v-on:click="clickAdd">购物车</h2>
              <span class="iconfont">&#xe60e;</span>
         </header>
        <div v-if="logoin"><CarItem></CarItem></div>
        <div v-else><CarItem2></CarItem2></div>

    </div>
</template>

<script>
import CarItem from './cartitem'
import CarItem2 from './cartitem2'
export default {
    data(){
        return {
            logoin:true
        }
    },
     components:{
           CarItem,
           CarItem2
     },
     methods:{
         clickAdd(){
             this.logoin=!this.logoin
         }
     }
}
</script>

<style>

 .header-T{
     width:100%;
     box-sizing: border-box;
     height:0.88rem;
     padding:0 0.24rem;
     display: flex;
     justify-content: space-between;
     line-height:0.88rem;
     background-color: white;
 }
 .header-T h2{
     font-weight: 200;
 }
</style>
