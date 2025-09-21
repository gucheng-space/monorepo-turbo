import { $fetch } from "ofetch";
import type { GoodsItem, GoodsDetail, CartItem } from "@acme/types";

// 运行时自动识别 baseURL
const isMp = typeof wx !== "undefined" && !!wx.getStorageSync;

const baseURL = isMp
  ? "https://mock.xxx.com" // 小程序可访问的 https 白名单
  : "https://mock.xxx.com"; // Web 可走同域代理，先写同一个

const api = $fetch.create({
  baseURL,
  onRequest({ request, options }) {
    // 小程序自动带 token
    if (isMp) {
      const token = wx.getStorageSync("token") || "demo-token";
      const h = new Headers(options.headers);
      h.set("Authorization", `Bearer ${token}`);
      options.headers = h;
    }
  },
  onResponseError({ response }) {
    // 统一错误提示
    isMp
      ? wx.showToast({
          title: response._data?.message || "网络错误",
          icon: "none",
        })
      : console.error("[api]", response._data);
  },
});

export const goodsApi = {
  list: () => api<GoodsItem[]>("/goods"),
  detail: (id: number) => api<GoodsDetail>(`/goods/${id}`),
};

export const cartApi = {
  list: () => api<CartItem[]>("/cart"),
  add: (skuId: number, quantity: number) =>
    api<CartItem>("/cart", { method: "POST", body: { skuId, quantity } }),
  checkout: () =>
    api<{ orderId: string }>("/cart/checkout", { method: "POST" }),
};
