<template>
  <Header />
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
  <!-- <Footer /> -->
</template>

<script>
import Header from "./components/layouts/header.vue";
import Footer from "./components/layouts/footer.vue";
import userAuth from "src/auth/userauth";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default {
  name: "app",
  mixins: [userAuth],
  components: {
    Header,
    Footer,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
};
</script>
