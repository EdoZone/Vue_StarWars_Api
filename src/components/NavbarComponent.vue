<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="warning" class="ps-5">
      <b-navbar-brand class="fw-bold text-dark text-opacity-75 fs-3">HELLO THERE...</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="p-2 ms-5">
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto p-2 ms-5">
          | <router-link
            class="text-navbar fw-bold px-5"
            to="/"
            >INICIO</router-link
          > | 
          <router-link
            class="text-navbar fw-bold px-5"
            to="/personajes"
            >PERSONAJES</router-link
          > | 
          <router-link
            class="text-navbar fw-bold px-5 me-3"
            to="/contacto"
            >CONTACTO</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "NavbarComponent",
});
</script>

<style>
ul {
  color: rgba(37, 37, 41, 0.75);
  font-weight: 900;
}
.text-navbar {
  text-decoration: none;
  font-weight: bold;
  color: rgba(37, 37, 41, 0.75);
}
.text-navbar:hover {
  color: rgb(37, 37, 41);
  scale: 1.2;
}

</style>
