import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./mutationsTypes";

export default {
  state: () => ({
    isLoading: false,
    data: null,
    error: null,
  }),
  mutations: {
    [FETCH_USERS_REQUEST](state) {},
  },
  actions: {},
  getters: {},
};
