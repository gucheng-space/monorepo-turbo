import Mock from "mockjs";
import { goodsList } from "@acme/utils";

// 用户列表
Mock.mock("/api/goods", "get", {
  data: goodsList,
});

// 新增接口继续往下写即可
