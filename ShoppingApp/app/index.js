/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/config/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <SafeAreaView>
          <View>
            <Text>{'Hi'}</Text>
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}
