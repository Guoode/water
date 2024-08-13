<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#ffffff"
      active-text-color="#ffd04b"
      default-active="1"
    >
      <el-sub-menu index="1">
        <template #title>
          <span
            ><el-icon><House /></el-icon>Home</span
          >
        </template>
        <el-menu-item index="1-1"
          ><router-link to="/index/Main1" class="custom-link"
            >设备1</router-link
          ></el-menu-item
        >
        <el-menu-item index="1-2"
          ><router-link to="/index/Main1" class="custom-link"
            >设备2</router-link
          ></el-menu-item
        >
        <el-sub-menu index="1-3">
          <template #title
            ><router-link to="/index/Main1" class="custom-link"
              >设备3</router-link
            ></template
          >
          <el-menu-item index="1-3-1">运行情况</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2"
        ><el-icon><document /></el-icon
        ><router-link to="/index/Main2" class="custom-link"
          >地图</router-link
        ></el-menu-item
      >
      <el-menu-item index="3"
        ><el-icon><setting /></el-icon
        ><router-link to="/index/Main3" class="custom-link"
          >设置</router-link
        ></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
};
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: #fff;
}
</style>
