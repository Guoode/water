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
        <el-menu-item index="1-1">设备1</el-menu-item>
        <el-menu-item index="1-2">设备2</el-menu-item>
        <el-sub-menu index="1-3">
          <template #title>设备3</template>
          <el-menu-item index="1-3-1">运行情况</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2"
        ><el-icon><document /></el-icon>地图</el-menu-item
      >
      <el-menu-item index="3"
        ><el-icon><setting /></el-icon>设置</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
};
</script>

<style scoped></style>
