import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shelly", price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      return state.products.map((product) => {
        return {
          name: `** ${product.name} **`,
          price: product.price / 2,
        };
      });
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      return state.products.forEach((product) => {
        return (product.price -= payload);
      });
    },
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit("reducePrice", payload);
      }, 200);
    },
  },
});
