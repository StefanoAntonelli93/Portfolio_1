<script>
// importo e richiamo store
import { store } from "../../store";
export default {
  name: "FoundCharacters",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <!-- Controllo se store.results e store.results.results esistono -->
    <p v-if="store.results && store.results.results">
      {{ store.results.results.length }} characters found!
    </p>
    <h2 v-else>Nessun personaggio trovato</h2>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding-bottom: 40px;
}
</style>
