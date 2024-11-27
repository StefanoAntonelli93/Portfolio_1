<script>
import { store } from "../../store";
export default {
  name: "SearchCharacter",
  data() {
    return {
      store,
      searchText: "",
      status: "",
    };
  },
  methods: {
    emitSearch() {
      // this.$emit('nomeEvento', dati, dati)
      this.$emit("search", this.searchText, this.status);
    },
    resetSearch() {
      this.searchText = "";
      this.status = "";
      this.$emit("search", "", "");
    },
  },
};
</script>

<template>
  <div class="container d-flex flex-wrap justify-content-center gap-2">
    <input
      type="text"
      placeholder="Search Character"
      v-model="searchText"
      @input="emitSearch()"
    />
    <select class="bg-primary text-white border" id="status" v-model="status">
      <option value="" selected>Select status</option>
      <option class="alive" value="Alive">Alive</option>
      <option class="dead" value="Dead">Dead</option>
      <option class="unknown" value="Unknown">Unknown</option>
    </select>
    <button class="btn btn-success" @click="emitSearch()">Search</button>
    <button class="btn btn-danger" @click="resetSearch()">Reset</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
