<template>
  <div class="container mt-5">
    <div class="col-12">
      <user-info />
    </div>
  </div>
</template>

<script>
import userInfo from '../../components/user/user-info.vue'
export default {
  components: {
    'user-info': userInfo
  }
}
</script>

<style scoped>
</style>