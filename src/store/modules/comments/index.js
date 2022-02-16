import { COMMENTS } from "@/api.js";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./mutationsTypes";

export default {
  state() {
    return {
      isLoading: false,
      commentsData: [],
      error: null,
    };
  },
  mutations: {
    [FETCH_COMMENTS_REQUEST](state) {
      state.isLoading = true;
      state.error = null;
      state.commentsData = [];
    },
    [FETCH_COMMENTS_SUCCESS](state, data) {
      state.isLoading = false;
      state.commentsData = data;
    },
    [FETCH_COMMENTS_FAILURE](state, error) {
      state.isLoading = false;
      state.error = error;
    },
  },
  actions: {
    async fetchComments({ commit }, postId) {
      try {
        const url = new URL(COMMENTS);
        url.searchParams.set("postId", postId);
        commit(FETCH_COMMENTS_REQUEST);
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        commit(FETCH_COMMENTS_SUCCESS, result);
      } catch (err) {
        commit(FETCH_COMMENTS_FAILURE, err.message);
      }
    },
    async postComment({ commit }, comment) {
      try {
        const url = new URL(COMMENTS);
        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(comment),
        });
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        console.log(result);
      } catch (err) {
        commit(FETCH_COMMENTS_FAILURE, err.message);
      }
    },
  },
};