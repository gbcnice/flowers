<template>
    <div class="footer">
        <div class="toubu-daohang">
            <span class="iconfont">&#xe60e;</span>
            <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png">
            <span class="iconfont">&#xe76f;</span>
            </div>
            <div class="swiper">
               <mySwiper />
            </div>
            <div class="lunboxm-renzheng">
                <div>
                    <span class="iconfont">&#xe80e;</span>
                    <span>认证龙头企</span>
                </div>
                <div>
                    <span class="iconfont">&#xe80e;</span>
                    <span>14年品</span>
                </div>
                <div>
                    <span class="iconfont">&#xe80e;</span>
                    <span>3小时送</span>
                </div>
                <div>
                    <span class="iconfont">&#xe80e;</span>
                    <span>最近319918条好评</span>
                </div>
            </div>
            <div class="renzhengxm-xianhua">
                <div class="xianhua">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_flower.png"><br>
                    <span>鲜花</span>
                </div>
                <div class="xianhua">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_ppf.png"><br>
                    <span>永生花</span>
                </div>
                <div class="xianhua">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_cake.png"><br>
                    <span>蛋糕</span>
                </div>
                <div class="xianhua">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_gift.png"><br>
                    <span>礼品</span>
                </div>
                <div class="xianhua">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png"><br>
                    <span>巧克力</span>
                </div>
            </div>
            <div class="yimiaoxuanhua">
            <div class="yimiaoxuanhua-daohang">
                <span>|</span> <span>一秒选花</span>
            </div>
            <div class="yimiaoxuanhua-lianren">
                <div class="lianren">
                    <img src="https://img02.hua.com/m/home/img/m_home_use_love.png?0718"><span>送恋人</span>
                </div>
                <div class="changbei">
                    <img src="https://img02.hua.com/m/home/img/m_home_use_parent.png?0718"> <span>送长辈</span>
                </div>
                <div class="pengyou">
                    <img src="https://img02.hua.com/m/home/img/m_home_use_friend.png?0718"><span>送朋友</span>
                </div>
            </div>
            <div class="yimiaoxuanhua-shengri">
                <ul>
                    <li>
                        <img src="https://img02.hua.com/m/home/img/m_home_use_birthday.png?0718" alt="">
                        <span>生日祝福</span>
                    </li>
                     <li>
                        <img src="https://img02.hua.com/m/home/img/m_home_use_profess.png?0718" alt="">
                        <span>表白求婚</span>
                    </li>
                     <li>
                        <img src="https://img02.hua.com/m/home/img/m_home_use_business.png?0718" alt="">
                        <span>开业商户</span>
                    </li>
                     <li>
                        <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary.png?0718" alt="">
                        <span>周年纪念</span>
                    </li>
                </ul>
            </div>
            <div class="yimianxuanhuo-rxtj">
                <ul>
                    <li class="yimianxuanhua-rexiaobang">
                        <span class="ymxh-rsb">热销榜</span><br>
                        <span class="ymxh-qw">集万千宠爱</span>
                    </li>
                    <li class="yimianxuanhua-tejia">
                        <span class="ymxh-rsb">特价专区</span><br>
                        <span class="ymxh-qw">超值好货</span>
                    </li>
                </ul>
            </div>
            <div class="ymxh-xp">
                <ul>
                    <li class="xp-1">
                        <span>新品来袭</span>
                    </li>
                    <li class="xp-2">
                        <span>品味之选</span>
                    </li>
                    <li class="xp-3">
                        <span>设计师甄选</span>
                    </li>
                </ul>
            </div>
            </div>
            <div class="lr">
                <span>送恋人/爱情鲜花</span>
            </div>
            <myXuan />
    </div>    
</template>

<script>
import mySwiper from './mySwiper'
import myXuan from './myXuan'
export default {
    components:{
        mySwiper,
        myXuan
    }
}
</script>

