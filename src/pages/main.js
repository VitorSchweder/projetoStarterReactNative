import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: "Página Main",
  };

  state = {
    docs: [],
    page: 1,
    pages: 0
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page=1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, pages } = response.data;

    this.setState({ docs: [ ... this.state.docs, ... docs], pages, page });            
  };

  loadMore = () => {
    const { page, pages } = this.state;
    
    if (page == pages) {
      return;
    }

    const nextPage = page + 1;

    this.loadProducts(nextPage);
  }

  renderItem({item, navigation}) {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>        
        <TouchableOpacity 
          style={styles.productButton} 
          onPress={() => navigation.navigate('Product', {product: item})}>
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {    
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>         
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}          
          keyExtractor={item => item._id}         
          renderItem={({item}) => this.renderItem({item, navigation})}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  list: {
    padding: 20
  },
  productContainer: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 10,
    padding: 10
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  productDescription: {
    marginTop: 5,
    lineHeight: 24,
    color: '#999',
    fontSize: 16
  },
  productButton: {
    borderWidth: 2,
    borderColor: '#DA552F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    backgroundColor: 'transparent',
    borderRadius: 5,
    marginTop: 10
  },
  productButtonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold'
  }
});