<template>
    <section>
            <div v-for="item in list" :key="item.ItemCode" @click="jump(item.ItemCode)">
                <img :src="item.url">
                <span v-if="item.style">{{item.style}}</span>
                <p>{{item.Cpmc}}{{item.Instro}}</p>
                <b>￥{{item.Price}}</b>
            </div>
    <button>选择更多</button>

        </section>
</template>
<script>
export default {
    data(){
        return{
            list:"",
            id:""
        }
    },
    created(){            
            this.type = "hot"
            this.$axios.get("http://localhost:4000/secdetail").then((res)=>{
                  
                 this.list = res.data[1].fenlei;
                 this.id=res.data[1].id
                 
            })
    },
    methods:{
        jump(idx){
            this.$router.push("/detail/"+idx+"/"+this.id)
        }
    }
     
}
</script>
<style scoped lang="scss">
@import "../assets/reset.scss";
button {
        width: 1.92rem;
        height: .52rem;
    background-color: white;
    color: black;
    border: 1px solid #555555;
    margin:  .2rem 0 .2rem 0;
}
section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background: rgba(243, 241, 241, 0.973);
        
       div{
           background: #fff;
           margin-top: 0.2rem;
            img{
                width: 3.6rem;
                height: 3.8rem;
            }
            span{
                display: block;
                color: $active;
                border: 1px solid $active;
                border-radius: 10px;
                width: 1.1rem;
                text-align: center;
                margin: 0 0.1rem;
            }
            p{
                margin: 0 0.1rem;
                width: 3.4rem;
                font-size: 14px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #AAACAC;
                padding: 0.1rem 0;
            }
            b{
                padding: 0 0.1rem;
                color: $active;
                font-size: 14px;
            }
        } 
}
</style>

