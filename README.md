# vite-electron ✨

vite和electron的结合，开箱即用📦。

clone完项目安装依赖即可直接运行！

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
使用桌面端在于可以用 fs等 api 实现单纯 js无法实现的功能，有些项目还真是必须用这个。那么两个线程之间
的交互就很重要了 主线程获取本地文件后交给渲染线程等 这种要注意