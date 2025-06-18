# @fcbyk/types

[![npm version](https://img.shields.io/npm/v/@fcbyk/types.svg)](https://www.npmjs.com/package/@fcbyk/types)
[![npm license](https://img.shields.io/npm/l/@fcbyk/types)](https://www.npmjs.com/package/@fcbyk/types)

个人项目可复用的 TypeScript 类型定义集合。

## 安装

```bash
# 使用 npm
npm install @fcbyk/types

# 使用 yarn
yarn add @fcbyk/types

# 使用 pnpm
pnpm add @fcbyk/types
```

## 使用

```typescript
import { algorithm } from '@fcbyk/types/algorithm';

// 使用类型定义
type MyType = algorithm.quickSort;
```

OR

```typescript
import { quickSort } from '@fcbyk/types/algorithm';

// 使用类型定义
type MyType = quickSort;
```

## 许可证

MIT
