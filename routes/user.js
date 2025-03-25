const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 获取当前用户信息
router.get('/current', (req, res) => {
    const query = 'SELECT id, username FROM users WHERE id = ?';
    db.query(query, [req.session.userId], (err, results) => {
        if (err) {
            console.error('获取用户信息错误：', err);
            return res.json({
                success: false,
                message: '获取用户信息失败'
            });
        }

        if (results.length === 0) {
            return res.json({
                success: false,
                message: '用户不存在'
            });
        }

        res.json({
            success: true,
            data: results[0]
        });
    });
});

module.exports = router; 
