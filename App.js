/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { fxaAuth } from 'fxa-react-native-app-auth';

// example config
const config = {
  clientId: '22d74070a481bc73',
  redirectUrl: 'test-client://redirect',
  scopes: ['profile']
};

async function startFxA() {
// use the client to make the auth request and receive the authState
  try {
    const result = await fxaAuth(config);
    ToastAndroid.show('Result: ' + JSON.stringify(result), ToastAndroid.LONG);
    // result includes accessToken, accessTokenExpirationDate
  } catch (error) {
    console.log(error);
    ToastAndroid.show('Error: ' + error, ToastAndroid.LONG);
  }
}

setTimeout(() => {
  startFxA();
}, 2000);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
