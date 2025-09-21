<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { useGoodsStore } from "@acme/stores/src/goods";
const store = useGoodsStore();
onMounted(async () => {
  await store.load();
  console.log("goods list", store.list);
});
</script>
