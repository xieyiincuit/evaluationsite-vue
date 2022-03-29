<template>
  <ul class="Menu">
    <li>
      <div class="tit">游戏类型：</div>
      <div class="con" :class="{ cur: typeStatus.showAll }">
        <div class="zhanbtn" style="display: block;" @click="typeShow()">{{typeStatus.controlName}}</div>
        <div class="cont">
          <template v-for="type in gameTypes" :key="type.id">
            <router-link :to="{ path: '/game', query: { cid: companyStatus.select, order: order } }" :class="{ cur: typeStatus.active == type.id }"
                         @click="typeSelected(type.id)" v-if="type.id == 0">{{type.categoryName}}</router-link>
            <router-link :to="{ path: '/game', query: { tid: type.id, cid: companyStatus.select, order: order } }"
                         :class="{ cur: typeStatus.active == type.id }" @click="typeSelected(type.id)" v-else>{{type.categoryName}}</router-link>
          </template>
        </div>
      </div>
    </li>
    <li>
      <div class="tit">游戏厂商：
      </div>
      <div class="con" :class="{ cur:companyStatus.showAll }">
        <div class="zhanbtn" style="display: block;" @click="companyShow()">{{companyStatus.controlName}}</div>
        <div class="cont">
          <template v-for="company in gameCompanies" :key="company.id">
            <router-link :to="{ path: '/game', query: { tid: typeStatus.select, order: order } }" :class="{ cur: companyStatus.active == company.id }"
                         @click="companySelected(company.id)
                         " v-if="company.id == 0">
              {{company.companyName}}
            </router-link>
            <router-link :to="{ path: '/game', query: { cid: company.id, tid: typeStatus.select, order: order } }"
                         :class="{ cur: companyStatus.active == company.id }" @click="companySelected(company.id)" v-else>
              {{company.companyName}}
            </router-link>
          </template>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['gameTypes', 'gameCompanies'],
  data() {
    return {
      typeStatus: {
        active: this.$route.query.tid, // 谁被选择
        showAll: false, //是否展开
        controlName: '展开',
        select: this.$route.query.tid
      },
      companyStatus: {
        active: this.$route.query.cid,
        showAll: false,
        controlName: '展开',
        select: this.$route.query.cid
      },
      order: ''
    }
  },
  methods: {
    typeSelected(typeId) {
      this.typeStatus.active = typeId
    },
    companySelected(companyId) {
      this.companyStatus.active = companyId
    },
    typeShow() {
      this.typeStatus.showAll = !this.typeStatus.showAll
      this.typeStatus.controlName = this.typeStatus.controlName == '展开' ? '收起' : '展开'
    },
    companyShow() {
      this.companyStatus.showAll = !this.companyStatus.showAll
      this.companyStatus.controlName = this.companyStatus.controlName == '展开' ? '收起' : '展开'
    }
  },
  mounted() {
    //兼容tid cid为0时
    if (!this.$route.query.tid) {
      this.typeStatus.active = 0
    }
    if (!this.$route.query.cid) {
      this.companyStatus.active = 0
    }
    if (!this.$route.query.order) {
      this.order = 'hot'
    }
  },
  watch: {
    $route(to) {
      this.typeStatus.select = this.$route.query.tid
      this.companyStatus.select = this.$route.query.cid
      this.order = this.$route.query.order
    }
  }
}
</script>

<style scoped>
.Menu {
  margin: 60px auto 50px;
  width: 1200px;
  height: auto;
}
div,
ul,
li {
  overflow: hidden;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.Menu li {
  margin-top: -1px;
  padding-top: 1px;
  width: 1200px;
  height: auto;
  border-top: 1px solid #bbb;
}
.Menu li .tit {
  float: left;
  width: 80px;
  height: 38px;
  line-height: 36px;
  color: #777;
}
.Menu li .con {
  float: left;
  width: 1120px;
  height: 38px;
  position: relative;
}
.Menu li .con.cur {
  height: auto;
}
.Menu li .con .zhanbtn {
  display: none;
  position: absolute;
  right: 0;
  bottom: 7px;
  width: 40px;
  height: 24px;
  line-height: 24px;
  color: #2aae68;
  cursor: pointer;
  text-align: right;
}
.Menu li .con .cont {
  width: 1080px;
  height: auto;
}
.Menu li .con .cont a {
  margin: 7px 7px 7px 0;
  padding: 0 10px;
  display: inline-block;
  width: auto;
  height: 24px;
  line-height: 24px;
  color: #333;
  border-radius: 4px;
}
.Menu li .con .cont a:hover,
.Menu li .con a.cur {
  color: #fff;
  background: #2aae68;
}
</style>

