<template>
  <el-menu>
    <el-submenu :index="index + ''" v-for="(item, index) in arr" :key="index">
      <template slot="title">
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group v-for="(group, index1) in item.group" :key="index1">
        <el-submenu :index="index + '-' + index1">
          <template slot="title">{{ group.title }}</template>
          <el-menu-item
            :index="index + '-' + index1 + '-' + index2"
            v-for="(group, index2) in group.group"
            :key="index2"
            >{{ group.title }}</el-menu-item
          >
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "Slider1",
  data() {
    return {
      arr: this.$store.getters.getUser,
    };
  },
  mounted() {
    this.getArr();
  },
  methods: {
    getArr() {
      console.log(this.arr);
    },
  },
};
</script>

<style scoped>
</style>
