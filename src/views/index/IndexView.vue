<script setup>
import { ref } from 'vue'
import Aside from '@/components/index/Aside.vue';
import Header from '@/components/index/Header.vue';
import Main from '@/components/index/Main.vue';
import ShowBox from '@/components/index/ShowBox.vue';
import Hanbeger from '@/components/index/Hanbeger.vue';
import VideoList from '@/components/index/VideoList.vue';
</script>



<template>
    <div class="common-layout">
      <el-container>
        <!-- <el-aside width="250px"><Aside></Aside></el-aside> -->
        <Aside></Aside>
        <el-container>
          <el-header><Header></Header></el-header>
          <el-main>
          <Main></Main>
          <!-- <ShowBox></ShowBox> -->
          <VideoList></VideoList>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  

<style scoped>


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