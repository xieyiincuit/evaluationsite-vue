<template>
  <div class="Mid_R">
    <div class="KuGameScore">
      <div class="wjscore">
        <div class="wjscore-num">
          <div class="num">
            <i :style="{ 'background-position-y': score1px + 'px' }"></i>
            <i class="nn"></i>
            <i :style="{ 'background-position-y': score2px + 'px' }"></i>
          </div>
          <div class="pin">
            <div class="xin">
              <div class="x45" :style="{ width: xinpx + 'px' }"></div>
            </div>
          </div>
          <div class="txt">玩家评分<span>(<span>546</span>人)</span></div>
        </div>
      </div>
    </div>
    <div class="MidRtit useratg">
      <h3>游戏相关标签</h3>
    </div>
    <div class="WJCYtag">
      <span class="tag-con">
        <a href="javascript:;">动作</a>
        <a href="javascript:;">射击</a>
        <a href="javascript:;">无限引用</a>
        <a href="javascript:;">Java</a>
        <a href="javascript:;">Golang</a>
        <a href="javascript:;">javascript</a>
        <a href="javascript:;">第一人称射击</a>
        <a href="javascript:;">biabiabia~</a>
      </span>
    </div>
    <div class="MidRtit peizhi">
      <h3>配置需求 </h3>
    </div>
    <div class="PZcont">
      <div class="PZnav">
        <a href="javascript:;" class="cur">推荐 </a>
      </div>
      <div class="PZcon">
        <div class="PZXQ" v-if="gameRemark.suggestion.system !== null">
          <ul class="PZ TJ">
            <li class="tit">推荐配置
            </li>
            <li class="txt">
              <div class="tit">系统</div>
              <div class="txt"><span>{{gameRemark.suggestion.system}}</span></div>
            </li>
            <li class="txt">
              <div class="tit">CPU</div>
              <div class="txt"><span>{{gameRemark.suggestion.cpu}}</span></div>
            </li>
            <li class="txt">
              <div class="tit">内存</div>
              <div class="txt"><span>{{gameRemark.suggestion.memory}} GB</span></div>
            </li>
            <li class="txt">
              <div class="tit">硬盘</div>
              <div class="txt"><span>需要 {{gameRemark.suggestion.disk}} GB 可用空间</span></div>
            </li>
            <li class="txt">
              <div class="tit">显卡</div>
              <div class="txt"><span>{{gameRemark.suggestion.card}}</span></div>
            </li>
          </ul>
        </div>
        <template v-else>
          <el-empty :image-size="200" description="可能是个手游，或者咱忘了给你推荐？？" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['gameRemark'],
  computed: {
    score1px() {
      const scoreStr = this.gameRemark.score.toString()
      var score1 = scoreStr[0]
      return score1 * -60
    },
    score2px() {
      const scoreStr = this.gameRemark.score.toString()
      var score2 = scoreStr[2]
      return score2 * -60
    },
    xinpx() {
      const scoreStr = this.gameRemark.score.toString()
      var score1 = scoreStr[0]
      return score1 * 8
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: unset;
}
div,
ul,
li {
  overflow: hidden;
}
.Mid_R {
  float: left;
  width: 320px;
  height: auto;
  overflow: visible;
}
.kuGameScore {
  margin-bottom: 30px;
  width: 100%;
  height: auto;
  overflow: visible;
  transition: all 0.25s ease-out;
}
.wjscore {
  margin-bottom: 15px;
  width: 320px;
  height: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.wjscore-num {
  float: left;
  margin-right: 10px;
  width: 120px;
  height: 126px;
}
.wjscore-num .num {
  height: 72px;
  line-height: 70px;
  color: #444;
  font-size: 70px;
  font-family: Arial;
  font-weight: bold;
  text-align: center;
}
.wjscore-num .num i {
  display: inline-block;
  width: 40px;
  height: 60px;
  background: url(http://localhost:9000/gameinfopic/common/num.png) center 0;
  vertical-align: top;
}

.wjscore-num .num i.nn {
  width: 30px;
  background-position-y: -600px;
}
.wjscore-num .pin {
  margin: -3px auto 6px;
  width: 80px;
  height: 20px;
}
.wjscore-num .pin .xin {
  width: 80px;
  height: 20px;
  background: url(http://localhost:9000/gameinfopic/common/xin0.png) repeat-x;
}
.wjscore-num .pin .xin div {
  float: left;
  width: 0;
  height: 20px;
  transition: all 0.25s ease-out;
  background: url(http://localhost:9000/gameinfopic/common/xin0.png) 0 -20px repeat-x;
}
.wjscore-num .txt {
  height: 20px;
  line-height: 20px;
  color: #888;
  font-size: 12px;
  text-align: center;
}
.MidRtit {
  width: auto;
  height: 40px;
}
.MidRtit h3 {
  float: left;
  margin: 0;
  line-height: 30px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
}
.WJCYtag {
  margin-bottom: 40px;
  width: 326px;
  height: auto;
}
.WJCYtag span a {
  border: 1px solid #d8d8d8;
  border-radius: 3px;
}
.WJCYtag span a {
  margin: 0 5px 5px 0;
  padding: 0 5px;
  display: inline-block;
  width: auto;
  height: 22px;
  line-height: 22px;
  color: #3c3c3c;
  font-size: 12px;
}
.PZcont {
  margin: -40px 0 50px;
  width: 320px;
  height: auto;
}
.PZnav {
  width: 320px;
  height: 37px;
  border-bottom: 1px solid #e3e3e3;
  overflow: visible;
  text-align: right;
}
.PZnav a.cur {
  color: #1ea15b;
  border-bottom: 3px solid #2aae68;
}
.PZnav a {
  padding: 0 10px;
  display: inline-block;
  width: auto;
  height: 35px;
  line-height: 35px;
}
.PZcon {
  padding-top: 10px;
  width: 320px;
  height: auto;
}
.PZ {
  display: block;
  width: 320px;
  height: auto;
}
.PZ li.tit {
  display: none;
}
.PZ li.txt {
  width: 320px;
  height: auto;
  border-bottom: 1px dotted #ebebeb;
}
.PZ li.txt div {
  float: left;
}
.PZ li.txt div.tit {
  width: 48px;
  height: 38px;
  line-height: 38px;
  color: #999;
}
.PZ li.txt div.txt {
  padding: 9px 0;
  width: 272px;
  height: auto;
  line-height: 20px;
  display: table;
}
.PZ li.txt div.txt span {
  display: table-cell;
  vertical-align: middle;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  list-style-type: none;
  vertical-align: middle;
}
</style>