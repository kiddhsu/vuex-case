import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "naruto"
  },
  //action 裡將接收到的資料 commit 至 mutation
  actions: {
    updateName(context, status) {
      context.commit("NAME", status); // mutation 中定義方法
    }
  },
  //mutation 內將 action commit 進來的資料傳給 state （修改 state）
  mutations: {
    NAME(state, status) {
      state.name = status; //status -> payload （載荷）
    }
  },
  // getters 中新增一個方法與回傳值
  getters: {
    nameLength: (state) => {
      return state.name.length;
    }
  }
});
