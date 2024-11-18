<template>
  <div class="onHover container justify-content-center">
    <b-card
      :title="personajeProp.name"
      tag="article"
      style="max-width: 20rem"
      class="mb-2 bg-warning text-center"
    >
      <div v-if="personajeDetail">
        <b-card-text><strong>Género</strong></b-card-text>
        <b-card-text>{{ personajeProp.gender }}</b-card-text>
        <b-card-text><strong>Altura</strong></b-card-text>
        <b-card-text>{{ personajeProp.height }}</b-card-text>
        <b-card-text><strong>Número de películas</strong></b-card-text>
        <b-card-text>{{ personajeProp.films.length }}</b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "CardComponent",
  props: {
    personajeProp: {
      type: Object,
      required: true,
    },
    personajeDetail: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<style>
.onHover {
  color: rgba(37, 37, 41, 0.75);
}
.onHover:hover {
  /* scale: 1.05; */
  /* color: rgb(37, 37, 41); */
  /* font-weight: bold; */
  cursor: pointer;
}
</style>
