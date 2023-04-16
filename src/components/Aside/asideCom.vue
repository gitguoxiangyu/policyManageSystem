<template>
  <div class="main">
    <div class="head">
      问政查策-政策检索系统
    </div>
    
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="/"
        text-color="#fff"
        @select="handleOpen"
        @close="handleClose"
        style="border: 0;" 
      >
      <!-- border： 0 消除白边 -->
        <el-menu-item index="/" router>
            <el-icon><location /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/usermanage" router>
          <el-icon><icon-menu /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/manager">
          <el-icon><document /></el-icon>
          <span>系统管理</span>
        </el-menu-item>
        <el-menu-item index="/policy">
          <el-icon><document /></el-icon>
          <span>政策管理</span>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import router from "@/router";

let msg = ref("666")
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  router.replace({
    path: key
  })
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.main{
  box-sizing: border-box;
  width: 98%;
  height: 100%;
  padding-top: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: rgb(84,92,100);;
  box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
}

.head{
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.el-menu-vertical-demo{
  width: 100%;
  padding: 0;
}
</style>