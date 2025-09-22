import { defineStore } from "pinia";
import { cartApi } from "@acme/api";
import type { CartItem } from "@acme/types";
import { computed, ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const items = ref<CartItem[]>([]);

    async function add(skuId: number, quantity = 1) {
      const res = await cartApi.add(skuId, quantity);
      // 简单合并：后端返回最新一条，前端直接替换
      const idx = items.value.findIndex((i) => i.skuId === res.skuId);
      idx >= 0 ? (items.value[idx] = res) : items.value.push(res);
    }

    async function load() {
      items.value = await cartApi.list();
    }

    const total = computed(() =>
      items.value.reduce((s, i) => s + i.quantity, 0)
    );

    return { items, add, load, total };
  },
  { persist: true } // 关键：让插件生效
);
