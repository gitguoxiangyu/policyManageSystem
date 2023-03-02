<template>
  <div class="body">
    <div class="inputContainer">
      <div class="containerHead">用户管理系统</div>
      <el-form :model="form" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
      </el-form>
      <el-button size="large" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    let form = reactive({
      username: '',
      password: ''
    })

    return {
      form
    }
  }
})
</script>

<style scoped>
.body{
  height: 100%;
  width: 100%;
  background-image: url(assets/image/back.jpg);
  background-size: cover;
}
.inputContainer{
  width: 25%;
  min-width: 300px;
  margin: auto;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: white;
}
.containerHead{
  text-align: center;
  margin: 15px auto;
}
</style>