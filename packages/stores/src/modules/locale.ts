import { defineStore } from "pinia";
import { ref } from "vue";

export const useLocaleStore = defineStore(
  "locale",
  () => {
    const lang = ref<"zh" | "en">("zh");
    function toggle() {
      lang.value = lang.value === "zh" ? "en" : "zh";
    }
    return { lang, toggle };
  },
  { persist: true }
);
