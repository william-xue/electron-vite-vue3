# vite-electron ✨

vite 和 electron 的结合，开箱即用 📦。本例子用 node16 node18 会报错

clone 完项目安装依赖即可直接运行！

打包时记得切换主进程监听文件的路径，项目里已经写好，把注释打开即可。

首次启动步骤：

```
cd vite-electron
```

```
npm install
```

```
npm run dev
```

打包命令：

```
npm run build:all
```

```
electron-builder
```

使用桌面端在于可以用 fs 等 api 实现单纯 js 无法实现的功能，有些项目还真是必须用这个。那么两个线程之间
的交互就很重要了 主线程获取本地文件后交给渲染线程等 这种要注意。

# 另外还要注意的是 要在打包后的桌面端窗口尝试这个 fs 等 api 特别注意要 contextIsolation=true 才行

# nodeIntegration: 这个选项允许你在渲染器（网页）中直接使用 Node.js 功能，而无需额外配置。出于安全考虑，默认情况下它是关闭的。

# enableRemoteModule: 当 nodeIntegration 为 true 时，这个选项允许你使用 require 在渲染器中加载 Electron 的远程（主进程）模块。

# contextIsolation: 这个选项将所有的第三方和 Electron 的内置模块都隔离在上下文中，使其不会污染全局命名空间。这可以提高安全性，但需要使用动态 import 语句来加载模块。

# webSecurity: 这个选项控制着 Electron 的 Web 安全特性，默认情况下是开启的。
