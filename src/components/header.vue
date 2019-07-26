<template>
    <div class="headers">
          <header class="header-T">
              <span class="iconfont" @click="clickback">&#xe517;</span>
              <h2>同城鲜花专区</h2>
              <span class="iconfont">&#xe60e;</span>
         </header>
    </div>
</template>
<script>
export default {
    methods:{
  clickback(){
      this.$router.back()
  }
    }
}
</script>

<style>
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
</style>


