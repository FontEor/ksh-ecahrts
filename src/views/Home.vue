<template>
  <div>
    <el-container>
      <el-header style="height: 100px">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Slider></Slider>
        </el-aside>
        <el-main>
          <Container></Container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header";
import Slider from "./Slider";
import Container from "./Container";
export default {
  name: "Home",
  components: { Container, Slider, Header },
  comments: {
    Header,
    Slider,
    Container,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /*height: 100px;*/
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 700px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 600px;
}
</style>
