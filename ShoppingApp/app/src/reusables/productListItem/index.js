import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './ProductListItem.styles';

export const ProductListItem = ({item}) => {
  let name = item.productName ? item.productName : '';
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.searchImage}}
        style={styles.productImage}
        resizeMode={'cover'}
      />
      <Text>{name}</Text>
    </View>
  );
};
