import React from 'react'
import { View, Text, Button} from 'react-native';
import { globalStyles } from "../styles/global";
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    // const pressHandle = () =>{
    //     //navigation.goBack(); //other solution
    //     navigation.navigate('Home');
    // }
    const { title, raiting } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{ title }</Text>
                <Text style={globalStyles.titleText}>{ raiting }</Text>
            </Card>
        </View>
    )
}

