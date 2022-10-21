import * as React from 'react';

import { Text, View, StyleSheet,Image, Platform} from 'react-native';

export default function App() {

  return<View style={styles.container}>

        <View style={styles.header}>

          <Text style={styles.text}>{"Header"}</Text>

        </View>

        <View style={styles.content}>

          <Text style={styles.text}>{"Content"}</Text>

        </View>

        <View style={styles.footer}>

          <Text style={styles.text}>{"Footer"}</Text>

        </View>

      </View>

}

const styles = StyleSheet.create({

  container:{

    flex : 1,

    flexDirection:"column",

    paddingTop : Platform.OS == 'android' ? 20:0

  },

  header:{

    flex : 2,

    backgroundColor:"cyan"

  },

  content:{

    flex : 5,

    backgroundColor:"yellowgreen"

  },

  footer:{

    flex : 3,

    backgroundColor:"#AFC6CD"

  },

  text:{

    textAlign : "center",

    lineHeight : 150

  }

})