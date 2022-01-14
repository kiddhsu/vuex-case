import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "naruto"
  },
  actions: {
    updateName(context, status) {
      context.commit("NAME", status);
    }
  },
  mutations: {
    NAME(state, status) {
      state.name = status;
    }
  },
  getters: {
    nameLength: (state) => {
      return state.name.length;
    }
  }
});
