<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'indexPage',
  setup(){
    let msg:string = 'Hello World!'
    return {
      msg
    }
  }
})
</script>

<style>

</style>