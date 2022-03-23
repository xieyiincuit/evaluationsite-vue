<template>
  <div class="container mt-3">
    <div class="row description">
      <el-table ref="articleTable" :data="tableData" style="width: 100%">
        <el-table-column prop="createTime" label="创建日期" :formatter="timeFormatter" width="150" sortable column-key="createTime">
        </el-table-column>
        <el-table-column prop="name" label="标题" width="400" :formatter="nameFormatter">
        </el-table-column>
        <el-table-column prop="status" label="状态" :formatter="statusFormatter" width="150">
        </el-table-column>
        <el-table-column prop="categoryId" label="类别" widht="150" :filters="typeFilter" :filter-method="filterCategory" filter-placement="bottom-end">
          <template #default="scope">
            <el-tag type="info" disable-transitions>{{scope.row.categoryName}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template #default="scope">
            <el-button @click="seeArticle(scope.row)" color="#626aef" style="color: white">查看</el-button>
            <el-button @click="editArticle(scope.row)" color="#626aef" plain>编辑</el-button>
            <el-popconfirm confirm-button-text="确认" cancel-button-text="取消" title="删除此条测评内容?" @confirm="confirmEvent(scope.row)"
                           @cancel="cancelEvent">
              <template #reference>
                <el-button type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-12 d-flex justify-content-sm-center">
        <el-pagination v-model:currentPage="this.paginationInfo.currentPage" :page-size="15" :background="true" layout="prev, pager, next"
                       :total="this.paginationInfo.totalCount" @current-change="handleCurrentChange" />
      </div>
    </div>
  </div>

</template>

<script>
import util from '../utils/date'
export default {
  data() {
    return {
      tableData: [],
      typeList: [
        {
          categoryId: null,
          categoryType: ''
        }
      ],
      typeFilter: [],
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
    timeFormatter(row) {
      return this.formatCreateTime(row)
    },
    nameFormatter(row) {
      return `《${row.gameName}》:${row.title}`
    },
    statusFormatter(row) {
      return row.status == 0 ? '已发布' : '草稿'
    },
    categoryFormatter(row) {
      return this.typeList.find((o) => o.categoryId == row.categoryId).categoryType
    },
    filterCategory(value, row) {
      return row.categoryId === value
    },
    formatCreateTime: function (row) {
      return !row.createTime || row.createTime == ''
        ? ''
        : util.formatDate.format(new Date(row.createTime), 'yyyy-MM-dd hh:mm')
    },
    handleCurrentChange(val) {
      this.getMyArticles()
    },
    setPaginationInfo(res) {
      this.paginationInfo.currentPage = res.currentPage
      this.paginationInfo.totalPages = res.totalPages
      this.paginationInfo.totalCount = res.totalCount
      this.paginationInfo.hasPrevious = res.hasPrevious
      this.paginationInfo.hasNext = res.hasNext
    },
    seeArticle(row) {
      this.$router.push({ path: `/article/${row.id}` })
    },
    editArticle(row) {
      this.$router.push({ path: `/article/create`, query: { edit: 'true', aid: row.id } })
    },
    confirmEvent(row) {
      this.$http.delete(`/v1/e/article/${row.id}`, null, (res) => {
        this.getMyArticles()
      })
      this.$message.success('该内容删除成功')
    },
    cancelEvent() {
      this.$message.info('三思而后行 ^ ^')
    },
    getMyArticles() {
      this.$http.get(`v1/e/my/articles?pageIndex=${this.paginationInfo.currentPage}`, null, (res) => {
        this.setPaginationInfo(res)
        console.log(res)
        this.tableData = res.data

        this.$http.get('v1/e/category/list', null, (res) => {
          this.typeList = res

          this.tableData.forEach((element) => {
            var categoryName = this.typeList.find((o) => o.categoryId == element.categoryId).categoryType
            element.categoryName = categoryName
          })

          this.typeList.forEach((element) => {
            this.typeFilter.push({ text: element.categoryType, value: element.categoryId })
          })
        })
      })
    }
  },
  mounted() {
    this.getMyArticles()
  }
}
</script>

<style scoped>
.el-table {
  font-size: 16px;
}
</style>