<template>
  <div class="card-header">
    <ul class="nav nav-pills card-header-tabs">
      <li
        class="nav-item"
        v-for="type in typeList"
        :key="type.typeId"
        :v-show="!type.isdelete"
      >
        <a class="nav-link" href="#">{{ type.typeName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //TODO 点谁 谁Active
  data() {
    return {
      typeList: [
        { typeId: 1, typeName: "网游测评", isdelete: false },
        { typeId: 2, typeName: "单机测评", isdelete: false },
        { typeId: 3, typeName: "手游测评", isdelete: false },
        { typeId: 4, typeName: "电玩测评", isdelete: false },
        { typeId: 5, typeName: "独立游戏", isdelete: false },
      ],
    };
  },
};
</script>
<style scoped>
.nav-pills .nav-link {
  font-size: unset;
}
</style>