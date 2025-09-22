import { defineStore } from "pinia";
import { goodsApi } from "@acme/api";
import type { GoodsItem } from "@acme/types";
import { ref } from "vue";

export const useGoodsStore = defineStore("goods", () => {
  const list = ref<GoodsItem[]>([]);
  async function load() {
    list.value = await goodsApi.list();
  }
  return { list, load };
});
