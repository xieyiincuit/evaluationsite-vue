<template>
  <div class="container-fluid" v-loading="loading">
    <div
      class="Top"
      style="
        background-image: url(http://localhost:9000/gameinfopic/bigpicture.jpg);
      "
    >
      <div class="Top1"></div>
      <div class="Top2">
        <div class="con">
          <h1 class="tit">《纪元：变异》游民评测8.1分 光刃闪烁的未来之城</h1>
          <div class="txt"></div>
          <div class="tem">
            <div class="time">2022-03-17 11:04:57</div>
            <div class="visit">
              <span class="count">10475</span>
            </div>
            <div class="pls">
              <span class="cy_comment" data-sid="1468039" data-lddt="yes"
                >67</span
              >人评论
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Mid">
      <div class="Mid_L">
        <div class="MidLcon">
          <p>
            出色的关卡布置和合理的资源散布，赋予了《纪元：变异》一个合理又不失挑战性的难度曲线，玩家并不需要将过多的精力花费在规划自己的成长路线上，只要按部就班的拿材料换换装备、点点对应技能，就能够从容应对大部分的局面。
            诚然，《纪元：变异》的战斗玩法并不完美，但在种种精妙的设计的加持下，它仍能让玩家们感受到快感和乐趣所在。当光刃与利爪相碰，子弹与钢铁交融时，我看到那高楼寰宇间的曼妙身影，在霓虹灯的照耀下划出了数道剑光。
            就目前的表现来看，《纪元：变异》所展现出的素质并没有辜负玩家们四年的期待。它通过多种多样的玩法、情节曲折的故事以及自然流畅的战斗，为我们呈现出了一个值得细细品味的赛博朋克世界。
            在武器类型的选择上，玩家的选择范围可谓是丰富多样：光刃双刃巨刃、手雷手枪火箭筒……游戏中的每种武器既有着适合其发挥的场景，同时也存在着一定的局限性，只有因时制宜的使用才能在面对敌人时做到游刃有余。
            虽说这些武器通常是以材料+货币购买的形式来获取的，但就实际体验来看玩家并不需要刻意的去“肝”它们。只要正常的推进主线，那么在合适的时间点上购买一把足以应付当前怪物的武器，并不是什么难事。
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
            <div class="remark-list-floor">
              <div class="remark-cont-head">
                <a class="userlink" target="_blank">
                  <img src="http://localhost:9000/userinfopic/avatar.jpg" />
                </a>
              </div>
              <div class="remark-cont-wrap">
                <div class="remark-wrap">
                  <div class="wrap-user">
                    <div class="user-name">
                      <span>周写意</span>
                    </div>
                    <div class="user-time">2022-03-17 19:11</div>
                  </div>
                  <div class="remark-issue">
                    <div class="remark-content">
                      <div class="content">
                        不推荐，开发好几年就开发个这?就这连屁用没有的收藏包能要100多?谁给你们的自信拿个这种品质的东西出来招摇撞骗，是不是顶着个国产游戏的名头就出来挂羊头卖狗肉了?国产游戏还是去s吧，我是怕了，赶紧去个什么垃圾手游的公司找个班上，那样我眼前也清净不少。
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
          </div>
        </div>
      </div>
      <div class="Mid_R">
        <div class="Author_column">
          <div class="ac1">
            <a href="#"
              ><img
                width="70"
                height="70"
                src="http://localhost:9000/userinfopic/avatar.jpg" />
              <div class="bdr"></div
            ></a>
          </div>
          <div class="ac2">
            <div class="tit">作者：<span>前朝刘沛公</span></div>
            <div class="txt">
              初见你那一刻心里有场海啸，可我没能鼓起勇气，呼叫师级支援火炮。
            </div>
          </div>
        </div>
        <div class="Game_column">
          <div class="pingce2">
            <img
              width="300"
              src="http://localhost:9000/gameinfopic/smallpicture.jpg"
            />
            <div class="pc">
              <div class="pc1">
                <div class="pc1_num">
                  <div class="pnum n8-5">8.1</div>
                  <div class="txt1">纪元：变异</div>
                </div>
              </div>
              <div class="pc2">
                <div class="like lk1">
                  <span class="jia">难度曲线平滑</span
                  ><span class="jia">世界观搭建值得品味</span
                  ><span class="jia">2D与3D相结合的奇特视角</span
                  ><span class="jia">小游戏与支线内容足够有趣</span>
                </div>
                <div class="pingtai">测试平台：PC</div>
              </div>
              <div class="pc3">
                <router-link :to="'/game/1'">去购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../components/articles/article-banner.vue";

export default {
  components: {
    banner,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: unset;
}

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
  background: url(http://localhost:9000/gameinfopic/tmk.png) 0 bottom repeat-x;
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
  background: url(http://localhost:9000/gameinfopic/time-view-comment.png)
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

.Mid {
  margin: 0 auto;
  padding: 0 10px;
  width: 1050px;
  height: auto;
  min-height: 800px;
  overflow: visible;
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
  font-family: "Microsoft YaHei";
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

img {
  border: 0;
  vertical-align: middle;
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
  background: url(http://localhost:9000/gameinfopic/game_01.png) 0 bottom
    repeat-x;
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
  background: url(http://localhost:9000/gameinfopic/pf.png) no-repeat;
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

.pingce2 .pc .pc1 .pc1_num .txt1 {
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
  background: url(http://localhost:9000/gameinfopic/jj.gif) no-repeat;
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
  background: url(http://localhost:9000/gameinfopic/pt.png) 0 13px no-repeat;
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
  background: url(http://localhost:9000/gameinfopic/buy.png) no-repeat;
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
  background: url(http://localhost:9000/gameinfopic/dp.png) 0 -24px no-repeat;
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

div {
  overflow: hidden;
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
