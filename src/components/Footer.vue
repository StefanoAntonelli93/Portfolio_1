<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="py-3">
    <div class="container">
      <div class="row">
        <div class="small-card">
          <div>
            <a class="social" href="https://github.com/StefanoAntonelli93">
              <font-awesome-icon
                class="icon me-2 align-middle"
                :icon="['fab', 'square-github']"
              />
            </a>
          </div>
          <div>
            <a
              class="social"
              href="https://www.linkedin.com/in/stefano-antonelli-951b392b0/"
            >
              <font-awesome-icon
                class="icon me-2 align-middle"
                :icon="['fab', 'linkedin']"
              />
            </a>
          </div>
        </div>
        <div class="content d-flex justify-content-between gap-3">
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="title p-3 fs-2">Contacts</div>

            <div class="card">
              <div
                class="col d-flex flex-column justify-content-start align-items-start gap-4 p-4"
              >
                <!-- icon contacts -->
                <div
                  class="text-white d-flex flex-wrap gap-3 align-items-center"
                >
                  <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                  <div>stefano.antonelli.2024@gmail.com</div>
                </div>
                <div
                  class="text-white d-flex justify-content-around align-items-center gap-2"
                >
                  <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                  +39 3383658210
                </div>
                <div
                  class="text-white d-flex justify-content-around align-items-center gap-3"
                >
                  <font-awesome-icon
                    class="icon me-1 ms-1"
                    :icon="['fas', 'location-dot']"
                  />
                  Rome, Italy
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="p-3 fs-2 title">Social</div>
            <div class="card p-4">
              <div class="d-flex flex-wrap flex-column gap-3">
                <a class="social" href="https://github.com/StefanoAntonelli93">
                  <font-awesome-icon
                    class="icon me-2 align-middle"
                    :icon="['fab', 'square-github']"
                  />
                  Github</a
                >
                <a
                  class="social"
                  href="https://www.linkedin.com/in/stefano-antonelli-951b392b0/"
                >
                  <font-awesome-icon
                    class="icon me-2 align-middle"
                    :icon="['fab', 'linkedin']"
                  />
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="mt-3 content d-flex flex-column justify-content-center align-items-center"
            >
              <div class="policy py-3">
                © 2024 Stefano Antonelli. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
footer {
  background: linear-gradient(to top, $thirth-color, $second-color);
  color: white;
  .card {
    background: linear-gradient(135deg, $first-footer, $second-footer);
    height: 180px;
    a {
      list-style-type: none;
      text-decoration: none;
      color: white;
    }
  }
}
.icon {
  font-size: 30px;
}

.policy {
  font-size: 12px;
}

.social:hover {
  color: $second-color;
}

// responsive
// responsive
@media screen and (max-width: 2000px) {
  .small-card {
    display: none; // This will hide it on larger screens
  }
}
@media screen and (max-width: 992px) {
  .small-card {
    width: 100%;
    display: flex; // Make it visible on smaller screens
    justify-content: center;
    text-align: end;

    a {
      text-decoration: none;
      color: $first-color;
    }
  }
  .icon {
    font-size: 60px;
  }

  .card {
    display: none;
  }

  .title {
    display: none;
  }
}
</style>
