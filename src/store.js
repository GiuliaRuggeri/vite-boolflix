import { reactive } from 'vue'

export const store = reactive({
    APImovies: "https://api.themoviedb.org/3/search/movie?api_key=25f66a099931799507fbdf6c367ad650&language=it-IT&query=",
    APIseries: "https://api.themoviedb.org/3/search/tv?api_key=25f66a099931799507fbdf6c367ad650&language=it-IT&query=",
    movies: [],
    series: [],
    lang: [
        "it", "en", "de", "fr", "ja"
    ],
    searchString: "",
    imgBase: "https://image.tmdb.org/t/p/w342"
});