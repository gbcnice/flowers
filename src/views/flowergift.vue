<template>
  <div class="flowerlang">
       <Head/>
         <h2>图文推荐</h2>
           <div class="articleitem" v-for="(item,index) in list" :key="index">
               <img :src="item.img">
               <p>{{item.item}}</p>
           </div>
            <h2>推荐文章</h2>
            <div class="articleitem2" v-for="(items,indexs) in content" :key="indexs">
              <p>{{items.title}}</p>
               <p>{{items.item}}</p>
           </div>
      </div>  
</template>
<script>
import Head from "../components/header"
export default {
    components:{
        Head
    },
    data(){
       return {
            list:[],
            content:[]
        }
    },
    created(){
        this.$axios.get("http://localhost:3000/team").then((res)=>{
            this.list=res.data[3].Language[0].picture
            this.content=res.data[3].Language[0].article
        })
    }
}
</script>
<style>
.flowerlang>h2{
    text-align: center;
    background-color: white;
}
   .articleitem{
       height:1.9rem;
       display: flex;
       background-color: white;
   }
   .articleitem img{
       width:1.6rem;
       height:1.1rem;
   }
   .articleitem p{
       width:6rem;
       height:0.7rem;
   }
   .articleitem2{
       height:1.9rem;
       display: flex;
       justify-content: space-around;
       background-color: white;
   }
   .articleitem2 p{
       font-size:0.3rem;
       color:#666;
   }
</style>


