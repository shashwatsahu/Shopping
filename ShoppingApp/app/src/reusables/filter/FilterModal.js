import React from 'react';
import {View, Text, Image, Modal, FlatList} from 'react-native';
import {styles} from './filter.styles';
import {Header} from '../header';

export const FilterModal = (props) => {
  return (
    <View>
      <Modal animationType="slide" visible={props.modalVisible}>
        <Header name={'Category'} isBack onPressBack={props.onShowModal} />
      </Modal>
    </View>
  );
};
