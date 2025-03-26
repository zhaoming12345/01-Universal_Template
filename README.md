# 后台管理系统模板

## 项目介绍

这是一个基于 html 和 node.js 的后台管理系统模板。该模板提供了后台管理系统最常用的功能框架，包括用户认证、权限管理、通用的增删改查等基础功能。适用于各类管理系统的快速开发，如学校管理、医院管理、商场管理等场景。

## 快速使用

### 环境要求

* Node.js
* MySQL 数据库

### 安装步骤

1. 克隆或下载本项目到本地
2. 安装依赖
3. 打开终端输入以下命令

   ```bash
   npm install express mysql express-session
   ```
4. 配置数据库

   - 在 MySQL 中创建名为 `01` 的数据库
   - 修改数据库配置文件 `config/db.js`：

   ```javascript
   {
       host: 'localhost',      // 数据库地址
       user: 'root',          // 数据库用户名
       password: '123456',    // 数据库密码
       database: '01' // 数据库名称
   }
   ```
5. 启动服务器

```bash
node app.js
```

默认服务器运行在 http://localhost:5006

### 配置说明

1. 端口修改

   - 在 `app.js` 文件中修改 `PORT` 常量的值（默认为 5006）
2. 数据库配置

   - 在 `config/db.js` 文件中修改数据库连接信息
   - 必要时可以修改 `insecureAuth` 选项（默认为 true，用于支持旧版本密码认证）

### 访问系统

启动服务器后，打开浏览器访问：

- 注册页面：http://localhost:5006/register.html
- 登录页面：http://localhost:5006/login.html
- 主页: http://localhost:5006/index.html

## 特性

* 🚀 现代化的技术栈
* 📦 开箱即用的基础功能
* 🛠️ 易于定制和扩展
* 🎨 清晰的项目结构
* 📱 响应式设计

## 技术栈

### 前端

* html
* css
* javascript

### 后端

* node.js
* express

## 项目结构

```
├── config/                # 配置文件目录
│   └── db.js            # 数据库配置文件
├── public/               # 静态资源目录
│   ├── css/             # CSS 样式文件目录
│   │   ├── index.css    # 主页样式
│   │   ├── login.css    # 登录页样式
│   │   └── register.css # 注册页样式
│   ├── index.html       # 主页面
│   ├── login.html       # 登录页面
│   └── register.html    # 注册页面
├── routes/               # 路由目录
│   ├── login.js         # 登录相关路由
│   ├── register.js      # 注册相关路由
│   └── user.js          # 用户相关路由
├── sql/                  # SQL脚本目录
│   └── init.sql         # 数据库初始化脚本
├── app.js               # 应用程序入口文件
├── package.json         # 项目依赖配置文件
├── LICENSE              # 许可证文件
└── README.md            # 项目说明文档
```

### 目录说明

* `config/`: 存放配置文件
  - `db.js`: 数据库连接配置
* `public/`: 存放静态文件
  - `css/`: 样式文件目录
    - `index.css`: 主页样式文件
    - `login.css`: 登录页样式文件
    - `register.css`: 注册页样式文件
  - `index.html`: 系统主页面
  - `login.html`: 用户登录页面
  - `register.html`: 用户注册页面
* `routes/`: 存放路由文件
  - `login.js`: 处理登录相关的请求
  - `register.js`: 处理注册相关的请求
  - `user.js`: 处理用户信息相关的请求
* `sql/`: 存放SQL脚本
  - `init.sql`: 数据库初始化脚本，包含表结构定义

## 注意事项

* 本项目为开源模板，默认配置仅供开发和测试使用
* 免责：本项目代码中未包含任何安全措施（例如哈希加密，SQL 注入等）使用前请自行评估并适当增加安全措施，若因使用方自身原因未能保证安全造成安全问题制作方概不负责

## 许可证

本项目采用 GNU Affero General Public License v3.0 (AGPL-3.0) 许可证。这意味着：

* 您可以自由使用、修改和分发本项目
* 如果您修改了代码，需要开源您的修改
* 如果您的项目通过网络提供服务，也需要开源您的代码

## 使用须知

* 您可以自由下载和使用本项目
* 您可以修改本项目代码并将修改后的代码开源到您自己的 GitHub 仓库中
* 本项目不接受任何形式的代码贡献（包括但不限于 Bug 修复、功能增加等）
* 请勿以任何理由将修改后的代码提交到本仓库

## 项目进展

* [X] 注册页面
* [X] 登录页面
* [X] 主页面
* [X] 第一个增删改查页面
* [X] 第二个增删改查页面
* [X] 第三个增删改查页面
