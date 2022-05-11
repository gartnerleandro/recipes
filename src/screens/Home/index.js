import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';

import AddRecipeButton from '../../components/AddRecipeButton';
import RecipeCard from '../../components/RecipeCard';

import useRecipes from '../../hooks/useRecipes';

import styles from './styles';

export default () => {
  const {recipes, loading, getRecipes} = useRecipes();

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={recipes}
        extraData={loading}
        keyExtractor={item => item.id}
        renderItem={item => <RecipeCard {...item} />}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getRecipes} />
        }
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<AddRecipeButton />}
      />
    </SafeAreaView>
  );
};
