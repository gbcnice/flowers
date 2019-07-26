<template>
    <div class="detail">
        <header>
            <i class="iconfont" @click="back">&#xe517;</i>
            <span><img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"></span>
          
            <i class="iconfont">&#xe60e;</i>
        </header>
        <swiper :id="id" :idx="idx"></swiper>
        <div class="pri">
            <p class="pri-title">{{Cpmc}}&nbsp;&nbsp;<span>{{Instro}}</span></p>
            <span class="new-price">￥{{LinePrice}}</span>
            <del class="old-price">￥{{Price}}</del>
            <span class="iconfont like">&#xe772;</span>
        </div>
        <section></section>
        <div class="zhekou">
            <div>
               <p><span class="iconfont">&#xe635;</span> APP下单立减3元<i class="iconfont">&#xe604;</i></p>
            </div>
        </div>
        <footer class="carfooter">
            <div><i class="iconfont">&#xe76f;</i><span @click="go('/home/index')">首页</span></div>
            <div>
                <i class="iconfont">&#xe503;</i>
                <span @click="go('/home/car')">购物车</span>
                <nav>{{count}}</nav>
            </div>
            <div><span class="imme" @click="add({...info,count:1})">加入购物车</span></div>
            <div><span class="add" @click="nowBuy">立即购买</span></div>
        </footer>
    </div>
</template>

<script>
import swiper from "../components/swiper.vue"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
    
    components:{
        swiper
    },
    data(){
        return {
            flag:false,
            idx:this.$route.params.id,
            info:[],
            id:this.$route.params.num,
            Cpmc:"",
            Instro:"",
            Price:"",
            LinePrice:"",
            url:""
        }
    },
    created(){
        this.$axios.get("http://localhost:4000/secdetail/",{
            params:{
                id:this.id,
            }
        }).then((res)=>{
            this.info=res.data[0].fenlei.filter((item)=>{
                return (item.ItemCode == this.idx)
            })
            this.info = this.info[0]
            this.url = this.info.url
            this.Cpmc = this.info.Cpmc
            this.Instro = this.info.Instro
            this.LinePrice = this.info.LinePrice
            this.Price = this.info.Price
        })
    },
     computed:{
        ...mapState(["products","products"]),
         ...mapGetters([ "count"])
   },
    methods:{
        go(path){
            this.$router.push(path)
        },
        nowBuy(flag){
         this.$router.push({name:'car',query:{flag:flag}})   
        },
        ...mapMutations(["add"]),
        back(){
            this.$router.back()
        }
    }
}
</script>

<style lang="scss">
@import "../assets/reset.scss";
.detail {
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
            img{
                height: 0.4rem;
                width: 3rem;
            }
        }
    }
}
.detail section{
    height: 0.21rem;
    background: #f4f4f8;
}

.detail{
    background: white;
    
}
.detail .pri{
    padding: 0.26rem 0.3rem;
    .pri-title{
        font-size: 14px;
        padding-bottom: 0.1rem;
        span{
            color: $active;
        }
    }
}
.detail .swiper-container .swiper-wrapper .swiper-slide{
    height: 8.18rem;
}
.detail .zhekou{
    padding:0 0.3rem;
}
.detail .zhekou div,.detail .zhekou p{
    height: 0.96rem;
    font-size: 16px;
    line-height: 0.96rem;
    i{
        margin-left: 3.7rem;
    }
}
.detail .zhekou div p{
    border-bottom:1px solid #f4f4f8;
}
.detail .pri .like{
    float: right;
    font-size: 20px;
    margin-top: -0.5rem;
}
.detail .pri .new-price{
    font-size: 20px;
    font-weight: bold;
    color: $active;
}
.detail .pri .old-price{
    color: #b2b2b2;
}
.detail footer{
    display: flex;
    align-items: center;
}
.detail footer div{
    display: flex;
    flex-direction: column;
    text-align: center;
    .imme{
        font-size: 14px;
        background: $iconfont;
        color: #fff;
        height: 100%;
        line-height: 0.96rem;
        display: block;
    }
    .add{
        font-size: 14px;
        background: $active;
    }
}
.detail footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    height: 0.96rem;
    box-sizing: border-box;
}
.detail footer div:nth-of-type(1){
    border-right: 1px solid #f4f4f8;
    flex:22%;
}
.detail footer div:nth-of-type(2){
    flex:22%;
    border-right: 1px solid #f4f4f8;
}
.detail footer div:nth-of-type(3){
    flex:26%;
}
.detail footer div:last-of-type{
    flex:30%;
    height: 100%;
    line-height: 0.96rem;
    color: white;
}
.swiper-container .swiper-wrapper .swiper-slide .detail-banner{
    height: 100%;
}
.detail .swiper-slide{
    position: relative;
}
.detail .swiper-slide span{
    position: relative;
    top: -0.6rem;
    right: -6.5rem;
    color: white;
    background: rgba(0,0,0,0.8);
    width: 0.75rem;
    display: block;
    text-align: center;
}
.detail .swiper-container{
    height: 8.18rem;
}
.carfooter{
    position:relative;
}
footer nav {
    width:0.3rem;
    height:0.3rem;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    line-height: 0.3rem;
    position:absolute;
    left:2.5rem;
    top:0.1rem;
    color:white;
    font-size:0.1rem;
    }
</style>
