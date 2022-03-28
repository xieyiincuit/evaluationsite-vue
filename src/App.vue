<template>
  <Header />
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
  <!-- <Footer /> -->
</template>

<script>
import Header from './components/layouts/header.vue'
import Footer from './components/layouts/footer.vue'
import userAuth from 'src/auth/userauth'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default {
  name: 'app',
  mixins: [userAuth],
  components: {
    Header,
    Footer,
    ElConfigProvider
  },
  watch: {
    $route: async function (to, from) {
      await this.refreshUserInfo()
    }
  },
  setup() {
    return {
      locale: zhCn
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.element-plus-logo {
  width: 50%;
}
</style>
