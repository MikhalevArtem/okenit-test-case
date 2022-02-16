import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./mutationsTypes";
import { USERS } from "@/api.js";

export default {
  state: () => ({
    isLoading: false,
    data: null,
    error: null,
  }),
  mutations: {
    [FETCH_USERS_REQUEST](state) {
      state.isLoading = true;
      state.error = null;
      state.data = null;
    },
    [FETCH_USERS_SUCCESS](state, data) {
      state.isLoading = false;
      state.data = data;
    },
    [FETCH_USERS_FAILURE](state, error) {
      state.isLoading = false;
      state.error = error;
    },
  },
  actions: {
    async fetchUsers({ commit }, userId = null) {
      try {
        const url = new URL(USERS);
        if (userId) {
          url.searchParams.set("userId", userId);
        }
        commit(FETCH_USERS_REQUEST);
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("network error");
        }
        let result = await response.json();
        commit(FETCH_USERS_SUCCESS, result);
      } catch (err) {
        commit(FETCH_USERS_FAILURE, err.message);
      }
    },
  },
  getters: {
    getUsersData(state) {
      return state.data;
    },
    getUsersIsLoading(state) {
      return state.isLoading;
    },
    getUsersError(state) {
      return state.error;
    },
  },
};
