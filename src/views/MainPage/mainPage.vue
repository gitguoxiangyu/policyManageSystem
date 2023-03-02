<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'mainPage',
  setup(){
    let msg:string = 'Hello World!'
    return {
      msg
    }
  }
})
</script>
