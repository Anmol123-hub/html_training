<template>
  <div >
    <h1>{{title}}</h1>
    <h2 v-text="age*20"></h2>
    <h2 v-text="title.toLocaleUpperCase()" v-bind:class="dynamicClass"></h2>
    <div v-html="message"></div>
    <button v-bind:disabled="show"> Click me</button>
    <input type="checkbox" v-model="show" >
    <fieldset v-bind:hidden="!show">
      <legend>Terms and condition</legend>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea autem iste quidem, tempora asperiores, odit quas, rerum similique blanditiis hic enim consectetur adipisci non quos? At doloribus nisi voluptatum perspiciatis?</p>
    </fieldset>
    <hr>

    <div v-bind:class="['box','brdr']">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque perferendis, minus necessitatibus sequi amet magnam fugiat ea optio in corrupti ab officiis pariatur sit maiores, dolorem ipsam, alias nulla?</p>
    </div>
    <div v-bind:class="{'female' : gender ===  'female'}">
      <p>gender</p>
    </div>
  </div>

</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      title:"Anmol varshney",
      age:20,
      message:"<p>Hello, What is your name</p>",
      dynamicClass:"change",
      show:false,
      gender:"female"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@keyframes Anmol {
  from{
    color:white ;
  }
  to{
    color:darkblue;
    border: 40px double green;

  }
}
.change{
  animation-name: Anmol;
  animation-duration: 3s;
}
.box{
  background-color: cadetblue;
  width: 200px;
  padding: 10px;
  animation: Anmol 3s;
  height: 200px;
}
.brdr{
  border:20px double red;
}
.female{
  color:white;
  background-color: darkmagenta;
}
</style>
