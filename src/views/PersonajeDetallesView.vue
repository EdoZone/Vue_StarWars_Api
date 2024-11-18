<template>
  <div class="container justify-content-center p-2 text-center">
    <h1 class="my-4 p-2">Datos del Personaje</h1>
    <div>
      <CardComponent
        :personajeProp="currentPersonaje"
        :personajeDetail="true"
      />
    </div>
    <div class="d-flex justify-content-center">
      <button
        @click="$router.push(`/personajes`)"
        class="btn btn-warning col-5 mt-5 p-2 fw-bold text-dark text-opacity-75 fs-5"
      >
        VOLVER A PERSONAJES
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CardComponent from "@/components/CardComponent.vue";

export default Vue.extend({
  name: "PersonajeDetallesView",
  components: {
    CardComponent,
  },
  data() {
    return {
      currentId: null,
      currentPersonaje: {},
    };
  },
  methods: {
    getPersonajeById() {
      this.currentId = this.$route.params.id;
      this.$axios(`/people/${this.currentId}`)
        .then((response) => {
          this.currentPersonaje = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getPersonajeById();
  },
});
</script>

<style lang="scss" scoped></style>
