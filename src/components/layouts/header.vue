<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="30"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: -1px"
        />
      </a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
          <button
            type="button"
            class="btn btn-outline-success me-3 font-btn"
            v-show="user == null"
            @click="login"
          >
            登 录
          </button>
          <a
            role="button"
            href="http://localhost:5105/Account/Register"
            class="btn btn-outline-info me-3 font-btn"
            v-show="user == null"
          >
            注 册
          </a>
          <router-link
            :to="{ name: 'create' }"
            role="button"
            class="btn btn-danger btn-rounded me-3 font-btn"
            v-show="role != null && role === 'evaluator'"
          >
            写测评
          </router-link>
          <div class="dropdown" v-show="user != null">
            <a
              class="dropdown-toggle d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="avatar"
                class="rounded-circle"
                height="40"
                alt="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">个人信息</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">修改密码</a>
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
import applicationUserManager from "~/auth/applicationusermanager";

export default {
  computed: {
    user() {
      return this.$store.state.identity.user;
    },
    role() {
      return this.$store.state.identity.role;
    },
    avatar() {
      if (!this.$store.state.identity.user.avater) {
        return "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp";
      }
      return (
        "http://localhost:9000/userinfopic/" +
        this.$store.state.identity.user.avatar
      );
    },
  },
  methods: {
    async login() {
      try {
        await applicationUserManager.login();
      } catch (error) {
        console.log("login in occured error: ", error);
        this.$root.$emit("show-snackbar", { message: error });
      }
    },
    async logout() {
      try {
        window.localStorage.removeItem("USER_NICKNAME");
        await applicationUserManager.logout();
        this.$store.commit("identity/saveToken", "");
        this.$store.commit("identity/saveUserInfo", {});
      } catch (error) {
        console.log("logout in occured error: ", error);
        this.$root.$emit("show-snackbar", { message: error });
      }
    },
  },
};
</script>


<style scoped>
.font-btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
