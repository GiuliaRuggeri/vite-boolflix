import { reactive } from 'vue'

export const store = reactive({
    APImovies: "https://api.themoviedb.org/3/search/movie?api_key=25f66a099931799507fbdf6c367ad650&language=it-IT&query=",
    APIseries: "https://api.themoviedb.org/3/search/tv?api_key=25f66a099931799507fbdf6c367ad650&language=it-IT&query=",
    APIMovieGen: "https://api.themoviedb.org/3/genre/movie/list?api_key=25f66a099931799507fbdf6c367ad650&language=it-IT",
    APIShowGen: "https://api.themoviedb.org/3/genre/tv/list?api_key=25f66a099931799507fbdf6c367ad650&language=it-IT",
    movies: [],
    series: [],
    movieGen: [],
    showGen: [],
    selectMovieGen: 0,
    selectShowGen: 0,
    lang: [
        "it", "en", "de", "fr", "ja"
    ],
    searchString: "",
    imgBase: "https://image.tmdb.org/t/p/w342"
});