<template>
  <div class="card-header">
    <ul class="nav nav-pills card-header-tabs">
      <li class="nav-item">
        <router-link class="nav-link" to="/">首页</router-link>
      </li>
      <li class="nav-item" v-for="type in typeList" :key="type.categoryId">
        <router-link
          class="nav-link"
          :to="{ path: '/articles', query: { categoryId: type.categoryId } }"
          >{{ type.categoryType }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //TODO 点谁 谁Active
  data() {
    return {
      typeList: [],
    };
  },
  methods: {
    getTypeList() {
      this.$http.get("v1/e/category/list", null, (res) => {
        this.typeList = res;
        this.$store.commit("articles/saveTypeList", res);
        console.log(res);
      });
    },
  },
  mounted() {
    this.getTypeList();
  },
  watch: {
    $route(to) {
      this.getTypeList();
    },
  },
};
</script>
<style scoped>
.nav-pills .nav-link {
  font-size: unset;
}
</style>