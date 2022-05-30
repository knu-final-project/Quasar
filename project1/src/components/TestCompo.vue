<template>
  <div>
    text : {{text}}
    <slot />
  </div>
  <div>
    upper: {{text.toUpperCase()}}
  </div>
  <div>
    deep : <TestDeep ; text = "text"/>
  </div>
</template>

<script lang="js">
import { defineComponent, computed } from "vue";
import TestDeep from 'components/TestDeep.vue';

export default defineComponent({
  name : 'TestCompo',
  props: {
    text :{
      type: String,
      default : () => 'abcd'
    }
  },

  setup(props)
  {
    const upper = computed(() => props.text) 
    return {upper}

  }
})
</script>

