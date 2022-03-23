# Remote-pad

## Introduction

一款利用Github repository实现图床+文本传输的桌面应用

框架：Vite+React+Electron

## Tutorial

### release

创建Github token：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

在Github中新建一个repository（或利用既有repository）

打开Remote-pad，在settings中分别将token和repository填入

repository格式：{username}/{repository name}

### dev

```shell
cd remote-pad
npm install
npm run dev
```



## Features

### 图床

目前支持拖拽上传与文件选择

todo：支持粘贴上传；支持应用内的图片浏览与删除

<img src="https://raw.githubusercontent.com/Bluixe/cloudimg/main/1648058582709.jpg" alt="image-20220324020246553" style="zoom:67%;" />

### 文本传输

支持在同一个Github账号下，不同客户端之间的文本快速互传

点击<img src="https://raw.githubusercontent.com/Bluixe/cloudimg/main/1648059369818.jpg" alt="image-20220324021555284" style="zoom:67%;" />来获得最新的文本

在输入框中输入文本并敲击回车以上传

<img src="https://raw.githubusercontent.com/Bluixe/cloudimg/main/1648058732083.jpg" alt="image-20220324020521489" style="zoom:67%;" />