<template>
    <div>
        <img :src="herophto" >
    <HomeComp title="Superman" :version="version"/>
    <AppHero details="details about batman comes here " title="Batman" :power="7" photo="http://tooncrush.com/valtech/batman.jpg" />
    <AppHero details="details about antman comes here " title="Antman" :power="7" photo="http://tooncrush.com/valtech/antman.jpg" />
    </div>
    
</template>
<script>
    import HomeComp from "./components/home.vue"
    import AppHero from "./components/apphero.vue";
    export default({
        data(){
            return{
                version:200,
                herophto :  require('./assets/logo.png')
            }
        },
        components:{
            HomeComp,
            AppHero
        }
    })
</script>
<style></style>