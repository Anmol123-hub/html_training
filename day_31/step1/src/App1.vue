<template>
  <div>
    <h1>{{title}}</h1>
  <input type="range" min="1" max="5" v-model="power">
  <h2 v-if="power === '1'">Power is 1</h2>
  <h2 v-if="power === '2'">Power is 2</h2>
  <h2 v-if="power === '3'">Power is 3</h2>
  <h2 v-if="power === '4'">Power is 4</h2>
  <h2 v-else-if="power > '4'">Power is more</h2>
  <input type="checkbox" v-model="show">
  <fieldset v-show="show">
    <legend>Terms and Condition</legend>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid placeat dolore magni sequi necessitatibus est tempore recusandae ex quas excepturi reprehenderit pariatur delectus doloremque, libero consequatur ipsum suscipit, nihil veritatis.</p>
  </fieldset>
  <input type="number" v-model="money"/>
  </div>
</template>

<script>


export default ({
  data() {
    return{
      title:"Welcome to your life",
      power:'1',
      show:false,
      
    }
  },
})
</script>
