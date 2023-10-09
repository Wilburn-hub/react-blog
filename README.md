## node.js
    1.官网下载地址：下载 | [https://nodejs.org/zh-cn/download/]
    2.Node.js默认安装目录为 C:\Program Files\nodejs\, 你也可以修改目录
      记住，一路都是 next（下一步）
    3.最后install，等安装好
    4.在命令行里： node -v，看是否会出现一个版本号，出现了说明安装成功
## Build Setup

```bash
# 进入项目目录

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```


## 发布

```bash
# 构建测试环境
npm run build:test

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 代码格式检查
npm run lint

```
