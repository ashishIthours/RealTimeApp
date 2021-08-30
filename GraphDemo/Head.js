import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import logo from "../img/apple.png"
import BackArrow from "../img/Layer2.png"
export default function Head({navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.BackButtn}>
             <TouchableOpacity 
              onPress={()=>{navigation.navigate('Home')}}
              >
                <Image  source={BackArrow}  style={styles.backButton}/>
             </TouchableOpacity>
        </View>
        <View style={styles.textBox}>
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
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox:{
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
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

    BackButtn:{
    marginTop:"5%",
    marginBottom:"-7%",
    marginLeft:"5%",
    flexDirection:"row",
    alignItems:"center",
    width:"100%"
  },
});
