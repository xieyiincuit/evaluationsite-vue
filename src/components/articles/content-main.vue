<template>
  <div class="Mid_L">
    <div class="MidLcon">
      <p>
        {{ content }}
      </p>
    </div>
    <div class="remark">
      <div class="MidLtit">
        <div class="tit">玩家点评</div>
        <div class="plbtn">
          <a class="itobtn tpbtn" href="javascript:;" target="_blank">
            <span>我要点评</span>
          </a>
        </div>
      </div>
      <div class="remark-list">
        <template v-for="comment in comments" :key="comment.commentId">
          <div class="remark-list-floor">
            <div class="remark-cont-head">
              <a class="userlink" target="_blank">
                <img
                  :src="
                    'http://localhost:9000/' + findUserAvatar(comment.userId)
                  "
                />
              </a>
            </div>
            <div class="remark-cont-wrap">
              <div class="remark-wrap">
                <div class="wrap-user">
                  <div class="user-name">
                    <span>{{ findUserName(comment.userId) }}</span>
                  </div>
                  <div class="user-time">
                    {{ formatTime(comment.createTime) }}
                  </div>
                </div>
                <div class="remark-issue">
                  <div class="remark-content">
                    <div class="content">
                      {{ comment.content }}
                    </div>
                  </div>
                </div>
                <div class="remark-action">
                  <div class="remark-action-btn">
                    <a href="javascript:;" class="remark-reply">
                      <span class="t1">展开回复（<em>13</em>）</span>
                      <span class="t2">收起回复</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../utils/date";

export default {
  props: ["content", "comments", "commentUser"],

  setup() {},
  methods: {
    formatTime: function (dateTime) {
      return !dateTime || dateTime == ""
        ? ""
        : util.formatDate.format(new Date(dateTime), "yyyy-MM-dd hh:mm");
    },
    findUserName: function (userId) {
      console.log(userId);
      console.log(this.commentUser);
      var user = this.commentUser.find((o) => o.id === userId);
      console.log(user);
      return user.nickName == null ? "匿名用户" : user.nickName;
    },
    findUserAvatar: function (userId) {
      console.log(userId);
      console.log(this.commentUser);
      var user = this.commentUser.find((o) => o.id === userId);
      console.log(user);
      return user.avatar == null ? "" : user.avatar;
    },
  },
};
</script>

<style scoped>
img {
  border: 0;
  vertical-align: middle;
}
* {
  box-sizing: unset;
}
div {
  overflow: hidden;
}
.Mid_L {
  float: left;
  margin-right: 50px;
  width: 700px;
  height: auto;
}

.MidLcon {
  margin-bottom: 15px;
  padding-top: 30px;
  width: 700px;
  height: auto;
}

.remark {
  margin-bottom: 60px;
  width: 100%;
  height: auto;
  overflow: visible;
}

.remark {
  padding-top: 15px;
  border-top: 4px solid #444;
}

.MidLtit {
  width: auto;
  height: 45px;
}

.MidLtit .tit {
  float: left;
  width: auto;
  height: 34px;
  line-height: 34px;
  color: #333;
  font-size: 18px;
  font-weight: bold;
}

.MidLtit .plbtn {
  float: right;
  width: auto;
  height: 34px;
}

.MidLtit .plbtn a {
  padding: 5px 0;
  display: inline-block;
  width: 152px;
  height: 24px;
  color: #fff;
  text-align: center;
  background-color: #26a662;
  border-radius: 3px;
}

.MidLtit .plbtn a span {
  background: url(http://localhost:9000/articleinfo/commonpic/dp.png) 0 -24px no-repeat;
}

.MidLtit .plbtn a span {
  padding-left: 25px;
  display: inline-block;
  height: 24px;
  line-height: 24px;
  font-size: 15px;
}

.remark-list {
  width: 100%;
  overflow: visible;
}

.remark-list-floor {
  padding-top: 15px;
  overflow: visible;
}

.remark-cont-head {
  float: left;
  width: 60px;
  height: 70px;
  overflow: visible;
  position: relative;
}
.remark-cont-head a {
  display: inline-block;
}
.remark-cont-head img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.remark-cont-wrap {
  padding-left: 19px;
  width: auto;
  height: auto;
}

.remark-wrap {
  padding: 10px 15px;
  height: auto;
  background: #eee;
  border-radius: 10px;
}

.remark-wrap .wrap-user {
  margin-bottom: 5px;
  height: 26px;
  overflow: hidden;
}

.remark-wrap .user-name {
  float: left;
  height: 26px;
  line-height: 26px;
  font-size: 15px;
  color: #999;
  font-weight: bold;
}

.remark-wrap .user-name span {
  margin-right: 5px;
  display: inline-block;
  color: #000;
}

.remark-wrap .user-time {
  float: right;
  width: auto;
  height: 26px;
  line-height: 26px;
  color: #999;
  font-size: 13px;
}

.remark-issue {
  width: 100%;
  height: auto;
  line-height: 24px;
  color: #555;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  overflow: hidden;
}

.remark-content {
  max-height: 240px;
  display: block;
  overflow: hidden;
}

.remark-action {
  width: auto;
  height: 30px;
}

.remark-action-btn {
  float: right;
  width: auto;
  height: 30px;
}

.remark-action-btn a.remark-reply {
  margin-left: -3px;
  padding-left: 13px;
  color: #333;
  background: transparent;
}

.remark-action-btn a.remark-reply .t1 {
  display: inline-block;
  font-size: 14px;
  color: #f93154;
}

.remark-action-btn a.remark-reply .t2 {
  display: none;
}
</style>