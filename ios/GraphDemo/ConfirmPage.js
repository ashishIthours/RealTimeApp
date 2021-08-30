import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";
import Bg from "../img/Vector.png"
import BlackBg from "../img/mask.png"
import Apple from "../img/appleWhite.png"
import BackArrow from "../img/Layer2.png"

export default function ConfirmPage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.BackButtn}>
            <Image  source={BackArrow}  style={styles.backButton}/>
            <Text style={styles.confirmText}>Confirm purchase</Text>
        </View>
        <ImageBackground source={Bg} style={styles.image}>   
        </ImageBackground>
      </View>
      <View style={styles.BlackDivMain}>
        <View style={styles.BlackDiv}>
          <ImageBackground source={BlackBg} resizeMode="cover" style={styles.BlackBg}>   
              
              <View style={styles.logoBox}>
                  <Image  source={Apple}  style={styles.logo}/>
              </View>
              <Text style={styles.LogoHeadtext}>Apple Inc.</Text>
              <Text style={styles.LogoHeadtext2}>APPL</Text>
              <View style={styles.PriceBox}>
                  <Text style={styles.Price}>$30</Text>
                  <Text style={styles.PriceUSD}>USD</Text>
              </View>
              <Text style={styles.SharePrice}>0.13567 shares</Text>  
          </ImageBackground> 
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.HeadOder}>Order summary</Text>
          <Text style={styles.AboutText}>Apple Inc.is an American multinational techn-ology company that
                  specializes in consumer electronics, computer... View more
          </Text>
        </View>
       
        <View style={styles.ButtonMain}>
              <View style={styles.ButtonMainBox}>
                <Text style={styles.ButtonText}>Edit</Text>
              </View>
              <View style={styles.ButtonMainBox2}>
                <Text style={styles.ButtonText2}>Confirm</Text>
              </View>
        </View>
      </View>

     
     
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  main:{
    width:"100%",
    flexDirection:"row"
    // alignItems:"flex-end", 
  },
  image: {
    zIndex:0,
    height:170,
    width:200,
  },
  TopBox:{
    alignItems: "flex-start",
    justifyContent: 'center',
  },
  BlackDivMain:{
    marginTop:"-15%",
    flex: 10,
    width:"100%",
    height:"50%",
    paddingLeft:"5%",
    paddingRight:"5%",
  },
  BlackDiv:{
    flex: 5,
    backgroundColor:"#292929",
    width:"100%",
    height:"85%",
    zIndex:1,
    borderRadius:25,
  },
  BlackBg:{
    alignItems: 'center',
    zIndex:2,
    width:"100%",
    height:"100%",
  },
  AboutText:{
    color:"#101820",
    fontSize:14,
    lineHeight:25,
  },
  HeadOder:{
    marginTop:"10%",
    marginBottom:"2%",
    color:"#101820",
    fontSize:16,
    lineHeight:25,
  },
  TextBox:{
    flex:4,
  },
  ButtonMain:{
    flex:1,
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    marginBottom:'10%',
  },
  ButtonMainBox:{
    padding:20,
    width:"25%",
    backgroundColor:"#E9E7FE",
    display:"flex",
    alignItems:"center",
    borderRadius:15,
  },
  BackButtn:{
    marginTop:"-15%",
    marginLeft:"5%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:"50%"
  },
  confirmText:{
    fontSize:20,
    lineHeight:30,
    color:"#101820"
  },
  backButton:{
    height:25,
    width:25,
    marginRight:"3%",
  },
  ButtonText:{
    color:"#6A6DCD",
    fontSize:16,
    lineHeight:19,
  },
  ButtonMainBox2:{
    padding:20,
    width:"40%",
    backgroundColor:"#696DCC",
    display:"flex",
    alignItems:"center",
    borderRadius:15,
    marginRight:"5%",
  },
  ButtonText2:{
    color:"#FFFFFF",
    fontSize:16,
    lineHeight:19,
  },
  logoBox:{
    // backgroundColor:"grey",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"3%",
  },
  logo:{
    marginTop:"-13%",
    marginLeft:"-8%",
    height:140,
    width:70,
  },
  LogoHeadtext:{
    fontSize:20,
    lineHeight:30,
    color:"#fff",
  },
  LogoHeadtext2:{
    fontSize:12,
    lineHeight:18,
    color:"#fff",
    marginBottom:"6%",
  },
  PriceBox:{
    flexDirection:"row",
    alignItems:"flex-end"
  },
  Price:{
    fontSize:64,
    color:"#6A6DCD",
  },
  PriceUSD:{
    fontSize:16,
    lineHeight:50,
    color:"#6A6DCD",
    marginLeft:"3%",
  },
  SharePrice:{
    fontSize:14,
    lineHeight:21,
    color:"#fff",
  },
});
