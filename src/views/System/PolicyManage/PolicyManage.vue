<template>
  <el-button type="success" @click="addModal = true">新增政策</el-button>
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
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <!-- <el-button link type="primary" size="small" @click="handleClick(
          policy
        )">删除</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button> -->
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
        <el-date-picker
          v-model="add.UPDATE_DATE"
          type="date"
          :disabled-date="disabledDate"
        />
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
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
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

const handleClick = () => {
  console.log('click')
}
</script>

<style scoped>
</style>