import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import Blog from '../screens/Blog';
import Pages from '../screens/Pages';
import Shop from '../screens/Shop';

import CustomDrawerContent from '../components/CustomDrawerContent';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Splash from '../screens/Splash';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Splash'
                drawerContent={(props) => (<CustomDrawerContent {...props}></CustomDrawerContent>)}
                screenOptions={
                    {
                        drawerPosition: 'right',
                        headerShown: false,
                        drawerStyle: {
                            width: '100%'
                        }
                    }
                }
            >
                <Drawer.Screen name='Splash' component={Splash} />
                <Drawer.Screen name='Login' component={Login} />
                <Drawer.Screen name='Register' component={Register} />
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='AboutUs' component={AboutUs} />
                <Drawer.Screen name='Blog' component={Blog} />
                <Drawer.Screen name='Pages' component={Pages} />
                <Drawer.Screen name='Shop' component={Shop} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})