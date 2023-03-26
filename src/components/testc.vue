<template>
    <div>
        <h1 @click="goRouter">this is a child component</h1>
    </div>
</template>

<script>
export default {
    name:'testChild',
    created(){
        console.log('%cchild','color: red');        
    },
    methods:{
        goRouter(){
            // this.$router.push({name:'test'});
            // this.$router.push('test');
            // this.$router.push('./test');
            // 相对路径
            this.$router.push('./hhh');
            // 绝对路径
            // this.$router.push('/hhh');
        }
    }
}
</script>

<style scoped>

</style>
