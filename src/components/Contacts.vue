<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <section id="contacts">
    <h3 class="title-font text-center">Contacts</h3>
    <div class="container mt-5">
      <div class="row">
        <div class="col d-flex flex-column gap-3 align-items-center">
          <h5 class="text-white fw-bold mt-4">Let's work together!</h5>
          <img src="/mail.png" alt="me" />
        </div>
        <div class="col">
          <!-- form mail -->
          <form action="/cgi-bin/FormMail.pl" method="POST">
            <input
              type="hidden"
              name="recipient"
              value="stefano.antonelli.2024@gmail.com"
            />
            <input
              type="hidden"
              name="subject"
              value="Nuovo messaggio da porfolio!"
            />
            <table border="0" cellspacing="0" cellpadding="8" align="center">
              <tr>
                <td><b> Name:</b></td>
                <td align="right">
                  <input type="text" name="realname" required />
                </td>
              </tr>
              <tr>
                <td><b>Email:</b></td>
                <td align="right">
                  <input type="email" name="email" required />
                </td>
              </tr>
              <tr>
                <td colspan="2"><b>Message:</b></td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea
                    name="messaggio"
                    cols="40"
                    rows="5"
                    required
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colspan="2" align="center">
                  <input
                    class="btn fw-bold custom-shadow"
                    type="Submit"
                    value="Send"
                  />
                </td>
              </tr>
            </table>
            <input
              type="hidden"
              name="required"
              value="email,realname,messaggio"
            />
          </form>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>
<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;
section {
  background-color: $second-color;
  padding: 100px;
  padding-bottom: 10px;
  .title-font {
    color: $first-color;
  }
}
img {
  width: 250px;
}
b {
  color: white;
}
.btn {
  background-color: $first-color;
  color: $second-color;
  transition: transform 0.3s ease; // Transizione per lo zoom
  &:hover {
    transform: scale(1.2); // Zoom al passaggio del mouse
  }
}
</style>
