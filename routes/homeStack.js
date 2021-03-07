import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";


const Stack = createStackNavigator();

function HomeStack() {
    return (
      
        <Stack.Navigator 
            initialRouteName={Home}
            screenOptions={{
                headerTintColor:'#444',
                headerStyle: { 
                    backgroundColor: '#eee',
                    height:70 
                }
            }}
        >
            <Stack.Screen 
                name="Home"
                component={Home} 
                options={{ 
                    title: 'GameZone',
                    // headerStyle:{backgroundColor: '#eee'}  
                }}
            />
            <Stack.Screen 
                name="Details"
                component={ReviewDetails}
                options={{ 
                    title: 'Review Details',
                    // headerStyle:{backgroundColor: '#eee'} 
                }}
            />
        </Stack.Navigator>
      
    );
  }

  export default HomeStack;