import "pinia";

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    // 任意 Store 都可以加 persist: true | PersistOptions
    persist?: boolean | PersistOptions;
  }
}

// 如果你还想细化配置，可以再加接口
export interface PersistOptions {
  key?: string;
  paths?: string[];
}
