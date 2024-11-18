<template>
  <div class="wrap">
    <NavbarComponent />

    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {
    NavbarComponent,
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");

.wrap {
  --bg-img-1: url("@/assets/img/hyperspace-warp-3840x2160-18207.jpg");
  --bg-img-2: url("@/assets/img/StarWarsIABg_1.png");
  --bg-img-3: url("@/assets/img/StarWarsIABg_2.png");
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    var(--bg-img-1);
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-repeat: repeat-y;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  font-family: "Oswald", sans-serif;
  color: #ffffff;
}
</style>
