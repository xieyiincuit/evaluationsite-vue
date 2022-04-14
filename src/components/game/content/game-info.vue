<template>
  <div class="Mid_N">
    <div class="Midnav">
      <a href="javascript:;" class="a a1 cur"
        ><i></i>
        <p>综合</p>
      </a>
    </div>
  </div>
  <div class="Mid_L">
    <div class="MidLcon block">
      <div class="YXXX">
        <div class="YXXX-L">
          <a>
            <img
              :src="`http://localhost:9000/${gameInfo.roughImg}`"
              width="150"
              height="210"
          /></a>
        </div>
        <div class="YXXX-R">
          <div class="Name">
            <div class="tit_CH">{{ gameInfo.name }}</div>
          </div>
          <div class="div2">
            <div class="win">
              <template v-for="(plat, index) in supportPlatForm" :key="index">
                <a href="javascript:;" v-if="index % 2 != 0" class="PC cur">{{
                  plat
                }}</a>
                <a href="javascript:;" v-else>{{ plat }}</a>
              </template>
            </div>
            <div class="bdr">|</div>
            <div class="clock" v-if="!hasShop">暂未开售</div>
            <div class="clocknot" v-else>
              <router-link :to="`/shop/${gameInfo.gameId}`">热销中</router-link>
            </div>
          </div>
          <div class="div3">
            <div class="tt1">
              <div class="tit">上市时间：</div>
              <div class="time">{{ formatSellTime(gameInfo.sellTime) }}</div>
            </div>
            <div class="tt2">
              <div class="tt2">
                <div class="tit">游戏类型：</div>
                <div class="tag">{{ gameInfo.category }}</div>
              </div>
            </div>

            <div class="tt1">
              <div class="tit">官方中文：</div>
              <div class="txt">支持</div>
            </div>

            <div class="tt2">
              <div class="tit">制作发行：</div>
              <div class="txt">{{ gameInfo.issue }}</div>
            </div>
          </div>
          <div class="div4">
            <div class="con">
              <p>{{ gameInfo.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lxbdr">
        <div class="MidLtit">
          <h3 class="t3">评测文章</h3>
          <a href="javascript:;" class="clubBtn">
            <span>我要测评</span>
          </a>
        </div>
      </div>
      <div class="qzcmt" v-if="articlesInfo !== null">
        <template v-for="article in articlesInfo.data" :key="article.articleId">
          <div class="qzcmt-cont">
            <div class="qzcmt-head">
              <a href="javascript:;" class="userlink">
                <img
                  :src="
                    'http://localhost:9000/' + findUserAvatar(article.authorId)
                  "
                />
              </a>
            </div>
            <div class="qzcmt-cont-top">
              <div class="qzcmt-user">
                <div class="user-name">
                  <a class="uname" href="javascript:void(0);">{{
                    findUserName(article.authorId)
                  }}</a>
                </div>
              </div>
            </div>
            <div class="qzcmt-content">
              <div class="qzcmt-content-tit">
                <router-link :to="`/article/${article.articleId}`">{{
                  article.title
                }}</router-link>
              </div>
              <div class="qzcmt-content-txt">
                <router-link :to="`/article/${article.articleId}`">{{
                  article.description
                }}</router-link>
              </div>
            </div>
            <div class="qzcmt-action">
              <div class="time">{{ formatCreateTime(article.createTime) }}</div>
              <div class="handle">
                <a href="javascript:;" class="evt-reply">{{
                  article.commentsCount
                }}</a>
                <a href="javascript:;" class="evt-digg">{{
                  article.supportCount
                }}</a>
                <a href="javascript:;" class="evt-noDigg">0</a>
              </div>
            </div>
          </div>
        </template>
      </div>
      <template v-else>
        <el-empty
          :image-size="200"
          description="咱们的测评人员偷懒了，我赶紧催他们！！"
        />
      </template>
    </div>
  </div>
</template>

<script>
import util from "../../../utils/date";

export default {
  props: ["gameInfo", "articlesInfo", "hasShop"],
  methods: {
    formatSellTime: function (sellTime) {
      return !sellTime || sellTime == ""
        ? ""
        : util.formatDate.format(new Date(sellTime), "yyyy-MM-dd");
    },
    formatCreateTime: function (createTime) {
      return !createTime || createTime == ""
        ? ""
        : util.formatDate.format(new Date(createTime), "yyyy-MM-dd hh:mm");
    },
    findUserName: function (userId) {
      var user = this.articlesInfo.userInfo.find((o) => o.id === userId);
      return user.nickName == null ? "匿名用户" : user.nickName;
    },
    findUserAvatar: function (userId) {
      var user = this.articlesInfo.userInfo.find((o) => o.id === userId);
      return user.avatar == null ? "" : user.avatar;
    },
  },
  computed: {
    supportPlatForm() {
      return this.gameInfo.platForm.split("/");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: unset;
}

.Mid_N {
  margin-bottom: 20px;
  padding-top: 15px;
  width: 1200px;
  height: 55px;
  overflow: visible;
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
}

.Midnav {
  float: left;
  width: auto;
  height: 57px;
}

.Midnav a.cur {
  border-bottom: 2px solid #888;
}

.Midnav a.a1.cur i {
  background-position-y: -28px;
  background-position-x: 0;
}

.Midnav a i {
  display: inline-block;
  width: 30px;
  height: 15px;
  background: url(http://localhost:9000/gameinfopic/common/mnav.png) no-repeat;
}

.Midnav a.cur p {
  color: #333;
}

.Midnav a p {
  line-height: 20px;
  font-size: 14px;
}

.Midnav a {
  padding-top: 5px;
  display: inline-block;
  width: 110px;
  height: 49px;
  text-align: center;
}

.Mid_L {
  float: left;
  margin-right: 60px;
  width: 820px;
  height: auto;
  overflow: visible;
}

.MidLcon {
  overflow: visible;
}

.block {
  display: block;
}

.YXXX {
  margin-bottom: 10px;
  width: 820px;
  height: auto;
}

.YXXX-L {
  float: left;
  padding-right: 30px;
  width: 150px;
  height: 280px;
}

.YXXX-L div {
  width: auto;
  text-align: center;
}

.YXXX-L div.img {
  height: 210px;
}

.YXXX-R {
  float: left;
  width: 640px;
  height: auto;
}

.YXXX-R .Name {
  width: 100%;
  height: auto;
  position: relative;
}

.YXXX-R .Name .tit_CH {
  padding: 3px 0;
  width: 580px;
  height: auto;
  line-height: 40px;
  color: #333;
  font-size: 32px;
  font-weight: bold;
}

.YXXX-R .div2 {
  width: 100%;
  height: auto;
  min-height: 30px;
  margin-bottom: 20px;
}

.YXXX-R .div2 div.win {
  padding-top: 3px;
  width: auto;
  max-width: 450px;
  height: auto;
}

.YXXX-R .div2 div {
  float: left;
  width: auto;
}

.YXXX-R .div2 div.win a.cur {
  color: #fff;
  background-color: #555;
  border-color: #555;
  cursor: default;
}

.YXXX-R .div2 div.win a {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.YXXX-R .div2 div.win a {
  margin: 0 5px 5px 0;
  padding: 0 8px;
  display: inline-block;
  width: auto;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
}

a {
  color: #333;
  text-decoration: none;
}

.YXXX-R .div2 div.bdr {
  padding-top: 4px;
  padding-right: 5px;
  width: 20px;
  height: 26px;
  line-height: 26px;
  color: #000;
  font-size: 20px;
  font-family: SimSun;
  text-align: center;
  opacity: 0.5;
}

.YXXX-R .div2 div.clock {
  padding-top: 5px;
  height: 26px;
  line-height: 26px;
  color: #666;
  font-size: 16px;
  font-weight: bold;
  text-indent: 25px;
  background: url(http://localhost:9000/gameinfopic/common/clock.png) 0 center
    no-repeat;
}

.YXXX-R .div2 div.clocknot {
  padding-top: 5px;
  height: 26px;
  line-height: 26px;
  color: red;
  font-size: 16px;
  font-weight: bold;
  text-indent: 25px;
  background: url(http://localhost:9000/gameinfopic/common/clock.png) 0 center
    no-repeat;
}

.YXXX-R .div2 div.clocknot a {
  color: red;
}

.YXXX-R .div3 {
  width: 100%;
  height: 72px;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.1);
}

.YXXX-R .div3 .tt1 {
  float: left;
  width: 220px;
  height: 36px;
}

.YXXX-R .div3 .tt1 .tit {
  float: left;
  width: 70px;
  height: 18px;
  line-height: 18px;
  color: #444;
  font-size: 14px;
}

.YXXX-R .div3 .tt1 .time {
  float: left;
  width: 150px;
  height: 18px;
  line-height: 18px;
  color: #444;
  font-size: 14px;
}

.YXXX-R .div3 .tt2 {
  float: left;
  width: 420px;
  height: 36px;
}

.YXXX-R .div3 .tt2 .tit {
  float: left;
  width: 70px;
  height: 18px;
  line-height: 18px;
  color: #444;
  font-size: 14px;
}

.YXXX-R .div3 .tt2 .tag {
  float: left;
  width: 350px;
  height: 36px;
  line-height: 18px;
  color: #444;
  font-size: 14px;
}

.YXXX-R .div3 .tt1 .txt {
  float: left;
  width: 150px;
  height: 18px;
  line-height: 18px;
  color: #444;
  font-size: 14px;
}

.YXXX-R .div3 .tt2 .txt {
  float: left;
  width: 350px;
  height: 36px;
  line-height: 18px;
  color: #444;
  font-size: 14px;
}

.YXXX-R .div4 .con {
  width: 100%;
  height: auto;
  line-height: 25px;
  color: #666;
  font-size: 14px;
  text-align: justify;
}

.lxbdr {
  padding-top: 20px;
  width: 100%;
  height: auto;
  border-top: 3px solid #555;
}

.MidLtit {
  margin-bottom: 15px;
  width: auto;
  height: 42px;
}

.MidLtit h3.t3 {
  background-position-y: -84px;
}

.MidLtit h3 {
  float: left;
  padding-left: 37px;
  height: 42px;
  line-height: 40px;
  color: #222;
  font-size: 18px;
  background: url(http://localhost:9000/gameinfopic/common/tit.png) no-repeat;
}

div,
ul,
li {
  overflow: hidden;
}

.MidLtit a.clubBtn {
  float: right;
  padding: 6px 0;
  display: inline-block;
  width: 176px;
  height: 24px;
  color: #333;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 5px;
}

.MidLtit a.clubBtn span {
  background: url(http://localhost:9000/gameinfopic/common/itos.png) no-repeat;
}

.MidLtit a.clubBtn span {
  padding-left: 25px;
  display: inline-block;
  height: 24px;
  line-height: 22px;
  font-size: 17px;
  font-weight: bold;
}

.qzcmt {
  padding: 4px 0;
  font-size: 14px;
  font-family: "Microsoft YaHei", Arial, SimSun;
  background-color: #fff;
  border-radius: 4px;
  overflow: visible;
}

.qzcmt-cont {
  margin-top: -1px;
  padding: 20px 0 0 70px;
  overflow: visible;
  background-color: #fff;
  border-top: 1px solid #eee;
  margin-bottom: 15px;
  position: relative;
}

.qzcmt-head {
  width: 50px;
  height: 50px;
  overflow: visible;
  position: absolute;
  left: 0;
  top: 20px;
  z-index: 1;
}

.qzcmt-head img {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.qzcmt-head a {
  display: inline-block;
}

.qzcmt img {
  border: 0;
}

.qzcmt-cont-top .qzcmt-user {
  width: 100%;
  height: auto;
  overflow: visible;
  position: relative;
}

.qzcmt-cont-top .user-name a.uname {
  width: auto;
  height: 22px;
  line-height: 22px;
  color: #444;
  font-size: 15px;
  font-weight: bold;
  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.qzcmt-cont-top .user-name a {
  margin-right: 8px;
  display: inline-block;
}

.qzcmt-content-tit {
  width: 100%;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.qzcmt-content-tit a {
  padding: 3px 0;
  display: inline-block;
  line-height: 28px;
  color: #222;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  vertical-align: middle;
  font-weight: bold;
}

.qzcmt-content-txt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.qzcmt-content-txt {
  width: 100%;
  height: auto;
  line-height: 28px;
  color: #444;
  font-size: 16px;
  text-align: justify;
}

.qzcmt-content-txt a {
  color: #444;
}

.qzcmt-action {
  width: 100%;
  height: 30px;
  overflow: hidden;
}

.qzcmt-action .time {
  float: left;
  height: 30px;
  line-height: 30px;
  color: #aaa;
  font-size: 13px;
}

.qzcmt-action .handle {
  float: left;
  width: auto;
  height: 30px;
  overflow: hidden;
}

.qzcmt-action .handle a.evt-reply {
  background-position: 0 0;
}

.qzcmt-action .handle a {
  background: url(http://localhost:9000/gameinfopic/common/zan2.png) no-repeat;
}

.qzcmt-action .handle a {
  margin-left: 30px;
  padding-left: 20px;
  display: inline-block;
  width: auto;
  height: 30px;
  line-height: 30px;
  color: #999;
  font-size: 13px;
  overflow: hidden;
}

.qzcmt-action .handle a.evt-digg:link {
  background-position-y: -60px;
}

.qzcmt-action .handle a.evt-noDigg:link {
  background-position-y: -180px;
}
</style>