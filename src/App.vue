<template>
  <div id="app">
    <div id="nav">
    </div>
    <Indexfooter/>
    <router-view/>
  </div>
</template>
<script>
import Indexfooter from './views/indexfooter'
export default {
   components:{
     Indexfooter
   }
}
</script>

<style>
</style>
