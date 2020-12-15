import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ic_checkmark} from '../../assets/images/ic_checkmark';
import {styles} from './filter.styles';

export const FilterListItem = ({selectedItem, name, onSelectCategory}) => {
  return (
    <TouchableOpacity
      style={styles.filterItemContainer}
      onPress={() => onSelectCategory(name)}>
      <Image
        style={[styles.checkMark, selectedItem && styles.selectedCheckMark]}
        source={ic_checkmark}
        resizeMode={'contain'}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
