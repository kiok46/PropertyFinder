/*
Thanks to these guys for this awesome example.
https://www.raywenderlich.com/126063/react-native-tutorial
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  NavigatorIOS,
  View
} from 'react-native';

//var React = require('react')
//var ReactNative = require('react-native')

var SearchPage = require('./SearchPage')


class HelloWorld extends Component{
    _onForward = () => {
        this.props.navigator.push({
            title: 'Scene ' + nextIndex,
        })
    }
    render() {
        return(
            <View style={styles.subcontainer}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.android.js
              </Text>
              <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Shake or press menu button for dev menu
              </Text>
            </View>
        );
    }
}


export default class PropertyFinder extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.navcontainer}
          initialRoute={{
            title: 'Property Finder',
            component: SearchPage,
            passProps: {myprop: 'foo'}
          }}/>
    );
  }
}

const styles = StyleSheet.create({
  navcontainer: {
    flex: 1,
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
