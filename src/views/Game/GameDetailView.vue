<template>
  <div class="container" v-loading="loading">
    <div class="Mid">
      <div class="Mid_T">
        <img :src="`http://localhost:9000/${this.gameInfo.detailImg}`" alt="bigPicture" height="500" width="1200" />
      </div>
      <game-info :gameInfo="gameInfo" :articlesInfo="articlesInfo" />
      <game-ramark :gameRemark="gameRemark" />
    </div>
  </div>
</template>

<script>
import GameInfo from 'src/components/game/content/game-info.vue'
import GameRemark from 'src/components/game/content/game-remark.vue'

export default {
  components: {
    'game-info': GameInfo,
    'game-ramark': GameRemark
  },
  data() {
    return {
      loading: true,
      gameRemark: {
        score: 0,
        suggestion: {
          cpu: '',
          system: '',
          memory: '',
          card: '',
          disk: ''
        }
      },
      gameInfo: {
        detailImg: '',
        roughImg: '',
        name: '',
        platForm: '',
        sellTime: '',
        category: '',
        issue: '',
        description: ''
      },
      articlesInfo: {}
    }
  },
  methods: {
    getGameInfo() {
      const gameId = this.$route.params.id
      this.$http.get('v1/g/info/' + gameId, null, (game) => {
        this.gameInfo.detailImg = game.detailsPicture
        this.gameInfo.roughImg = game.roughPicture
        this.gameInfo.name = game.name
        this.gameInfo.platForm = game.supportPlatform
        this.gameInfo.sellTime = game.sellTime
        this.gameInfo.category = game.categoryName
        this.gameInfo.issue = game.companyName
        this.gameInfo.description = game.description

        this.gameRemark.score = game.averageScore

        this.$http.get('v1/g/suggestion', { gameId: gameId }, (sug) => {
          this.gameRemark.suggestion.cpu = sug.cpuName
          this.gameRemark.suggestion.card = sug.graphicsCard
          this.gameRemark.suggestion.system = sug.operationSystem
          this.gameRemark.suggestion.disk = sug.diskSize
          this.gameRemark.suggestion.memory = sug.memorySize
        })

        this.$http.get('v1/e/game/articles', { gameId: gameId }, (art) => {
          if (art.data.length === 0) {
            this.articlesInfo = null
          } else {
            this.articlesInfo = art
          }
        })

        this.loading = false
      })
    }
  },
  mounted() {
    this.getGameInfo()
  }
}
</script>

<style scoped>
* {
  box-sizing: unset;
}
.Mid {
  margin-top: 50px;
  overflow: visible;
}
.Mid {
  padding: 0 20px;
  width: 1200px;
  height: auto;
  min-height: 500px;
}
.Mid_T {
  width: 1000px;
  height: 484px;
  position: relative;
}
</style>