import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useuUserInfoStore = defineStore('userInfo', () => {
  const isLogin = ref(false)
  function login(){
    isLogin.value = true
  }

  return { isLogin , login }
})
