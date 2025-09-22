import type { PiniaPluginContext } from "pinia";

const isMp = typeof uni !== "undefined";

export function persistPlugin({ options, store }: PiniaPluginContext) {
  if (!options.persist) return;

  const key = `pinia:${store.$id}`;
  //  hydrate
  try {
    const raw = isMp ? uni.getStorageSync(key) : localStorage.getItem(key);
    if (raw) store.$patch(JSON.parse(raw));
  } catch {}

  //  subscribe
  store.$subscribe((_, state) => {
    const raw = JSON.stringify(state);
    isMp ? uni.setStorageSync(key, raw) : localStorage.setItem(key, raw);
  });
}
