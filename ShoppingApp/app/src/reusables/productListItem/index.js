import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './ProductListItem.styles';

export const ProductListItem = ({item}) => {
  let name = item.productName ? item.productName : '';
  let isDiscount = item.discountType !== '' ? true : false;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.searchImage}}
        style={styles.productImage}
        resizeMode={'cover'}
      />
      <Text style={styles.productName} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{'\u20b9' + item.price}</Text>
        {isDiscount && (
          <Text style={styles.mrpText}>{'\u20b9' + item.mrp}</Text>
        )}
        {isDiscount && (
          <Text style={styles.discountedPrice}>
            {item.discountDisplayLabel}
          </Text>
        )}
      </View>
    </View>
  );
};
