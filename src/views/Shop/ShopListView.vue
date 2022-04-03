<template>
  <div class="container">
    <div class="fhyx_clist">
      <div class="fhyx_clist_tab">
        <span class="checked" data-id="1">新品</span>
        <span data-id="2">热销</span>
        <span data-id="4">折扣</span>
      </div>
      <div class="fhyx_clist_c">
        <div class="fhyx_clist_ul">
          <router-link :to="`/shop/${index}`" class="fhyx_clist_li checked" v-for="index in this.liCount" :key="index">
            <img src="https://img.fhyx.com/uploads/steam/w_img/1882040.jpg">
            <div class="fhyx_clist_li_des">
              <p class="title">沙盒勇者</p>
              <p class="content"><span>8.3</span> | 2022.04.01 | 角色扮演RPG</p>
            </div>
            <div class="fhyx_clist_li_price"><span class="zk">-10%</span>
              <div class="price_c"><span class="oldprice">¥22.00</span><span class="price">¥19.80</span></div>
            </div>
          </router-link>
        </div>
        <div class="fhyx_clist_li_c">
          <p class="title">沙盒勇者</p>
          <div class="tag">
            <a>抢先体验</a><a>角色扮演</a><a>模拟</a><a>沙盒</a><a>策略角色扮演</a><a>角色动作</a>
          </div>
          <div class="c_img">
            <img src="//img.fhyx.com/uploads/steam/1750740/01648786333.jpg">
          </div>
          <p class="article">给您推荐的优秀测评：</p>
          <a href="javascript:;">
            <p class="atitle">《沙盒勇者》：一款经典的角色扮演2D游戏</p>
            <p class="adescription">这里是测评简介，这里是测评简介，这里是测评简介，这里是测评简介</p>
          </a>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col-sm-12 col-md-10 col-lg-8 d-flex justify-content-sm-center">
          <el-pagination v-model:currentPage="this.paginationInfo.currentPage" :page-size="8" :background="true" layout="prev, pager, next"
                         :total="this.paginationInfo.totalCount" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liCount: 8,
      paginationInfo: {
        currentPage: 1,
        totalPages: 0,
        hasPrevious: false,
        hasNext: true,
        totalCount: 10
      }
    }
  },
  methods: {
    handleCurrentChange() {}
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
.fhyx_clist_tab span {
  float: left;
  width: 60px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #666666;
  margin-right: 40px;
  position: relative;
  cursor: pointer;
}
.fhyx_clist_tab span.checked {
  font-size: 22px;
  color: #333333;
  font-weight: bold;
}
.fhyx_clist_tab span.checked:after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 0;
  right: 1;
  width: 45px;
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
  float: left;
  width: 56px;
  height: 28px;
  background-color: #6ec449;
  border-radius: 4px;
  line-height: 28px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin: 20px auto;
}
.fhyx_clist_li_price .price_c {
  float: right;
  width: 100px;
}
.fhyx_clist_li_price .price_c .oldprice {
  float: right;
  width: auto;
  height: 20px;
  line-height: 20px;
  text-align: right;
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;
  margin-top: 12px;
}
.fhyx_clist_li_price .price_c .price {
  float: right;
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: right;
  font-size: 18px;
  color: #ff3600;
  font-weight: bold;
}
.fhyx_clist_li_c {
  float: right;
  width: 384px;
  height: 468px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px 0px rgb(0 0 0 / 16%);
  border-radius: 8px;
  overflow: hidden;
}
.fhyx_clist_li_c .title {
  float: left;
  width: 320px;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  text-align: left;
  margin: 24px 0 0 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fhyx_clist_li_c .tag {
  float: left;
  width: 320px;
  height: 25px;
  overflow: hidden;
  margin: 5px 0 0 23px;
}
.fhyx_clist_li_c .tag a {
  float: left;
  width: auto;
  height: 25px;
  line-height: 25px;
  background-color: #999999;
  border-radius: 8px;
  text-align: center;
  padding: 0 6px;
  margin-right: 5px;
  color: #ffffff;
  font-size: 14px;
}
.fhyx_clist_li_c .c_img {
  float: left;
  width: 336px;
  height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 15px 0 0 23px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.fhyx_clist_li_c .c_img img {
  float: left;
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 3px;
}
.fhyx_clist_li_c .article {
  float: left;
  width: 320px;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #666666;
  text-align: left;
  margin: 24px 0 0 23px;
  overflow: hidden;
  font-style: italic;
}
.fhyx_clist_li_c .atitle {
  float: left;
  width: 320px;
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  font-weight: bold;
  color: darkkhaki;
  text-align: left;
  margin: 24px 0 0 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fhyx_clist_li_c .atitle:hover {
  color: red;
}

.fhyx_clist_li_c .adescription {
  float: left;
  width: 320px;
  height: 50px;
  line-height: 25px;
  font-size: 14px;
  color: #999999;
  text-align: left;
  margin: 0 0 0 23px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>