<script>
// importo componente CharacterList
import CharacterList from "./CharacterList.vue";
// importo componente FoundCharacters
import FoundCharacters from "./FoundCharacters.vue";
// importo store
import { store } from "../../store";
export default {
  name: "AppMain",
  components: {
    // richiamo componente
    CharacterList,
    FoundCharacters,
  },
  data() {
    return {
      store,
      loading: true,
    };
  },
  // mounted() {
  //     // Simulo un caricamento di dati
  //     setTimeout(() => {
  //         // montiamo i dati dopo 1 secondo
  //         this.loading = false;
  //     }, 1000);
  // },
};
</script>

<template>
  <section>
    <div class="container">
      <!-- se loading è true-->
      <div v-if="store.loading">Caricamento dati in corso...</div>
      <!-- altrimenti mostra i dati -->
      <div class="characters" v-else>
        <!-- richiamo componente -->
        <CharacterList />
        <FoundCharacters />
      </div>
    </div>
  </section>
</template>

<!-- css -->
<style scoped lang="scss">
section {
  .characters {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    gap: 10px;

    :deep(.character) {
      width: calc(100% / 4 - 10px);
      margin-bottom: 40px;

      img {
        width: 100%;
        border-radius: 180px;
      }
    }
  }
}
</style>
