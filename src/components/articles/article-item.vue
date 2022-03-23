<template>
  <div class="card">
    <div class="row g-0" v-for="article in articles" :key="article.articleId">
      <h5 class="card-header text-white bg-dark">
        {{ article.categoryName }}
      </h5>

      <div class="col-md-3">
        <router-link :to="`/article/${article.articleId}`">
          <img :src="'http://localhost:9000/' + article.descriptionImage" alt="csgo" class="card-image" />
        </router-link>
      </div>
      <div class="col-md-9 col-sm-12">
        <div class="card-body">
          <router-link :to="`/article/${article.articleId}`" class="card-title over-flow-title" id="title">
            《{{ article.gameName }}》: {{ article.title }}
          </router-link>
          <p class="card-text over-flow-content description">
            {{ article.description }}
          </p>
          <div class="d-flex justify-content-between align-items-end">
            <p>作者：{{ article.author }}</p>
            <p>发布时间：{{ formatCreateTime(article) }}</p>
            <p>点赞数: {{article.supportCount}}</p>
            <p>评论数：{{ article.commentsCount }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../../utils/date'
export default {
  props: ['articles'],
  methods: {
    formatCreateTime: function (row) {
      return !row.createTime || row.createTime == ''
        ? ''
        : util.formatDate.format(new Date(row.createTime), 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.over-flow-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

#title:hover {
  color: red;
}
.over-flow-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 21px;
  font-weight: 600;
  color: darkkhaki;
}

.card-image {
  width: 250px;
  height: 170px;
}

.btn {
  font-size: unset;
}

.description {
  font: 18px/1.5 'helvetica neue', tahoma, 'PingFang SC', 'microsoft yahei', arial, 'hiragino sans gb', sans-serif;
  height: 55px;
}
p {
  font: 16px/1.5 'helvetica neue', tahoma, 'PingFang SC', 'microsoft yahei', arial, 'hiragino sans gb', sans-serif;
}
</style>
