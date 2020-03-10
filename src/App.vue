<template>
<div id="App">
    <demo></demo>
</div>
</template>
<script>
    import Demo from "./components/Demo";
    export default {
        name: "App",
        components:{
            Demo
        },
        data(){
           return{
               message:'我是App组件'
           }
        }
    }
</script>
<style>

</style>
