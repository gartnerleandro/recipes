import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';

import {RECIPE_URL} from '../../utils/urls';

const Home = ({navigation}) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>¡Hola mundo desde la pantalla Home!</Text>
      <Button
        title="Ir a receta"
        onPress={() => navigation.navigate(RECIPE_URL)}
      />
    </ScrollView>
  </SafeAreaView>
);

export default Home;
