import { createStore } from "vuex";

export default createStore({
  // for the global store data;
  // here we store all the data for the global store
  state: {
    firstname: "Bruce",
    lastname: "wayne",
    favs: [],
    cities: ["test", "newtest"],
    counts: 0,
    userdata: {},
  },
  // here we add the logic to update the global state data
  mutations: {
    UPDATE_FAVS(state, payload) {
      state.favs = payload;
    },
    change_counts(state) {
      state.counts++;
    },
    add_cities(state, payload) {
      state.cities.push(payload);
    },
    add_userdata(state, payload) {
      state.userdata = payload;
    },
  },
  // then here we will then use the mutate in the action to update the data in the state.
  actions: {
    addtofav(context, payload) {
      const fav = context.state.favs;
      fav.push(payload);
      context.commit("UPDATE_FAVS", payload);
    },
    change_counts(context) {
      context.commit("change_counts");
    },
    add_cities(context, payload) {
      context.commit("add_cities", payload);
    },
    add_userdata(context, paylaod) {
      context.commit("add_userdata", paylaod);
    },
  },
  getters: {
    fullname: function (state) {
      return `${state.firstname}, ${state.lastname}`;
    },
  },
});
