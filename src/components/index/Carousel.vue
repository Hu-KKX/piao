<template>
<!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" height="500px"  >
    <el-carousel-item v-for="(item,index) in imgs" :key="index">
      <img :src="item.src" alt="轮播图" style="width:100%; height: 100%;" />
      <h5>{{item.title}}</h5>  
    </el-carousel-item>
  </el-carousel>
<!-- <img src="/src/assets/img/1.png" > -->
</template>

<script setup>
const imgs = [
    { src: 'src/assets/img/1.png', title: '标题 1' },
    { src: 'src/assets/img/2.png', title: '标题 2' },
    { src: 'src/assets/img/video3.jpg', title: '标题 3' },
    { src: 'src/assets/img/video1.jpg', title: '标题 4' },
    { src: 'src/assets/img/video2.jpg', title: '标题 5' },
];
</script>


<style scoped>
.el-carousel__item h5 {
  position: absolute;
  opacity: 0.75;/*透明度*/
  bottom:0%;
  left: 20%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.custom-carousel {
  width: 100%; /* 设置您想要的宽度 */
  margin: 0 auto; /* 如果需要居中显示 */
}







</style>