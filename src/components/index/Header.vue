<template>
<!-- 锚点 -->
<el-affix :offset="0">

<el-row>

    <el-col :span="12">
    <!-- 搜索框 -->
      <el-input
      v-model="input"
      style="width: 240px"
      placeholder="来搜索看"
      :prefix-icon="Search"
    />
  </el-col>
    <el-col :span="12">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <!-- <el-menu-item index="0"> 
    </el-menu-item> -->
    <!-- 占位右对齐 -->
    <div class="zhanwei"></div>

    <!-- 右菜单栏 -->
    <el-menu-item index="0">历史</el-menu-item>
    <el-menu-item index="1">收藏</el-menu-item>
    <el-menu-item index="2">消息</el-menu-item>
    <el-sub-menu index="3">
      <template #title>个人</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu></el-col>
  </el-row>
</el-affix>
</template>

<script setup>

import { ref } from 'vue'

// const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

import { Search } from '@element-plus/icons-vue'



</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 70px;
}




.el-menu{
  height: 70px;
}
.el-menu--horizontal > .zhanwei {
  margin-right: auto;
}
</style>