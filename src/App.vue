<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/layouts/header.vue";
import Footer from "./components/layouts/footer.vue";
import userAuth from "src/auth/userauth";

export default {
  name: "app",
  mixins: [userAuth],
  components: {
    Header,
    Footer,
  },
  watch: {
    $route: async function (to, from) {
      await this.refreshUserInfo();
    },
  },
};
</script>

<style>
#app {
  font: 18px/1.5 "helvetica neue", tahoma, "PingFang SC", "microsoft yahei",
    arial, "hiragino sans gb", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.element-plus-logo {
  width: 50%;
}
</style>
