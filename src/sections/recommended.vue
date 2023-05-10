<template>

    <!-- =================== recommended games =================== -->

    <div class="m-auto shadow rounded-3 mx-4 my-3 p-3" :style="{height: '270px'}">
        <p class="mb-3 ms-2 text-start">Most Recommendation</p>

        <div class="d-flex justify-content-between" style="height: 200px">
            <div class="m-auto rounded-3 mx-2 my-0 h-60" :style="{width:'200px'}" v-for="game in recommended.games" :key="game.id"> 
                <img :src="game.thumbnail" class="w-100 h-100 rounded-3"/>
                <p class="mt-2 text-start lh-1" style="font-size: 14px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; width:100px"> {{game.title}} </p>
                <router-link :to="`/games/${game.id}`" class="text-decoration-none font_tajawal_bold primary_bg border-0 text-light w-100 py-1 px-4 rounded-1" style="font-size:14px;">MORE INFO</router-link>
            </div>
         </div>
    </div>

</template>

<script>

    import {reactive, computed} from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: "recommendedSection",
        setup() {
            const store = useStore();

            const games_data = computed(() => {
                return store.getters.get_games
            })

            let recommended = reactive({games:[]});
            recommended.games = [...games_data.value];
            recommended.games = recommended.games.sort(() => Math.random() - 0.5).slice(0,5);

            return {
                recommended
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>