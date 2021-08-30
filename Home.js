import * as React from 'react';
import { Dimensions, Button, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Head from "./GraphDemo/Head";
import Graph from "./GraphDemo/Graph";
import  GraphButton from "./GraphDemo/Button";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View style={styles.container}>
      <View>
        <Head {...this.props}/>
        <Graph/>
        <GraphButton {...this.props}/>
      </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding:"5%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
