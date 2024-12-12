<script setup>
import { RouterLink,RouterView } from 'vue-router';
import Aside from '@/components/index/Aside.vue';
import Header from '@/components/index/Header.vue';
</script>
<template>
<RouterView />  
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

</style>
