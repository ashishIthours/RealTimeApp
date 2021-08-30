import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function Buttons( {navigation}) {
  
  return (
    <View style={styles.container}>
        <View style={styles.flex}>
            <TouchableOpacity style={styles.buyButton} 
              onPress={()=>{navigation.navigate('ConfirmPage')}}
             >
                <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.sellButton}>
                <Text style={styles.sellButtonText}>Sell</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.AboutHead}>About</Text>
            <Text style={styles.AboutText}>Apple Inc.is an American multinational techn-ology company that
                specializes in consumer electronics, computer... View more
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-around",
    marginLeft:"5%",
    marginRight:"5%",
    marginTop:"2%",
  },
  flex:{
    flexDirection: "row",
    width:"100%",
  },
  buyButton:{
    padding:20,
    width:"60%",
    backgroundColor:"#696DCC",
    display:"flex",
    alignItems:"center",
    borderRadius:15,
    marginRight:"5%",
  },
  buyButtonText:{
    color:"#FFFFFF",
    fontSize:16,
    lineHeight:19,
  },
  sellButton:{
    padding:20,
    width:"35%",
    backgroundColor:"#E9E7FE",
    display:"flex",
    alignItems:"center",
    borderRadius:15,
  },
  sellButtonText:{
    color:"#6A6DCD",
    fontSize:16,
    lineHeight:19,
  },
  AboutHead:{   
      color:"#101820",
      fontSize:24,
      lineHeight:30,
      fontWeight:"bold",
      marginBottom:"3%",
      marginTop:"5%",
  },
  AboutText:{
    color:"#101820",
    fontSize:16,
    lineHeight:25,
  }
});
