<script>
import { store } from '../store'

export default {
    name: 'AppCardsSeries',

    data() {
        return {

            store
        }
    },

    methods: {
        getFlag(lang) {

            store.flags.forEach(flag => {
                if (flag.language === lang) {
                    console.log(flag.imgFlag)
                    return "aaa"
                }
            });
        }
    }


}
</script>
<template>
    <div class="col-4 text-center text-white" v-for="show in store.series">
        <img :src="`${store.imgBase}${show.poster_path}`" alt="" class="img-fluid">
        <h3> {{ show.name }}</h3>
        <p> {{ show.original_name }}</p>
        <p> {{ getFlag(show.original_language) }}</p>
        <p>{{ show.vote_average }}</p>



    </div>
</template>
<style scoped></style>