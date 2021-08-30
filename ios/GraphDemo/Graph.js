import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Up from "../img/Frame.png"
import Down from "../img/down.png"
// import { LineChart, Grid } from 'react-native-svg-charts'

import {  LineChart,} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgb(0,0,0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: true, // optional
  fillShadowGradient:"#6A6DCD",
};

export default function Graph() {
    const data = {
      // labels: ["D", "W", "M", "Y", "All"],
      datasets: [
        {
          data: [10,15,20,15,25,20,45,30,35,65,75,85,55,85,75,85,35,65,75,85,45],
          color: (opacity = 1) => `rgb(31,4,73, ${opacity})`, // optional
          strokeWidth: 3, // optional
        }
      ],
      // legend: ["$1.40 (+0.12)"] // optional
    };
  return (
    <View style={styles.container}>
      <View style={styles.grapBox}>
        <LineChart
          segments={-1}
          data={data}
          width={screenWidth}
          height={300}
          chartConfig={chartConfig}
          withDots={false}
          withInnerLines={true}
          withOuterLines={false}
          withVerticalLines={false}
          bezier
        />
        <View>
            <View style={styles.flex}>
              <View style={styles.arrowFlex}>
                  <Image style={styles.upArroew} source={Up} />
                  <Text style={styles.graphDataUp}>Highest: $132.9 </Text>
              </View>
              <View style={styles.arrowFlex}>
                  <Image style={styles.upArroew} source={Down} />
                  <Text style={styles.graphDataDown}>Lowest: $124.4</Text>
              </View>
            </View>
            <View style={styles.flex1}>
                <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>D</Text>
                </View>
                <View style={styles.buttonBox1}>
                    <Text style={styles.buttonText}>W</Text>
                </View>
                <View style={styles.buttonBox1}>
                    <Text style={styles.buttonText}>M</Text>
                </View>
                <View style={styles.buttonBox1}>
                    <Text style={styles.buttonText}>y</Text>
                </View>
                <View style={styles.buttonBox1}>
                    <Text style={styles.buttonText}>All</Text>
                </View>
            </View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:"5%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grapBox:{
    // backgroundColor:"red",
    padding:0,
  },
  arrowFlex:{
    flexDirection: "row", 
    display:"flex",
    alignItems:"center",
  },
  flex:{
    flexDirection: "row",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"-15%",
    marginBottom:"10%",
  },
  flex1:{
    flexDirection: "row",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-evenly",
    marginTop:"-5%",
    marginBottom:"5%",
    marginLeft:"5%",
    marginRight:"5%",
  },
  graphDataUp:{
    color:"#34B78F",
    marginRight:"2%",
  },
  upArroew:{
    marginRight:3,
    height:15,
    width:15,
  },
  graphDataDown:{
    color:"#F2827F",
  },
  buttonBox:{
    width:'12%',
    height:"210%",
    backgroundColor:"#E9E7FE",
    borderRadius:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonBox1:{
    width:'12%',
    height:"230%",
    // backgroundColor:"#E9E7FE",
    borderRadius:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize:16,
    color:"#6A6DCD",
  },
});
