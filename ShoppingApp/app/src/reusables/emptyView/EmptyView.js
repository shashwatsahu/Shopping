import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LOADING} from '../../assets/strings';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {heightScale} = Scaling;

export const EmptyView = () => (
  <View style={styles.container}>
    <Text>{LOADING}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: heightScale(20),
  },
});
