<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <div class="container w-100 p-3">
      <div class="row">
        <div class="content d-flex flex-wrap">
          <div class="col-8">
            <h2>Portfolio</h2>
          </div>
          <div class="col-4">ciao</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
header {
  background-color: white;
  color: $text-primary-color;
}
</style>
