<template>
    <div>
        <h1>{{ title }}</h1>
        <h2> {{ power }} </h2>
        <button @click="myFun">Click Me</button>
        <button v-bind:onmouseover="myFun">Click Me</button>
        <br>
        <br>
        <button @click="power++">Increase Button</button>
        <button @click="power--">Decrease Power</button>
        <br>
        <br>
        <input type="range" @input="setPower($event)">
        <br>
        <br>
        <button @click="setPower1(50)" >hello</button>
    </div>
</template>

<script>
export default{
    data() {
        return{
            title:"Method Events Computed",
            power:0
        }
    },
    methods:{
        myFun(){
            alert("Hello")
        },
        setPower(evt){
            this.power = evt.target.value
        },
        setPower1(evt){
            this.power = evt
        }
    }
}
</script>

<style></style>
