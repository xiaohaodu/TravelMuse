import { defineWorkspace } from "vitest/config";

// defineWorkspace 会提供一个很好的类型提示开发体验
export default defineWorkspace([
  "packages/*",
  {
    // 添加 "extends" 将两个配置合并到一起
    extends: "./vite.config.ts",
    test: {
      include: ["tests/**/*.{browser}.test.{ts,js}"],
      // 在使用内联配置的时候，建议定义一个名称
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
  {
    test: {
      include: ["tests/**/*.{node}.test.{ts,js}"],
      name: "node",
      environment: "node",
    },
  },
]);