<style scoped>
   .toubu-daohang{
    width: 100%;
    height: .96rem;
    background: #435448;
    display: flex;
    justify-content: space-between;
    line-height: .96rem;
    color: #fff;
    }
    .toubu-daohang img{
        width: 3rem;
        height: .4rem;
        top: 50%;
        line-height: .96rem;
        margin-top:.3rem; 
    }
    .toubu-daohang .iconfont:nth-child(1){
        margin-left: .3rem;
    font-size: .48rem;

    }
      .toubu-daohang .iconfont:nth-child(3){
        margin-right: .3rem;
    font-size: .48rem;

    }
    .swiper{
        width: 100%;
        height: 3.6rem;
    }
    .lunboxm-renzheng{
        height: .72rem;
        background: #fff;
        color: #232628;
        display: flex;
        justify-content: space-around;
        line-height: .72rem;
    }
    .renzhengxm-xianhua{
        width: 100%;
        height: 1.36rem;
        display: flex;
        justify-content: space-around;
        flex: 1;
        text-align: center;
        background: #fff;
    }
    .renzhengxm-xianhua .xianhua{
        width: 1.5rem;
        height: 1.04rem;
        margin-top: .16rem;
    }
    .renzhengxm-xianhua .xianhua img{
        width: .72rem;
        height: .72rem;
    }
    .yimiaoxuanhua .yimiaoxuanhua-daohang{
        line-height: .8rem;
        width: 100%;
        height:.8rem ;
        font-size:.32rem;
    }
    .yimiaoxuanhua{
        width: 100%;
        height: 11.8962rem;
        background: #fff;
    }
    .yimiaoxuanhua .yimiaoxuanhua-daohang span{
        margin-left: .2rem;
        color: #232628;
    }
    .yimiaoxuanhua .yimiaoxuanhua-lianren{
        display: flex;
        justify-content: space-evenly;
        height: 2.6rem;
    }
    .yimiaoxuanhua .yimiaoxuanhua-lianren img{
        width: 2.34rem;
        height: 2.6rem;
        border-radius: .1rem;
        margin-left:.08rem; 
    }
    
    .yimiaoxuanhua .yimiaoxuanhua-lianren .changbei span,.yimiaoxuanhua .yimiaoxuanhua-lianren .pengyou span,.yimiaoxuanhua .yimiaoxuanhua-lianren .lianren span
    {
        position: relative;
        left: .8rem;
        top: -2.3rem;
    }
    .yimiaoxuanhua .yimiaoxuanhua-shengri{
        margin-top: .1rem;
        width: 100%;
        height: 1.8962rem;
    }
     .yimiaoxuanhua .yimiaoxuanhua-shengri ul li{
         width: 1.735rem;
        height: 1.8964rem;
         float: left;
         margin-left: .11rem;
     }
    .yimiaoxuanhua .yimiaoxuanhua-shengri img{
        width: 1.735rem;
        height: 1.8964rem;
    }
    .yimiaoxuanhua .yimiaoxuanhua-shengri ul li span{
        position: relative;
        top: -1.7rem;
        left: .4rem;
    }
    .yimiaoxuanhua .yimianxuanhuo-rxtj{
        width: 100%;
        height: 3.5rem;
    }
    .yimiaoxuanhua .yimianxuanhuo-rxtj ul li{
        border: #E9ECF0 1px solid;
        margin: .1rem 0 0 .05rem;
    }

    .yimiaoxuanhua .yimianxuanhuo-rxtj ul li span{
        display: inline-block;
        
    }
    .yimiaoxuanhua .yimianxuanhuo-rxtj ul li .ymxh-rsb{
       margin: .3rem 0 0 .3rem;
    }
    .yimiaoxuanhua .yimianxuanhuo-rxtj ul li .ymxh-qw{
       margin-left: .3rem;
    }
    .yimiaoxuanhua .yimianxuanhuo-rxtj ul .yimianxuanhua-rexiaobang{
        float: left;
        width: 3.64rem;
        height: 3.2rem;
        background: url(https://img02.hua.com/m/home/img/m_home_ranklist.png?0718) no-repeat center;
        background-size:100%;
    }
     .yimiaoxuanhua .yimianxuanhuo-rxtj ul .yimianxuanhua-tejia{
         float: left;
        width: 3.64rem;
        height: 3.2rem;
        background: url(https://img02.hua.com/m/home/img/m_home_special.png?0718) no-repeat center;
        background-size:100%;
    }
    .yimiaoxuanhua .ymxh-xp{
        width: 100%;
        height: 2.6rem;
    }
    .yimiaoxuanhua .ymxh-xp ul li{
        height: 2.6rem;
        width: 2.34rem;
        float: left;
        margin-left: .12rem;
        text-align: center;
    }
     .yimiaoxuanhua .ymxh-xp ul .xp-1 span,.yimiaoxuanhua .ymxh-xp ul .xp-2 span,.yimiaoxuanhua .ymxh-xp ul .xp-3 span{
         display: inline-block;
         margin-top: 2.1rem;
     }
     .yimiaoxuanhua .ymxh-xp ul .xp-1{
        background: url(https://img02.hua.com/m/home/img/m_home_category_new.png?0718) no-repeat center;
        background-size:100%;
        
     }
     .yimiaoxuanhua .ymxh-xp ul .xp-2{
        background: url(https://img02.hua.com/m/home/img/m_home_category_quality.png?0718) no-repeat center;
        background-size:100%;

     }
     .yimiaoxuanhua .ymxh-xp ul .xp-3{
        background: url(https://img02.hua.com/m/home/img/m_home_category_you.png?0718) no-repeat center;
        background-size:100%;

     }
     .lr{
         width: 100%;
         height: 1.2rem;
         text-align: center;
         line-height: 1.2rem;
         background: #fff;
         color: #232628;
         font-size: .3rem;
     }


</style>
