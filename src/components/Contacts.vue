<script>
export default {
  name: "Contacts",
  data() {
    return {
      showModal: false,
      realname: "",
      email: "",
      messaggio: "",
    };
  },
  methods: {
    OpenModal(event) {
      // Controlla se il modulo è valido
      const form = event.target;
      if (form.checkValidity()) {
        this.showModal = true; // Mostra il modale se il modulo è valido
        console.log("Messaggio inviato con successo!");
      } else {
        // Se il modulo non è valido, attiva la validazione del browser
        form.reportValidity();
      }
    },
    CloseModal() {
      this.showModal = false;
      this.realname = "";
      this.email = "";
      this.messaggio = "";
      console.log("close");
    },
  },
};
</script>

<template>
  <section id="contacts">
    <h3 class="title-font text-center">Contacts</h3>
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-xl-6 col-lg-12 col-md-12 d-flex flex-column gap-3 align-items-center"
        >
          <h5 class="text-white fw-bold mt-4">Let's work together!</h5>
          <img src="/mail.png" alt="me" />
        </div>
        <div class="col-xl-6 col-lg-12 col-md-12">
          <!-- form mail -->
          <div class="form">
            <!-- <form action="/cgi-bin/FormMail.pl" method="POST"> -->
            <form @submit.prevent="OpenModal">
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
                    <input type="text" v-model="realname" required />
                  </td>
                </tr>
                <tr>
                  <td><b>Email:</b></td>
                  <td align="right">
                    <input type="email" v-model="email" required />
                  </td>
                </tr>
                <tr>
                  <td colspan="2"><b>Message:</b></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <textarea
                      v-model="messaggio"
                      cols="40"
                      rows="5"
                      required
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" align="center">
                    <input
                      @click="OpenModal()"
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

            <!-- modale -->

            <div v-if="showModal" class="modal fs-3 fw-bold">
              <div class="modal-content p-3 border">
                <p class="text-center p-3">Messaggio inviato con successo!</p>
                <button
                  class="close custom-shadow align-self-center border fw-semibold p-2"
                  @click="CloseModal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>
<style scoped lang="scss">
@use "@/assets/js/scss/partials/_commons.scss" as *;

// modale
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
}
.modal-content {
  width: 50%;
  background-color: rgb(255, 255, 255);
  padding: 1000px;
  border-radius: 5px;
  button {
    background-color: $first-color;
    color: $second-color;
    border-radius: 10px;
  }
}
.close {
  cursor: pointer;
  float: right;
  font-size: 25px;
  font-weight: bold;
  &:hover {
    color: red;
  }
}

// fine modale
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

// responsive

@media screen and (max-width: 376px) {
  h3 {
    font-size: 60px;
    margin-top: 20px;
    text-align: center;
  }
  #contacts {
    padding: 10px;
  }
  h5 {
    text-align: center;
  }
  form {
    width: 300px; /* Puoi cambiare la larghezza a tuo piacimento */
    margin: auto; /* Centra il form nella pagina */
    margin-top: 30px;
  }

  .form-group {
    margin-bottom: 15px; /* Spazio tra i campi */
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%; /* Rende gli input della stessa larghezza */
    padding: 10px; /* Aggiunge padding per un aspetto migliore */
    border: 1px solid #ccc; /* Bordo grigio chiaro */
    border-radius: 4px; /* Angoli arrotondati */
  }

  .btn {
    width: 100%; /* Pulsante della stessa larghezza */
    padding: 20px; /* Padding per il pulsante */
    background-color: $first-color;
    color: $second-color;
    margin-top: 20px;
    border: none; /* Nessun bordo */
    border-radius: 4px; /* Angoli arrotondati */
    cursor: pointer; /* Cambia il cursore su hover */
  }
}

@media screen and (max-width: 576px) {
  h3 {
    font-size: 70px;
    margin-top: 20px;
  }
  h5 {
    text-align: center;
  }
  #contacts {
    padding: 20px;
  }
  form {
    width: 100%; /* Puoi cambiare la larghezza a tuo piacimento */
    margin: auto; /* Centra il form nella pagina */
    margin-top: 30px;
  }

  .form-group {
    margin-bottom: 15px; /* Spazio tra i campi */
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%; /* Rende gli input della stessa larghezza */
    padding: 10px; /* Aggiunge padding per un aspetto migliore */
    border: 1px solid #ccc; /* Bordo grigio chiaro */
    border-radius: 4px; /* Angoli arrotondati */
  }

  .btn {
    width: 100%; /* Pulsante della stessa larghezza */
    padding: 20px; /* Padding per il pulsante */
    background-color: $first-color;
    color: $second-color;
    margin-top: 20px;
    border: none; /* Nessun bordo */
    border-radius: 4px; /* Angoli arrotondati */
    cursor: pointer; /* Cambia il cursore su hover */
  }
}

@media screen and (max-width: 1200px) {
  form {
    width: 100%; /* Puoi cambiare la larghezza a tuo piacimento */
    margin: auto; /* Centra il form nella pagina */
    margin-top: 30px;
  }
  .form-group {
    margin-bottom: 15px; /* Spazio tra i campi */
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%; /* Rende gli input della stessa larghezza */
    padding: 10px; /* Aggiunge padding per un aspetto migliore */
    border: 1px solid #ccc; /* Bordo grigio chiaro */
    border-radius: 4px; /* Angoli arrotondati */
  }

  .btn {
    width: 100%; /* Pulsante della stessa larghezza */
    padding: 20px; /* Padding per il pulsante */
    background-color: $first-color;
    color: $second-color;
    margin-top: 20px;
    border: none; /* Nessun bordo */
    border-radius: 4px; /* Angoli arrotondati */
    cursor: pointer; /* Cambia il cursore su hover */
  }
}
</style>
