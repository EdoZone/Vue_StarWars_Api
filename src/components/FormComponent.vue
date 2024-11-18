<template>
  <div class="container w-50">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mt-5">
      <b-form-group
        id="input-group-1"
        label="Nombre completo:"
        label-for="input-1"
        class="col-7 my-3"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"          
          placeholder="Ingresa tu nombre completo..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Correo electrónico:" label-for="input-2" class="col-7 mb-3">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Ingresa tu correo electrónico..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Mensaje:" label-for="textarea" class="mb-5">
        <b-form-textarea
          id="textarea"
          v-model="form.text"
          placeholder="Escríbenos algo..."
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="success" class="col-3 py-2 me-5">Enviar</b-button>
      <b-button type="reset" variant="danger" class="col-3 py-2 me-5">Borrar</b-button>
    </b-form>
   
  </div>
</template>

<script>
import Vue from "vue";
  export default Vue.extend({
    name: "FormComponent",
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: ''
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.text = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  })
</script>