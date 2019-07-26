<template>
    <div class="city">
        <Head/>
        <div class="list" >
            <div class="list-item" v-for="(item,index) in list" :key="index">
                <a>{{item.title}}</a>
               <!-- <ul>
                    <li v-for="(item,index) in item" :key="index">
                        {{item}}
                    </li>
               </ul> -->
            </div>
        </div>
    </div>
</template>
<script>
import Head from "../components/header"
export default {
    components:{
        Head
    },
    computed:{
        getList(){
            for(var i=0;i<this.item.length;i++){
            console.log(this.item[i].item)
            }
        }
    },
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.$axios.get("http://localhost:3000/team").then((res)=>{
            // console.log(res.data[2].city)
            this.list=res.data[2].city
             console.log(this.list)
        })
    }
}
</script>
<style>
    .city .list{
        width:100%;
        height:10rem;
        display: block;
        padding:0 0.28rem 0.32rem 0.28rem;
        box-sizing: border-box;
    }
     
      .city .list .list-item{
          width:100%;
          min-height: 1.4rem;
      }
      .city .list .list-item>a{
         display: block;
         background-color: white;
         width:6.38rem;
         height:0.38rem;
         padding:0.22rem 0.26rem;
         color:orange;
         font-size: 0.3rem;
         text-align: left;
         font-weight: 600;
     }
</style>


