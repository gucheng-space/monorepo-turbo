import { createPinia } from "pinia";
import { persistPlugin } from "./plugin/persist";

const p = createPinia();

export const pinia = p.use(persistPlugin);
// 导出所有 store
export * from "./modules/goods";
export * from "./modules/cart";
export * from "./modules/locale";
