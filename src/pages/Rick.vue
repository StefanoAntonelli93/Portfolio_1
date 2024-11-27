<script>
import AppHeader from "../components/rick/AppHeader.vue";
import AppMain from "../components/rick/AppMain.vue";
import SearchCharacter from "../components/rick/SearchCharacter.vue";
// // import store from store.js
import { store } from "../store";
//  import axios from axios
import axios from "axios";

export default {
  name: "Rick",

  methods: {
    getCharacter(searchText = "", status = "") {
      // definisco varibile url per semplificare sintassi
      let url =
        this.store.apiInfo.url + this.store.apiInfo.endpoints.characters;
      // creo oggetto params vuoto
      let params = {};

      if (searchText) {
        params.name = searchText;
      }
      if (status) {
        params.status = status;
      }

      // chiamata axios con params
      axios
        .get(url, { params })
        .then((response) => {
          this.store.results = response.data;
          this.store.loading = false;
        })
        // verifico che non ci siano errori
        .catch((error) => {
          console.error("An error occurred:", error);
          this.store.loading = false;
        });
    },
  },

  components: {
    AppHeader,
    AppMain,
    SearchCharacter,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.getCharacter();
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
    <!-- EMIT @nomeEvento="funzione" -->
    <SearchCharacter @search="getCharacter" />
    <AppMain />
  </div>
</template>

<style scoped>
.container {
  background-color: rgba(255, 255, 255, 0.527);
  border-radius: 20px;
}
</style>
