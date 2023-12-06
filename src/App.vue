<script>
import AppHeader from './components/AppHeader.vue';
import AppCards from './components/AppCards.vue';
import AppCardsSeries from './components/AppCardsSeries.vue';
import { store } from '../src/store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppCards,
    AppCardsSeries
  },

  data() {
    return {

      store
    }
  },

  methods: {
    searchMovies() {
      let url = this.store.APImovies;

      if (this.store.searchString.length) {
        url += `${this.store.searchString}`

      }

      axios.get(url).then(resp => {
        this.store.movies = resp.data.results;
        console.log(this.store.movies)

      }).catch(error => {
        this.store.movies = [];
      });
    },
    searchSeries() {
      let url = this.store.APIseries;

      if (this.store.searchString.length) {
        url += `${this.store.searchString}`

      }

      axios.get(url).then(resp => {
        this.store.series = resp.data.results;
        console.log(this.store.series)

      }).catch(error => {
        this.store.series = [];
      });
    },

    getMovieGen() {
      axios.get(store.APIMovieGen).then(resp => {
        this.store.movieGen = resp.data.genres;
      })
    },

    getShowGen() {
      axios.get(store.APIShowGen).then(resp => {
        this.store.showGen = resp.data.genres;
      })
    }


  },
  mounted() {
    this.getMovieGen(),
      this.getShowGen()
  }
}
</script>

<template>
  <AppHeader @search="searchMovies(); searchSeries()" />
  <div class="container d-flex flex-wrap m-auto mt-2" v-if="store.movies.length > 0">
    <h1 class="text-white">Movies</h1>
    <div class="row flex-nowrap w-100 overflow-auto">
      <AppCards />
    </div>
  </div>
  <div class="container d-flex flex-wrap m-auto mt-2" v-if="store.series.length > 0">
    <h1 class="text-white">Shows </h1>
    <div class="row flex-nowrap w-100 overflow-auto">
      <AppCardsSeries />
    </div>
  </div>
</template>

<style scoped></style>
