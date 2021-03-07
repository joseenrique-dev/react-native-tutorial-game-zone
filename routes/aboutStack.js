import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/about';


const Stack = createStackNavigator();

function AboutStack() {
    return (
      
        <Stack.Navigator 
            screenOptions={{
                headerTintColor:'#444',
                headerStyle: { 
                    backgroundColor: '#eee',
                    height:70 
                }
            }}
        >
            <Stack.Screen 
                name="About"
                component={About} 
                options={{ 
                    title: 'About Game Zone',
                    // headerStyle:{backgroundColor: '#eee'}  
                }}
            />
        </Stack.Navigator>
      
    );
  }

  export default AboutStack;