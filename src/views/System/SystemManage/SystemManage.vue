<template>
  <el-button type="success" @click="addModal = true">新增管理员</el-button>
  <el-table :data="manage" style="width: 100%;">
    <el-table-column fixed prop="id" label="管理员ID" />
    <el-table-column prop="name" label="管理员用户名" />
    <el-table-column prop="password" label="管理员密码"/>

    <el-table-column fixed="right" label="Operations" width="160">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">编辑权限</el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="addModal" title="新增管理员">
    <el-form :model="add">
      <el-form-item label="用户名">
        <el-input v-model="add.userName" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="add.UserPwd"/>
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
import type { FormInstance, FormRules } from 'element-plus'
import { getAllAdmins } from '@/api/system/manage'

let manage = ref([])
getAllAdmins().then((data:Array)=>{
  console.log(data);
  manage.value.push(...data)
})

let addModal = ref(false)
const add = reactive({
  
})
const handleClick = () => {
  console.log('click')
}
</script>

<style scoped>
</style>