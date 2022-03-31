<template>
  <div class="row">
    <div class="col-md-12">
      <div class="error-template">
        <h1>还没写出来</h1>
        <h2>别催了，马上画马上画（404）</h2>
        <div class="error-details">

        </div>
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span> 返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.error-template {
  padding: 40px 15px;
  text-align: center;
}
.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}
.error-actions .btn {
  margin-right: 10px;
}
</style>
