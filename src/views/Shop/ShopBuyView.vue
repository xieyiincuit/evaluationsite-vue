<template>
  <div
    class="container"
    v-loading="loading"
  >
    <div class="products_top">
      <div class="products_top_t">
        <div class="products_top_t_l">
          <p class="title">{{shop.gameName}}</p>
          <p class="etitle">{{formatSellTime(shop.sellTime)}}上市<span>|</span>{{shop.gameCategory}}<span>|</span>支持中文</p>
        </div>
      </div>
      <div class="products_top_l">
        <div class="products_top_l_con"><img :src="`http://localhost:9000/${shop.gamePicture}`"></div>
      </div>
      <div class="products_top_r">
        <div class="commodity_info">
          <img
            class="img"
            :src="`http://localhost:9000/${shop.picture}`"
          >
          <div class="c_info">
            <p class="title">{{shop.gameName}}</p>
          </div>
        </div>
        <div class="version ">
          <div class="p_pid">
            <span class="title">游玩平台:</span>
            <div class="p_pid_ul">
              <a
                href="javascript:void(0)"
                class="detail_ico hk_steam active"
              ></a>
            </div>
          </div>
          <div>
            <div class="p_version"><span class="title">SDK版本：</span>
              <div class="p_version_ul"><a
                  href="javascript:void(0)"
                  class="active"
                >简/繁体中文</a></div>
            </div>
          </div>
        </div>
        <div class="price_info">
          <span class="price">¥{{shop.finalPrice}}</span>
          <p class="oldprice">
            <span
              class="hk_price"
              style="line-height: 20px;"
            >HK${{shop.finalPrice * 1.2}}</span>
            <span
              class="old_price"
              style="line-height: 20px;"
            >¥{{shop.price}}</span>
          </p>
          <span class="zk">-{{100 - shop.discount}}%</span>
        </div>
        <div class="gm_btn">
          <span
            class="buy_btn"
            @click="buyItem"
          >立即购买</span>
        </div>
      </div>
    </div>
    <div class="products_con">
      <div class="products_con_left">
        <div class="products_con_left_gamejs">
          <div class="products_con_left_gamejs_title">游戏介绍</div>
          <div class="products_con_left_gamejs_con">
            <p>{{shop.gameDescription}}</p>
          </div>
        </div>
      </div>
      <div class="products_con_right">
        <div class="products_con_right_products_con">
          <div class="changshang_type">
            <p class="title"><span>游戏开发：</span>{{shop.gameIssue}}</p>
            <p class="title"><span>游戏发售：</span>{{shop.gameIssue}}</p>
            <p class="title"><span>类型：</span>{{shop.gameCategory}}</p>
            <p class="title"><span>上市时间：</span>{{formatSellTime(shop.sellTime)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="centerDialogVisible"
    title="购买成功"
    width="20%"
    center
  >
    <span style="font-size:14px">游戏购买成功，SDK已发放，去激活拥有该游戏吧</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
        >知道了</el-button>
        <el-button
          type="success"
          @click="toMyGame"
        >去激活</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import util from "src/utils/date";
import applicationUserManager from "src/auth/applicationusermanager";
export default {
  data() {
    return {
      loading: true,
      centerDialogVisible: false,
      shop: {},
    };
  },
  methods: {
    formatSellTime: function (sellTime) {
      return !sellTime || sellTime == ""
        ? ""
        : util.formatDate.format(new Date(sellTime), "yyyy-MM-dd");
    },
    getShopDetail() {
      const shopId = this.$route.params.id;
      this.$http.get(
        `v1/s/${shopId}`,
        null,
        (res) => {
          this.shop = res;
          this.loading = false;
        },
        (fail) => {
          this.shop = null;
          this.loading = false;
        }
      );
    },
    buyItem() {
      let user = this.$store.state.identity.user;
      if (user == null) {
        this.login();
      } else {
        const shopId = this.$route.params.id;
        this.$http.post("v1/o/item/" + shopId, null, (res) => {
          this.centerDialogVisible = true;
        });
      }
    },
    async login() {
      try {
        await applicationUserManager.login();
      } catch (error) {
        console.log("login error: ", error);
        this.$message.error(error);
      }
    },
    toMyGame() {
      this.$router.push({ path: "/mygame" });
    },
  },
  mounted() {
    this.getShopDetail();
  },
};
</script>

<style scoped>
.products_top {
  width: 1200px;
  height: auto;
  margin: 60px auto 0;
  display: table;
  position: relative;
  z-index: 1;
}
.products_top_t {
  float: left;
  width: 100%;
  height: 70px;
}
.products_top_t_l {
  float: left;
  width: 970px;
  height: 70px;
}
.products_top_t_l .title {
  float: left;
  width: auto;
  max-width: 660px;
  height: 35px;
  line-height: 35px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 32px;
  color: black;
  font-weight: bold;
}
.products_top_t_l .etitle {
  float: left;
  width: 100%;
  height: 18px;
  font-size: 16px;
  line-height: 16px;
  color: black;
  opacity: 0.8;
  margin-top: 10px;
}
.products_top_t_l .etitle span {
  margin: 0 8px;
}
.products_top_l {
  float: left;
  width: 664px;
  height: 375px;
  margin-top: 16px;
}
.products_top_l_con {
  float: left;
  width: 100%;
  height: 372px;
  border-radius: 8px;
  overflow: hidden;
}

.products_top_l_con img {
  float: left;
  width: 100%;
  height: 100%;
}
.products_top_r {
  float: right;
  width: 512px;
  height: 380px;
  background-color: #fbfbfb;
  border-radius: 8px;
  margin-top: 16px;
  position: relative;
}
.products_top_r .commodity_info {
  float: left;
  width: 100%;
  height: 94px;
  background-color: rgba(204, 204, 204, 0.33);
  border-radius: 8px 8px 0px 0px;
  position: relative;
  z-index: 1;
}
.products_top_r .commodity_info .img {
  float: left;
  width: 201px;
  height: 94px;
  border-radius: 8px 0px 0px 0px;
}
.products_top_r .commodity_info .c_info {
  float: left;
  width: 285px;
  height: 94px;
  margin-left: 16px;
}
.products_top_r .commodity_info .c_info .title {
  float: left;
  width: 100%;
  height: 50px;
  line-height: 25px;
  font-size: 16px;
  color: #474747;
  text-align: left;
  font-weight: bold;
  overflow: hidden;
  margin-top: 10px;
}
.products_top_r .version {
  float: left;
  margin: 24px 0 0 24px;
  width: 464px;
  height: 120px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.products_top_r .version .p_pid {
  float: left;
  width: 100%;
}
.products_top_r .version .p_pid .title {
  float: left;
  width: 75px;
  height: 32px;
  line-height: 32px;
  text-align: left;
  font-size: 14px;
  color: #474747;
}
.products_top_r .version .p_pid .p_pid_ul {
  float: left;
  width: 380px;
}
.products_top_r .version .p_pid a.hk_steam {
  background-position: -121px -42px;
}

.products_top_r .version .p_pid a:hover,
.products_top_r .version .p_pid a.active {
  border: solid 1px #fa4d00;
}
.products_top_r .version .p_pid a {
  float: left;
  border: solid 1px #cdd7e9;
  width: 98px;
  height: 32px;
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 15px;
}
.detail_ico {
  background-image: url(http://localhost:9000/shopinfopic/common/fhyx_detail_ui.png);
}
a {
  text-decoration: none;
  color: #4b4b4b;
  cursor: pointer;
}
.products_top_r .version .p_version {
  float: left;
  width: 100%;
}
.products_top_r .version .p_version .title {
  float: left;
  width: 75px;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  color: #474747;
}
.products_top_r .version .p_version .p_version_ul {
  float: left;
  width: 348px;
}
.products_top_r .version .p_version a:hover,
.products_top_r .version .p_version a.active {
  border: solid 1px #fa4d00;
  color: #fa4d00;
}
.products_top_r .version .p_version a {
  float: left;
  border: solid 1px #cccccc;
  height: 32px;
  border-radius: 8px;
  margin-right: 8px;
  color: #474747;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
  padding: 0 15px;
  margin-bottom: 15px;
}
.products_top_r .price_info {
  float: left;
  margin: 20px 0 0 24px;
  width: 464px;
  height: 40px;
  position: relative;
  z-index: 1;
}
.products_top_r .price_info .price {
  float: left;
  width: auto;
  height: 40px;
  line-height: 40px;
  font-size: 42px;
  color: #fa4d00;
  font-weight: bold;
}
.products_top_r .price_info .oldprice {
  float: left;
  margin-left: 12px;
  height: 40px;
  max-width: 100px;
}
.products_top_r .price_info .oldprice .hk_price {
  float: left;
  width: auto;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
}
.products_top_r .price_info .oldprice .old_price {
  float: left;
  width: auto;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #999999;
  text-decoration: line-through;
}
.products_top_r .price_info .zk {
  float: left;
  height: 40px;
  line-height: 40px;
  background-color: #6ec449;
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  margin-left: 8px;
  font-size: 14px;
  width: 56px;
}
.products_top_r .gm_btn .buy_btn {
  float: left;
  width: 279px;
  height: auto;
  margin-top: 20px;
  margin-left: 25px;
  background-image: linear-gradient(180deg, #fa4d00 0%, #ffa200 100%);
  border-radius: 8px;
  line-height: 56px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}
div,
span {
  font-size: 12px;
  list-style-type: none;
  font-weight: normal;
  font-style: normal;
  padding: 0px;
}

.products_con {
  width: 1200px;
  height: auto;
  display: table;
  margin: 24px auto 50px;
  position: relative;
  z-index: 1;
}
.products_con_left {
  float: left;
  width: 788px;
  height: auto;
}
.products_con_left_gamejs {
  float: left;
  width: 100%;
  height: 200px;
  margin-top: 17px;
  background-color: #eee;
  border-radius: 8px;
}
.products_con_left_gamejs_title {
  float: left;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: left;
  text-indent: 38px;
  position: relative;
  font-size: 18px;
  font-weight: bold;
  color: #474747;
}
.products_con_left_gamejs_title:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 24px;
  width: 6px;
  height: 18px;
  background-image: linear-gradient(180deg, #fa4d00 0%, #ffa200 100%);
  border-radius: 4px;
  margin: auto 0;
}
.products_con_left_gamejs_con {
  float: left;
  width: 740px;
  line-height: 25px;
  color: #666666;
  overflow: hidden;
  font-size: 14px !important;
  padding: 10px 0 0 24px;
  margin-bottom: 20px;
}
.products_con_left_gamejs_con p {
  font-size: 14px;
  color: #666666;
}
.products_con_right {
  float: right;
  width: 388px;
  height: auto;
}
.products_con_right_products_con {
  float: left;
  width: 388px;
  height: auto;
  background-color: #eee;
  border-radius: 8px;
  padding-bottom: 30px;
  margin-top: 17px;
}
.products_con_right_products_con .changshang_type {
  float: left;
  width: 340px;
  height: auto;
  margin: 15px 0 0 24px;
}
.products_con_right_products_con .changshang_type p {
  float: left;
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: #474747;
}
.products_con_right_products_con .changshang_type p span {
  font-size: 14px;
  color: #999999;
}
</style>