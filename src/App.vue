<template>
  <Login msg="Welcome to Your Vue.js App" />
  <RouterView></RouterView>
</template>

<script>
import index from "./components/index.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    index,
    Login,
  },
};
</script>

<style></style>
