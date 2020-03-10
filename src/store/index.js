import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:100,
    student:[
        {id:1,name:'a',age:18},
        {id:2,name:'b',age:28},
        {id:3,name:'c',age:38},
        {id:4,name:'d',age:48}
    ],
    info:{id:5,name:'a',age:18}
  },
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    updateInfo(state){
        state.info.age=50
    }
  },
  actions: {
    aUpdateInfo(context,payload){
      setTimeout(()=>{
        context.commit('updateInfo')
        console.log(payload);
      },500)

    }
  },
  modules: {
  },
  getters:{
    more30stu(state){
      return state.student.filter(s=>s.age>=30)
    }
  }
})
