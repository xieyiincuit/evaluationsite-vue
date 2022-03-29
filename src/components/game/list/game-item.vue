<template>
  <div class="Mid">
    <div class="Mid-top">
      <div class="sort">
        <span>排序方式：</span>
        <template v-for="order in orderMethod" :key="order.id">
          <router-link :to="{ path: '/game', query: { cid: cid, tid:tid, order:order.code } }" :class="{ cur: orderActive == order.code }"
                       @click="orderSelected(order.code)">
            {{order.name}}</router-link>
        </template>
      </div>
      <div class="right">
        <div class="num">共 <span>{{ gameinfos.totalCount }}</span> 款游戏</div>
      </div>
    </div>
    <ul class="imglist" v-if="gameinfos.data != null">
      <template v-for="game in gameinfos.data" :key="game.id">
        <li class="gamelist">
          <router-link :to="`/game/${game.id}`" target="_blank">
            <img :src="`http://localhost:9000/${game.roughPicture}`" width="180" height="250">
            <div class="num">{{game.averageScore}}</div>
            <p>{{game.name}}</p>
          </router-link>
        </li>
      </template>
    </ul>
    <template v-else>
      <el-empty :image-size="200" description="没有找到你想要游戏，我们会持续添加的 ^ ^" />
    </template>
  </div>
</template>

<script>
export default {
  props: ['gameinfos'],
  data() {
    return {
      tid: this.$route.query.tid,
      cid: this.$route.query.cid,
      orderActive: this.$route.query.order,
      orderMethod: [
        {
          id: 1,
          code: 'hot',
          name: '热门排序'
        },
        {
          id: 2,
          code: 'time',
          name: '时间排序'
        },
        {
          id: 3,
          code: 'score',
          name: '评分排序'
        }
      ]
    }
  },
  methods: {
    orderSelected(order) {
      this.orderActive = order
    }
  },
  mounted() {
    if (!this.$route.query.order) {
      this.orderActive = 'hot'
    }
  },
  watch: {
    $route(to) {
      this.tid = this.$route.query.tid
      this.cid = this.$route.query.cid
      this.orderActive = this.$route.query.order
    }
  }
}
</script>

<style scoped>
.Mid {
  padding-bottom: 40px;
}
.Mid {
  margin: 0 auto;
  padding: 0 20px;
  width: 1200px;
  height: auto;
  /* min-height: 800px; */
}
.Mid-top {
  width: auto;
  height: 43px;
}
.Mid-top .sort {
  float: left;
  height: 30px;
}
.Mid-top .sort span {
  margin-right: 5px;
  display: inline-block;
  width: auto;
  height: 30px;
  line-height: 30px;
  color: #666;
}
.Mid-top .sort a.desc {
  color: #2aae68;
  background-position: right -30px;
}

.Mid-top .sort a {
  background: url(http://localhost:9000/gameinfopic/common/px.png) right 0px no-repeat;
}
.Mid-top .sort a {
  margin-right: 20px;
  padding-right: 14px;
  display: inline-block;
  width: auto;
  height: 30px;
  line-height: 30px;
  color: #999;
}
.Mid-top .sort a.cur {
  color: #2aae68;
  background-position: right -30px;
}
.Mid-top .right {
  float: right;
  width: auto;
  height: 40px;
}
.Mid-top .right .num span {
  color: #1ea15b;
  font-style: italic;
}
.Mid-top .num {
  float: left;
  padding-left: 10px;
  width: auto;
  height: 40px;
  line-height: 30px;
  color: #333;
}
.imglist {
  margin-bottom: 20px;
  width: 1224px;
  height: auto;
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
.imglist li {
  float: left;
  width: 204px;
  height: 310px;
}
.imglist li a {
  display: block;
  width: 180px;
  height: auto;
  text-align: center;
  position: relative;
}
a {
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #1ea15b;
}
.imglist li a img {
  margin-bottom: 10px;
}
img {
  border: 0;
  vertical-align: middle;
}
.imglist li a .num {
  background-color: #f9f9fa;
  border-radius: 18px 18px 0 0;
  position: absolute;
  left: 70px;
  top: 230px;
}
.imglist li a .num {
  width: 40px;
  height: 20px;
  line-height: 30px;
  color: #2aae68;
  font-size: 14px;
  font-weight: bold;
  font-family: Arial;
}
.imglist li a p {
  line-height: 20px;
}
</style>