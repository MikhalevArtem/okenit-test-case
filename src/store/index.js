import { createStore } from "vuex";
import posts from "./modules/posts";
import users from "./modules/users";
import comments from "./modules/comments";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts,
    users,
    comments,
  },
});
