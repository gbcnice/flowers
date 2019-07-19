<template>
  <div class="home">
    <router-view></router-view>
    <footer>
      <router-link class="home-foot" to="/home/index" :style="{color:currentidx=='/home/index'?'#FF734C':''}">
        <i class="iconfont" @click="changeindex('/home/index')">&#xe509;</i>
        <span>首页</span>
      </router-link>
      <router-link class="home-foot" to="/home/fenlei" :style="{color:currentidx=='/home/fenlei'?'#FF734C':''}">
        <i class="iconfont" @click="changeindex('/home/fenlei')">&#xe60e;</i>
        <span>分类</span>
      </router-link>
      <router-link class="home-foot" to="/home/car" :style="{color:currentidx=='/home/car'?'#FF734C':''}">
        <i class="iconfont" @click="changeindex('/home/car')">&#xe503;</i>
        <span>购物车</span>
      </router-link>
      <router-link class="home-foot" to="/home/my" :style="{color:currentidx=='/home/my'?'#FF734C':''}">
        <i class="iconfont" @click="changeindex('/home/my')">&#xe721;</i>
        <span>我的</span>
      </router-link>
    </footer>
    
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      currentidx:1
    }
  },
  methods:{
    changeindex(index) {
      this.currentidx = index
    }
  },
  watch:{
    $route:{
    handler(newV){
      this.currentidx = newV.path;
      if(newV.path!='/home/fenlei'&&newV.path!='/home/my'&&newV.path!='/home/index'&&newV.path!='/home/car'){
        this.currentidx = '/home/fenlei'
      }
    },
    deep:true,
    immediate:true
    }
  }
}
</script>
<style>
.home footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.98rem;
  align-items: center;
  display: flex;
  justify-content: space-around;
  background: #F7F9FA;
}
.home footer .home-foot{
  display: flex;
  flex-direction: column;
}
.home footer .iconfont{
  text-align: center;
  font-size: 20px;
}

</style>

