import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import recipes from './state.js'

export default {
  state() {
    return {
      recipes
    };
  },
  mutations,
  actions,
  getters,
};
