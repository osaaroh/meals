import React from 'react'
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId)
  return (

    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
        <MealDetails 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}/>
        </View>
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
        
        

        {/* {selectedMeal.steps.map((step)=>(
            <Text key={step}>{step}</Text>
        ))} */}
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    }, detailText: {
        color: 'white'
    },
    listContainer:{
        width: '80%'
    },
    listOuterContainer:{
        alignItems: 'center'
    }
})