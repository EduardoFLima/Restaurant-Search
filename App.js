import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen'
import RestaurantDetailsScreen from './src/screen/RestaurantDetailsScreen'

const navigator = createStackNavigator({
  Home: SearchScreen,
  RestaurantDetails: RestaurantDetailsScreen
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      title: 'Busca por restaurantes'
    }
  }
);

export default createAppContainer(navigator);