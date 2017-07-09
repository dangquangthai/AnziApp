/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, TextInput,
  View
} from 'react-native';

export default class AnziApp extends Component {
  render() {
    return (
      <View style={styles.global.mainContainer}>
        <SearchBar showOnLoad hideBack
          placeholder="Ăn gì"
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import SearchBar from 'react-native-searchbar'
import styles from './styles';

AppRegistry.registerComponent('AnziApp', () => AnziApp);
