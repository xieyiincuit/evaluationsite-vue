<template>
  <div class="container" v-loading.fullscreen.lock="loading">
    <div class="row">
      <div class="col-lg-9 col-md-12 col-sm-12">
        <ArticleType />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md-12 col-lg-9 col-sm-12">
        <ArticleItem :articles="articles" />
      </div>
      <div class="col-sm-12 col-lg-3 col-md-12 mt-sm-3 mt-md-0">
        <ArticleRank :gameRank="gameRank" />
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-sm-12 col-md-9 d-flex justify-content-sm-center">
        <el-pagination v-model:currentPage="this.paginationInfo.currentPage" :page-size="5" :background="true" layout="prev, pager, next"
                       :total="this.paginationInfo.totalCount" @current-change="handleCurrentChange" :hide-on-single-page="true" />
      </div>
    </div>
    <el-backtop :bottom="100">
      <div class="up-top">UP</div>
    </el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleItem from '../components/articles/article-item.vue'
import ArticleType from '../components/articles/article-type.vue'
import ArticleRank from '../components/articles/article-rank.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ArticleView',
  components: {
    ArticleItem,
    ArticleType,
    ArticleRank
  },
  data() {
    return {
      //优化第一次加载
      loading: true,
      //分类查询参数
      categoryId: null,
      articles: [],
      paginationInfo: {
        currentPage: 1,
        totalPages: 0,
        hasPrevious: false,
        hasNext: true,
        totalCount: 0
      },
      gameRank: []
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // 使用属性访问方式无法访问（目前不知道原因）
    ...mapGetters('articles', {
      typeMap: 'categoryMap'
    })
  },
  methods: {
    getArticles() {
      this.categoryId = this.$route.query.categoryId
      if (this.categoryId) {
        var url = `v1/e/articles/type?pageIndex=${this.paginationInfo.currentPage}&categoryId=${this.categoryId}`
      } else {
        url = `v1/e/articles?pageIndex=${this.paginationInfo.currentPage}`
      }

      this.$http.get(url, null, (res) => {
        this.setPaginationInfo(res)

        this.articles = res.data
        this.articles.forEach((element) => {
          var categoryName = this.typeMap.get(element.categoryTypeId)
          element.categoryName = categoryName
        })
        this.$http.get('v1/g/ranks', null, (rank) => {
          this.gameRank = rank
          var rankCount = this.gameRank.length
          if (rankCount < 10) {
            var loopCount = 10 - rankCount
            for (let index = 0; index < loopCount; index++) {
              var obj = { gameId: -1, gameName: '——————', gameScore: -1 }
              this.gameRank.push(obj)
            }
          }
        })
      })
      this.loading = false
    },
    handleCurrentChange(val) {
      this.getArticles()
    },
    setPaginationInfo(res) {
      this.paginationInfo.currentPage = res.currentPage
      this.paginationInfo.totalPages = res.totalPages
      this.paginationInfo.totalCount = res.totalCount
      this.paginationInfo.hasPrevious = res.hasPrevious
      this.paginationInfo.hasNext = res.hasNext
    }
  },
  mounted() {
    this.getArticles()
  },
  watch: {
    $route(to) {
      this.getArticles()
    }
  }
}
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