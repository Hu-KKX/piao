<script setup>

import { RouterLink,RouterView } from 'vue-router';
import Aside from '@/components/index/Aside.vue';
import Header from '@/components/index/Header.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <Aside />  <!-- 侧边菜单 -->
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <RouterView />  <!-- 这里渲染当前选择的路由组件 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
#app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

.common-layout {
  height: 100%; /* 让布局容器占满页面高度 */


}

.el-container {
  height: 100%; /* el-container 必须继承父级的 100% 高度 */
}



.el-header {
  background-color: #B8EBFD; /* 示例: 设置头部背景色 */
  margin: 5px 0 5px 15px;
  text-align: center;
  line-height: 70px; /* 设置头部高度 */
  height: 70px;
}

.el-aside {
  background-color: #ffffff; /* 示例: 设置侧边栏背景色 */
  /* margin: 5px; */

  /* text-align: center; */
}

.el-main {
  background-color: #fff; /* 示例: 设置主内容背景色 */
  margin-left: 15px;
  max-height: 2000px;

}

.el-aside,.el-header,.el-main {
  border-radius: 10px; /* 示例: 设置边框圆角 */
}

</style>
