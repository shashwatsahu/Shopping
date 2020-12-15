import React from 'react';
import {View, Text, Image, Modal, FlatList} from 'react-native';
import {styles} from './filter.styles';
import {Header} from '../header';
import {FilterListItem} from './FilterListItem';
import {BottomBar} from '../bottomBar';
import {CATEGORY} from '../../assets/strings';

export const FilterModal = (props) => {
  return (
    <View>
      <Modal animationType="slide" visible={props.modalVisible}>
        <Header name={CATEGORY} isBack onPressBack={props.onShowModal} />
        <FlatList
          keyExtractor={(item) => item}
          data={props.filterData}
          renderItem={({item}) => {
            let index =
              props.appliedCategory && props.appliedCategory.length > 0
                ? props.appliedCategory.findIndex((name) => name === item)
                : -1;
            return (
              <FilterListItem
                selectedItem={index > -1}
                name={item}
                onSelectCategory={props.onSelectCategory}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
        <BottomBar
          name={'Apply'}
          showIcon={false}
          onBottomPress={props.onPressApply}
        />
      </Modal>
    </View>
  );
};
