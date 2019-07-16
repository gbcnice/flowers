<template>
  <div class="home">
    <router-view></router-view>
    <footer>
      <router-link class="home-foot" to="/home/index">
        <i>首页</i>
        <span>首页</span>
      </router-link>
      <router-link class="home-foot" to="/home/fenlei">
        <i>分类</i>
        <span>分类</span>
      </router-link>
      <router-link class="home-foot" to="/home/car">
        <i>购物车</i>
        <span>购物车</span>
      </router-link>
      <router-link class="home-foot" to="/home/my">
        <i>我的</i>
        <span>我的</span>
      </router-link>
    </footer>
    
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
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
}
.home footer .home-foot{
  display: flex;
  flex-direction: column;
}
</style>

