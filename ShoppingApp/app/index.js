/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/config/store';
import ProductList from './src/components/productList/ProductList.component';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <ProductList />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
