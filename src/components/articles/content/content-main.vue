<template>
  <div class="Mid_L" v-loading="loading">
    <div class="MidLcon">
      <span v-html="content"></span>
    </div>
    <div class="remark">
      <div class="MidLtit">
        <div class="tit">玩家点评</div>
        <div class="plbtn" v-show="user == null">
          <a class="itobtn tpbtn" @click="login" href="javascript:void(0)">
            <span>登录后参与评论</span>
          </a>
        </div>
      </div>
      <div class="cmt-textarea" v-show="user != null">
        <div class="cmt-textarea-con">
          <el-input
            v-model="commentPost.content"
            class="textarea-pl"
            type="textarea"
            :rows="5"
            :placeholder="cmtHolder"
            ref="cmtInput"
            maxlength="200"
          >
          </el-input>
        </div>
        <div class="cmt-textarea-bot">
          <a class="cmt_submit" @click="cmtSubmit" href="javascript:;">发布</a>
        </div>
      </div>
      <div class="remark-list" v-if="comments.length !== 0">
        <template v-for="comment in this.comments" :key="comment.commentId">
          <div class="remark-list-floor">
            <div class="remark-cont-head">
              <a class="userlink">
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
                      <span class="t1" v-show="IsMyself(comment.userId)"
                        >举报|</span
                      >
                      <span
                        class="t2"
                        @click="
                          replyRootSubmit(comment.userId, comment.commentId)
                        "
                      >
                        回复</span
                      >
                    </a>
                  </div>
                </div>
                <div class="remark-build cur">
                  <div class="remark-build-cont">
                    <template
                      v-for="reply in comment.replies"
                      :key="reply.commentId"
                    >
                      <div class="remark-build-cont-floor">
                        <div class="remark-cont-head">
                          <a class="userlink" target="_blank">
                            <img
                              :src="
                                'http://localhost:9000/' +
                                findUserAvatar(reply.userId)
                              "
                            />
                          </a>
                        </div>
                        <div class="remark-cont-wrap">
                          <div class="remark-wrap">
                            <div
                              class="floor-user"
                              v-if="reply.replyUserId == null"
                            >
                              <a class="uname" target="_blank">{{
                                findUserName(reply.userId)
                              }}</a>
                              <i>: </i>
                              <span class="floor-con">{{ reply.content }}</span>
                            </div>
                            <div class="floor-user" v-else>
                              <a class="uname" target="_blank">{{
                                findUserName(reply.userId)
                              }}</a>
                              <i class="reply-i">回复</i>
                              <a class="uname" target="_blank">{{
                                findUserName(reply.replyUserId)
                              }}</a>
                              <i>: </i>
                              <span class="floor-con">{{ reply.content }}</span>
                            </div>
                            <div class="floor-action">
                              <span class="report">
                                <a
                                  href="javascript:;"
                                  class="report-btn"
                                  v-show="IsMyself(reply.userId)"
                                  >举报</a
                                >
                                <i v-show="IsMyself(reply.userId)"> | </i>
                              </span>
                              <a
                                href="javascript:;"
                                class="btn-reply"
                                @click="
                                  replySubSubmit(
                                    reply.userId,
                                    reply.rootCommentId,
                                    reply.commentId
                                  )
                                "
                                >回复</a
                              >
                              <i>| </i>
                              <span class="remark-time">{{
                                formatTime(reply.createTime)
                              }}</span>
                            </div>
                            <div class="remark-reply-con"></div>
                          </div>
                        </div>
                      </div>
                    </template>
                    <el-pagination
                      v-model:currentPage="this.paginationInfo2.currentPage"
                      :page-size="5"
                      :background="true"
                      layout="prev, pager, next"
                      :total="comment.repliesCount"
                      @current-change="
                        handleSubCommentChange(comment.commentId)
                      "
                      :small="true"
                      :hide-on-single-page="true"
                      class="subPage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <el-pagination
          v-model:currentPage="this.paginationInfo.currentPage"
          :page-size="5"
          :background="true"
          layout="prev, pager, next"
          :total="this.paginationInfo.totalCount"
          @current-change="handleRootCommentChange"
        />
      </div>
      <template v-else>
        <el-empty
          :image-size="200"
          description="暂无评论，来发表你的观点吧 ^ ^"
        />
      </template>
    </div>
  </div>
</template>

<script>
import util from "../../../utils/date";
import applicationUserManager from "~/auth/applicationusermanager";

