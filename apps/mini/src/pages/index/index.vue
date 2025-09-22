<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="title">
      <text>你猜猜这个是什么asdsad</text>
      <text>你爹</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  uni.request({
    url: "/api/goods",
    method: "GET",
    success: (res) => {
      console.log("mock 数据", res.data); // 这里应该能打印出 goodsList
    },
  });
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
