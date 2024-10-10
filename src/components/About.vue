<script>
export default {
  name: "About",
};
</script>

<template>
  <section id="about">
    <h1 class="title-font text-center">About</h1>
    <div class="container">
      <div class="row">
        <div class="content d-flex flex-wrap">
          <div class="col-6">
            <p>
              I started working on various frontend and backend projects,
              applying all the skills I acquired during my studies.
            </p>
            I also worked as a freelance artist on graphic and illustration
            projects, developing digital solutions with creativity and
            efficiency. My experience in a fast food environment taught me time
            management, stress handling, and teamwork, making me a versatile and
            resilient professional.
            <p>I enjoy outdoor sports and video games!</p>
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
  padding: 100px;
  h1 {
    color: $title;
  }
}
</style>
