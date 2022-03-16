<template>
  <BaseHeader />
  <router-view></router-view>
  <BaseFooter />
</template>

<script>
import BaseHeader from "src/components/layouts/BaseHeader.vue";
import BaseFooter from "src/components/layouts/BaseFooter.vue";
export default {
  name: "app",
  components: {
    BaseHeader,
    BaseFooter,
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
