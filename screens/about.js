import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function About() {
    return (
        <View style={styles.container}>
            <Text>This is About</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:24
    }
})
