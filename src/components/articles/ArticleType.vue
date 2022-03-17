<template>
  <div class="card-header">
    <ul class="nav nav-pills card-header-tabs">
      <li class="nav-item" v-for="type in typeList" :key="type.categoryId">
        <router-link
          @click="selected(type.categoryId)"
          :class="{ active: active == type.categoryId }"
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
  data() {
    return {
      typeList: [],
      active: "", //选中样式
    };
  },
  methods: {
    getTypeList() {
      this.$http.get("v1/e/category/list", null, (res) => {
        this.typeList = res;
        this.typeList.unshift({ categoryType: "首页" });
        this.$store.commit("articles/saveTypeList", res);
      });
    },
    selected(typeId) {
      this.active = typeId;
    },
  },
  mounted() {
    this.getTypeList();
    this.active = this.$route.query.categoryId;
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