<template>
    <div>
        <h1>this is a test </h1>
        <button @click="changeRoute">click</button>
    </div>
</template>
<script>
export default {
    name:'testName',
    created(){
        console.log('%ctest','color:green')
    },
    methods:{
        changeRoute(){
            this.$router.push('/')
        }
    }
}
</script>