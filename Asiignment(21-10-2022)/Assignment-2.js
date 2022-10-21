import { Text, View , SafeAreaView, StyleSheet, Platform, Pressable} from "react-native";
import { useState } from "react";
export default function App() {
  let [color1,updateColor] = useState("#CDDDDC")
  let ChangeColor=(color)=>{
    updateColor(color)
  }
  return<View style={[styles.container,{backgroundColor:color1}]}>
         <View style={styles.footer}>

        <Text title="clickMe" onPress={()=>ChangeColor('#ccc5b9')} style={{ paddingTop: 50,flex:2.5, backgroundColor: '#ccc5b9', width: 100, height: 100}}></Text>


        <Text title="clickMe" onPress={()=>ChangeColor('#403d39')} style={{ paddingTop: 50,flex:2.5, backgroundColor: '#403d39', width: 100, height: 100}}></Text>

        <Text title="clickMe" onPress={()=>ChangeColor('#252422')} style={{ paddingTop: 50,flex:2.5, backgroundColor: '#252422', width: 100, height: 100}}></Text>

        <Text title="clickMe" onPress={()=>ChangeColor('#eb5e28')} style={{ paddingTop: 50,flex:2.5, backgroundColor: '#eb5e28', width: 100, height: 100}}></Text>
        </View>

      </View>

}
const styles = StyleSheet.create({

  container:{

    flex : 1,

    flexDirection:"column",

    paddingTop : Platform.OS == 'android' ? 20:0

  },

  footer:{
    flex:1,
    alignItems:"flex-end",
    flexDirection:"row",

  },

  text:{

    textAlign : "center",

    lineHeight : 150

  }

})