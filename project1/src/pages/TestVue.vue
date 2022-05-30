
<template>
  
  <div class = "text-h1 text-weight-thin text-center" 
  style = "background-color : rosybrown">
  생생건강통
    <q-btn
      color = "deep-purple-9" 
      icon = "check" 
      label = "ok"/>
    
  </div>
  <q-card class = "my-card q-ma-lg shadow-13">
    <img src ="https://cdn.quasar.dev/img/mountains.jpg">
    <q-card-section>
      <div class = "text-h6">
        Our Changing Planet
      </div>
      <div class = "text-subtitle2">
        by Jone Doe
      </div>
    </q-card-section>
  </q-card>

<div>
  <TestRow/>
</div>
</template>



<script lang = "js">
import { defineComponent} from 'vue'
//import TestRow from 'components/grid/TestRow.vue'

export default defineComponent({


  name : 'TestVue',

  setup (){
    //

  }
})

</script>
