import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    ActivityIndicator
} from 'react-native'


const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/,
            'Invalid email format'
        )
        .required('Please enter your email'),
    password: Yup.string()
        .min(6, 'Password must be more than 6 characters!')
        .required('Please enter your password'),
});

const Login = ({ navigation }) => {

    const [focusedEmail, setEmailFocused] = useState(false);
    const [focusedpassword, setPasswordFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = () => {
        try {
            console.log("Getting Data from Storage in Login Screen for session checking");
            AsyncStorage.getItem('User')
                .then(value => {
                    if (value != null) {
                        console.log("data found in storage in Login screen and now navigating to Home");
                        navigation.navigate('Home');
                    }
                    else {
                        console.log("No data found in Storage in Login Screen");
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogin = async (values) => {
        setIsLoading(true)
        try {
            const userString = await AsyncStorage.getItem('User');

            if (userString) {
                const user = JSON.parse(userString);

                if (values.email === user.email && values.password === user.password) {
                    setTimeout(() => {
                        setIsLoading(false)
                        Alert.alert('Login Status', 'Login Successfully', [
                            { text: 'Ok', onPress: () => navigation.navigate("Home", values) },
                        ]);
                    }, 3000)
                } else {
                    setTimeout(() => {
                        setIsLoading(false)
                        Alert.alert('Login Status', 'Login Failed Wrong Credentials', [
                            { text: 'Ok', onPress: () => navigation.navigate("Login") },
                        ]);
                    }, 3000)
                }
            } else {
                setIsLoading(false)
                Alert.alert('Login Status', 'User not found', [
                    { text: 'Ok', onPress: () => {} },
                ]);
            }
        } catch (error) {
            console.error('Error fetching data from AsyncStorage:', error);
        }
    };


    const onLoginHandler = (values) => {
        if (values != null) {
            console.log("Inside submit", values);
            
            // try {
            //     setTimeout(() => {
            //         setIsLoading(false)
            //         Alert.alert('Login Status', 'Login Successfully', [
            //             { text: 'Ok', onPress: () => navigation.navigate("Home", values) },
            //         ]);
            //     }, 3000)
            // } catch (error) {
            //     console.log("Something went wrong");
            // }
            handleLogin(values);

        }
        else {
            Alert.alert('Login Status', 'Please provide Credentials', [
                { text: 'OK', onPress: () => { } },
            ]);
        }
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={SignInSchema}
            onSubmit={values => {
                onLoginHandler(values)
            }}
        >
            {({ values,
                errors,
                touched,
                isValid,
                handleChange,
                setFieldTouched,
                handleSubmit }) => (
                <SafeAreaView>
                    <View style={styles.login_wrapper}>

                        <View style={styles.top_container}>
                            <Text style={styles.login_text}>
                                Login here
                            </Text>
                            <Text style={styles.welcome_text}>
                                Welcome back you've been missed!
                            </Text>
                        </View>

                        <View style={styles.input_container}>
                            <TextInput
                                onFocus={() => setEmailFocused(true)}
                                onBlur={() => { setEmailFocused(false); setFieldTouched('email') }}
                                placeholder='Email'
                                placeholderTextColor={'#626262'}
                                value={values.email}
                                cursorColor={'#0ff'}
                                onChangeText={handleChange('email')}
                                style={[
                                    styles.input_text,
                                    focusedEmail && {
                                        borderWidth: 3,
                                        borderColor: '#1F41BB',
                                        shadowOffset: {
                                            width: 4,
                                            height: 10
                                        },
                                        shadowColor: '#1F41BB',
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                    },
                                ]}
                            />
                            {touched.email && errors.email && (
                                <Text style={styles.error_text}>{errors.email}</Text>
                            )}
                            <TextInput
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => { setPasswordFocused(false); setFieldTouched('password') }}
                                placeholder='Password'
                                secureTextEntry={true}
                                placeholderTextColor={'#626262'}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                cursorColor={'#0ff'}
                                style={[
                                    styles.input_text,
                                    focusedpassword && {
                                        borderWidth: 3,
                                        borderColor: '#1F41BB',
                                        shadowOffset: {
                                            width: 4,
                                            height: 10
                                        },
                                        shadowColor: '#1F41BB',
                                        shadowOpacity: 0.2,
                                        shadowRadius: 10,
                                    },
                                ]}
                            />
                            {touched.password && errors.password && (
                                <Text style={styles.error_text}>{errors.password}</Text>
                            )}
                        </View>


                        <View style={styles.forget_container}>
                            <Text style={styles.forgot_text}>Forgot your password ?</Text>
                        </View>

                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={
                                [
                                    styles.sign_in_btn,
                                    {
                                        backgroundColor: isValid ? '#1F41BB' : '#A5C9CA',
                                    }
                                ]
                            }
                            disabled={!isValid}
                        >
                            <Text style={styles.sign_in_text}>
                                Sign in
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}
                            style={{ padding: 10, }}
                        >
                            <Text style={styles.create_account}>
                                Create new account
                            </Text>
                        </TouchableOpacity>

                        <ActivityIndicator size={50} color={'red'} animating={isLoading} />

                    </View>
                </SafeAreaView>


            )}
        </Formik>
    )
}

export default Login

const styles = StyleSheet.create({
    login_wrapper: {
        padding: 20,
    },
    top_container: {
        alignItems: 'center'
    },
    login_text: {
        fontSize: 30,
        color: '#1F41BB',
        fontFamily: "Poppins-Bold",
        marginVertical: 30,
    },
    welcome_text: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 20,
        maxWidth: "60%",
        textAlign: "center",
        color: '#1F41BB'
    },
    input_container: {
        marginVertical: 30,
    },
    input_text: {
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        padding: 20,
        backgroundColor: '#f1f4ff',
        borderRadius: 10,
        marginVertical: 10,
        color: '#626262',
        letterSpacing: 1.4,
    },
    forget_container: {

    },
    forgot_text: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        color: '#1F41BB',
        alignSelf: "flex-end",
    },
    sign_in_btn: {
        padding: 20,
        backgroundColor: '#1F41BB',
        marginVertical: 30,
        borderRadius: 10,
        shadowColor: '#1F41BB',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    sign_in_text: {
        fontFamily: "Poppins-Bold",
        color: '#fff',
        textAlign: "center",
        fontSize: 20,
    },
    create_account: {
        fontFamily: "Poppins-SemiBold",
        color: '#000',
        textAlign: "center",
        fontSize: 14,
    },
    error_text: {
        color: 'red',
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        paddingStart: 10
    }

})