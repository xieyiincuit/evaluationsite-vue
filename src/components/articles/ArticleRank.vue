<template>
  <div class="card">
    <div class="card-header">新游评分排行榜</div>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item scope-list"
        v-for="(article, index) in rankArticles"
        :key="article.id"
      >
        <div class="d-flex justify-content-between">
          <span class="rank-num">{{ index + 1 }}</span>
          <span class="rank-title text-start">{{ article.name }}</span>
          <span class="rank-scope">{{ article.scope }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankArticles: [
        { id: 1, name: "Apex Legends", scope: "8.52" },
        { id: 2, name: "艾尔登法环", scope: "8.32" },
        { id: 3, name: "英雄联盟", scope: "8.22" },
        { id: 4, name: "王者荣耀", scope: "7.51" },
        { id: 5, name: "Counter-Strike", scope: "7.33" },
        { id: 6, name: "绝地求生", scope: "7.14" },
        { id: 7, name: "彩虹六号", scope: "7.09" },
        { id: 8, name: "梦幻西游", scope: "7.08" },
        { id: 9, name: "穿越火线", scope: "7.07" },
        { id: 10, name: "地下城与勇士", scope: "7.06" },
      ],
    };
  },
};
</script>

<style scoped>
.rank-num {
  color: #aaa;
  font-weight: bold;
  text-align: center;
}

.rank-title {
  padding-left: 20px;
  padding-right: 30px;
  text-align: left;
}

.rank-scope {
  font-weight: bold;
  color: #e23703;
  text-align: center;
}
</style>
