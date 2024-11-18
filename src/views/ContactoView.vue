<template>
  <div class="d-flex flex-column p-2 justify-content-center">
    <h1 class="align-self-center mt-4 p-2">Contacto</h1>
    <h3 class="align-self-center my-3 p-2">Ayúdame, Obi-Wan Kenobi. Tú eres mi única esperanza.</h3>
    <FormComponent />
  </div>
</template>

<script>
import Vue from "vue"
import FormComponent from "@/components/FormComponent.vue";
export default Vue.extend ({
  name: "ContactoView",
  components: {
    FormComponent,
  },
});
</script>

<style>

</style>
