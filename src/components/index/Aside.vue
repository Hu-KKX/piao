<template>
  <div class="aside">

    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose">
      <div class="aside-logo">
      <el-col class="logo-list" :span="24">
        <img src="@/assets/img/image.png" alt="logo">
        <el-icon @click="toggleCollapse" class="el-icon-sider-fold" style="color:#fff;font-size:20px;cursor:pointer;"><Menu /></el-icon>
      </el-col>
    </div>
      <!-- 首页 -->
      <!-- <el-icon>
        <Menu />
      </el-icon> -->
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <House />
          </el-icon>
          <span>首页</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu >
      <!-- 中视频 -->
      <el-menu-item index="2" @click="toMidVideo">
        <el-icon>
          <VideoPlay />
        </el-icon>
        <span>中视频</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <VideoCamera />
        </el-icon>
        <span>电视剧</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <Film />
        </el-icon>
        <span>电影</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <svg t="1732958479978" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10153" width="200" height="200"><path d="M747.263 75C858.04 75 950 165.93 950 277.737c0 50.704-20.755 96.699-56.475 134.47l-0.622 0.652 1.094 2.382c8.142 17.846 14.724 34.557 20.041 51.3l0.42 1.332c9.293 29.638 14.2 58.424 14.2 87.311C928.658 770.833 739.763 950 512.5 950S96.342 770.833 96.342 555.184c0-28.887 4.907-57.673 14.2-87.311 5.564-17.749 12.54-35.425 21.28-54.42l0.25-0.544-0.703-0.733c-35.45-37.224-55.89-81.54-56.369-131.384v-1.762C75 167.06 167.136 75 277.737 75c72.14 0 133.535 39.483 167.734 102.493l0.257 0.48 0.859-0.123c20.708-2.932 42.382-4.46 64.055-4.543l1.858-0.004c22.291 0 44.613 1.53 65.913 4.547l0.858 0.123 0.258-0.48C613.343 115.19 673.748 75.89 744.836 75.015z m0 64c-53.76 0-98.394 32.964-119.652 86.517l-0.175 0.432c-5.876 14.201-21.045 22.242-36.13 19.082-24.25-5.081-51.507-7.728-78.806-7.728-27.3 0-54.556 2.647-78.807 7.728-15.236 3.192-30.56-5.045-36.304-19.514l-0.644-1.6C375.237 171.308 330.959 139 277.737 139 202.47 139 139 202.417 139 279.03c0 38.424 18.662 72.87 52.969 102.564 11.067 9.579 14.224 25.446 7.666 38.532-26.476 52.834-39.293 93.715-39.293 135.058C160.342 734.707 319.85 886 512.5 886s352.158-151.293 352.158-330.816c0-41.344-12.818-82.225-39.293-135.058-6.558-13.086-3.4-28.953 7.666-38.532C866.925 352.258 886 316.51 886 277.737 886 201.439 822.853 139 747.263 139zM512.5 491.158c35.36 0 64.026 28.665 64.026 64.026 0 23.704-12.881 44.4-32.026 55.468v92.007c10.572-4.332 20.63-10.877 29.653-19.636l1.088-1.071c12.497-12.497 32.758-12.497 45.255 0 12.497 12.496 12.497 32.758 0 45.254-61.076 61.076-154.916 61.076-215.992 0-12.497-12.496-12.497-32.758 0-45.254 12.372-12.372 32.354-12.496 44.878-0.372l0.377 0.372c9.3 9.299 19.743 16.201 30.741 20.707v-92.006c-19.145-11.069-32.026-31.764-32.026-55.469 0-35.36 28.665-64.026 64.026-64.026z m-85.368-128.053c23.573 0 42.684 19.11 42.684 42.684 0 23.574-19.11 42.685-42.684 42.685-23.574 0-42.685-19.11-42.685-42.685 0-23.573 19.11-42.684 42.685-42.684z m170.736 0c23.574 0 42.685 19.11 42.685 42.684 0 23.574-19.11 42.685-42.685 42.685-23.573 0-42.684-19.11-42.684-42.685 0-23.573 19.11-42.684 42.684-42.684z" p-id="10154"></path></svg>
        </el-icon>
        <span>动画</span>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon>
          <Camera />
        </el-icon>
        <span>综艺</span>
      </el-menu-item>
      <el-menu-item index="7">
        <el-icon>
          <IceCreamSquare />
        </el-icon>
        <span>少儿</span>
      </el-menu-item>
      <el-menu-item index="8">
        <el-icon>
          <Headset />
        </el-icon>
        <span>音乐</span>
      </el-menu-item>
      <el-menu-item index="9">
        <el-icon>
          <SwitchFilled />
        </el-icon>
        <span>游戏</span>
      </el-menu-item>
      <el-menu-item index="10">
        <el-icon>
          <More />
        </el-icon>
        <span>更多</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script setup>
import {
  Film,
  VideoCamera,
  VideoPlay,
  IceCreamSquare,
  Camera,
  House,
  Headset,
  SwitchFilled,
  More,
  Menu,
} from '@element-plus/icons-vue'


import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 创建一个响应式变量，控制菜单的折叠状态
const isCollapse = ref(false)

// 切换菜单的展开和折叠状态
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

// 菜单打开时的回调
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}

// 菜单关闭时的回调
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

function toMidVideo() {
  console.log('toMidVideo')
  router.push('/midvideo')
}



</script>

<style scoped>
.aside-logo {
  height: 80px;
  background-color: rgb(255, 208, 196);
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: center; /* 水平居中对齐 */
}

.logo-list {
  display: flex;
  flex-direction: column; /* 垂直排列内容 */
  align-items: center; /* 水平居中内容 */
}

.aside-logo img {
  display: block;
  width: 60px;
  height: auto;
  margin-bottom: 5px; /* 图标与Logo之间的间距 */
}

.el-menu-vertical-demo {
  width: 200px; /* 展开时的宽度 */
  min-height: 100%;
}

.el-menu--collapse {
  width: 64px; /* 折叠时的宽度 */
}

.el-icon-sider-fold {
  cursor: pointer; /* 鼠标指针样式 */
}
</style>