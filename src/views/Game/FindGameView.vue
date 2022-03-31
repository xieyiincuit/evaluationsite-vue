<template>
  <div class="container" v-loading="loading">
    <game-type :gameTypes="gameTypes" :gameCompanies="gameCompanies" />
    <game-item :gameinfos="gameInfos" />
    <div class="col-sm-12 col-md-12 d-flex justify-content-sm-center">
      <el-pagination v-model:currentPage="this.paginationInfo.currentPage" :page-size="18" :background="true" layout="prev, pager, next"
                     :total="this.paginationInfo.totalCount" @current-change="handleCurrentChange" :hide-on-single-page="true" />
    </div>
  </div>
</template>

<script>
import GameItem from '../../components/game/list/game-item.vue'
import GameType from '../../components/game/list/game-type.vue'
export default {
  components: {
    'game-item': GameItem,
    'game-type': GameType
  },
  data() {
    return {
      //优化第一次加载
      loading: true,
      gameTypes: [],
      gameCompanies: [],
      gameInfos: [],
      searchTerm: {
        tid: null,
        cid: null,
        order: 'hot'
      },
      paginationInfo: {
        currentPage: 1,
        totalPages: 0,
        hasPrevious: false,
        hasNext: true,
        totalCount: 0
      }
    }
  },
  methods: {
    getMenus() {
      this.$http.get('v1/g/companies/all', null, (res) => {
        this.gameCompanies = res
        this.gameCompanies.unshift({ id: 0, companyName: '全部' })
      })
      this.$http.get('v1/g/categories/all', null, (res) => {
        this.gameTypes = res
        this.gameTypes.unshift({ id: 0, categoryName: '全部' })
      })
    },
    getGameInfos() {
      const categoryId = this.$route.query.tid
      const companyId = this.$route.query.cid
      const order = this.$route.query.order == null ? 'hot' : this.$route.query.order
      this.$http.get(
        'v1/g/infos',
        { categoryId: categoryId, companyId: companyId, order: order, pageIndex: this.paginationInfo.currentPage },
        (res) => {
          this.setPaginationInfo(res)
          this.gameInfos = res
          this.loading = false
        },
        (fail) => {
          if (fail.status == 404) {
            this.gameInfos.totalCount = 0
            this.gameInfos.data = null
            this.loading = false
          }
        }
      )
    },
    handleCurrentChange(val) {
      this.getGameInfos()
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
    this.getMenus()
    this.getGameInfos()
  },
  watch: {
    $route(to) {
      this.getGameInfos()
    }
  }
}
</script>

<style scoped>
</style>