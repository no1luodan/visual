import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
    listIndex:0
}
const mutations={
    change(state,n){
        state.listIndex=n;
    },
    add(state,n){
        state.listIndex+=1;
    },
    reduce(state){
        state.listIndex-=1;
    }
}
//计算过滤操作
const getters={
    count:function(state){
       return state.count--
    }
}
export default new Vuex.Store({
    state,mutations
    ,getters
    // ,actions
})