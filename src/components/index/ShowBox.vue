<template>
    <el-text class="title-text" size="200px">重磅热播</el-text>
    <div class="grid-container">
        <div class="grid-item" v-for="i in 20" :key="i">{{ i }}</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.title-text {
    font-size: 32px; /* 根据需要调整字形大小 */
    font-weight: bold; /* 设置字形为加粗 */
    color: #303133;
}

.grid-container {
    display: grid;
    padding-top: 20px;
    grid-template-columns: repeat(5, 1fr);
    /* 横向4个 */
    grid-template-rows: repeat(5, 1fr);
    /* 纵向5个 */
    gap: 10px;
    /* 格子之间的间距 */
    /* height: 500px;  */
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: lightblue;
    /* 格子的背景色 */
    border-radius: 5px ;
    /* 格子的边框 */
}
</style>