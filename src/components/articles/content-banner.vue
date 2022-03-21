<template>
  <div
    class="Top"
    :style="{
      backgroundImage: 'url(' + bannerInfo.articleImage + ')',
    }"
  >
    <div class="Top1"></div>
    <div class="Top2">
      <div class="con">
        <h1 class="tit">《{{ bannerInfo.gameName }}》{{ bannerInfo.title }}</h1>
        <div class="txt"></div>
        <div class="tem">
          <div class="time">{{ formatTime(editTime) }}</div>
          <div class="visit">
            <span class="count">{{ bannerInfo.joinCount }}</span>
          </div>
          <div class="pls">
            <span class="cy_comment" data-sid="1468039" data-lddt="yes">
              {{ bannerInfo.commentsCount }}
            </span>
            人评论
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import util from "../../utils/date";
export default {
  props: ["bannerInfo"],
  computed: {
    editTime() {
      return this.bannerInfo.updateTime == null
        ? this.bannerInfo.createTime
        : this.bannerInfo.updateTime;
    },
  },
  data() {
    return {};
  },
  methods: {
    formatTime: function (dateTime) {
      return !dateTime || dateTime == ""
        ? ""
        : util.formatDate.format(new Date(dateTime), "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>


<style scoped>
.Top {
  width: 100%;
  min-width: 1070px;
  height: 550px;
  border-bottom: 4px solid #e03800;
  background-repeat: no-repeat;
  background-position: center 0;
}

.Top1 {
  margin: 0 auto;
  width: 1070px;
  height: 365px;
  position: relative;
}

.Top2 {
  width: 100%;
  min-width: 1070px;
  height: 185px;
  background: url(http://localhost:9000/articleinfo/commonpic/tmk.png) 0 bottom
    repeat-x;
}

.Top2 .con {
  margin: 0 auto;
  padding: 0 10px;
  width: 1050px;
  height: 185px;
  position: relative;
}

.Top2 .con .tit {
  width: 1050px;
  height: 69px;
  line-height: 68px;
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  position: absolute;
  left: 0;
  bottom: 50px;
}

.Top2 .con .txt {
  display: none;
}

.Top2 .con .tem {
  width: 1050px;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 20px;
}

.Top2 .con .tem div {
  float: left;
  padding-right: 30px;
  width: auto;
  height: 20px;
  line-height: 20px;
  background: url(http://localhost:9000/articleinfo/commonpic/time-view-comment.png)
    no-repeat;
}

.Top2 .con .tem div.time {
  text-indent: 20px;
  color: #aaa;
  background-position: 0 0;
}

.Top2 .con .tem div.visit {
  text-indent: 24px;
  color: #aaa;
  background-position: 0 -20px;
}

.Top2 .con .tem div.pls {
  text-indent: 30px;
  color: #f5f5f5;
  cursor: pointer;
  background-position: 0 -40px;
}
</style>

