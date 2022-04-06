<template>
  <div class="container" v-loading="loading">
    <div class="fhyx_clist">
      <div class="fhyx_clist_tab">
        <template v-for="type in orderType.data" :key="type.id">
          <router-link @click="typeSelected(type.id)" :class="{ checked: orderType.active == type.id }"
                       :to="{ path: '/mygame', query: { pageIndex: paginationInfo.currentPage, hasChecked: type.value } }">
            {{type.name}}
          </router-link>
        </template>
      </div>
      <div class="fhyx_clist_c" v-if="this.sdks.length !== 0">
        <div class="fhyx_clist_ul">
          <template v-for="sdk in sdks" :key="sdk.id">
            <div class="fhyx_clist_li">
              <img :src="`http://localhost:9000/${sdk.gamePictrue}`">
              <div class="fhyx_clist_li_des">
                <p class="title">{{sdk.gameName}}</p>
                <p class="content">{{formatBuyTime(sdk.sendTime)}} | SDK:{{sdk.sdkString}}</p>
              </div>
              <div class="fhyx_clist_li_price"><button class="zk" @click="checkSDK(sdk.id)">Check</button>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col-sm-12 col-md-10 col-lg-8 d-flex justify-content-sm-center">
          <el-pagination v-model:currentPage="this.paginationInfo.currentPage" :page-size="10" :background="true" layout="prev, pager, next"
                         :total="this.paginationInfo.totalCount" @current-change="handleCurrentChange" :hide-on-single-page="true" />
        </div>
      </div>
      <template v-if="this.sdks.length === 0">
        <el-empty class="fhyx_clist_c" :image-size="200" description="你没有拥有任何游戏，去使用你的SDK吧" />
      </template>
    </div>

  </div>
</template>

<script>
import util from 'src/utils/date'

export default {
  data() {
    return {
      loading: true,
      paginationInfo: {
        currentPage: 1,
        totalPages: 0,
        hasPrevious: false,
        hasNext: true,
        totalCount: 10
      },
      orderType: {
        active: 0,
        data: [
          {
            id: 0,
            name: '未使用',
            value: false
          },
          {
            id: 1,
            name: '已使用',
            value: true
          }
        ]
      },
      sdks: {}
    }
  },
  methods: {
    formatBuyTime: function (buyTime) {
      return !buyTime || buyTime == '' ? '' : util.formatDate.format(new Date(buyTime), 'yyyy-MM-dd hh:mm:ss')
    },
    getSDKList() {
      let hasChecked = this.$route.query.hasChecked
      if (!hasChecked) {
        hasChecked = false
      }
      this.$http.get(
        'v1/g/user/sdks',
        { pageIndex: this.paginationInfo.currentPage, hasChecked: hasChecked },
        (res) => {
          this.setPaginationInfo(res)
          this.sdks = res.data
          this.loading = false
        },
        (fail) => {
          if (fail.status == 404) {
            this.paginationInfo.totalCount = 0
            this.sdks = null
            this.loading = false
          }
        }
      )
    },
    checkSDK(sdkId) {
      this.$http.put(
        'v1/g/user/sdk/' + sdkId,
        null,
        (res) => {
          this.getSDKList()
        },
        (fail) => {}
      )
    },
    handleCurrentChange() {
      this.getSDKList()
    },
    setPaginationInfo(res) {
      this.paginationInfo.currentPage = res.currentPage
      this.paginationInfo.totalPages = res.totalPages
      this.paginationInfo.totalCount = res.totalCount
      this.paginationInfo.hasPrevious = res.hasPrevious
      this.paginationInfo.hasNext = res.hasNext
    },
    typeSelected(typeId) {
      this.orderType.active = typeId
    }
  },
  mounted() {
    this.getSDKList()
  },
  watch: {
    $route(to) {
      this.getSDKList()
    }
  }
}
</script>

<style scoped>
.fhyx_clist {
  width: 1200px;
  height: 893px;
  margin: 42px auto 0;
}
.fhyx_clist_tab {
  float: left;
  width: 100%;
  height: 43px;
}
.fhyx_clist_tab a {
  float: left;
  width: 80px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #666666;
  margin-right: 40px;
  position: relative;
  cursor: pointer;
}
.fhyx_clist_tab a.checked {
  font-size: 22px;
  color: #333333;
  font-weight: bold;
}
.fhyx_clist_tab a.checked:after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 0;
  right: 1;
  width: 80px;
  height: 6px;
  background-color: #ff3600;
  border-radius: 6px;
  margin: 0 auto;
}
.fhyx_clist_c {
  float: left;
  width: 100%;
  height: auto;
  margin-top: 16px;
}
.fhyx_clist_ul {
  float: left;
  width: 792px;
  height: auto;
}
.fhyx_clist_li.checked {
  background-color: #ffffff;
  box-shadow: 0px 3px 6px 0px rgb(0 0 0 / 16%);
}
.fhyx_clist_li {
  float: left;
  width: 100%;
  height: 68px;
  background-color: #eeeeee;
  border-radius: 8px;
  position: relative;
  margin-bottom: 12px;
}
a {
  text-decoration: none;
  color: #4b4b4b;
  cursor: pointer;
}

.fhyx_clist_li img {
  float: left;
  width: 145px;
  height: 68px;
  border-radius: 8px 0px 0px 8px;
}
img {
  border: 0px;
}
.fhyx_clist_li_des {
  float: left;
  width: 430px;
  height: 68px;
  overflow: hidden;
  margin-left: 17px;
}
.fhyx_clist_li_des .title {
  float: left;
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: left;
  color: #474747;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  margin-top: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0px;
}
.fhyx_clist_li_des .content {
  float: left;
  width: 100%;
  height: 20px;
  line-height: 20px;
  color: #999999;
  font-size: 13px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fhyx_clist_li_des .content span {
  float: left;
  max-width: 200px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 3px;
  font-weight: bold;
  color: #ff3600;
}
.fhyx_clist_li_price {
  float: right;
  width: 160px;
  height: 68px;
  margin-right: 24px;
}
.fhyx_clist_li_price .zk {
  float: right;
  width: 80px;
  height: 35px;
  background-color: #6ec449;
  border-radius: 4px;
  line-height: 28px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin: 20px auto;
}
</style>