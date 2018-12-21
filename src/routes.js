import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product'; 

const RouteStack = createStackNavigator({
  Main: {
    screen: Main
  },
  Product: {
    screen: Product
  }
}, {
  defaultNavigationOptions: {
    title: 'Projeto starter',
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
    },
    headerStyle: {
      backgroundColor: '#DA552F',
    },
    headerTintColor: '#FFF',
  },
});

export default createAppContainer(RouteStack);