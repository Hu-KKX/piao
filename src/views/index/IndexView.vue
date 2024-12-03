<script setup>
import { ref } from 'vue'
import Aside from '@/components/index/Aside.vue';
import Header from '@/components/index/Header.vue';
import Main from '@/components/index/Carousel.vue';
import ShowBox from '@/components/index/ShowBox.vue';
import Hanbeger from '@/components/index/Hanbeger.vue';
import VideoList from '@/components/index/VideoList.vue';
import Carousel from '@/components/index/Carousel.vue';
import Card from '@/components/others/Card.vue';
</script>



<template>

<div class="main">
<Carousel></Carousel>
<VideoList></VideoList>
<ShowBox></ShowBox>
<Card></Card>
</div>



</template>


<style scoped>




.main {
  background-color: #fff; /* 示例: 设置主内容背景色 */
  margin-left: 15px;
  max-height: 2000px;

}

.el-aside,.el-header,.el-main {
  border-radius: 10px; /* 示例: 设置边框圆角 */
}

</style>