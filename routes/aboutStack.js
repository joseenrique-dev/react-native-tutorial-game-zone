import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/about';
import Header from '../shared/header';


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
                options={({ navigation }) => ({
                    headerTitle: ()=><Header navigation={navigation} title='About GameZone'/>,
                })}
            />
        </Stack.Navigator>
      
    );
  }

  export default AboutStack;