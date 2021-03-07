import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {

    const pressHandle = () =>{
        navigation.navigate('Details'); // we can use --> navigation.push
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is Home</Text>
            <Button title='go to review details' onPress={pressHandle}/>
        </View>
    )
}

