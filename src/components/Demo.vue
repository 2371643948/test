<template>
    <div id="demo">
        <h2>{{message}}</h2>
        <h2>{{$store.state.counter}}</h2>
        <button @click="addition">+</button>
        <button @click="subtraction">-</button>
        <div>{{$store.getters.more30stu}}</div>
        <div>{{$store.state.info}}</div>
        <button @click="update">更新</button>
    </div>
</template>

<script>
    export default {
        name: "Demo",
        data(){
            return{
                message:'我是Demo组件'
            }
        },
        methods:{
            addition(){
                this.$store.commit('increment')
            },
            subtraction(){
                this.$store.commit('decrement')
            },
            update(){
                // this.$store.commit('updateInfo')
                this.$store.dispatch('aUpdateInfo','wo')

            }
        }
    }
</script>

<style scoped>

</style>