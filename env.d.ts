/// <reference types="vite/client" />
// 防止 import vue文件时报错   报错信息：找不到模块“@/views/MainPage/mainPage.vue”或其相应的类型声明。ts(2307)
// 报错原因：ts只支持导出导入模块，但是vue不是模块
// 此处代码作用 ， 声明vue文件是一个模块，ts可以导入
declare module '*.vue' {
  import type { ComponentOptions, DefineComponent } from 'vue'
  const component: ComponentOptions | ComponentOptions['setup']
  export default component
}