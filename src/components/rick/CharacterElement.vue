<script>
export default {
  name: "CharacterElement",
  // chiave props
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
    <h3>{{ name }}</h3>
    <p>{{ status }}</p>
    <p>{{ species }}</p>
  </div>
</template>

<style scoped lang="scss">
img {
  border: 5px solid rgb(72, 235, 99);
}
</style>
