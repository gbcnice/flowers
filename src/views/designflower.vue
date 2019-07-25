<template>
    <div class="design">
           <header class="header-T">
              <span class="iconfont" @click="clickback">&#xe517;</span>
              <h2>设计师甄选鲜花</h2>
              <span class="iconfont">&#xe60e;</span>
         </header>
         <section>
              <div class="list-title">
                  高端花盒系列
              </div>
              <div class="list-item" >
                  <div v-for="(item,index) in list" :key="index">
                        <img :src="item.img">
                        <div class="item-footer">
                            <div class="product-info-left">
                                  <p>{{item.title}}</p>
                                  <p>{{item.brief}}  {{item.brieft}}</p>  
                                  <div class="product-info-left-bottom">{{item.item}}</div>                             
                                  <div class="item-price">
                                       <p>RMB</p>
                                       <div>
                                           599
                                       </div>
                                  </div>
                            </div>   
                             
                        </div>
                  </div>
                  
              </div>        
         </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.$axios.get("http://localhost:3000/team").then((res)=>{
               this.list=res.data[1].design
        })
    },
    methods:{
        clickback(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
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
 .design section{
     width:100%;
     height:60rem;
     box-sizing: border-box;
     padding:0 0.48rem 0.32rem 0.48rem;
     background-color: #696C6F
 }
.design .list-title{
    text-align: center;
    font-size: 0.3rem;
    width:6.54rem;
    height:0.38rem;
    line-height:0.38rem;
    color:#fff;
    padding:0.24rem 0;
}
.design .list-item img{
    width:6.54rem;
    height:8.72rem;
}
.design .item-footer{
    width:6.22rem;
    height:2.24rem;
    padding:0.32rem  0.16rem;
    background-color: #494949;
     position: relative;
}
.product-info-left{
    width:4.94rem;
    height:0.88rem;
    padding:0.08rem 0 0 0.24rem;
    border-left:4px solid #777;
   
}
.product-info-left p{
    color:white;
    text-align: left;
    font-size: 0.12rem;
}
.product-info-left p:nth-child(2){
    font-size: 0.3rem;
}
.product-info-left-bottom{
    text-align: left;
    color:#bcbcbc;
    margin-left:-0.3rem;
     margin-top:0.3rem;
    width:6.22rem;
    height:0.96rem;
    padding: 0.08rem 0;
}
.item-price{
    width:0.76rem;
    height:0.76rem;
    position: absolute;
    top:0.32rem;
    right:0.16rem;
    background-color: #232323;
    color:white;
    padding:0.08rem 0;
}
.item-price>p{
    width:100%;
    height:0.32rem;
    font-size:0.12rem;
    line-height: 0.16rem;
    letter-spacing: 0.02rem;
     text-align: center;
}
.item-price>div{
     width:100%;
    height:0.52rem;
    font-size:0.4rem;
    line-height: 0.26rem;
}
</style>

