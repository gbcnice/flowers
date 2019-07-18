<template>
    <div>{{text.id}}</div>
</template>

<script>
export default {
    data() {
        return {
            text:""
        }
    },
    created() {
        console.log(this.$route.params)
        this.text = this.$route.params
    }
}
</script>

<style>

</style>
