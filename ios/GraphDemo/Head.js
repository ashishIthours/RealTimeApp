import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import logo from "../img/apple.png"

export default function Head() {
  return (
    <View style={styles.container}>
        <View>
          <Image style={styles.Logo} source={logo} />
        </View>
        <View style={styles.inLineItem}>            
                <Text style={styles.AppleText}>Apple</Text>
                <Text style={styles.AppletTextSpan}>(APPL)</Text>     
        </View>
        <Text style={styles.GraphData}>$ 129.64</Text>
        <Text style={styles.graphTextGreen}>+$1.40 (+0.12)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inLineItem:{
    margin:"3%",
    flexDirection: "row",
    display:"flex",
    alignItems:"center",
  },
  Logo:{
   height:30,
   width:30,
  },
  AppleText:{
    fontSize:16,
    lineHeight:18.75,
    fontWeight:"900",
    color:"#101820",
    marginRight:"1%",
  },
  AppletTextSpan:{
    fontSize:13,
    fontWeight:"900",
    color:"#101820",
    opacity: 0.5,
  },
  GraphData:{
    fontSize:32,
    fontWeight:"bold",
    color:"#101820",
    lineHeight:38,
  },
  graphTextGreen:{
    fontSize:16,
    lineHeight:19,
    color:"#54BF99",
  },
});
