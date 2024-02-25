import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreens from './screens/FavoriteScreens';
import {Ionicons} from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#e4baa1',
    }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({color, size}) => (
        <Ionicons name="list" color={color} size={size}/>
      ),
    }}/>
    <Drawer.Screen name='Favories' component={FavoriteScreens}
    options={{
      drawerIcon: ({color, size}) => (
        <Ionicons name="star" color={color} size={size}/>
      ),
    }}/>
  </Drawer.Navigator>
}

export default function App() {
  return <>
  <StatusBar style='light'/>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      contentStyle: {backgroundColor: '#3f2f25'}
    }}>
      <Stack.Screen name='Drawer' component={DrawerNavigator}
        options={{
          //title: 'All Categories'
          headerShown: false
        }}
      />
      <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
      //set title with options like so
      // options={({route, navigation}) => {
      //   const catId = route.params.categoryId;
      //   return {
      //     title: catId
      //   };
      // }}
      />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} 
      options={{
        title: 'About the meal'
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  
  </>
    
}

const styles = StyleSheet.create({
  container: {},
});
