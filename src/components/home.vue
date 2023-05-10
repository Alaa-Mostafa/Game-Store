<template>

        <div class="w-60 py-3 mx-auto" style="margin-top:8%"> 

            <featuredSection/>
            <recommendedSection/>
            <popular-section/>

        </div>
</template>

<script>

    import {computed, onMounted} from 'vue';
    import { useStore } from 'vuex';

    import featuredSection from '../sections/featured_game.vue';
    import recommendedSection from '../sections/recommended.vue';
    import popularSection from '../sections/popular_games.vue';

    export default {
        name: "homeComponent",

        components: {
            featuredSection,
            recommendedSection,
            popularSection
        },

        setup() {

            const store = useStore()

            function load_games() {
                store.dispatch('get_data')
            }

            const games_data = computed(() => {
                return store.getters.get_games
            })

            onMounted(()=>{
                load_games();
            })
            
            return {
                games_data
            }
        }
    }
</script>

<style scoped>

    @import'~bootstrap-icons';

</style>