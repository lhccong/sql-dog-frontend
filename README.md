<p align="center">
    <a href="" target="_blank">
      <img src="./public/img.png" width="280" />
    </a>
</p>
<h1 align="center">SQL Dog</h1>
<p align="center"><strong>基于 SpringBoot + MySQL + SQL 慢镜🔍（自研）致力于 SQL 刷题、SQL 解析，帮助人们解决 SQL 能力薄弱问题，帮助每个人成为 SQL 宗师🚀。。<br><em>持续更新中～</em></strong></p>
<div align="center">
    <a href="https://github.com/lhccong/sql-dog-backend"><img src="https://img.shields.io/badge/后端-项目地址-yellow.svg?style=plasticr"></a>
    <a href="https://github.com/lhccong/sql-dog-frontend"><img src="https://img.shields.io/badge/前端-项目地址-blueviolet.svg?style=plasticr"></a>
</div>



## 项目介绍🚀

SQL Dog 是一款基于 SpringBoot + MySQL + SQL 慢镜🔍（自研）致力于 SQL 刷题、SQL 解析，帮助人们解决 SQL 能力薄弱问题，帮助每个人成为 SQL 宗师🚀。


## 架构设计图🎨
<p align="center">
    <img src="./public//projectImg.png" width="780" />
</p>

## 我们做了哪些改进
1. 生成的 Json 数据格式更加精准，之前只能生成 String 类型，现在能根据不同的字段类型进行生成。
2. 新增了 SQL 执行计划的分析，能让用户了解自己的 SQL 还有什么优化空间。
3. 整合了 sql-mother 、sql-father ，提供一站式 SQL 练习平台，练完 SQL 建 SQL，一站式服务。
4. 我们能生成 ER 图，通过 plantUML 代码的形式。
5. 能通过用户来自主输入执行计划，我们来给出优化建议。

## 技术选型

### 前端

1. React
2. antd 组件库
3. webassembly
4. react-markdown
5. monaco-editor

### 后端

1. SpringBoot3.0
2. JAVA 17
3. MySQL
4. Redis
5. Sa-Token（权限管理）
6. sql-slow-mirror（自研 SQL 分析工具，项目地址：https://github.com/lhccong/sql-slow-mirror ）
7. Druid（SQL 解析）

## 做了哪些改进🔍

1. 生成的 Json 数据格式更加精准，之前只能生成 String 类型，现在能根据不同的字段类型进行生成。
2. 新增了 SQL 执行计划的分析，能让用户了解自己的 SQL 还有什么优化空间。
3. 整合了 sql-mother 、sql-father ，提供一站式 SQL 练习平台，练完 SQL 建 SQL，一站式服务。
4. 我们能生成 ER 图，通过 plantUML 代码的形式。
5. 后端开发遵循 TDD 开发模式，保证代码质量，使用 mock 来进行单元测试。

## 需要攻克的点

1. 安全问题，防止用户 SQL 注入（使用`webassembly` 技术，在前端运行  SQLite  完成初始化）。
2. 如果不让用户之间的数据互相污染（前端使用  SQLite  完成初始化）。
3. 如何解析用户输入的 SQL（[ Druid ](https://github.com/alibaba/druid)）。

## 项目界面

### 做题
<p align="center">
    <img src="./public/img_0.png" width="780" />
</p>

### 执行结果
<p align="center">
    <img src="./public/img_1.png" width="780" />
</p>

### 优化建议
<p align="center">
    <img src="./public/img_5.png" width="780" />
</p>

### 代码生成
<p align="center">
    <img src="./public/img_2.png" width="780" />
</p>

### 表大全
<p align="center">
    <img src="./public/img_6.png" width="780" />
</p>

### 选择关卡
<p align="center">
    <img src="./public/img_3.png" width="780" />
</p>

### 用户信息
<p align="center">
    <img src="./public/img_4.png" width="780" />
</p>
