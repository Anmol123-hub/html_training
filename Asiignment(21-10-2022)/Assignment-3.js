import { useState } from "react";
import batman from "./assets/images/batman.jpg"
import superman from "./assets/images/superman.jpg"
import antman from "./assets/images/antman.jpg"
import thor from "./assets/images/thor.jpg"
import { ActivityIndicator, Button, Text,View,StyleSheet, Platform,Image } from "react-native";
export default function App(){

  let [name,updateName] = useState({title:'',firstname:'',lastname:'',image:''})
  let changeImage=(e)=>{
    if(e==="batman"){
      updateName({
        title:"Batman",
        firstname:"Bruce",
        lastname:"Wayne",
        image:batman
      })
    }
    else if(e==="superman"){
      updateName({
        title:"Superman",
        firstname:"Clark",
        lastname:"Kent",
        image:superman
      })
    }
    else if(e==="antman"){
      updateName({
        title:"Antman",
        firstname:"Scott",
        lastname:"Lang",
        image:antman
      })
    }
    else{
      updateName({
        title:"Thor",
        firstname:"Chris",
        lastname:"Hemsworth",
        image:thor
      })
    }
  }
  return(    
    <View style={mystyle.viewstyle}>

      <View>
        <Text style={{fontSize:42}}>Your Favourite Hero</Text>
      </View>
      <Text/>
      <View style={{borderColor:'red',borderBottomWidth:1,borderTopWidth:1}}>
        <Text style={{fontSize:32}}>
        Title : {name.title}{"\n"}  
        Firstname: {name.firstname}{"\n"}
        Lastname: {name.lastname}</Text>
        <Image source={name.image}></Image>
        <Text/>
      </View>

      <View style={{flexDirection:"row"}}>
        <Button onPress={()=>changeImage("batman")} title="Batman"></Button>
        <Button onPress={()=>changeImage("superman")} title="Superman"></Button>
        <Button onPress={()=>changeImage("antman")} title="Antman"></Button>
        <Button onPress={()=>changeImage("thor")} title="Thor"></Button>

      </View>

     </View>
   
  )
}
let mystyle = StyleSheet.create({
  viewstyle:{
    flex:1,justifyContent:'center',alignItems:'center',paddingTop: Platform.OS ==="android"?30:0,backgroundColor:"#b9fbc0"
  }
})