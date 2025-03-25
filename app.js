const express = require('express');
const session = require('express-session');
const app = express();
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const manageRouter = require('./routes/manage');

app.use(express.json());
app.use(express.static('public'));

// 添加session中间件
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // 开发环境下使用 HTTP
        maxAge: 24 * 60 * 60 * 1000 // 24小时
    }
}));

// 添加登录验证中间件
const authMiddleware = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ success: false, message: '未登录' });
    }
    next();
};

app.use(registerRouter);
app.use(loginRouter);
app.use('/api/user', authMiddleware, userRouter);
app.use(authMiddleware, manageRouter);

const PORT = 5006;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
}); 
