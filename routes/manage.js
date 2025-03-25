const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 通用的CRUD操作函数
function crudOperations(tableName) {
    // 获取列表
    router.get(`/api/${tableName}/list`, (req, res) => {
        const query = `SELECT * FROM ${tableName} ORDER BY created_at DESC`;
        db.query(query, (err, results) => {
            if (err) {
                console.error(`获取${tableName}列表错误：`, err);
                return res.json({
                    success: false,
                    message: '获取列表失败'
                });
            }
            res.json({
                success: true,
                data: results
            });
        });
    });

    // 添加数据
    router.post(`/api/${tableName}/add`, (req, res) => {
        const { content1, content2, content3 } = req.body;
        if (!content1 || !content2 || !content3) {
            return res.json({
                success: false,
                message: '所有字段都必须填写'
            });
        }

        const query = `INSERT INTO ${tableName} (content1, content2, content3) VALUES (?, ?, ?)`;
        db.query(query, [content1, content2, content3], (err, result) => {
            if (err) {
                console.error(`添加${tableName}数据错误：`, err);
                return res.json({
                    success: false,
                    message: '添加数据失败'
                });
            }
            res.json({
                success: true,
                message: '添加成功'
            });
        });
    });

    // 更新数据
    router.put(`/api/${tableName}/update/:id`, (req, res) => {
        const { id } = req.params;
        const { content1, content2, content3 } = req.body;
        if (!content1 || !content2 || !content3) {
            return res.json({
                success: false,
                message: '所有字段都必须填写'
            });
        }

        const query = `UPDATE ${tableName} SET content1 = ?, content2 = ?, content3 = ? WHERE id = ?`;
        db.query(query, [content1, content2, content3, id], (err, result) => {
            if (err) {
                console.error(`更新${tableName}数据错误：`, err);
                return res.json({
                    success: false,
                    message: '更新数据失败'
                });
            }
            res.json({
                success: true,
                message: '更新成功'
            });
        });
    });

    // 删除数据
    router.delete(`/api/${tableName}/delete/:id`, (req, res) => {
        const { id } = req.params;
        const query = `DELETE FROM ${tableName} WHERE id = ?`;
        db.query(query, [id], (err, result) => {
            if (err) {
                console.error(`删除${tableName}数据错误：`, err);
                return res.json({
                    success: false,
                    message: '删除数据失败'
                });
            }
            res.json({
                success: true,
                message: '删除成功'
            });
        });
    });
}

// 为三个管理页面创建路由
crudOperations('manage1');
crudOperations('manage2');
crudOperations('manage3');

module.exports = router; 
