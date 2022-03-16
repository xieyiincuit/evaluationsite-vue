<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="/">
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
            <a class="nav-link active" href="#">测评首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">去找游戏</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">购买促销游戏</a>
          </li>
        </ul>

        <!-- Left links -->

        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-success me-3 login">
            登 录
          </button>
          <button type="button" class="btn btn-outline-info me-3 register">
            注 册
          </button>
          <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                class="rounded-circle"
                height="40"
                alt="Black and White Portrait of a Man"
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
                <a class="dropdown-item" href="#">注销</a>
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

<style scoped>
.login {
  font-size: 15px;
  font-weight: bold;
}
.register {
  font-size: 15px;
  font-weight: bold;
}
</style>
