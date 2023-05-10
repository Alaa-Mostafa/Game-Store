<template>

    <!-- =================== featured game =================== -->

    <div class="m-auto shadow rounded-3 mx-4 my-3 d-flex justify-content-between" :style="{height: '220px'}">
        <img :src="main_game.thumbnail" class="rounded-start-3" :style="{width: '70%'}"/>

        <div class="h-100 lh-1 text-start py-3 px-4" style="font-size:10pt; width:30%;">
            <div class="position-relative" style="height: 200px;">
                <p class="font_tajawal_bold fs-5 mb-2">{{main_game.title}}</p>
                <p class="mb-2">{{main_game.publisher}}</p>
                <p class="lh-sm mb-2" style="overflow: hidden; width:185px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">{{main_game.short_description}}</p>
                <p class="text-secondary opacity-75 mb-4">300k Downloads</p>
                <router-link :to="`/games/${main_game.id}`" class="position-absolute top-75 text-decoration-none font_tajawal_bold primary_bg border-0 text-light w-100 py-2 px-5 rounded-1 align-bottom">MORE INFO</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import {computed, ref} from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: "featuredSection",

        setup() {
            const store = useStore();
            let main_game = ref({});

            const games_data = computed(() => {
                return store.getters.get_games
            })

            let random = Math.floor(Math.random() * games_data.value.length);
            main_game.value = games_data.value[random];

            return {
                main_game
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>