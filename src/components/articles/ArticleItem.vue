<template>
  <div class="card" >
    <div
      class="row g-0 mb-3"
      v-for="article in articles"
      :key="article.articleId"
    >
      <h5 class="card-header text-white bg-dark">
        {{ article.categoryName }}
      </h5>

      <div class="col-md-3">
        <img :src="article.descriptionImage" alt="csgo" class="card-image" />
      </div>
      <div class="col-md-9 col-sm-12">
        <div class="card-body">
          <h5 class="card-title over-flow-title">
            《{{ article.gameName }}》: {{ article.title }}
          </h5>
          <p class="card-text over-flow-content">
            {{ article.description }}
          </p>
          <div class="d-flex justify-content-between align-items-end">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                /></svg
              >: {{ article.author }}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                />
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                /></svg
              >: {{ formatCreateTime(article) }}
            </p>

            <p>
              <svg
                data-v-41be6633=""
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="eye"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-eye mx-auto b-icon bi"
              >
                <g data-v-41be6633="">
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  ></path>
                  <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  ></path>
                </g></svg
              >: 578
            </p>
            <p>
              <svg
                data-v-41be6633=""
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="chat dots"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-chat-dots mx-auto b-icon bi"
              >
                <g data-v-41be6633="">
                  <path
                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  ></path>
                  <path
                    d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
                  ></path>
                </g></svg
              >: {{ article.commentsCount }}
            </p>
            <a href="#" class="btn btn-outline-success btn-rounded">查看全文</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../utils/date";
export default {
  props: ["articles"],
  methods: {
    formatCreateTime: function (row) {
      return !row.createTime || row.createTime == ""
        ? ""
        : util.formatDate.format(new Date(row.createTime), "yyyy-MM-dd");
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

.over-flow-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-image {
  max-width: 100%;
  height: 100%;
}

.btn {
  font-size: unset;
}
</style>
