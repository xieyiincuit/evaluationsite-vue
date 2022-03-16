<template>
  <div class="home">
    <img alt="Vue logo" src="images/logo.png" class="element-plus-logo" />
    <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>