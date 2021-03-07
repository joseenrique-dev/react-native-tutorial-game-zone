import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { globalStyles } from "../styles/global";
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema  = yup.object().shape({
    title: yup.string()
        .required('Title is Required')
        .min(4, ({ min }) => `Title must be less than 4 haracters`),
    body: yup.string()
        .required()
        .min(8, ({ min }) => `Body must be less than 8 haracters`),
    rating: yup.string()
        .required('Title is Required')
        .test('is-num-1-5', 'Rating must be a number 1 - 5',(val)=>{
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
});

export default function ReviweForm({ addReview }) {

    
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:'', body:'', rating:''}}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values)
                }}
            >
                {
                    ({ 
                       errors,
                       handleChange, 
                       handleBlur, 
                       handleSubmit, 
                       values,
                       isValid,
                       touched
                    }) =>(
                        <View>
                            <TextInput 
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                style={globalStyles.input}
                                placeholder='Review Title'
                                // onChange={handleChange}
                                value={values.title}
                            />
                            {(errors.title && touched.title) &&
                                <Text style={globalStyles.errorText}>{errors.title}</Text>
                            }
                            <TextInput 
                                multiline
                                style={globalStyles.input}
                                placeholder='Review body'
                                onChangeText={handleChange('body')}
                                onBlur={handleBlur('body')}
                                // onChange={handleChange}
                                value={values.body}
                            />
                            {(errors.body && touched.body) &&
                                <Text style={globalStyles.errorText}>{errors.body}</Text>
                            }
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
                            {(errors.rating && touched.rating) &&
                                <Text style={globalStyles.errorText}>{errors.rating}</Text>
                            }
                            <Button 
                                title='submit'
                                color='maroon'
                                type="submit"
                                //disabled={!isValid}
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
