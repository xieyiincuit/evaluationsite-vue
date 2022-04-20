<template>
  <div class="card">
    <div class="row g-0" v-for="article in articles" :key="article.articleId">
      <h5 class="card-header text-white bg-dark">
        {{ article.categoryName }}
      </h5>

      <div class="col-md-3">
        <router-link :to="`/article/${article.articleId}`">
          <img
            :src="'http://localhost:9000/' + article.descriptionImage"
            alt="images"
            class="card-image"
          />
        </router-link>
      </div>
      <div class="col-md-9 col-sm-12">
        <div class="card-body">
          <router-link
            :to="`/article/${article.articleId}`"
            class="card-title over-flow-title"
            id="title"
          >
            《{{ article.gameName }}》: {{ article.title }}
          </router-link>
          <p class="card-text over-flow-content description">
            {{ article.description }}
          </p>
          <div class="d-flex justify-content-between align-items-end">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 18 18"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                /></svg
              >：{{ article.author }}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar"
                viewBox="0 0 18 18"
              >
                <path
                  d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                /></svg
              >：{{ formatCreateTime(article) }}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-emoji-heart-eyes"
                viewBox="0 0 18 18"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"
                /></svg
              >: {{ article.supportCount }}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-square-text"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                /></svg
              >：{{ article.commentsCount }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../../utils/date";
export default {
  props: ["articles"],
  methods: {
    formatCreateTime: function (row) {
      return !row.createTime || row.createTime == ""
        ? ""
        : util.formatDate.format(new Date(row.createTime), "yyyy-MM-dd hh:mm");
    },
  },
};
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
  font: 18px/1.5 "helvetica neue", tahoma, "PingFang SC", "microsoft yahei",
    arial, "hiragino sans gb", sans-serif;
  height: 55px;
}
p {
  font: 16px/1.5 "helvetica neue", tahoma, "PingFang SC", "microsoft yahei",
    arial, "hiragino sans gb", sans-serif;
}
</style>
