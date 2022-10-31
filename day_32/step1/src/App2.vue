<template>
    <div>
        <h1>{{title}}</h1>
        <h2>Anmol's Power {{power}}</h2>
        <h3>{{message}}</h3>
        <button @click="power++" v-bind:disabled="show">Increase</button>
    </div>
</template>

<script>

export default ({
    data() {
        return{
            title:"Welcome to Anmol's Life",
            power:0,
            message:"",
            show:false
        }
    },
    watch:{
        power(npower){
            if(npower<5){
                this.message="Anmol is not ready"
            }
            else if(npower>=5 && npower<=10){
                this.message="Anmol is ready to fight"
            }
            else {
                this.message="Power is enough Anmol can easily beat the enemy"
                this.power=10
                this.show=true
            }
        }
    }
})
</script>

<style>

</style>
