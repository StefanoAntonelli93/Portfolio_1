<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="py-3">
    <div class="container">
      <div class="row">
        <div class="content d-flex justify-content-between">
          <div class="col-4">contatti</div>
          <div class="col-4">social</div>
          <div class="col-4">immagine</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
footer {
  background-color: $first-footer;
  color: white;
}
</style>
