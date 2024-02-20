<template>
  <div>
    <div class="block">
      <span class="demonstration">折叠展示Tag</span>
      <el-cascader
        :options="options"
        :props="props"
        collapse-tags
        clearable
        :show-all-levels="true"
        multiple
        popper-class="my_cascader"
      ></el-cascader>
    </div>
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
    return {
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "东南222222222222",
          children: [
            {
              value: 2,
              label: "上海222222222",
              children: [
                { value: 3, label: "普陀2222" },
                { value: 4, label: "黄埔22" },
                { value: 5, label: "徐汇222" },
              ],
            },
            {
              value: 7,
              label: "江苏22222",
              children: [
                { value: 8, label: "南京22222" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" },
              ],
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" },
              ],
            },
          ],
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" },
              ],
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" },
              ],
            },
          ],
        },
      ],
    };
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
<style >
.el-cascader {
  width: 300px;
}
.el-cascader__tags {
  display: flex;
  flex-wrap: nowrap;
}
.el-cascader__tags .el-tag {
  max-width: 90%;
}
</style>
