
<template>    
    <div class="box">
        <h2>Grand Parent Component</h2>
        <input type="text" @input="getData($event)"/>
        <FamParent/>
    </div>
</template>
 
<script>
import { computed } from 'vue'
  
    import FamParent from "./parent.vue"
    export default {
        data(){
            return{
                datas:""
            }
        },
        name : "FamGrand",
        components: { 
          FamParent
        },
        
        methods:{
            getData(nt){
                this.datas = nt.target.value
            }
        },
        provide () {
            return{
                message:computed(()=>this.datas)
                
            }
        },
    }
</script>
 
<style>
   .box{
    border:  2px solid rgb(221, 71, 71);
    padding: 10px;
    margin: 10px;
    text-align: left;
    max-width: 600px;
   }
</style>