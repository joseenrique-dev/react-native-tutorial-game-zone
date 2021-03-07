import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { globalStyles } from "../styles/global";
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema  = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5',(val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
});

export default function ReviweForm({ addReview }) {

    
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:'', body:'', rating:''}}
                validateOnChange={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values)
                }}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, values }) =>(
                        <View>
                            <TextInput 
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                style={globalStyles.input}
                                placeholder='Review Title'
                                // onChange={handleChange}
                                value={values.title}
                            />
                            <TextInput 
                                multiline
                                style={globalStyles.input}
                                placeholder='Review body'
                                onChangeText={handleChange('body')}
                                onBlur={handleBlur('body')}
                                // onChange={handleChange}
                                value={values.body}
                            />
                            <TextInput 
                                multiline
                                style={globalStyles.input}
                                placeholder='Rating (1-5)'
                                // onChange={handleChange}
                                value={values.rating}
                                keyboardType='numeric'
                                onChangeText={handleChange('rating')}
                                onBlur={handleBlur('rating')}
                            />
                            <Button 
                                title='submit'
                                color='maroon'
                                type="submit"
                                onPress={handleSubmit}
                            />
                        </View>
                    )
                }

            </Formik>

            <Text></Text>
        </View>
    )
}
