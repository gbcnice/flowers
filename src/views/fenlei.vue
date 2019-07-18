<template>
    <div class="fenlei">
        <div class="fenlei-head">
            <span class="fenlei-search"></span>
            <div class="fenlei-input">
                <i></i>
                <input type="text" value="请输入关键词">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.fenlei-head{
    padding: 0.1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 0.68rem;
    background: #fff;
    border-bottom: 2px solid #F1F3F6;
    line-height: 0.68rem;
}
.fenlei-head .fenlei-search{
    flex:10%;
    color: #71797F;
    font-size: 24px;
    text-align: center;
}
.fenlei-head .fenlei-input{
    padding: 0 0.1rem;
    flex: 90%;
    background: #E9ECF0;
    border-radius: 5px; 
}
.fenlei-head .fenlei-input input{
    border:none;
    height: 0.72rem;
    color: #71797F;
    background: #E9ECF0;
}
</style>
