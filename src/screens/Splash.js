import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            checkLogin();
        }, 2000)
    }, [])

    const checkLogin = async () => {
        const userObj = await AsyncStorage.getItem('User');
        console.log("Checking userObj in splash to navigate home or login", userObj);
        if (userObj != null || userObj != undefined) {
            console.log("User Exist so no need to login so moving to home");
            navigation.navigate('Home');
        }
        else {
            console.log("User didn't exist so moving to login");
            navigation.navigate('Login')
        }

    }

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ImageBackground
                source={require('../assets/images/banner.jpg')}
                style={styles.banner_img_background}>
                <Image
                    style={{ alignSelf: 'center', position: 'absolute', top: '10%' }}
                    source={require('../assets/images/main-logo.png')}
                    resizeMode='contain' />
            </ImageBackground>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    banner_img_background: {
        height: '100%',
        backgroundColor: 'rgba(246, 245, 242, 0.5)',
        justifyContent: 'center'
    },

})