<template>
    <div class="secdetail">
        <header>
            <i class="iconfont" @click="back">&#xe517;</i>
            <span>{{list.text}}</span>
            <i class="iconfont">&#xe76f;</i>
            <i class="iconfont">&#xe60e;</i>
        </header>
        <ol>
            <li :class="{active:current=='综合'}" @click="changeCurrent('综合')">综合</li>
            <li :class="{active:current=='销量'}" @click="changeCurrent('销量')">销量</li>
            <li :class="{active:current=='价格'}" @click="changeCurrent('价格')">价格</li>
            <li :class="{active:current=='新品'}" @click="changeCurrent('新品')">新品</li>
        </ol>
        <ul>
            <li v-for="(item,index) in str" :key="index" @click="changeStyle(item)">
                {{item}}
            </li>
        </ul>
        <section>
            <div v-for="(item,index) in arrList" :key="index" @click="godetail(item.ItemCode)">
                <img :src="item.url">
                <span v-if="item.style">{{item.style}}</span>
                <p>{{item.Cpmc}}{{item.Instro}}</p>
                <b>￥{{item.Price}}</b>
            </div>
        </section>
    </div>
</template>

<script>
import {sort} from "../store/index.js"
export default {
    data() {
        return {
            text:"",
            list:[],
            str:"",
            style:"all",
            brr:[],
            current:"综合",
            crr:[]
        }
    },
    created() {
        this.getData()
    },
    computed:{
        arrList(){
            if(this.style=="all"){
                return this.list.fenlei
            }
            else{
                this.brr = this.list.fenlei.filter((item)=>{
                    return (item.fl == this.style)
                })
                return this.brr
            }
        }
    },
    methods:{
        changeCurrent(type){
            this.current = type
            switch(type){
                case '价格':{
                    sort('Price',this.list.fenlei)
                    break;
                }
                case '销量':{
                    sort('num',this.list.fenlei)
                    break;
                }
                case '新品':{
                    sort('new',this.list.fenlei)
                    break;
                }
                case '综合':{
                    sort('ItemCode',this.list.fenlei)
                    break;
                }
            }
        },
        godetail(idx){
            this.$router.push("/detail/"+idx+"/"+this.text.id)
        },
        getData(){
            this.text = this.$route.params
            this.$axios.get("http://localhost:4000/secdetail/"+this.text.id).then((res)=>{
                this.crr = res.data;
                this.list = res.data;
                var set = new Set([]);
                var arr = this.list.fenlei;
                sort('ItemCode',this.list.fenlei)
                arr.forEach((item) => {
                    set.add(item.fl);
                });
                this.str = [...set]
            })
        },
        changeStyle(item){
            this.style = item;
        },
        back(){
            this.$router.push("/home/fenlei")
        }
    }
}
</script>

<style lang="scss">
@import "../assets/reset.scss";
.secdetail{
    header{
        display: flex;
        background: #fff;
        height: 0.88rem;
        line-height: 0.88rem;
        .iconfont{
            flex: 10%;
            font-size: 18px;
            text-align: center;
        }
        span{
            font-size: 16px;
            text-align: center;
            flex: 70%;
        }
    }
    ol{
        background: #fff;
        display: flex;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        font-size: 14px;
        li{
            flex:1;
        }
    }
    ul{
        border-top: 1px solid #f7f7f7;
        display: flex;
        background: #fff;
        height: 0.88rem;
        align-items: center;
        justify-content: space-around;
        li{
            background: #F7F9FA;
            height: 0.48rem;
            width: 1.3rem;
            line-height: 0.48rem;
            text-align: center;
        }
    }
    section{
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
}
.active{
    color: $active;
}
</style>
