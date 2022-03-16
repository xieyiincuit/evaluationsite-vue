<template>
  <div class="container">
    <ArticleList />
  </div>
</template>

<script>
// @ is an alias to /src
import AritcleList from "~/components/articles/ArticleList.vue";
export default {
  name: "ArticleView",
  components: {
    AritcleList,
  },
};
</script>