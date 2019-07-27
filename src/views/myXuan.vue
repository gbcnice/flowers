<template>
    <div class="songlianren/aiqingmeigui">
    <div class="slr">
        <ul>
            <li v-for="itme in list" :key="itme.qwe" @click="jump(itme.ItemCode)">
                <img :src="itme.url" class="dg">
                <div class="wenzi">
                   <span>{{itme.Cpmc}}</span><br>
                <span>{{itme.Instro}}</span><br>
                <span>{{itme.cailiao}}</span><br>
                <span>{{itme.Price}}</span><span>{{itme.LinePrice}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="iconfont">&#xe503;</span> <br>
                <span>已销售{{itme.new}}</span><br>
                </div>
            </li>
        </ul>
    </div>
    <button>选择更多</button>
    </div>
</template>
<script>
import { constants } from 'crypto';
export default {
    data(){
        return{
            list:"",
            qwe:""

        }
    },
    created(){
            this.type = "hot"
            this.$axios.get("http://localhost:4000/secdetail").then((res)=>{  
                 this.list = res.data[0].fenlei;
                 this.id=res.data[0].id
                
            })
    },
     methods:{
        jump(idx){
            this.$router.push("/detail/"+idx+"/"+this.id)
        }
    }
    
}
</script>
<style scoped>
    button {
        width: 1.92rem;
        height: .52rem;
    background-color: white;
    color: black;
    border: 1px solid #555555;
    margin:  .2rem 0 0 35%;
}
    .dg{
        width: 3.52rem;
        height: 3.84rem;
        border-radius: .2rem;
    }
    .slr ul{
        background: rgba(243, 241, 241, 0.973);
    }
    .slr ul li{
        margin: 2.5% 0 0 2.5%;
        width: 95%;
        height: 3.84;
        background: #fff;
        display: flex;
        border-radius: .2rem; 
    }
    .slr ul li .wenzi span:nth-child(1){
        display: inline-block;
        margin: .5rem 0 0 .3rem;
    }
     .slr ul li .wenzi span:nth-child(3){
        display: inline-block;
        margin-left: .3rem;
        border-bottom:1px solid rgb(211, 209, 209) ;
        height: .6rem;
     }
     .slr ul li .wenzi span:nth-child(5){
        display: inline-block;
        margin: .1rem 0 0 .3rem;
        border-bottom:1px solid rgb(211, 209, 209) ;
        height: .5rem;
     }
     .slr ul li .wenzi span:nth-child(7){
        display: inline-block;
        margin: .3rem 0 0 .3rem;
        color:#FF734C;
        font-size: .4rem;
     }
      .slr ul li .wenzi span:nth-child(8){
        display: inline-block;
        font-size: .2rem;
        color: #71797F;
        text-decoration:line-through;
        margin:0 .6rem 0 .2rem; 
     }
     .slr ul li .wenzi span:nth-child(11){
        display: inline-block;
        margin-left: .3rem;
        color: #71797F;
        
     }





    img{
        display: block;
    }
   
</style>


