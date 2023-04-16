<template>
  <el-form
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
  </template>

  <el-table :data="policy" style="width: 100%;" max-height="80vh">
    <el-table-column fixed prop="UPDATE_DATE" label="政策时间" />
    <el-table-column prop="POLICY_TITLE" label="政策标题" />
    <el-table-column prop="POLICY_ID" label="政策ID"/>
    <el-table-column prop="PROVINCE" label="省份"/>
    <el-table-column prop="CITY" label="城市"/>
    <el-table-column prop="POLICY_GRADE" label="政策等级"/>
    <el-table-column prop="POLICY_SOURCE" label="政策来源"/>
    <el-table-column prop="PUB_AGENCY" label="政策发布机构"/>
    <el-table-column prop="PUB_AGENCY_ID" label="政策发布ID"/>
    <el-table-column prop="PUB_AGENCY_FULLNAME" label="政策发布机构全名"/>
    <!-- <el-table-column prop="POLICY_BODY" label="政策全文"/> -->
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="addModal" title="新增政策信息">
    <el-form :model="add">
      <el-form-item label="政策标题">
        <el-input v-model="add.POLICY_TITLE" />
      </el-form-item>
      <el-form-item label="政策来源">
        <el-input v-model="add.POLICY_SOURCE"/>
      </el-form-item>
      <el-form-item label="政策发布机构">
        <el-input v-model="add.PUB_AGENCY"/>
      </el-form-item>
      <el-form-item label="政策发布机构全名">
        <el-input v-model="add.PUB_AGENCY_FULLNAME"/>
      </el-form-item>
      <el-form-item label="省份">
        <el-input v-model="add.POLICY_SOURCE"/>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-input v-model="add.PUB_NUMBER"/>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="add.UPDATE_DATE"/>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="add.CITY"/>
      </el-form-item>
      <el-form-item label="政策全文">
        <el-input
          v-model="add.POLICY_BODY"
          autosize
          type="textarea"
        />
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
import { addPolicy , getAllPolicys } from '@/api/system/policy'

let addModal = ref(false)
const add = reactive({
  CITY: '',
  POLICY_BODY: '',
  POLICY_GRADE: '',
  POLICY_SOURCE: '',
  POLICY_TITLE: '',
  POLICY_TYPE: '',
  PUB_AGENCY: '',
  PROVINCE: '',
  PUB_AGENCY_FULLNAME: '',
  PUB_NUMBER: '',
  UPDATE_DATE: ''
})
const create = ()=>{
  addPolicy(add).then(()=>{
    addModal.value = false
  })
}

// 获取政策
let policy = ref([])
getAllPolicys(1).then((data)=>{
  console.log(data);
  data.forEach(element => {
    policy.value.push(element._source)
  });
  console.log(policy.value);
  
  // policy.value.push(...data)
})

/*
*   搜索表单
*/
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  userName: 'Hello',
})

// 表单规则： trigger	验证逻辑的触发方式  类型：blur 失去焦点 change 值改变
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})

// 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
]
const handleClick = () => {
  console.log('click')
}
</script>

<style scoped>
</style>