<script>

import { store } from '../store'

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }

    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchString);
            this.$emit("search");
        }
    }
}

</script>
<template>
    <nav class="navbar bg-black">
        <div class="container-fluid">
            <a class="navbar-brand text-danger fs-2">Boolflix</a>
            <form class="d-flex" role="search">
                <select name="" id="" v-model="store.selectMovieGen" class="me-2">
                    <option value="0">Select movie genre</option>
                    <option :value="genre.id" v-for="genre in  store.movieGen ">
                        {{ genre.name }}</option>
                </select>
                <select name="" id="" v-model="store.selectShowGen" class="me-2">
                    <option value="0">Select show genre</option>
                    <option :value="genre.id" v-for="genre in  store.showGen">
                        {{ genre.name }}</option>
                </select>

                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    v-model="store.searchString">
                <button type="button" class="btn btn-secondary" @click="search">Search</button>
            </form>
        </div>
    </nav>
</template>
<style scoped></style>