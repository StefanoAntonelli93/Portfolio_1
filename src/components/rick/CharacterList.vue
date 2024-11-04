<script>
// importo store
import { store } from "../../store";
// importo Componente CharacterElement
import CharacterElement from "./CharacterElement.vue";
export default {
  name: "CharacterList",
  components: {
    CharacterElement,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    listCharacter() {
      return store.results.results;
    },
  },
};
</script>

<template>
  <!-- itero con ciclo v-for per ogni character mostro images, nome, status, species-->
  <div
    class="character"
    v-for="(character, index) in listCharacter()"
    :key="index"
  >
    <CharacterElement
      class="card"
      :image="character.image"
      :name="character.name"
      :status="character.status"
      :species="character.species"
    />

    <!-- <img :src="character.image" :alt="character.name">
        <h3> {{ character.name }}</h3>
        <p>{{ character.status }}</p>
        <p>{{ character.species }}</p> -->
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 25px;
  background-color: transparent;
  border: none;
}
</style>
