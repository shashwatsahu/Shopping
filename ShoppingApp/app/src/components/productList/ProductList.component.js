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

class ProductList extends React.Component {
  state = {
    modalVisible: false,
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
        this.createFilterData(productData);
      }
    }
  }
  createFilterData = (data) => {
    const {addFilterData} = this.props.actions;
    let filterData = [...data];
    filterData = [...new Set(filterData.map(item => item.category))];
    addFilterData(filterData);
    console.log('filter:', filterData);
  };
  renderHeader = () => {
    return <Header name={'Shoppify'} />;
  };
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  renderProductList = () => {
    const {productData} = this.props.ProductReducer;
    return (
      <View style={styles.container}>
        <FlatList
          data={productData}
          renderItem={({item, index}) => <ProductListItem item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  onClickFilter = () => {
    this.toggleModal();
  };
  renderBottomBar = () => {
    return <BottomBar name={'filter'} onShowModal={this.onClickFilter} />;
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderProductList()}
        {this.renderBottomBar()}
        <FilterModal
          modalVisible={this.state.modalVisible}
          onShowModal={this.toggleModal}
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
