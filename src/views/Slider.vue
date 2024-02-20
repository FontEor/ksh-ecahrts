<template>
  <div>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu index="1">
          <template slot="title">数据可视化</template>
          <el-menu-item-group>
            <el-menu-item index="1-1"
              ><span @click="btnBar">柱状图</span></el-menu-item
            >
            <el-menu-item index="1-2"
              ><span @click="btnLine">折线图</span></el-menu-item
            >
            <el-menu-item index="1-3"
              ><span @click="btnPie">饼状图</span></el-menu-item
            >
            <el-menu-item index="1-4"
              ><span @click="btnMultiPicture">多图联动</span></el-menu-item
            >
            <el-menu-item index="1-6"
              ><span @click="btnMap">echarts热力图</span></el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "Slider",
  data() {
    return {
      arr: this.$store.state.menu,
    };
  },
  methods: {
    btnBar: function () {
      this.$router.push("/BarChart").catch((data) => {});
    },
    btnLine: function () {
      this.$router.push("/LineChart").catch((data) => {});
    },
    btnPie: function () {
      this.$router.push("/PieChart").catch((data) => {});
    },
    btnMap: function () {
      this.$router.push("/Map").catch((data) => {});
    },
    btnMultiPicture: function () {
      this.$router.push("/MultiPicture").catch((data) => {});
    },
  },
};
</script>

<style scoped>
</style>
