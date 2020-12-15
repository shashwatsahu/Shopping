import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './header.styles';
import {ic_arrow} from '../../assets/images/ic_arrow';

export const Header = (props) => {
  return (
    <View style={styles.container}>
      {props.isBack && (
        <TouchableOpacity hitSlop={{left: 20, top: 20, bottom: 20, right: 20}} onPress={props.onPressBack}>
          <Image
            style={styles.arrowStyle}
            source={ic_arrow}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{props.name}</Text>
    </View>
  );
}