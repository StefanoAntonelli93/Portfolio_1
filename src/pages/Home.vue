<script>
import Jumbo from "../components/Jumbo.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Contacts from "../components/Contacts.vue";
export default {
  name: "Home",
  components: {
    Jumbo,
    About,
    Projects,
    Contacts,
  },
};
</script>

<template>
  <Jumbo />
  <About />
  <Projects />
  <Contacts />
</template>

<style></style>
