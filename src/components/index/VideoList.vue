<script setup lang="ts">
import Hanbeger from './Hanbeger.vue';
import 'element-plus/theme-chalk/display.css'
</script>

<template>
    <div class="video-list">
    <el-text class="title-text" size="200px">重磅热播</el-text>
    <el-row :gutter="16" >
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col class="sm hidden-sm-and-down" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col class="sm hidden-sm-and-down" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col class="lg hidden-md-and-down" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
      <el-col class="lg hidden-md-and-down" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <Hanbeger></Hanbeger>
      </el-col>
    </el-row>
</div>
  </template>
  
<style scoped>
.video-list {
    height: 100%;
}
.el-row {
    height: 100%;
}
.el-col {
    border-radius: 4px;
    padding-top: 10px;
  }

.grid-content {
background-color:black;
min-height: 100%;
}


.title-text {
    font-size: 32px; /* 根据需要调整字形大小 */
    font-weight: bold; /* 设置字形为加粗 */
    color: #303133;
}
  </style>