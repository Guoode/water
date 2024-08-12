<template>
  <header>
    <div>
      <h1 style="margin-top: -10px; color: #425049; font-size: 30px">
        欢迎来到水界守护者
      </h1>
    </div>
    <div class="demo-basic--circle">
      <div class="block">
        <el-avatar :size="40" :src="avatar" :class="['avatar-info']">
        </el-avatar>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      avatar: require("@/assets/images/001.jpg"),
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
/*设定头像图片样式*/
.avatar-info {
  margin-top: px;
  margin-right: 40px;
  cursor: pointer;
}
</style>
