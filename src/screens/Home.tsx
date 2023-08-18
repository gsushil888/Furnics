import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import RoomsCard from '../components/RoomsCard';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';

import { deviceHeight, deviceWidth } from '../components/Dimension';

const Home = ({ navigation }: any) => {
    return (

        <View style={styles.body}>
            <ScrollView >
                <Header navigations={navigation} />
                <Banner navigations={navigation} />
                <ServicesSection />
                <AboutSection navigations={navigation} />
                <FeaturedSection />
                <RoomsCard />
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