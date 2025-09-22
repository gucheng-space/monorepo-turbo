<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { useGoodsStore } from "@acme/stores";
const store = useGoodsStore();
onMounted(async () => {
  await store.load();
  console.log("goods list", store.list);
});
</script>
