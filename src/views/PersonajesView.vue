<template>
  <div class="d-flex flex-column justify-content-center p-2 text-center">
    <h1 class="my-4 p-2">Personajes</h1>
    <div class="container justify-content-center">
      <div class="loading justify-content-center" v-if="loading">
        <div class="align-self-center h-75">
          <LoadingComponent />
        </div>
      </div>

      <div v-else-if="personajes.length">
        <div class="row g-4">
          <div
            @click="$router.push(`/personaje/${extractId(personaje.url)}`)"
            class="col-3"
            v-for="(personaje, index) in personajes"
            :key="personaje.id || index"
          >
            <CardComponent :personajeProp="personaje" />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            @click="getPersonajes(next)"
            :disabled="next === null"
            class="btn btn-warning col-5 mt-5 p-2 fw-bold text-dark fs-5"
          >
            BUSCAR MÁS PERSONAJES
          </button>
        </div>
      </div>

      <div v-else class="mx-5 px-5 text-center align-self-center">
        <h3>NO HAY ACCESO A LOS PERSONAJES</h3>
        <h5>EL MIEDO ES EL CAMINO HACIA EL LADO OSCURO</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CardComponent from "@/components/CardComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default Vue.extend({
  name: "PersonajesView",
  data() {
    return {
      personajes: [],
      loading: false,
      next: null,
    };
  },
  components: {
    CardComponent,
    LoadingComponent,
  },
  methods: {
    getPersonajes(url) {
      this.loading = true;
      this.$axios(url)
        .then((response) => {
          if (response.data && Array.isArray(response.data.results)) {
            const personajesConId = response.data.results.map(
              (personaje, index) => ({
                ...personaje,
                id: this.personajes.length + index + 1, // ID único para Vue
              })
            );
            this.personajes = [...this.personajes, ...personajesConId];
            this.next = response.data.next || null;
          } else {
            console.warn("Los datos de resultados no son válidos.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener personajes:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    extractId(url) {
      const match = url.match(/\/people\/(\d+)\//);
      return match ? match[1] : null;
    },
    
  },
  created() {
    this.getPersonajes("/people/?page=1")
  },
});
</script>

<style>
.loader {
  position: relative;
  top: 150px;
}
</style>
