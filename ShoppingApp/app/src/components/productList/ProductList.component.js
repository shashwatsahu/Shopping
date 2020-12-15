import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProductAction from './ducks/productList.actions';
import {ProductListItem} from '../../reusables/productListItem';
import {styles} from './ProductList.styles';
import {Header} from '../../reusables/header';
import {BottomBar} from '../../reusables/bottomBar';
import {FilterModal} from '../../reusables/filter/FilterModal';
import {EmptyView} from '../../reusables/emptyView/EmptyView';
import {FILTER, APP_NAME} from '../../assets/strings';

class ProductList extends React.Component {
  state = {
    modalVisible: false,
    appliedCategory: [],
    productList: [],
  };
  componentDidMount() {
    const {fetchProducts} = this.props.actions;
    fetchProducts();
  }
  componentDidUpdate() {
    const {clearProductState} = this.props.actions;
    const {apiState, productData} = this.props.ProductReducer;
    if (apiState.isSuccess) {
      clearProductState();
      if (productData.length > 0) {
        this.setState({
          productList: [...productData],
        });
        this.createFilterData(productData);
      }
    }
  }
  onSelectCategory = (name) => {
    let categoryData = [...this.state.appliedCategory];
    if (categoryData.length > 0) {
      let index = categoryData.findIndex((item) => item === name);
      if (index > -1) {
        categoryData.splice(index, 1);
        this.setState({
          appliedCategory: categoryData,
        });
      } else {
        categoryData.push(name);
        this.setState({
          appliedCategory: categoryData,
        });
      }
    } else {
      categoryData.push(name);
      this.setState({
        appliedCategory: categoryData,
      });
    }
  };
  createFilterData = (data) => {
    const {addFilterData} = this.props.actions;
    let filterData = [...data];
    filterData = [...new Set(filterData.map((item) => item.category))];
    addFilterData(filterData);
  };
  renderHeader = () => {
    return <Header name={APP_NAME} />;
  };
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  renderProductList = () => {
    return (
      <View style={styles.container}>
        <FlatList
          ref={(ref) => (this.productScrollViewRef = ref)}
          keyExtractor={(item) => item.productId.toString()}
          data={this.state.productList}
          renderItem={({item, index}) => <ProductListItem item={item} />}
          numColumns={2}
          windowSize={60}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyView />}
        />
      </View>
    );
  };
  onClickFilter = () => {
    this.toggleModal();
  };
  renderBottomBar = () => {
    return (
      <BottomBar name={FILTER} showIcon onBottomPress={this.onClickFilter} />
    );
  };
  onScrollToTop = () => {
    if (this.state.productList && this.state.productList.length > 0) {
      this.productScrollViewRef &&
        this.productScrollViewRef.scrollToIndex({
          index: 0,
          animated: true,
        });
    }
  };
  onPressApply = () => {
    const {productData} = this.props.ProductReducer;
    this.toggleModal();
    this.onScrollToTop();
    let data = productData.filter((item) => {
      if (this.state.appliedCategory.length > 0) {
        let index = this.state.appliedCategory.findIndex(
          (value) => value === item.category,
        );
        if (index > -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });
    this.setState({
      productList: data,
    });
  };
  render() {
    const {filterData} = this.props.ProductReducer;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderProductList()}
        {this.renderBottomBar()}
        <FilterModal
          modalVisible={this.state.modalVisible}
          onShowModal={this.toggleModal}
          filterData={filterData}
          onSelectCategory={this.onSelectCategory}
          appliedCategory={this.state.appliedCategory}
          onPressApply={this.onPressApply}
        />
      </View>
    );
  }
}
function mapStateToProps({ProductReducer}) {
  return {
    ProductReducer: ProductReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...ProductAction}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
