<template>
    <div class="wrapper">
        <div id="login_box">
            <h2>登  录</h2>
            <el-radio-group v-model="loginType" class="login-type-switch">
                <el-radio-button label="phone">手机号</el-radio-button>
                <el-radio-button label="email">邮箱</el-radio-button>
            </el-radio-group>
            <el-form
                ref="LoginForm"
                :model="form"
                label-width="120px"
                label-position="left"
                :rules="rules"
                class="login-form"
            >
                <el-form-item v-if="loginType === 'phone'" label="手机号" prop="phoneNumber" class="label-color">
                    <el-input v-model="form.phoneNumber" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item v-if="loginType === 'email'" label="邮箱" prop="email" class="label-color">
                    <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="label-color">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码" class="login-input"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitLogin" :plain="true" class="login-button">登录</el-button>
                </el-form-item>
                
            </el-form>
            <div class="register-prompt">
                还未注册？<router-link to="/register" class="register-link">点我！</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const loginType = ref('phone'); // 默认登录方式为手机号

const form = reactive({
    loginType: loginType.value,
    phoneNumber: '',
    email: '',
    password: ''
});

// 使用ref获取表单的引用
const LoginForm = ref(null); // 创建LoginForm的引用


// 定义表单验证规则
const rules = reactive({
    phoneNumber: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { 
          pattern: /^1[3-9]\d{9}$/, 
          message: '手机号格式不正确',
          trigger: 'blur' 
        },
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

// 监测登录方式切换
watch(loginType, (newType) => {
    // 只要切换登录方式，将输入框重置
    form.phoneNumber = '';
    form.email = '';
    form.loginType = newType; //更新form中的loginType
});

// 表单提交
const submitLogin = async () => {
    console.log('submitLogin 被调用');
    try {

        await LoginForm.value.validate(); // 验证表单输入
        console.log('表单验证成功');
        const loginData = {
            loginType: loginType.value,
            password: form.password,
            ...(loginType.value === 'phone' ? { phoneNumber: form.phoneNumber } : { email: form.email })
        };
        console.log('表单数据:', loginData); 

        const response = await axios.post('/api/users/login', loginData);
        console.log('响应数据:', response.data); // 在请求后确认输出响应数据
        if (response.data.status === 200) {
            ElMessage.success('登录成功！');
            // 登录成功后可以进行页面跳转，比如去首页
            // this.$router.push('/home');
        } 
        else if (response.data.status === 1005) {
            ElMessage.warning('用户名或密码错误！');
        }
        else {
            const errorMessage = response.data.message || '登录失败，未知错误！';
            ElMessage.error(errorMessage);
        }
    } catch (error) {
        console.error('登录请求出错:', error);
        // ElMessage.error('登录请求出错！');
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
    font-size: 17px; /* 字体大小 */
    font-weight: bold; /* 加粗 */
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
    margin-bottom: 20px;
}

.login-type-switch {
    margin-bottom: 20px;
}

.register-prompt {
    margin-top: 20px; /* 添加一些上外边距 */
    color: #ffffff; /* 文本颜色 */
}

.register-link {
    color: #30cfd0; /* 链接颜色 */
    text-decoration: underline; /* 下划线 */
    cursor: pointer; /* 鼠标样式 */
}
</style>
