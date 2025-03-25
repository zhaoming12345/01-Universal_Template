<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>后台管理系统模板-注册</title>
    <link rel="stylesheet" href="/css/register.css">
</head>
<body>
    <div class="container">
        <h2>用户注册</h2>
        <form id="registerForm">
            <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" id="username" name="username" required placeholder="请输入用户名">
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" name="password" required placeholder="请输入密码">
            </div>
            <div class="form-group">
                <label for="confirmPassword">确认密码</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="请再次输入密码">
            </div>
            <button type="submit" class="btn">注册</button>
            <button type="button" class="btn btn-secondary" onclick="window.location.href='/login.html'">前往登录</button>
            <div id="messageBox" class="message"></div>
        </form>
    </div>

    <script>
        // 检查登录状态
        async function checkLoginStatus() {
            try {
                const response = await fetch('/api/user/current');
                const data = await response.json();
                
                if (data.success) {
                    // 如果已登录，跳转到主页
                    window.location.href = '/index.html';
                }
            } catch (error) {
                console.error('检查登录状态失败：', error);
            }
        }

        // 页面加载时检查登录状态
        window.onload = checkLoginStatus;

        function showMessage(message, type = 'error') {
            const messageBox = document.getElementById('messageBox');
            messageBox.textContent = message;
            messageBox.className = `message ${type} fade-in`;
            messageBox.style.display = 'block';
            
            if (type === 'error') {
                messageBox.classList.add('shake');
                setTimeout(() => {
                    messageBox.classList.remove('shake');
                }, 300);
            }
        }

        function redirectToLogin() {
            showMessage('注册成功！3秒后跳转到登录页面...', 'success');
            let countdown = 2;
            const interval = setInterval(() => {
                if (countdown <= 0) {
                    clearInterval(interval);
                    window.location.href = '/login.html';
                } else {
                    showMessage(`注册成功！${countdown}秒后跳转到登录页面...`, 'success');
                    countdown--;
                }
            }, 1000);
        }

        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                showMessage('两次输入的密码不一致');
                return;
            }

            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();

                if (data.success) {
                    redirectToLogin();
                } else {
                    showMessage(data.message);
                }
            } catch (error) {
                showMessage('注册失败，请稍后重试');
            }
        });
    </script>
</body>
</html> 
