import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  { ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity }  from 'react-native';
import BlackBg from "../img/Group.png"
import Apple from "../img/appleWhite.png"

export default function StartInvesting({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.BlackDiv}>
          <ImageBackground source={BlackBg} resizeMode="cover" style={styles.BlackBg}>   
               
               <View style={styles.TopMainBox}>
                    <View style={styles.logoBox}>
                            <Image  source={Apple}  style={styles.logo}/>
                        </View>
                        <Text style={styles.OderText}>Order placed!{"\n"}
                        Market sell 0.1234 shares{"\n"}
                        of Apple
                        </Text>
                        <View style={styles.TextBox}>
                            <Text style={styles.TextLeftside}>Total estimated value of </Text>
                            <Text style={styles.TextGreen}>$20.1</Text>
                        </View>
                        <Text style={styles.ViewText}>View details</Text>

                        <Text style={styles.LovingText}>Loving Flahmingo?</Text>
                        <Text style={styles.ViewText}>Invite a friend </Text>
                </View> 
               
            
                <View style={styles.ButtonMain}>
                    <TouchableOpacity style={styles.ButtonMainBox2}
                    onPress={()=>{navigation.navigate('Home')}}
                    >
                        <Text style={styles.ButtonText2}>Great!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground> 
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
      BlackDiv:{
        // flex: 5,
        backgroundColor:"#292929",
        width:"100%",
        height:"103%",
        zIndex:1,
      },
      BlackBg:{
        flex: 10,
        zIndex:2,
        width:"100%",
        height:"103%",
      },
      logoBox:{
        marginBottom:"10%",
      },
      logo:{
        marginLeft:"-3%",
        height:140,
        width:70,
      },
      OderText:{
          fontSize:24,
          lineHeight:35,
          fontWeight:"600",
          color:"#fff",
          marginBottom:"8%",
          
      },
      TextBox:{
        flexDirection:"row",
      },
      TextLeftside:{
        fontSize:16,
        lineHeight:25,
        color:"#fff",
        marginBottom:"3%",
      },
      TextGreen:{
        fontSize:16,
        lineHeight:25,
        color:"#34B78F",
      },
      ViewText:{
        fontSize:16,
        lineHeight:20,
        color:"#6A6DCD",
      },
      LovingText:{
        fontSize:16,
        lineHeight:20,
        color:"#fff",
        marginTop:"14%",
        marginBottom:"3%",
      },
      TopMainBox:{
        flex:10,
        marginLeft:"5%",
      },
      ButtonMain:{
          padding:"5%",
        flex:1,
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        marginBottom:'10%',
      },
      ButtonMainBox2:{
        padding:20,
        width:"100%",
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

});
