import { CartItem, GoodsDetail, GoodsItem, SkuItem } from "@acme/types";

/* -------------------------------------------------
 * 生成数据
 * ------------------------------------------------- */

const faker = {
  // 随机整数 [min, max]
  int: (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  // 随机数组元素
  pick: <T>(arr: T[]): T => arr[faker.int(0, arr.length - 1)],
};

const titles = [
  "夏日短袖 T 恤",
  "复古牛仔外套",
  "防水运动手表",
  "降噪蓝牙耳机",
  "超薄充电宝",
  "机械键盘 RGB",
  "瑜伽垫加厚",
  "咖啡胶囊套装",
];

const covers = [
  "https://picsum.photos/400/400?random=1",
  "https://picsum.photos/400/400?random=2",
  "https://picsum.photos/400/400?random=3",
  "https://picsum.photos/400/400?random=4",
  "https://picsum.photos/400/400?random=5",
];

const bannerPool = [
  "https://picsum.photos/800/400?random=10",
  "https://picsum.photos/800/400?random=11",
  "https://picsum.photos/800/400?random=12",
];

const skuNames = ["经典款", "升级款", "尊享款", "限量版"];

/** 商品列表（分页用） */
export const goodsList: GoodsItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: faker.pick(titles),
  price: faker.int(29, 299) * 10,
  cover: faker.pick(covers),
}));

/** 商品详情 Map，按 id 取值 */
export const goodsDetailMap = new Map<number, GoodsDetail>(
  goodsList.map((g) => {
    const banners = Array.from({ length: 3 }, () => faker.pick(bannerPool));
    const skus: SkuItem[] = Array.from({ length: 4 }, (_, j) => ({
      id: g.id * 100 + j,
      name: skuNames[j],
      price: g.price + j * 30,
      stock: faker.int(5, 100),
    }));
    return [g.id, { ...g, banners, skus }];
  })
);

/** 购物车示例数据（可手动改） */
export const cartList: CartItem[] = [
  { skuId: 101, quantity: 2 },
  { skuId: 203, quantity: 1 },
];
