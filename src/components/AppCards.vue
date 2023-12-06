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

                let finalRating = parseInt((Math.round(rating)))
                return finalRating

            }
        }
    }


}
</script>
<template>
    <div class="col-3 text-center text-white" v-for="movie in store.movies"
        v-show="movie.genre_ids.includes(store.selectMovieGen)">
        <div class="position-relative cover m-2">
            <img :src="`${store.imgBase}${movie.poster_path}`" alt="" class="w-100 h-100">
            <div class=" info p-4">
                <h5> Titolo: {{ movie.title }}</h5>
                <p> Titolo originale: {{ movie.original_title }}</p>
                <img class="flag" :src="checkLang(movie.original_language)" :alt="movie.original_language"
                    v-if="checkLang(movie.original_language) != null">
                <p v-else>{{ movie.original_language }}</p>
                <div>
                    <span>Voto:</span>
                    <span v-for="i in getRating(movie.vote_average)"><font-awesome-icon :icon="['fas', 'star']"
                            style="color: #ecc918;" />
                    </span>

                </div>
                <p>{{ movie.overview }}</p>
            </div>
        </div>






    </div>
</template>
<style>
.info {
    display: none;
}

.cover:hover .info {
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: auto;
}
</style>