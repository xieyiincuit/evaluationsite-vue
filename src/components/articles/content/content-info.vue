<template>
  <div class="Mid_R">
    <div class="Author_column">
      <div class="ac1">
        <a href="#"><img width="70" height="70" :src="`http://localhost:9000/` + authorInfo.avatar" />
          <div class="bdr"></div>
        </a>
      </div>
      <div class="ac2">
        <div class="tit">
          作者：<span>{{ authorInfo.author }}</span>
        </div>
        <div class="txt">
          {{ authorInfo.introduction }}
        </div>
      </div>
    </div>
    <div class="Game_column">
      <div class="pingce2">
        <img width="300" :src="'http://localhost:9000/' + this.gameInfo.roughPic" />
        <div class="pc">
          <div class="pc1">
            <div class="pc1_num">
              <div class="pnum n8-5">{{ this.gameInfo.score }}</div>
              <div class="txt1">
                <router-link :to="`/game/${gameInfo.gameId}`">{{ this.gameInfo.gameName }}</router-link>
              </div>
            </div>
          </div>
          <div class="pc2">
            <div class="like lk1" v-if="this.gameInfo.suggestion.system != null">
              <span class="jia">平台: {{ this.gameInfo.suggestion.system }}</span><span class="jia">CPU:
                {{ this.gameInfo.suggestion.cpu }}</span><span class="jia">显卡: {{ this.gameInfo.suggestion.card }}</span><span class="jia">内存:
                {{ this.gameInfo.suggestion.memory }}</span>
              <span class="jia">硬盘: {{ this.gameInfo.suggestion.size }}</span>
            </div>
            <div class="like lk1" v-else>
              <span class="jia">推荐: Iphone 12</span>
              <span class="jia">最低: Iphone 8 plus</span>
              <span class="jia">推荐: HUAWEI Mate 40 pro</span>
              <span class="jia">最低: HUAWEI Mate 20 pro</span>
            </div>
            <div class="pingtai">支持平台: {{ this.gameInfo.platfrom }}</div>
          </div>
          <div class="pc3">
            <router-link :to="`/game/${gameInfo.gameId}`">去购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['authorInfo', 'gameInfo'],
  setup() {}
}
</script>

<style scoped>
* {
  box-sizing: unset;
}
.Mid_R {
  float: right;
  width: 300px;
  height: auto;
  overflow: visible;
}

.Author_column {
  margin: -44px 0 30px;
  width: 300px;
  height: auto;
  text-align: center;
}

.Author_column .ac1 {
  margin: 0 auto;
  width: 88px;
  height: 90px;
  text-align: center;
  position: relative;
}

.Author_column .ac1 a {
  background-color: white;
  border: 4px solid #df3900;
  border-bottom: 0;
  border-radius: 50px 50px 0 0;
}

.Author_column .ac1 a {
  padding: 4px 4px 8px;
  display: inline-block;
  width: 70px;
  height: 70px;
  overflow: hidden;
}

.Author_column .ac1 .bdr {
  width: 76px;
  height: 46px;
  border-left: 6px solid white;
  border-right: 6px solid white;
  position: absolute;
  left: 0;
  bottom: 0;
}

.Author_column .ac2 {
  width: 300px;
  height: auto;
}

.Author_column .ac2 div {
  width: 300px;
  font-family: 'Microsoft YaHei';
}

.Author_column .ac2 div.tit {
  height: 28px;
  line-height: 20px;
  color: #777;
}

.Author_column .ac2 div.txt {
  margin-bottom: 3px;
  height: auto;
  line-height: 16px;
  color: #333;
}

.Author_column .ac1 img {
  border-radius: 50px;
  box-shadow: 0 3px 5px 0 rgb(204 204 204);
  aspect-ratio: auto 70 / 70;
}

.Game_column {
  width: 300px;
  height: auto;
  transition: all 0.25s ease-out;
}

.pingce2 {
  margin-bottom: 40px;
  width: 300px;
  height: auto;
  border-radius: 5px;
  position: relative;
}

.pingce2 img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.pingce2 .pc {
  width: 300px;
  height: auto;
}

.pingce2 .pc .pc1 {
  width: 300px;
  height: 250px;
  background: url(http://localhost:9000/articleinfo/commonpic/game_01.png) 0 bottom repeat-x;
}

.pingce2 .pc .pc1 .pc1_num {
  margin: 0 auto;
  padding-top: 100px;
  width: 270px;
  height: 149px;
  text-align: center;
  border-bottom: 1px solid #000;
}

.pingce2 .pc .pc1 .pc1_num .pnum.n8-5 {
  background-position: -1080px 0;
}

.pingce2 .pc .pc1 .pc1_num .pnum {
  background: url(http://localhost:9000/articleinfo/commonpic/pf.png) no-repeat;
}

.pingce2 .pc .pc1 .pc1_num .pnum {
  margin: 0 auto 10px;
  width: 72px;
  height: 72px;
  line-height: 72px;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
}

.pingce2 .pc .pc1 .pc1_num .txt1 a {
  width: 270px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
}

.pingce2 .pc .pc2 {
  padding: 0 15px;
  width: 270px;
  height: auto;
  background-color: #2b2c2f;
}
.pingce2 .pc .pc2 .like.lk1 {
  border-top: 1px solid #4a4c51;
}

.pingce2 .pc .pc2 .like {
  padding: 5px 0 5px 5px;
  width: 265px;
  height: auto;
}

.pingce2 .pc .pc2 .like span.jia {
  background-position: 0 0;
}

.pingce2 .pc .pc2 .like span {
  background: url(http://localhost:9000/articleinfo/commonpic/jj.gif) no-repeat;
}

.pingce2 .pc .pc2 .like span {
  display: block;
  width: 270px;
  height: 24px;
  line-height: 22px;
  font-size: 14px;
  color: #eee;
  text-indent: 25px;
}

.pingce2 .pc .pc2 .pingtai {
  background: url(http://localhost:9000/articleinfo/commonpic/pt.png) 0 13px no-repeat;
}

.pingce2 .pc .pc2 .pingtai {
  padding: 10px 0 10px 30px;
  width: 240px;
  height: auto;
  line-height: 22px;
  color: #aaa;
  font-size: 12px;
  font-family: SimSun;
  border-top: 1px solid #4a4c51;
}

.pingce2 .pc .pc3 {
  background: url(http://localhost:9000/articleinfo/commonpic/buy.png) no-repeat;
}

.pingce2 .pc .pc3 {
  width: 300px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #ffb9a4;
  font-size: 14px;
}

.pingce2 .pc .pc3 a {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
}
</style>