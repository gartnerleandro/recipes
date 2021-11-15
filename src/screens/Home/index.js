import React from 'react';
import {SafeAreaView, ScrollView, Button} from 'react-native';

import {ADD_RECIPE_URL} from '../../utils/urls';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button
          title="Add recipe"
          accessibilityLabel="Add recipe button"
          onPress={() => navigation.navigate(ADD_RECIPE_URL)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
