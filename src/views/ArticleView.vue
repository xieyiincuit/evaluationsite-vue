<template>
  <div class="container-fluid" v-loading="loading">
    <banner />
    <div class="Mid">
      <content />
      <info />
    </div>
  </div>
</template>

<script>
import banner from "../components/articles/content-banner.vue";
import content from "../components/articles/content-main.vue";
import info from "../components/articles/content-info.vue";

export default {
  components: {
    banner,
    content,
    info,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: unset;
}
.Mid {
  margin: 0 auto;
  padding: 0 10px;
  width: 1050px;
  height: auto;
  min-height: 800px;
  overflow: visible;
}

img {
  border: 0;
  vertical-align: middle;
}

div {
  overflow: hidden;
}
</style>