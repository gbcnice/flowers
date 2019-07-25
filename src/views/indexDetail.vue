<template>
    <div class="buyflower">
         <header class="header-T">
              <span class="iconfont" @click="clickHandler">&#xe517;</span>
              <h2>企业团购</h2>
              <span class="iconfont">&#xe60e;</span>
         </header>
         <div class="swiper">
               <Indexswiper/>
         </div>

         <div class="list">
             <div class="list-item" v-for="(item,index) in list" :key="index">
                 <span>
                     <img :src="item.img">
                 </span>
                 <i>
                     {{item.item}}
                 </i>
             </div>    
         </div>
         <div class="item">
                <div class="item-item" v-for="(item,index) in items" :key="index">
                        <img :src="item.img">
                        <div class="item-footer">查看详情></div>
                </div>
         </div>
          <img src="../assets/images/tuangou1.jpg" width="100%" border="0">
          <img src="../assets/images/tuangou2.jpg" width="100%" border="0">
          <img src="../assets/images/tuangou3.jpg" width="100%" border="0">
          <ul class="item-footer">
                <li v-for="(item,index) in footer" :key="index">
                    <img :src="item.img">
                    </li>
          </ul>    
    </div>
</template>
<script>
import Indexswiper from './indexswiper'
export default {
    components:{
Indexswiper
    },
    data(){
       return {
           list:[],
           items:[],
           footer:[]
       }
    },
  created(){
       this.$axios.get("http://localhost:3000/team").then((res)=>{
                     console.log(res.data[0].tit[0].item)
                     this.list=res.data[0].tit[0].teamlist
                      this.items=res.data[0].tit[0].item
                      this.footer=res.data[0].tit[0].contact
        })
  },
  methods:{
      clickHandler(){
          console.log(111)
          this.$router.back()
      }
  }
}
</script>

<style>
   *{
       margin:0;
       padding:0;
   }
 .header-T{
     width:100%;
     box-sizing: border-box;
     height:0.88rem;
     padding:0 0.24rem;
     display: flex;
     justify-content: space-between;
     line-height:0.88rem;
 }
 .header-T h2{
     font-weight: 200;
 }
.list{
    width:100%;
    height:1.56rem; 
    display: flex;
    background-color: white;
}
.list-item{
    width:1.5rem;
    height:1.35rem;
    margin-top:0.14rem;
    text-align: center;
}
.list-item span{
    width:0.92rem;
    height:0.92rem;
    border-radius:50%;
    display: block;
    background-color:orange;
    margin:auto auto 0.1rem;
}
.list-item i{
    display: block;
    font-style: normal;
    color:#666;
}
.list-item span img{
    text-align: center;
    margin-top:0.17rem;
    width:0.6rem;
    height:0.6rem;
}
 .item .item-item{
    width:100%;
    height:2.98rem;
    margin-top:0.3rem;
    background-color: #ffffff;
}
.item .item-item img {
    width:100%;
    height:2.1rem;
}
.item-item .item-footer{
     background-color: #ff6600;
     width:100%;
     height:0.56rem;
     text-align:center;
     line-height:0.56rem;
     font-size:0.26rem;
     color:white;
}
.item-footer{
    width:100%;
    height:2.29rem;
    display:flex;
}
.item-footer li {
    width:33.3%;
    height:2.29rem;
}
.item-footer li img{
    width:100%;
    height:100%;
}
</style>
