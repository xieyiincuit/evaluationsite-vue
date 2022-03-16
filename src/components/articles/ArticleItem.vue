<template>
  <div class="card">
    <div class="row g-0 mb-3" v-for="i in 5" :key="i">
      <h5 class="card-header text-white bg-dark">网游测评</h5>
      <div class="col-md-3">
        <img :src="imageUrl" alt="csgo" class="card-image" />
      </div>
      <div class="col-md-9 col-sm-12">
        <div class="card-body">
          <h5 class="card-title over-flow-title">
            《Counter-Strike: Global Offensive》: 一款紧张刺激的团队竞技 FPS
            经典作品
          </h5>
          <p class="card-text over-flow-content">
            Counter-Strike: Global Offensive (CS:GO) is a multiplayer
            first-person shooter developed by Valve and Hidden Path
            Entertainment. It is the fourth game in the Counter-Strike series.
            Developed for over two years, Global Offensive was released for
            Windows, macOS, Xbox 360, and PlayStation 3 in August 2012, and for
            Linux in 2014. Valve still regularly updates the game, both with
            smaller balancing patches and larger content additions.
          </p>
          <div class="d-flex justify-content-between align-items-end">
            <p>作者: {{ author }}</p>
            <p>更新时间: {{ currentDateTime() }}</p>

            <p>
              <svg
                data-v-41be6633=""
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="eye"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-eye mx-auto b-icon bi"
              >
                <g data-v-41be6633="">
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  ></path>
                  <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  ></path>
                </g></svg
              >: {{ viewNums }}
            </p>
            <p>
              <svg
                data-v-41be6633=""
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="chat dots"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-chat-dots mx-auto b-icon bi"
              >
                <g data-v-41be6633="">
                  <path
                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  ></path>
                  <path
                    d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
                  ></path>
                </g></svg
              >: {{ commentNums }}
            </p>
            <a href="#" class="btn btn-outline-success btn-rounded">查看全文</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "ZhouSL",
      viewNums: "1002",
      commentNums: "43",
      imageUrl: "src/assets/images/pic/csgo.png",
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time = current.getHours() + ":" + current.getMinutes();
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
};
</script>

<style scoped>
.over-flow-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.over-flow-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-image {
  max-width: 100%;
  height: 100%;
}

.btn {
  font-size: unset;
}
</style>
