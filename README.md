# TravelMuse

一个基于 React 和 TypeScript 的旅行灵感应用项目。

## 项目特性

- 现代化的前端架构
- 使用 GraphQL 进行数据管理
- 完整的测试支持（Vitest）
- Husky 用于 Git 钩子管理
- Commitlint 用于规范提交信息

## 技术栈

- React
- TypeScript
- GraphQL
- Vite
- Vitest
- Husky
- Commitlint

## 环境要求

- Node.js: 20.12.2
- pnpm: 9.5.0
- npm: 10.5.0

## 安装

```bash
# 安装依赖
pnpm install
```

## 项目结构

```
TravelMuse/
├── packages/
│   └── travelmuse-web-app/    # Web 应用主程序
├── .husky/                    # Git 钩子配置
├── commitlint.config.js       # Commitlint 配置
├── vite.config.ts             # Vite 配置
├── vitest.workspace.ts        # Vitest 工作区配置
├── pnpm-workspace.yaml        # pnpm 工作区配置
└── package.json               # 项目依赖
```

## 可用脚本

```bash
# 运行测试
pnpm test

# 安装 Husky 钩子
pnpm prepare
```

## 开发

进入 `packages/travelmuse-web-app/` 目录进行开发工作。

## License

ISC
