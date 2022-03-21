<template>
  <div class="container-fluid" v-loading="loading">
    <banner :bannerInfo="bannerInfo" />
    <div class="Mid">
      <content
        :content="content"
        :comments="comments"
        :commentUser="commentUser"
      />
      <info :authorInfo="authorInfo" :gameInfo="gameInfo" />
    </div>
  </div>
</template>

<script>
import banner from "../components/articles/content-banner.vue";
import content from "../components/articles/content-main.vue";
import info from "../components/articles/content-info.vue";

export default {
  components: {
    banner,
    content,
    info,
  },
  data() {
    return {
      loading: false,
      content: "",
      comments: [],
      commentUser: [],
      bannerInfo: {
        gameName: "",
        createTime: null,
        updateTime: null,
        title: "",
        commentsCount: 0,
        articleImage: "",
      },
      authorInfo: {
        userId: "",
        author: "",
        avatar: "",
        introduction: "",
      },
      gameInfo: {
        gameId: 0,
        gameName: "",
        score: 0,
        roughPic: "",
        platfrom: "",
        suggestion: {
          cpu: "",
          card: "",
          memory: "",
          size: "",
          system: "",
        },
      },
    };
  },
  methods: {
    getArticle() {
      const articleId = this.$route.params.aid;

      this.$http.get(`v1/e/article/${articleId}`, null, (res) => {
        console.log("article: ", res);
        this.content = res.content;
        this.setBannerInfo(res);

        this.$http.get(`v1/u/author`, { userId: res.userId }, (authorInfo) => {
          console.log("author: ", authorInfo);
          this.setAuthorInfo(authorInfo);
        });

        this.$http.get(`v1/g/info/${res.gameId}`, null, (game) => {
          console.log("game: ", game);
          this.$http.get(
            "v1/g/suggestion",
            { gameId: res.gameId },
            (sug) => {
              console.log("suggestion: ", sug);
              this.setGameInfo(game, sug);
            },
            (fail) => {
              this.gameInfo.suggestion.cpu = "暂未提供";
              this.gameInfo.suggestion.card = "暂未提供";
              this.gameInfo.suggestion.system = "暂未提供";
              this.gameInfo.suggestion.size = "暂未提供";
              this.gameInfo.suggestion.memory = "暂未提供";
            }
          );
        });

        this.$http.get(`v1/e/article/${articleId}/comments`, null, (coms) => {
          console.log("comments:", coms);
          this.comments = coms.data;
          this.commentUser = coms.userInfo;
        });
      });
      this.loading = false;
    },
    setAuthorInfo(authorDto) {
      this.authorInfo.userId = authorDto.userId;
      this.authorInfo.author = authorDto.nickName;
      this.authorInfo.avatar = authorDto.avatar;
      this.authorInfo.introduction = authorDto.introduction;
    },
    setGameInfo(game, sug) {
      this.gameInfo.gameId = game.Id;
      this.gameInfo.gameName = game.name;
      this.gameInfo.score = game.averageScore;
      this.gameInfo.roughPic = game.roughPicture;
      this.gameInfo.platfrom = game.supportPlatform;
      this.gameInfo.suggestion.cpu = sug.cpuName;
      this.gameInfo.suggestion.card = sug.graphicsCard;
      this.gameInfo.suggestion.system = sug.operationSystem;
      this.gameInfo.suggestion.size = sug.diskSize;
      this.gameInfo.suggestion.memory = sug.memorySize;
    },
    setBannerInfo(article) {
      this.bannerInfo.gameName = article.gameName;
      this.bannerInfo.createTime = article.createTime;
      this.bannerInfo.updateTime = article.updateTime;
      this.bannerInfo.title = article.title;
      this.bannerInfo.commentsCount = article.commentsCount;
      this.bannerInfo.joinCount = article.joinCount;
      this.bannerInfo.articleImage =
        "http://localhost:9000/" + article.articleImage;
    },
    setContent() {},
  },
  mounted() {
    this.getArticle();
  },
};
</script>

<style scoped>
* {
  box-sizing: unset;
}
.Mid {
  margin: 0 auto;
  padding: 0 10px;
  width: 1050px;
  height: auto;
  min-height: 800px;
  overflow: visible;
}

img {
  border: 0;
  vertical-align: middle;
}

div {
  overflow: hidden;
}
</style>