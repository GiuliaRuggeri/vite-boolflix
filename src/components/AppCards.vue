<script>
import { store } from '../store'

export default {
    name: 'AppCards',

    data() {
        return {

            store
        }
    },

    methods: {
        // getFlag(lang) {

        //     store.flags.forEach(flag => {
        //         if (flag.language == lang) {
        //             console.log(flag.imgFlag)
        //             return "aaa"
        //         } else {
        //             return "no"
        //         }
        //     });
        // }
    }


}
</script>
<template>
    <div class="col-4 text-center text-white" v-for="movie in store.movies">
        <img :src="`${store.imgBase}${movie.poster_path}`" alt="" class="img-fluid">
        <h3> {{ movie.title }}</h3>
        <p> {{ movie.original_title }}</p>
        <p> {{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>



    </div>
</template>
<style scoped></style>