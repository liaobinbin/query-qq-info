# query-qq-info

查询 QQ 号信息


> 该项目主要利用`create-react-app`进行搭建，基本未使用其他第三库，其中网络请求使用fetch实现，简单的封装了四个组件包含`info`, `input`, `loading`, `avatar`。未有Jest单元测试使用经验，担心画蛇添足，并未使用。

### 目录结构

```shell
src
├── api
│   ├── const.ts
│   ├── index.ts
│   ├── qq.ts
│   ├── request.ts
│   └── util.ts
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── sm-avatar
│   ├── sm-info
│   ├── sm-input
│   └── sm-loading
├── index.css
├── index.tsx
└── util
    └── index.ts
```

在util中主要是包含两个辅助函数，一个`debounce`和一个验证qq规则的方法。

简单的对fetch进行了封装，利用单例模式进行创建`request`实例。在`api/qq.ts`文件中单独存放该第三方api的方法封装。

样式是直接使用的`css`进行的编写

## 预览地址

https://liaobinbin.github.io/query-qq-info
