import { goodsList } from "@acme/utils";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const page = Number(query.page ?? 1);
  const limit = Number(query.limit ?? 10);
  const keyword = (query.keyword ?? "") as string;

  // 搜索
  let data = goodsList;
  if (keyword) {
    const kw = keyword.toLowerCase();
    data = goodsList.filter((g) => g.title.toLowerCase().includes(kw));
  }

  // 分页
  const total = data.length;
  const start = (page - 1) * limit;
  data = data.slice(start, start + limit);

  return {
    code: 200,
    data,
    total,
    page,
    limit,
  };
});
