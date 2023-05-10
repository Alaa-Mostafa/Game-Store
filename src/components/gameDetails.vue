<template>
    <div class="w-60 py-3 mx-auto" style="margin-top:4%"> 


            <div class="m-auto shadow rounded-3 mx-4 my-3" :style="{height: '250px'}">
                <img :src="game.thumbnail" class="rounded-3 h-100 w-100"/>
            </div>

            <div class="m-auto shadow rounded-3 mx-4 my-3 lh-1 text-start py-3 px-4 " style="font-size:10pt; height:210px;">
                <div class="mt-2 position-relative" style="height: 150px;">
                    <p class="font_tajawal_bold fs-5 mb-2">{{game.title}}</p>
                    <p class="mb-2" style="font-size: 15px;">{{game.publisher}}</p>
                    <p class="text-secondary opacity-75 mb-3" style="font-size: 15px;">300k Downloads</p>

                    <p class="lh-sm mb-2" style="font-size: 15px;">{{game.short_description}}</p>
                    <a class="font_tajawal_bold text-decoration-none primary_text fs-6 mb-0 position-absolute bottom-0 start-0" href=""> Read More </a> 

                </div>
             </div>


        <recommendedSection/>
    </div>
</template>

<script>

    import { computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

    import recommendedSection from '../sections/recommended.vue';

    export default {
        name: "gameDetails",
        
        components: {
            recommendedSection
        },

        setup() {

            const route = useRoute();
            const game_id = route.params.id;

            const store = useStore();

            function load_game_details() {
                store.dispatch('get_game_by_id', game_id);
            }

            let game = computed(() => {
                return store.getters.get_game_found;
            })

            onMounted(()=>{
                load_game_details();
            })
            
            return {
                game
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>