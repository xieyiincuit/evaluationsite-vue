<template>
  <div class="Mid_N">
    <div class="Midnav">
      <a href="javascript:;" class="a a1 cur"><i></i>
        <p>综合</p>
      </a>
    </div>
  </div>
  <div class="Mid_L">
    <div class="MidLcon block">
      <div class="YXXX">
        <div class="YXXX-L">
          <a href="http://localhost:9000/gameinfopic/gamerepo/gameapex.jpg">
            <img src="http://localhost:9000/gameinfopic/gamerepo/gameapex.jpg" width="150" height="210"></a>
        </div>
        <div class="YXXX-R">
          <div class="Name">
            <div class="tit_CH">Apex Legends</div>
          </div>
          <div class="div2">
            <div class="win">
              <a href="javascript:;" class="PC" data-time="2022-02-25">PC</a>

              <a href="javascript:;" class="PS5" data-time="2022-02-25">PS5</a>

              <a href="javascript:;" class="PS4" data-time="2022-02-25">PS4</a>

              <a href="javascript:;" class="XSX" data-time="2022-02-25">XSX</a>

              <a href="javascript:;" class="XONE cur" data-time="2022-02-25">XboxOne</a>
            </div>
            <div class="bdr">|</div>
            <div class="clock">暂未开售</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  box-sizing: unset;
}
.Mid_N {
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
  margin-bottom: 30px;
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
</style>