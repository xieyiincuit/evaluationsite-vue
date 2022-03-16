<template>
  <div class="container">
    <ArticleType />
    <div class="row mt-3">
      <div class="col-md-9">
        <ArticleItem />
      </div>
      <div class="col-sm-12 col-md-3 mt-sm-3 mt-md-0">
        <ArticleRank />
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-sm-12 col-md-9 d-flex justify-content-sm-center">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
    <el-backtop :bottom="100">
      <div class="up-top">UP</div>
    </el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleItem from "../components/articles/ArticleItem.vue";
import ArticleType from "../components/articles/ArticleType.vue";
import ArticleRank from "../components/articles/ArticleRank.vue";
export default {
  name: "ArticleView",
  components: {
    ArticleItem,
    ArticleType,
    ArticleRank,
  },
};
</script>

<style scoped>
.up-top {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
</style>