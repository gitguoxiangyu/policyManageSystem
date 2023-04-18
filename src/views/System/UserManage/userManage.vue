<template>
  <!-- <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    inline
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="ruleForm.userName" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        搜索
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
  <template>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </template> -->
  <el-button type="success" @click="addModal = true">新增用户</el-button>
  <el-table :data="user" style="width: 100%;">
    <el-table-column fixed prop="id" label="用户ID" />
    <el-table-column prop="UserName" label="用户名" />
    <el-table-column prop="password" label="用户密码"/>
    <el-table-column prop="age" label="用户年龄"/>
    <el-table-column prop="email" label="用户邮箱"/>
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <!-- <el-button link type="primary" size="small">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="addModal" title="新增用户">
    <el-form :model="add">
      <el-form-item label="用户名">
        <el-input v-model="add.userName" />
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="add.password"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addModal = false">取消</el-button>
        <el-button type="primary" @click="create">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { getAllUsers , createUser} from '@/api/system/user'

// 搜索展示
const user = ref([])
getAllUsers().then((data:Array)=>{
  user.value.push(...data)
})

// 新增用户
const addModal = ref(false)
const add = reactive({
  userName: '',
  password: ''
})
const create = ()=>{
  createUser(add).then(()=>{
    addModal.value = false
    getAllUsers().then((data:Array)=>{
    user.value.push(...data)
})
  })
}

const handleClick = () => {
  console.log('click')
}
</script>

<style scoped>
</style>