<script>
export default {
  name: "CharacterElement",
  // props passate da genitore characterList
  props: ["image", "name", "status", "species"],
  computed: {
    borderStyle() {
      let borderColor;
      if (this.status === "Alive") {
        borderColor = "lightgreen";
      } else if (this.status === "Dead") {
        borderColor = "red";
      } else {
        borderColor = "yellow";
      }
      return {
        border: `5px solid ${borderColor}`,
      };
    },
  },
};
</script>

<template>
  <div>
    <img :src="image" :alt="name" :style="borderStyle" />
    <h2>{{ name }}</h2>
    <p>{{ status }}</p>
    <p>{{ species }}</p>
  </div>
</template>

<style scoped lang="scss">
img {
  border: 5px solid rgb(72, 235, 99);
  transition: transform 0.3s ease; // Transizione per lo zoom
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    z-index: 900; // Zoom al passaggio del mouse
  }
}
h2 {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
