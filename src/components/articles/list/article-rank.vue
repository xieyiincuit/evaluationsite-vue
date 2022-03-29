<template>
  <div class="card">
    <div class="card-header">新游评分排行榜</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item scope-list" v-for="(game, index) in gameRank" :key="index">
        <div class="d-flex justify-content-between">
          <span class="rank-num">{{ index + 1 }}</span>
          <router-link :to="`/game/${game.gameId}`" class="rank-title text-start" id="title">{{ game.gameName }}</router-link>
          <span class="rank-scope">{{ checkScope(game.gameScore) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['gameRank'],
  methods: {
    checkScope(scope) {
      if (scope === -1) {
        scope = '----'
      }
      return scope
    }
  }
}
</script>

<style scoped>
.rank-num {
  color: #aaa;
  font-weight: bold;
  text-align: center;
}

.rank-title {
  color: black;
  padding-left: 20px;
  padding-right: 30px;
  text-align: left;
}

#title:hover {
  color: red;
}

.rank-scope {
  font-weight: bold;
  color: #e23703;
  text-align: center;
}
</style>
