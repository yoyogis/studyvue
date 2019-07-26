import Vue from 'vue';
import Vuex from 'vuex';
import datasetStore from './dataset.store';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    datasetStore,
  },
});
