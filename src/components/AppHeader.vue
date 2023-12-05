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
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    v-model="store.searchString">
                <button type="button" class="btn btn-secondary" @click="search">Search</button>
            </form>
        </div>
    </nav>
</template>
<style scoped></style>