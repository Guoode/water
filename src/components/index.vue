<template>
  <div class="container">
    <el-container style="height: 100%">
      <el-header><Header /></el-header>
      <el-container>
        <el-aside width="200px"><Aside /></el-aside>
        <el-main><Main /></el-main>
      </el-container>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import Footer from "./Footer";

export default {
  name: "Index",
  components: { Header, Aside, Main, Footer },
  props: {
    msg: String,
  },
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
