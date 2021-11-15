import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import RecipeScreen from './screens/Recipe';
import AddRecipeScreen from './screens/AddRecipe';

import {HOME_URL, RECIPE_URL, ADD_RECIPE_URL} from './utils/urls';

const Stack = createNativeStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={HOME_URL} component={HomeScreen} />
      <Stack.Screen name={RECIPE_URL} component={RecipeScreen} />
      <Stack.Screen name={ADD_RECIPE_URL} component={AddRecipeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
