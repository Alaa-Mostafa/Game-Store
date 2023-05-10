<template>

<div>

    <!-- =============================== nav bar =============================== -->
    
    <nav :class='container_div_style'>
        <div class="h-60 m-auto w-60 d-flex justify-content-between container-fluid">

            <!-- =================== logo =================== -->

            <router-link to="/" style="cursor:pointer;">
                <img :class='logo_style' src="../assets/Logo.png"/>
                <label class="primary_text font_tajawal_bold">Game Store</label>
            </router-link>

            <!-- ================ search & login ================ -->

            <div class="w-75 d-flex justify-content-end align-items-center">

                <!-- ================ search ================ -->

                <div v-if="flag===true" :class='search_div_style'> 
                    <button :class='close_icon_style' class=primary_text style="-webkit-text-stroke:0.5px;" @click="$event=> flag = !flag"></button>
                    <input :class='search_input_style' type="text"/>
                </div>

                <button v-if="flag===false" :class='search_icon_style' class=primary_text style="-webkit-text-stroke:0.5px" @click="$event=> flag = !flag"></button>
             
                <!-- =============== login form =============== -->

                <button :class='login_icon_style' class=primary_text style="-webkit-text-stroke:0.25px; font-size:14pt" data-bs-toggle="dropdown" aria-expanded="false"></button>

                <form class="dropdown-menu dropdown-menu-end z-2" :class='login_window'>
                    <p class="form-text font_tajawal_bold fw-normal mb-2 opacity-50">Please add your account details</p>

                    <!-- ========== username ========== -->

                    <div class="form_input_div border-0 border-bottom border-secondary rounded-0">
                        <label class="w-100" style="font-size: 8pt;">Username / Email</label>
                        <input :class='form_input_style' type="text" placeholder="Type your username here"/>
                    </div>

                    <!-- ========== password ========== -->

                    <div class="form_input_div border-0 border-bottom border-secondary rounded-0">
                        <label class="w-100 mt-3" style="font-size: 8pt;">Password</label>
                        <div class="d-flex justify-content-between">
                            <input ref="pass" :class='form_input_style' type="text" placeholder="Type your password"/>
                            <button v-if="visible === true" class="bi bi-eye-slash-fill float-end border-0 text-secondary bg-body" @click.stop="hide_password"></button>
                            <button v-if="visible === false" class="bi bi-eye-fill float-end border-0 text-secondary bg-body" @click.stop="show_password"></button>
                        </div>
                    </div>

                    <!-- ========== signup and login button ========== -->

                    <div class="w-100 text-end mt-2">
                        <a class="font_tajawal_bold text-decoration-none primary_text" style="font-size: 10pt;" href="">Forgot Password?</a>
                    </div>

                    <button class="font_tajawal_bold primary_bg border-0 text-light w-100 mt-3 py-1 rounded-1">LOGIN</button>

                    <p class="font_tajawal_regular primary_text text-center mt-4" style="font-size: 11pt;">Don't have an account? 
                        <a class="font_tajawal_bold text-decoration-none primary_text" href=""> &nbsp; sign up!</a> 
                    </p>
                </form>
            </div>
        </div>
    </nav>

    <!-- ============================= genres bar ============================= -->

    <div v-if="!$route.meta.hideCategoryBar" class="btn-group shadow border-bottom border-1 bg-body w-100 align-items-center fixed-top z-1" role="group" aria-label="Basic checkbox toggle button group" style="height:7%; margin-top:63px;">
        <template v-for="genre in unique_genres" :key="genre">
            <input type="checkbox" class="btn-check" :id=genre autocomplete="off"/>
            <label class="btn my_check border mx-2 rounded-5 border-secondary-subtle text-dark" :for=genre style="font-size:10pt; padding:2px 0px;"> {{genre}} </label>
        </template>
    </div>

</div>

</template>

<script>

    import {ref, computed} from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: "headerSection",
        setup() {

            const container_div_style = "h-10 m-auto  border-bottom border-1 d-flex aligns-items-center fixed-top bg-body flex-column";
            const logo_style = "h-100";
            const login_icon_style = "bi bi-three-dots-vertical bg-body h-100 border-0 fw-semibold px-0";
            const search_icon_style = "bi bi-search bg-body h-100 border-0 fs-6 me-4 px-0";
            const search_input_style = "me-3 w-100 border-0 w-50 border border-2 focus-ring focus-ring-light ps-3";
            const close_icon_style = "bi bi-x bg-body h-100 border-0 fw-semibold px-0 fs-5 ms-3";
            const search_div_style = "w-50 border border-2 border-secondary-subtle rounded-5 me-3 d-flex fw-normal";
            const login_window = "w-25 fw-normal p-3";
            const form_input_style = "py-0 form-control w-75 border-0 ps-0 focus-ring focus-ring-light";

            let flag = ref(false);
            let visible = ref(true);
            const pass = ref(null);

            const store = useStore();

            const games_data = computed(() => {
                return store.getters.get_games
            })

            const genres = games_data.value.map(game => game.genre);
            const unique_genres = [...new Set(genres)];

            function hide_password(){
                this.visible = !this.visible;
                this.pass.style.webkitTextSecurity = "disc";
            }

            function show_password(){
                this.visible = !this.visible;
                this.pass.style.webkitTextSecurity = ""; 
            }

            return {
                container_div_style, logo_style, login_icon_style, search_icon_style, search_input_style,
                close_icon_style, search_div_style, login_window, form_input_style, flag, 
                visible, hide_password, show_password, pass, unique_genres
            }
        }
    }
</script>

<style lang="scss" scoped>

    .form-control::placeholder {
        color: $secondary !important;
    }

    .form_input_div {
        border-color: $secondary !important;
    }
    
    .hidden_password {
        -webkit-text-security: disc !important;
    }

     .my_check:checked {
        background-color: $primary !important;
    }
</style>