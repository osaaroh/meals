import {useEffect, useLayoutEffect} from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem'
import { CATEGORIES, MEALS } from '../data/dummy-data'

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

    
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return <MealItem {...mealItemProps}/>
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})