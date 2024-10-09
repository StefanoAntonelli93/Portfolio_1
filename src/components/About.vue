<script>
export default {
  name: "About",
};
</script>

<template>
  <section>
    <h1 class="title-font text-center">About</h1>
    <div class="container">
      <div class="row">
        <div class="content d-flex flex-wrap">
          <div class="col-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            molestiae nesciunt dolores reiciendis dignissimos facere quam
            quaerat quia, aliquam nemo pariatur. Possimus perspiciatis sapiente
            nemo consequatur aspernatur temporibus alias sequi?
          </div>
          <div class="col-6">hard skill</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
section {
  background-color: $second-color;
  h1 {
    color: $title;
  }
}
</style>
