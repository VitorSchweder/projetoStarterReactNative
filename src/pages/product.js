import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class Product extends Component { 
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
  });

  render() {
    const descricao = this.props.navigation.state.params.product.description;

    return (   
      <View style={styles.container}>     
        <View style={styles.containerDescription}>
          <Text style={styles.description}>{descricao}</Text>        
        </View>
      </View>   
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD'    
  },
  containerDescription: {
    backgroundColor: '#FFFFFF'
  },
  description: {
    padding: 10
  }
});