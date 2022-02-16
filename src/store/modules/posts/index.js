import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./mutationsTypes.js";
import { POSTS } from "@/api.js";

export default {
  state: () => ({
    data: [],
    isLoading: false,
    error: null,
  }),
  mutations: {
    [FETCH_POSTS_REQUEST](state) {
      state.isLoading = true;
      state.error = null;
      state.data = null;
    },
    [FETCH_POSTS_SUCCESS](state, data) {
      state.isLoading = false;
      state.data = data;
    },
    [FETCH_POSTS_FAILURE](state, error) {
      state.isLoading = false;
      state.error = error;
    },
  },
  actions: {
    async fetchPosts({ commit }, payload) {
      try {
        const url = new URL(POSTS);
        if (payload?.userId) {
          url.searchParams.set("userId", payload.userId);
        }
        if (payload?.postId) {
          url.searchParams.set("id", payload.postId);
        }
        commit(FETCH_POSTS_REQUEST);
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        commit(FETCH_POSTS_SUCCESS, result);
      } catch (err) {
        commit(FETCH_POSTS_FAILURE, err.message);
      }
    },
  },
  getters: {
    getPostsData(state) {
      return state.data;
    },
    getPostsIsLoading(state) {
      return state.isLoading;
    },
    getPostsError(state) {
      return state.error;
    },
  },
};
