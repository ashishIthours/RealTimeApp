import * as React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default class SlideOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
    
        };
    }

    render() {
        return (
      <View style={{  flex: 1 }}>

          <View style={ styles.mainBox}>

            <View style={[styles.headBox, {flexDirection: "row"}]}>
                <View style={ styles.backBox}>
                    <Image style={ styles.arrow} source={require('../img/arrow.png')} />
                    <Image style={ styles.arrowTail} source={require('../img/backarrow1.png')} />
                </View>
                <View>
                  <Text style={ styles.headText}>My first Pie</Text>
                </View>
              </View>

            <View style={[styles.logoMainBox, {flexDirection: "column"}]}>
               <View style={[styles.logoLogoBox, {flexDirection: "row"}]}>
                  <Image style={ styles.blackCircle} source={require('../img/blackCircle.png')} />
                  <Image style={ styles.redCircle} source={require('../img/redCircle.png')} />
                </View>

               <View style={[styles.logoLogoBox, {flexDirection: "row"}]}>
                  <Image style={ styles.blackCircleLogo} source={require('../img/blackCircleLogo.png')} />
                  <Image style={ styles.redCircleLogo} source={require('../img/redCircleLogo.png')} />
               </View>
           </View>

           <View style={ styles.stockBox}>
              <Text style={ styles.stocksText}>Stocks list</Text>
            </View>

              <View style={[styles.containBox, {flexDirection: "row"}]}>
           
                   <Image style={ styles.containLogo} source={require('../img/chipotle.png')} />
              
                <View style={ styles.textBox}>
                  <Text  style={ styles.logoTitle}>CMG</Text>
                  <Text  style={ styles.logoText}>Chipotle Mexican Grill.</Text>
                </View>
                <Text style={ styles.logoPercent}>50%</Text>
              </View>
              <View style={{ borderBottomColor: '#9c9c9c', borderBottomWidth: 0.6,marginHorizontal:15,marginTop:"-1%" }}/>

              
              <View style={[styles.containBox, {flexDirection: "row"}]}>
           
                   <Image style={ styles.containLogo} source={require('../img/netflixIcone.png')} />
              
                <View style={ styles.textBox}>
                  <Text  style={ styles.logoTitle}>NFLX</Text>
                  <Text  style={ styles.logoText}>Netflix.</Text>
                </View>
                <Text style={ styles.logoPercent}>50%</Text>
              </View>
              <View style={{ borderBottomColor: '#9c9c9c', borderBottomWidth: 0.6,marginHorizontal:15,marginTop:"-1%" }}/>
          
            <View style={[styles.addBox, {flexDirection: "row"}]}>
                <Image style={ styles.circleIcone} source={require('../img/circle.png')} />
                <Image style={ styles.addIcone} source={require('../img/add.png')} />
                <Text style={ styles.iconeText}>Add new stock</Text>
            </View>

            <View style={ styles.button}>
              <Text style={ styles.buttonText}>SAVE PIE</Text>
            </View>
             

              
          </View>
           
            
      </View>
        );
    }
}

const styles = StyleSheet.create({
      mainBox:{
        height:"100%",
        width:"100%",
      },
      headBox:{
        height:"10%",
        width:"100%",
        alignItems:"center",
      },
      backBox:{
        marginTop:"2%",
        marginLeft:"6%",
      },
      arrow:{
      },
      arrowTail:{
        position:"relative",
        top:"-14%",
        left:"23%",
      },
      headText:{
        marginLeft:"27%",
        fontSize:32,
        fontWeight:"bold",
        color:"#2a2d49",
      },
      logoMainBox:{
        height:"30%",
        width:"100%",
        alignContent:"center",
        alignItems:"center",
        marginBottom:"5%",
        marginLeft:"2%"
      },
      logoLogoBox:{
        height:"88%",
        width:"100%",
      },
      redCircle:{
        marginLeft:"-62.5%",
        height:200,
        width:"30%",
      },
      redCircleLogo:{
        position:"absolute",
        right:'40%',
        top:"-87%",
      },
      blackCircle:{
        width:"70%",
         height:"100%",
         marginLeft:"14%",
         height:200,
      },
      blackCircleLogo:{
        position:"absolute",
        right:'4%',
        top:"-87%",
      },
      stockBox:{
        height:'10%',
        width:"100%",
        marginBottom:"-9%",
      },
      stocksText:{
        marginLeft:"5%",
        color:"#2a2d49",
        fontSize:22,
        fontWeight:"bold",
      },
      containBox:{
        marginTop:"2%",
        width:"100%",
        height:"10%",
      },
      containLogo:{
        marginLeft:"-20%",
        marginTop:"-10%",
      },
      textBox:{
        width:"50%",
        marginLeft:"-21%",
        marginTop:"3%",
      },
      logoTitle:{
        fontSize:16,
        color: "#2a2d49",
      },
      logoText:{
        fontSize:14,
        color: "#9c9c9c",
      },
      logoPercent:{
        marginTop:"5%",
        marginLeft:"15%",
        fontSize:22,
        color: "#2a2d49",
        fontWeight:"bold",
      },
      addBox:{
        height:"20%",
        width:"100%",
        marginTop:"-10%",    
        marginLeft:"33%",
      },
      addInnerBox:{

      },
      circleIcone:{
        marginTop:"0.5%",
        width:"6%",
      },
      addIcone:{
        marginTop:"0.5%",
        width:"6%",
        marginLeft:"-6%",
      },
      iconeText:{
        marginLeft:"2%",
        marginTop:"16%",
        fontSize:16,
        color:"#2a2d49",
        fontWeight:"bold",
      },
      button:{
        marginTop:"10%",
        marginHorizontal:"5%",
        backgroundColor:"#2e5ca9",
        borderRadius:20,
      },
      buttonText:{
        fontSize:16,
        color:"white",
        textAlign:"center",
        padding:"4%",
        fontWeight:"bold",
      },

});