export default {
  props: ["content"],
  data() {
    return {
      loading: true,
      cmtHolder: "来说两句吧",
      comments: [],
      commentUser: [],
      subCommentUser: [],
      commentPost: {
        articleId: 0,
        rootId: 0,
        content: "",
        replyCommentId: 0,
        userId: null,
        isReply: null,
      },
      paginationInfo: {
        currentPage: 1,
        totalPages: 0,
        hasPrevious: false,
        hasNext: true,
        totalCount: 0,
      },
      paginationInfo2: {
        currentPage: 1,
        currentCommentId: 0,
        totalCount: 0,
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.identity.user;
    },
    role() {
      return this.$store.state.identity.role;
    },
  },
  methods: {
    formatTime: function (dateTime) {
      return !dateTime || dateTime == ""
        ? ""
        : util.formatDate.format(new Date(dateTime), "yyyy-MM-dd hh:mm");
    },
    findUserName: function (userId) {
      var user = this.commentUser.find((o) => o.id === userId);
      if (user == null) {
        user = this.subCommentUser.find((x) => x.id === userId);
      }
      return user.nickName == null ? "匿名用户" : user.nickName;
    },
    findUserAvatar: function (userId) {
      var user = this.commentUser.find((o) => o.id === userId);
      if (user == null) {
        user = this.subCommentUser.find((x) => x.id === userId);
      }
      return user.avatar == null ? "" : user.avatar;
    },
    IsMyself: function (userId) {
      if (this.user == null) {
        return true;
      }
      return userId !== this.user.sub;
    },
    async login() {
      try {
        await applicationUserManager.login();
      } catch (error) {
        console.log("login error: ", error);
        this.$message.error(error);
      }
    },
    cmtSubmit() {
      if (this.commentPost.content === "") {
        this.$message.error("人！ 不要说空话 ^ ^");
        this.$refs["cmtInput"].focus();
        return;
      }
      this.commentPost.articleId = this.$route.params.aid;
      console.log(this.commentPost.isReply);
      if (!this.commentPost.isReply) {
        var commentAddDto = {
          articleId: this.commentPost.articleId,
          content: this.commentPost.content,
        };
        this.$http.post(
          "v1/e/article/comments",
          commentAddDto,
          (res) => {
            this.$message.success("评论成功 ^ ^");
            this.commentPost.content = "";
            this.getComment();
          },
          (fail) => {
            this.$message.error("发表评论失败，系统错误 - -");
          }
        );
      } else if (this.commentPost.isReply) {
        var replyAddDto = {
          articleId: this.commentPost.articleId,
          content: this.commentPost.content,
          replyUserId: this.commentPost.userId,
          rootCommentId: this.commentPost.rootId,
          replyCommentId: this.commentPost.replyCommentId,
        };
        this.$http.post(
          "v1/e/article/comments/reply",
          replyAddDto,
          (res) => {
            this.$message.success("回复成功 ^ ^");
            this.commentPost.content = "";
            this.cmtCancle();
            this.getComment();
          },
          (fail) => {
            this.$message.error("回复失败，系统错误 - -");
          }
        );
      }
    },
    cmtCancle() {
      this.cmtHolder = "来说两句吧";
      this.commentPost.isReply = false;
      this.commentPost.rootId = 0;
      this.commentPost.replyCommentId = 0;
    },
    replyRootSubmit(userId, commentId) {
      const userName = this.commentUser.find((o) => o.id === userId).nickName;
      this.cmtHolder = `@${userName}:`;
      this.commentPost.rootId = commentId;
      this.commentPost.replyCommentId = commentId;
      this.commentPost.userId = null;
      this.commentPost.isReply = true;
      this.$refs["cmtInput"].focus();
    },
    replySubSubmit(userId, rootId, replyCommentId) {
      const userName = this.commentUser.find((o) => o.id === userId).nickName;
      this.cmtHolder = `@${userName}:`;
      this.commentPost.rootId = rootId;
      this.commentPost.replyCommentId = replyCommentId;
      this.commentPost.userId = userId;
      this.commentPost.isReply = true;
      this.$refs["cmtInput"].focus();
    },
    getComment() {
      const articleId = this.$route.params.aid;
      this.$http.get(
        `v1/e/article/${articleId}/comments`,
        { pageIndex: this.paginationInfo.currentPage },
        (coms) => {
          console.log(coms);
          this.setPaginationInfo(coms);
          this.comments = coms.data;
          this.commentUser = coms.userInfo;
          this.loading = false;
        }
      );

      //初始化子评论列表
      this.paginationInfo2.currentPage = 1;
    },
    getReply(commentId) {
      this.$http.get(
        `v1/e/article/comments/${commentId}`,
        { pageIndex: this.paginationInfo2.currentPage },
        (replys) => {
          this.comments.find((x) => x.commentId === commentId).replies =
            replys.data;
          this.subCommentUser = replys.userInfo;
        }
      );
    },
    setPaginationInfo(res) {
      this.paginationInfo.currentPage = res.currentPage;
      this.paginationInfo.totalPages = res.totalPages;
      this.paginationInfo.totalCount = res.totalCount;
      this.paginationInfo.hasPrevious = res.hasPrevious;
      this.paginationInfo.hasNext = res.hasNext;
    },
    handleRootCommentChange() {
      this.getComment();
    },
    handleSubCommentChange(commentId) {
      this.getReply(commentId);
    },
  },
  mounted() {
    this.getComment();
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
  background: #fff;
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
  color: #999;
  background: transparent;
}
.remark-action-btn a.remark-reply span:hover {
  color: #1ea15b;
}

.remark-action-btn a.remark-reply .t1 {
  display: inline-block;
  font-size: 13px;
  color: #999;
}

.remark-action-btn a.remark-reply .t2 {
  display: inline-block;
  font-size: 13px;
  color: #999;
}

.remark-build.cur {
  display: block;
}
.remark-build {
  display: block;
  padding: 25px 0 20px;
  overflow: hidden;
  background: url(http://localhost:9000/articleinfo/commonpic/evt-vv.png) right
    0 no-repeat;
}
.remark-build-cont {
  width: 100%;
  height: auto;
}
.remark-build-cont-floor {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.remark-build-cont-floor .remark-cont-head {
  width: 54px;
  height: 54px;
}

.remark-cont-wrap {
  padding-left: 19px;
  width: auto;
  height: auto;
}
.remark-build .floor-user {
  margin-bottom: 4px;
}
.remark-build .floor-user .uname {
  height: 20px;
  line-height: 20px;
  color: #0983bb;
  font-size: 14px;
  font-weight: normal;
}
.remark-build .floor-user a {
  margin-right: 5px;
  display: inline-block;
}
a {
  color: #262626;
  text-decoration: none;
}
.remark-build .floor-user .floor-con {
  display: inline;
  line-height: 20px;
  color: #666;
  font-size: 14px;
}
.remark-build .floor-con {
  line-height: 26px;
  color: #666;
  font-size: 14px;
}
.floor-action {
  height: 20px;
  font-size: 12px;
  text-align: right;
  visibility: visible;
}
.subPage {
  float: right;
  visibility: visible;
}

.floor-action .report {
  float: none;
}
.floor-action a {
  color: #888;
  font-size: 12px;
}
.floor-action a:hover {
  color: #1ea15b;
}

.floor-action .remark-time {
  color: #999;
}

.reply-i {
  margin-right: 10px;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  color: #999;
  font-size: 14px;
}
.cmt-textarea {
  margin-bottom: 30px;
  overflow: visible !important;
}
.cmt-textarea-con {
  background-color: rgb(24, 26, 27);
  border-top-color: rgb(58, 62, 65);
  border-right-color: rgb(58, 62, 65);
  border-left-color: rgb(58, 62, 65);
  border-bottom-color: initial;
}
.cmt-textarea-con .textarea-pl {
  word-wrap: break-word;
  border: 0;
  background: none;
  outline: 0;
  resize: none;
  -webkit-appearance: none;
  overflow-y: hidden;
}
.cmt-textarea-con .textarea-pl {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 120px;
  line-height: 24px;
  color: #777;
  font-size: 16px;
  font-family: "Microsoft YaHei";
}
.cmt-textarea-con {
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom: 0;
  border-radius: 3px 3px 0 0;
}
.cmt-textarea-bot {
  height: 40px;
  background-color: #f2f2f3;
  border: 1px solid #ddd;
  border-radius: 0 0 3px 3px;
  overflow: visible !important;
  position: relative;
}
.cmt-textarea-bot a.cmt_submit {
  background-color: #2d8ae9;
  border-radius: 0 0 3px 0;
  position: absolute;
  right: -1px;
  top: -1px;
}

.cmt-textarea-bot a.cmt_submit {
  display: block;
  width: 120px;
  height: 42px;
  line-height: 42px;
  color: #fff;
  font-size: 17px;
  font-family: "Microsoft YaHei";
  text-align: center;
}
</style>