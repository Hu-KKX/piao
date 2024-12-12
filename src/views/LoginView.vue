<template>
    <div class="wrapper">
        <div id="login_box">
            <h2>LOGIN</h2>
        <el-form
        ref="LoginForm"
        :model="form"
        label-width="120px"
        label-position="left"
        :rules="rules"
        class="login-form"
        >
        <el-form-item label="用户名" prop="username" class="label-color">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="label-color">
            <el-input v-model="form.password" type="password" placeholder="请输入密码" class="login-input"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitLogin" :plain="true" class="login-button">登录</el-button>
        </el-form-item>
        </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const form = reactive({
    username: '',
    password: ''
});

// 定义表单验证规则
const rules = reactive({
  username: [
    { required: true, message: '用户名不可为空', trigger: 'blur' },
  ],
  phoneNumber: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '邮箱格式不正确',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
});


const submitLogin = async () => {
    try {
        await registerForm.value.validate(); // 验证表单输入

        const response = await axios.post('/api/login', form.value);
        if (response.data.success) {
            ElMessage.success('登录成功！');
            // 登录成功后可以进行页面跳转，比如去首页
            // this.$router.push('/home');
        } else {
            ElMessage.error(response.data.message || '登录失败！');
        }
    } catch (error) {
        ElMessage.error('登录请求出错！');
    }
};
</script>

<style scoped>

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-image: url('@/assets/img/loginbg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#login_box {
    max-width: 600px; /* 限制最大宽度 */
    width: 90%; /* 在小屏幕上使用较小的宽度 */
    height: auto; /* 自适应高度 */
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    border-radius: 10px;
    padding: 20px; /* 减少内边距 */
}

.login-form {
    width: 100%;
    padding: 20px;
    color: #ffffff;
    box-sizing: border-box;
}

.el-form-item {
    margin-bottom: 20px;
    display: flex; /* 让表单项为flex布局 */
    justify-content: space-between; /* 水平均分 */
    align-items: center; /* 垂直居中对齐 */
}

::v-deep .el-form-item__label {
  
  color: white;
}

.el-input__inner {
    background: transparent;
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
    flex: 1; /* 输入框自适应宽度 */
}

.el-button {
    width: 100%;
    border-radius: 10px;
    color: #fff;
    background-image: linear-gradient(to right, #30cfd0, #330867);
}

h2 {
    color: #ffffff90;
    margin-top: 20px;
}
</style>