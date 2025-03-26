const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: '01',
    insecureAuth: true
});

connection.connect((err) => {
    if (err) {
        console.error('数据库连接失败：', err);
        return;
    }
    console.log('数据库连接成功');
});

module.exports = connection; 
