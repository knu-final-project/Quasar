<template>
  <div>
    new
  </div>
</template>
<script lang = "js">
import { defineComponent } from "vue";

export default defineComponent({
  name : 'TestDeep',
  setup(){
    const text = inject('text')
    return {text}
  }
})
</script>