import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './bottomBar.styles';
import {ic_filter} from '../../assets/images/ic_filter';

export const BottomBar = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onBottomPress}>
      <View style={styles.filterContainer}>
        {props.showIcon && (
          <Image
            style={styles.iconStyle}
            source={ic_filter}
            resizeMode={'contain'}
          />
        )}
        <Text style={styles.filterText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
