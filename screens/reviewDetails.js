import React from 'react'
import { View, Text, Button} from 'react-native';
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {

    const pressHandle = () =>{
        //navigation.goBack(); //other solution
        navigation.navigate('Home');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is ReviewDetails</Text>
            <Button title='Back to Home Screen' onPress={pressHandle} />
        </View>
    )
}

