export interface GoodsItem {
  id: number;
  title: string;
  price: number;
  cover: string;
}

export interface GoodsDetail extends GoodsItem {
  banners: string[];
  skus: SkuItem[];
}

export interface SkuItem {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface CartItem {
  skuId: number;
  quantity: number;
}
