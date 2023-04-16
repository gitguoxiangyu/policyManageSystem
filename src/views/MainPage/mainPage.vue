<template>
  <div class="main">
    <el-container>
      <el-aside width="250px">
        <asidecom/>
      </el-aside>
      <el-container>
        <el-header style="box-shadow: 0px 1px 1px rgb(0 21 41 / 35%);"></el-header>
        <el-main><RouterView/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import asidecom from '@/components/Aside/asideCom.vue'

export default defineComponent({
  name: 'mainPage',
  components:{
    asidecom
  },
  setup(){
    let msg:string = 'Hello World!'
    return {
      msg
    }
  }
})
</script>

<style scoped>
.main{
  height: 100vh;
}
</style>
