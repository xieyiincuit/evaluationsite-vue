<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="#">
        <img src="../../assets/logo.webp" height="30" alt="MDB Logo" loading="lazy" style="margin-top: -1px" />
      </a>

      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">测评专栏</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/game" class="nav-link">去找游戏</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">购买促销游戏</router-link>
          </li>
        </ul>

        <!-- Left links -->

        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-success me-3 font-btn" v-show="user == null" @click="login">
            登 录
          </button>
          <a role="button" href="http://localhost:5105/Account/Register" target="_blank" class="btn btn-outline-info me-3 font-btn"
             v-show="user == null">
            注 册
          </a>
          <router-link :to="{ name: 'create' }" role="button" class="btn btn-danger btn-rounded me-3 font-btn"
                       v-show="role != null && role === 'evaluator'">
            写测评
          </router-link>
          <div class="dropdown" v-show="user != null">
            <a class="dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown"
               aria-expanded="false">
              <img :src="avatar" class="rounded-circle" height="40" alt="avatar" loading="lazy" />
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
              <li v-if="role === 'evaluator'">
                <router-link class="dropdown-item" :to="{ path:'/my/articles' }">我的文章</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ path:'/mygame' }">我的游戏</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="{ path:'/my' }">个人信息</router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="logout">注销</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
import applicationUserManager from '~/auth/applicationusermanager'

export default {
  computed: {
    user() {
      return this.$store.state.identity.user
    },
    role() {
      return this.$store.state.identity.role
    },
    avatar() {
      const user = this.$store.state.identity.user
      if (user) {
        return 'http://localhost:9000/' + user.avatar
      }
      return ''
    }
  },
  methods: {
    async login() {
      try {
        await applicationUserManager.login()
      } catch (error) {
        console.log('login error: ', error)
        this.$message.error(error)
      }
    },
    async logout() {
      try {
        window.localStorage.removeItem('USER_NICKNAME')
        window.localStorage.removeItem('ACCESS_TOKEN')
        window.localStorage.removeItem('USER_EXP')
        await applicationUserManager.logout()
      } catch (error) {
        console.log('logout error: ', error)
        this.$message.error(error)
      }
    }
  }
}
</script>


<style scoped>
.font-btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
