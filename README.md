# Transmitter

## Introduction

一款利用Github repository实现图床+文本传输的桌面应用

框架：Vite+React+Electron

## Tutorial

### release

创建Github token：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

在Github中新建一个repository（或利用既有repository）

打开Transmitter，在settings中分别将token和repository填入

repository格式：{username}/{repository name}

### dev

```shell
cd transmitter
npm install
npm run dev
```



## Features

### 图床

目前支持拖拽上传与文件选择，上传完成后发送通知并将url写入剪贴板

v0.1.0：支持应用内的图片浏览与删除（菜单栏新增Album选项）

<img src="https://raw.githubusercontent.com/Bluixe/cloudimg/main/QQ%E6%88%AA%E5%9B%BE20220324101901.png" style="zoom:67%;" />

### 文本传输

支持在同一个Github账号下，不同客户端之间的文本快速互传

点击<img src="https://raw.githubusercontent.com/Bluixe/cloudimg/main/1648059369818.jpg" alt="image-20220324021555284" style="zoom:67%;" />来获得最新的文本

在输入框中输入文本并敲击回车以上传

<img src="https://raw.githubusercontent.com/Bluixe/cloudimg/main/QQ%E6%88%AA%E5%9B%BE20220324101911.png" style="zoom:67%;" />