import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import Banner from '../components/Banner';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';



const Home = ({ navigation }: any) => {
    return (

        <View style={styles.body}>
            <ScrollView>
                <Header navigations={navigation} />
                <Banner />
                <ServicesSection />
                <AboutSection />
                <FeaturedSection />
                <Footer />
                
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgba(234,231,224,1)',
        // backgroundColor:'rgba(245,245,241,1)',
        opacity: 1,

    },


});
export default Home