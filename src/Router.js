import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import RecipeScreen from './screens/Recipe';

import {HOME_URL, RECIPE_URL} from './utils/urls';

const Stack = createNativeStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={HOME_URL} component={HomeScreen} />
      <Stack.Screen name={RECIPE_URL} component={RecipeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
