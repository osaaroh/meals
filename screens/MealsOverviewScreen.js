import {useEffect, useLayoutEffect} from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import MealItem from '../components/MealsList/MealItem'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

// import { useNavigation } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native'; - can use useRoute hook instead of prop destructuring to use route anywhere. same with useNavigation

function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId
    // const route = useRoute();
    // const catID = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) =>{
            return mealItem.categoryIds.indexOf(catId) >= 0;
        }
    )

    // useEffect(()=>{
    //     const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    //     navigation.setOptions({
    //         title: categoryTitle
    //     })

    // }, [catId, navigation])

    //useLayoutEffect is used when you want to update a component concurrently when it's being created
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })

    }, [catId, navigation])
    
    return <MealsList items={displayedMeals}/>;
}

export default MealsOverviewScreen;