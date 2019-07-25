<template>
    <div class="fenlei">
        <div class="fenlei-head">
            <v-touch class="fenlei-search iconfont" @tap="back">&#xe517;</v-touch>
            <div class="fenlei-input">
                <i class="iconfont">&#xe63c;</i>
                <input type="text" value="请输入关键词">
            </div>
        </div>
        <figure>
            <ul>
                <li @click="changeindex('hot')"  :class="{active:current=='hot'}"><router-link to="/home/fenlei/hot">热门推荐</router-link></li>
                <li @click="changeindex('flower')" :class="{active:current=='flower'}"><router-link to="/home/fenlei/flower">鲜花</router-link></li>
                <li @click="changeindex('longflower')" :class="{active:current=='longflower'}"><router-link to="/home/fenlei/longflower">永生花</router-link></li>
                <li @click="changeindex('cake')" :class="{active:current=='cake'}"><router-link to="/home/fenlei/cake">蛋糕</router-link></li>
                <li @click="changeindex('chocolate')" :class="{active:current=='chocolate'}"><router-link to="/home/fenlei/chocolate">巧克力</router-link></li>
                <li @click="changeindex('gift')" :class="{active:current=='gift'}"><router-link to="/home/fenlei/gift">特色礼品</router-link></li>
                <li @click="changeindex('case')" :class="{active:current=='case'}"><router-link to="/home/fenlei/case">礼篮</router-link></li>
                <li @click="changeindex('green')" :class="{active:current=='green'}"><router-link to="/home/fenlei/green">绿植花卉</router-link></li>
            </ul>
            <router-view></router-view>
        </figure>
        <section>
            <img :src="list.banner">
            <p>{{list.info}}</p>
            <ol>
                <li v-for="(item,index) in list.list" :key="index" @click="goDetail(item.id)">
                    <img :src="item.simg" class="simg">
                    <span>{{item.text}}</span>
                </li>    
            </ol>
        </section>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data() {
        return{
            type:"hot",
            list:[],
            current:1
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            if(!this.type)
            this.type = "hot"
            this.$axios.get("http://localhost:4000/"+this.type).then((res)=>{
                // console.log(res.data[0])
                this.list = res.data[0];
            })
            let params = {
                itemcodes:9010966
            }
            // this.$axios.post("/flower/home/GetProductListPrice",qs.stringify(params)).then((req)=>{
            //     console.log(req)
            // })
        },
        back() {
            this.$router.push("/");
        },
        goDetail(id){
            this.$router.push("/secdetail/"+id)
        },
        changeindex(index) {
            this.current = index
            // console.log(this.current)
        }
    }, 
    watch:{
        $route:{
        handler(newV){
            this.type=newV.params.type;
            this.current = newV.params.type;
            if(newV.path == "/home/fenlei"){
                this.type = 'hot';
                this.current = 'hot';
            }
            this.getData();
        },
        deep:true,
        immediate:true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/reset.scss";
.fenlei-head{
    padding: 0.1rem;
    display: flex;
    height: 0.68rem;
    background: #fff;
    border-bottom: 2px solid #F1F3F6;
    line-height: 0.68rem;
    .fenlei-search{
        flex:12%;
        color: #71797F;
        text-align: center;
    }
    .fenlei-input{
        padding: 0 0.1rem;
        flex: 88%;
        background: #E9ECF0;
        border-radius: 5px; 
        input{
            border:none;
            color: #71797F;
            background: #E9ECF0;
        }
        .iconfont{
            padding: 0 0.1rem;
            font-size: 14px;
            color: $iconfont;
        }
    }
    
}
.fenlei figure{
    border-right: 2px solid #F1F3F6;
    width: 1.82rem;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0.93rem;
    font-size: 14px;
    text-align: center;
    line-height: 1.12rem;
    li{
        border-left:2px solid white;
    }
    .active{
        border-left:2px solid $active;
        a{
            color: $active;
        }
    }
    
}
.fenlei section{
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 1.86rem;
    right: 0;
    padding: 0.1rem;
    top: 0.93rem;
    img{
        width: 100%;
    }
    p{
        font-size: 14px;
        border-bottom:1px solid #E9ECF0;
        line-height: 0.72rem;
    }
    ol{
        display: flex;
        flex-wrap: wrap;
        margin: 0.15rem -0.2rem;
        li {
            display: flex;
            flex-direction: column;
            width: 1.12rem;
            margin-left: 0.6rem;
            text-align: center;
          .simg{
              margin-top: 0.3rem;
                height: 1.12rem;
                width: 1.12rem;
            }  
        }
    } 
}

</style>
