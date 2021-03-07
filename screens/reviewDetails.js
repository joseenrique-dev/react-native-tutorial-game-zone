import React from 'react'
import { View, Text, Button, Image, StyleSheet} from 'react-native';
import { globalStyles } from "../styles/global";
import Card from '../shared/card';
import { images } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {

    // const pressHandle = () =>{
    //     //navigation.goBack(); //other solution
    //     navigation.navigate('Home');
    // }
    const { title,body, rating } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{ title }</Text>
                <Text style={globalStyles.titleText}>{ body }</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        borderTopColor: '#eee',
        borderTopWidth:1,
        paddingTop:16,
        marginTop:16
    }
})