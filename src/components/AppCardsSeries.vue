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
        checkLang(flag) {
            if (store.lang.includes(flag)) {
                return `/${flag}.png`
            } else {
                return null
            }
        },

        getRating(rate) {

            let rating
            // Divido per portare il rating da 1 a 10 a 1 a 5
            if (rate != 0) {

                rating = rate / 2;

                let finalRating = parseInt((Math.round(rating)));
                return finalRating


            }
        }
    }


}
</script>
<template>
    <div class="col-3 text-center text-white" v-for="show in store.series">
        <div class="position-relative cover m-2">
            <img :src="`${store.imgBase}${show.poster_path}`" alt="" class="img-fluid">
            <div class="info p-4">
                <h3> {{ show.name }}</h3>
                <p> {{ show.original_name }}</p>
                <img class="flag" :src="checkLang(show.original_language)" :alt="show.original_language"
                    v-if="checkLang(show.original_language) != null">
                <p v-else>{{ show.original_language }}</p>
                <div>
                    <span v-for="i in getRating(show.vote_average)"><font-awesome-icon :icon="['fas', 'star']"
                            style="color: #ecc918;" /></span>

                </div>
                <p>{{ show.overview }}</p>
            </div>

        </div>


    </div>
</template>
<style>
.flag {
    width: 2rem;
}
</style>