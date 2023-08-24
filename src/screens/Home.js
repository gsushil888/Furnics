import React, { useEffect, useState } from 'react'

import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Button
} from 'react-native'

import { deviceHeight, deviceWidth } from '../components/Dimension';

import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import RoomsCard from '../components/RoomsCard';
import FeaturedSection from '../components/FeaturedSection';
import TrendingProducts from '../components/TrendingProducts';
import ArticlesSection from '../components/ArticlesSection';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';




const Home = ({ navigation }) => {

  
    const isFocused=useIsFocused();

    useEffect(() => {
        getData();
    }, [isFocused])

    const [userObj, setUserObj] = useState({
        email: '',
        password: ''
    });

    // add async in this way 
    const getData =  () => {
        try {
            AsyncStorage.getItem('User')
                .then(value => {
                    if (value != null) {
                        console.log("Getting Data from storage in Home ", value);
                        let user = JSON.parse(value);
                        setUserObj(user);
                    }
                    else{
                        setUserObj({email:'',password:''})
                    }
                })
            // const user = await AsyncStorage.getItem('User');
            // const parsedUser=JSON.parse(user);
            // setUserObj(parsedUser);
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <View style={styles.body}>
            <ScrollView >
                <Header navigations={navigation} />
                <Text style={{ alignSelf: 'center',color:'#000' }}>{userObj?.email}</Text>
                <Banner navigations={navigation} />
                <ServicesSection />
                <AboutSection navigations={navigation} />
                <FeaturedSection />
                <RoomsCard />
                <TrendingProducts />
                <ArticlesSection />
                <Subscription />
                <Footer />
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgba(234,231,224,1)',
        opacity: 1,
        width: deviceWidth,
        height: deviceHeight
    },


});
export default Home