<template>
  <div class="container">
    <h2 >{{title}}</h2>
    <h3>Hero's Full Name {{firstname+" "+lastname}}</h3>
    <h3>Hero's Power is {{funG1}} </h3>
    <h1>Power {{power}}</h1>
    <button @click="accessPower=10"> hello</button>
  </div>
</template>

<script>

export default({
  name:"App",
  data() {
    return{
      title:"Superhero",
      firstname:"Peter",
      lastname:"Parker",
      total:0,
      power:0,
      avengers:[
        {title:"Spiderman",power:6},
        {title:"Ironman",power:7},
        {title:"Dr Strange",power:8},
        {title:"Hulk",power:9},
        {title:"Thor",power:8},
      ]
    }
  },
  computed:{
    funG1(){
     return this.avengers.reduce( (acc,item) => {
        return acc + item.power
     }, 0)
    },
    accessPower:{
      get(){return this.power},
      set(npower){return this.power = npower}
    },
  },
  methods:{
    funG(){
      return this.avengers.reduce( (acc,item) => {
        return acc + item.power
    }, 0)
   
    }
  }

})
</script>
<style>
.container{
  display: block;
  margin:auto;

}

</style>
