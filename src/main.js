import { createApp } from 'vue';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {createRouter, createWebHistory} from 'vue-router';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import homeComponent from './components/home.vue';
import gameDetails from './components/gameDetails.vue';

const games_store = createStore({

    plugins: [createPersistedState()],

    state () {
      return {
        games_data: [],
        game_by_id: {}
      }
    },

    getters: {
        get_games(state) { return state.games_data },
        get_game_found(state) { return state.game_by_id }
    },

    mutations: {
        set_data (state, data) {
            state.games_data = data;
        },

        set_found_game (state, data) {
            state.game_by_id = data;
        }
    },
    actions: {
        get_data ({commit}) {
            
            axios.get("http://localhost:3000/Games")
            .then((res) => {
                commit('set_data', res.data.slice(0, 50));
            })
            .catch((err) => {
                console.log(err);
            })
        },

        get_game_by_id ({commit}, id) {

            console.log(id);

            axios.get(`http://localhost:3000/Games/${id}`)
            .then((res) => {
                commit('set_found_game', res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
})

const routes = [
    {
        path: '/',
        component: homeComponent,
        alias: '/home'
    },

    {
        path: '/games/:id',
        component: gameDetails,
        meta: {
            hideCategoryBar: true
        }
    },

    // {
    //     path: '/:NotFound(.*)*',
    //     component: errorComponent,
    //     meta: {
    //         hideCategoryBar: true
    //     }
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(games_store).use(router).mount("#app");