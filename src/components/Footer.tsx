import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'

const footerData = [
    {
        title: 'Quick Links', data: ['Home', 'About', 'Services', 'Blogs', 'Contact']
    },
    {
        title: 'Social', data: ['Facebook', 'Twitter', 'Pinterest', 'Instagram', 'Youtube']
    },
    {
        title: 'Contact Us', data: ['+9184199084', 'gsushil12@gmail.com', 'Wadala-(East)']
    }
]

const Footer = () => {
    return (
        <View style={styles.footer}>

            <View style={styles.footer_container}>
                <View>
                    <Image style={{ marginBottom: 10 }} source={require('../assets/images/main-logo.png')} />
                    <Text style={GlobalStyle.text}>Mi facilisis facilisis orci vitae. Cum nisi morbi integer tincidunt ornare ac praesent in. Dolor tempus arcu sit quis nunc arcu facilisis quis eget nisi morbi integer.</Text>
                </View>

                <View>
                    <Text style={GlobalStyle.text}>© Copyright 2023.</Text>
                    <Text style={GlobalStyle.text}>Design by Sushil </Text>

                </View>

                <View>
                    <SectionList
                        keyExtractor={(item, index) => index.toString()}
                        sections={footerData}
                        renderItem={({ item }) => (<Text style={[GlobalStyle.text]}>{item}</Text>)}
                        renderSectionHeader={({ section }) => (
                            <Text style={[styles.sectionText, { marginTop: 20 }]}>{section.title}</Text>
                        )}
                    >
                    </SectionList>
                </View>

            </View>

        </View>
    )
}



export default Footer

const styles = StyleSheet.create({
    footer: {
        marginTop: 100
    },
    footer_container: {
        flexDirection: 'column',
        gap: 30,
        paddingHorizontal: 15
    },
    sectionText: {
        color: '#787d62',
        fontSize: 32,
        fontFamily: 'Cinzel',
        textTransform: 'uppercase',
    }
})