import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favourites-context'
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';

function FavouriteScreens() {
  const favouriteMealCtx = useContext(FavoritesContext);

  const favouriteMeals = MEALS.filter(meal => favouriteMealCtx.ids.includes(meal.id))

  if (favouriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet</Text>
    </View>
  }
  return <MealsList items={favouriteMeals}/>
}

export default FavouriteScreens

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})