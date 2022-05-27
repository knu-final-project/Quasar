<template>


<div id="event-handling">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>

</template>  
<script img = "ts">
import { defineComponent } from "vue";

export default defineComponent({
  name : "TestVue",
  data() {
    return {
      message: '한글화 테스트'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

)
</script>