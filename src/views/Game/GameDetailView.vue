<template>
  <div class="container">
    <div class="Mid">
      <div class="Mid_T">
        <img src="http://localhost:9000/gameinfopic/gamerepo/gameapexbig.jpg" alt="bigPicture" height="500" width="1200" />
      </div>
      <game-info />
    </div>
  </div>

</template>

<script>
import GameInfo from 'src/components/game/content/game-info.vue'
export default {
  components: {
    'game-info': GameInfo
  }
}
</script>

<style scoped>
.Mid {
  margin-top: 50px;
  overflow: visible;
}

.Mid {
  padding: 0 20px;
  width: 1200px;
  height: auto;
  min-height: 800px;
}

.Mid_T {
  width: 1000px;
  height: 484px;
  position: relative;
}
</style>