<template>
  <div class="Mid_R">
    <div class="KuGameScore">
      <div class="wjscore">
        <div class="wjscore-num">
          <div class="num">
            <i class="n9"></i>
            <i class="nn"></i>
            <i class="n1"></i>
          </div>
          <div class="pin">
            <div class="xin">
              <div class="x45" style="width:72px"></div>
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
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
        <a href="javascript:;">我是标签</a>
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
        <div class="PZXQ">
          <ul class="PZ TJ">
            <li class="tit">推荐配置
            </li>
            <li class="txt">
              <div class="tit">系统</div>
              <div class="txt"><span>Windows 10/11</span></div>
            </li>
            <li class="txt">
              <div class="tit">CPU</div>
              <div class="txt"><span>Intel Core i7-8700K</span></div>
            </li>
            <li class="txt">
              <div class="tit">内存</div>
              <div class="txt"><span>16 GB</span></div>
            </li>
            <li class="txt">
              <div class="tit">硬盘</div>
              <div class="txt"><span>需要 60 GB 可用空间</span></div>
            </li>
            <li class="txt">
              <div class="tit">显卡</div>
              <div class="txt"><span>NVIDIA GeForce GTX 1070</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 9,
      num2: 1,
      xin: 9 * 8
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
.wjscore-num .num i.n0 {
  background-position-y: -0px;
}
.wjscore-num .num i.n1 {
  background-position-y: -60px;
}
.wjscore-num .num i.n2 {
  background-position-y: -120px;
}
.wjscore-num .num i.n3 {
  background-position-y: -180px;
}
.wjscore-num .num i.n4 {
  background-position-y: -240px;
}
.wjscore-num .num i.n5 {
  background-position-y: -300px;
}
.wjscore-num .num i.n6 {
  background-position-y: -360px;
}
.wjscore-num .num i.n7 {
  background-position-y: -420px;
}
.wjscore-num .num i.n8 {
  background-position-y: -480px;
}
.wjscore-num .num i.n9 {
  background-position-y: -540px;
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