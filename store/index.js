import Vue from 'vue';
import Vuex from 'vuex';
import { login } from './login';

Vue.use(Vuex);
export const store = new Vuex.Store({
    module: {
        login,
    }
});