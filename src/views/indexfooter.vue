<template>
    <div class="footer">
         <div class="header">
            <img :src='image'>
         </div>
         <div class="brand">
               <h3>为什么选择我们</h3>
               <div class="brand-list">
                    <div class="brand-item" v-for="(item,index) in pic" :key="index">
                             <img :src="item.img">
                             <p>{{item.title}}</p>
                    </div>
               </div>
         </div>
         <div class="bottom-dev">
              <div class="bottom-item">
                    <a  v-on:click="clickHandler">企业团购</a>
                    <a  v-on:click="clickDesign">设计师款</a>
                    <a  v-on:click="clickcity">同城鲜花</a>
                    <a  v-on:click="clickgift">花语大全</a>
              </div>
              <div class="bottom-item">
                    <a href="#">花礼优势</a>
                    <a href="#">勇敢爱</a>
                    <a href="#">常见问题</a>
                    <a href="#">关于我们</a>
              </div>
              <!-- <p class="footer-copyright">
                  Copyright © 2005~2019 花礼网（中国鲜花礼品网）版权所有<br>
                  中国鲜花网领先品牌，鲜花速递专家！
              </p> -->
              <div class="phone">
                     <a href="#">
                         <span class="iconfont">&#xe631;</span>
                         <p>客户端</p>
                     </a>
                      <a href="#">
                         <span class="iconfont">&#xe76f;</span>
                         <p>客服</p>
                     </a>
              </div>
              
         </div>

    </div>    
</template>

<script>
export default {
    data(){
      return {
          list:[],
          image:"",
          pic:[]
      }
    },
    created(){
        this.$axios.get("http://localhost:3000/list").then((res)=>{
                     console.log(res.data)
                     this.list=res.data
                     this.image = this.list[0].image
        }),
         this.$axios.get("http://localhost:3000/choose").then((res)=>{
                      this.pic=res.data
        })
    },
    methods:{
        clickHandler(){
            this.$router.push('/indexDetail')
        },
        clickDesign(){
           this.$router.push('/designflower') 
        },
        clickcity(){
            this.$router.push('/cityflower')
        },
        clickgift(){
            this.$router.push('/flowergift')
        }
    }
}
</script>
<style scoped>
.footer .header img{
    width:100%;
    height:2.5rem;
} 
.brand{
    background-color: #fff;
    margin-bottom: 0.16rem;
}
.brand h3{
    width:100%;
    box-sizing: border-box;
    text-align: center;
    padding:0.4rem 0;
    height:0.32rem;
}
.brand .brand-list{
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.brand .brand-list .brand-item{
    width:33%;
    text-align: center;
     box-sizing: border-box;
    padding-bottom: 0.48rem;  
}
.brand .brand-list .brand-item>img{
    width:1.28rem;
    height:1.28rem;
}
.bottom-dev{
    width:100%;
    height:4.36rem;
    background-color: #fff;
}
.bottom-dev .bottom-item {
    width:100%;
    /* height:0.48rem; */
    display: flex;
    box-sizing: border-box;
    padding:0.4rem 0 0.28rem 0;
    justify-content: space-around;
    text-align: center;
}
.bottom-dev .bottom-item:nth-child(2){
    padding-top: 0;
}
.bottom-dev .bottom-item a{
    display: block;
    padding: 0.04rem 0.08rem;
    width:1rem;
    line-height:0.4rem;
    background-color: #E9ECF0;
}
.bottom-dev .phone {
    width:100%;
    height:1.12rem;
    display: flex;
    justify-content: space-around;
}
.bottom-dev .phone a{
    text-align: center;
    display: block;
    width:0.72rem;
    height:1.12rem;
}
.bottom-dev .phone a span{
    display: block;
    width:0.72rem;
    height:0.72rem;
    text-align: center;
    line-height: 0.72rem;
    margin-bottom:0.2rem;
    background-color:#E9ECF0;
    border-radius: 50%;
}
.footer-copyright{
    padding-top:0.28rem;
    color:#B4BABF;
    text-align: center;
}


</style>


