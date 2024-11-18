<template>
  <div class="d-flex flex-column p-2 justify-content-center">
    <h1 class="align-self-center mt-4 p-4">404 - Página No encontrada</h1>
    <h3 class="align-self-center my-4 p-4">
      La página que buscas no se encuentra
    </h3>

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
export default Vue.extend({
  name: "NotFoundView",
});
</script>

<style lang="scss" scoped></style>
