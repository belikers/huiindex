# HuiIndex 后端

## 技术栈

主要技术：

- Node.js
- Express、express-session
- MySQL
- Sequelize（ORM 框架）
- Redis

依赖库：

- Axios
- NeteaseCloudMusicApi

依赖服务：

- 百度翻译 API
- 新浪壁纸 API

## 已支持特性

- 数据库访问
- 全局异常处理
- 全局响应包装
- 全局请求日志记录
- 跨域
- 用户登录及 session 分布式存储

## 目录结构

- README.md 项目文档
- db 数据库相关
  - ddl.sql 建表语句
- src 源码
  - config 配置
    - config.js 默认配置
    - config.prod.js 线上配置
  - constant 常量
  - controller 接口层
  - dao 数据访问层
  - exception 异常处理
  - model 数据模型
  - service 业务逻辑
  - thirdpart 第三方依赖
  - utils 工具
  - test 测试
  - db.js 数据库
  - index.js 主文件
  - routes.js 接口注册
  - server.js 后台服务
- Dockerfile 镜像构建
- package.json 项目依赖文件
- yarn.lock 依赖锁定

