<template>
    <el-space direction="vertical" alignment="flex-start">
      <el-skeleton style="width: 240px" :loading="loading" animated>
        <template #template>
          <el-skeleton-item variant="image" style="width: 350px; height: 240px" />
          <div style="padding: 14px">
            <el-skeleton-item variant="h3" style="width: 50%" />
            <div
              style="
                display: flex;
                align-items: center;
                justify-items: space-between;
                margin-top: 16px;
                height: 16px;
              "
            >
              <el-skeleton-item variant="text" style="margin-right: 16px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
        <template #default>
          <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
            <img
              :src="require('@/assets/img/video2.jpg')"
              class="image"
            />
            <div style="padding: 14px">
              <span>Delicious hamburger</span>
              <div class="bottom card-header">
                <div class="time">{{ currentDate }}</div>
                <el-button text class="button">Operation button</el-button>
              </div>
            </div>
          </el-card>
        </template>
      </el-skeleton>
    </el-space>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const loading = ref(true)
  const currentDate = new Date().toDateString()
  </script>