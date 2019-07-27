<template>
    <div class="search">
        <header>
            <i class="iconfont" @click="back">&#xe517;</i>
            <span>搜索结果</span>
            <i class="iconfont">&#xe60e;</i>
        </header>
        <div class="sect">
            <div class="sea">
                <input type="text" placeholder="请输入关键字" v-model="context">
                <i class="iconfont" @click="goSearch">|&#xe63c;</i>
            </div>
            <p><span class="result">"{{content.text}}"</span>搜索结果列表(共找到<span class="result">{{length}}</span>个商品)</p>
        </div>
        <section>
            <div v-for="(item,index) in brrList" :key="index" @click="godetail(item.ItemCode)">
                <img :src="item.url">
                <span v-if="item.style">{{item.style}}</span>
                <p>{{item.Cpmc}}{{item.Instro}}</p>
                <b>￥{{item.Price}}</b>
            </div>
        </section>
    </div>
</template>

<script>
import {mohusearch} from "../store/index.js"
export default {
    
    data(){
        return{
            content:this.$route.params,
            brr:[],
            length:0,
            context:""
        }
    },
    created(){
        this.search(this.content.text)
    },
    computed:{
        brrList(){
            
                return this.brr
           
        }
        
    },
    methods:{
        search(nr){
            this.$axios.get("http://localhost:4000/secdetail").then((res)=>{
                mohusearch(res.data,'fenlei','Cpmc','Instro',nr,this.brr)
                this.length = this.brr.length
            })
        },
        goSearch(){
            this.brr = []
            this.content.text = this.context
            this.search(this.context)
            this.context =""
            console.log(this.content)
            this.length = this.brr.length
        },
        godetail(idx){
            this.$router.push("/detail/"+idx+"/"+this.brr[0].id)
        },
        back(){
            this.$router.push("/home/fenlei")
        }
    }
}
</script>

<style lang="scss">
@import "../assets/reset.scss";
.search{
    section{
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
       div{
           background: #fff;
           margin-top: 0.1rem;
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
    header{
        height: 0.88rem;
        padding: 0 0.3rem;
        background: #F9F8F8;
        border-bottom: 1px solid #E4E4E4;
        display: flex;
        justify-content: space-between;
        line-height: 0.88rem;
        i,span{
            font-size: 16px;
        }
    }
    .sect{
        position: relative;
        background: #fff;
        .sea{
            padding: 0.2rem 0.3rem;
            input{
                padding-left: 0.1rem;
                height: 0.66rem;
                width: 100%;
                border-radius: 5px;
                border: 1px solid #ccc;
            }
            i{
                top: 0.22rem;
                right: 0.4rem;
                font-size: 24px;
                color: #ccc;
                position: absolute
            }
        }
        p{
            color: #545454;
            padding-left: 0.3rem;
            font-size: 14px;
        }
        .result{
            color: red;
            font-size: 14px;
        }
    }
}

</style>
