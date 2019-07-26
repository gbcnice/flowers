<template>
  <div class="about">
      <ul class="list">
        <li v-for="(item,index) in cart.cart" class="row" :key="index">
          <img :src="item.url" />
          <div class="item-right">
             <p>{{item.Instro}}</p>
            <p>{{item.style}}</p>
            <section>
               <p>数量:</p><button @click="inc(item.ItemCode)">+</button>
                    <i>{{item.count}}</i>
            <button @click="dec(item.ItemCode)">-</button>
            <button @click="delet(item.ItemCode)" class="del">删除</button>
            </section>
         
            <span>￥{{item.Price}}</span>
          </div>
         
        </li>
      </ul>
      <div class="footer">
         <div class="footer-left">去结算({{count}})</div>
          <div class="footer-right">应付:{{money}}元</div>
          </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["cart","cart"]),                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    ...mapGetters(["money", "count"])
  },
  methods: {
    ...mapMutations(["add", "inc", "dec","delet"])
  }
};
</script>

<style>
.about{
   height:12rem;
   position: relative;
}
.about .footer{
   width:100%;
   height:1rem;
   background-color: green;
   margin-top:1.2rem;
   position: absolute;
   bottom:0.76rem;
   display: flex;
}
.about .footer-left{
   width:4.68rem;
   height:1rem;
   background-color: white;
   text-align: left;
   line-height:1rem;
   font-size: 0.4rem;
}
.about .footer-right{
   font-size: 0.4rem;
    text-align: right;
   line-height:1rem;
}
.del{
   margin-left:0.3rem;
}
.about .list{
   width:100%;
   margin:0.2rem 0 0.4rem 0;
   min-height: 1.2rem; 
   display: block;
}
.about .list .row span{
      display: block;
      width:0.8rem;
      height: 0.8rem;
      text-align:center;
      line-height: 0.8rem;
      color:orange;
      font-size:0.3rem;
      margin-left:0.6rem;
}
.about .list li{
   width: 100%;
   height:2.28rem;
   background-color: white;
   margin-bottom: 0.2rem;
   display: flex;
}
.about .list li section{
   margin-top:0.2rem;
   width:4.06rem;
   height:0.48rem;
   display: flex;
}
.about .list li section button {
   width:0.7rem;
   height:0.5rem;
}
.about .list li section i {
   text-align: center;
   font-style: normal;
   width:0.6rem;
   height:0.5rem;
   line-height: 0.5rem;
}
.about .list li img{
   width:2.08rem;
   height:2.08rem;
   border:0;
}
.about .list li p{
   display: inline;
}
 .about .list .item-right{
    margin-top:0.2rem;
    width:4rem;
     height:2.08rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
 }
 .about .list .item-right p{
  font-size: 0.3rem;
  margin-left:0.2rem;
 } 
</style>
