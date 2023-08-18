import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'

const footerData = [
    {
        title: 'Quick Links',
        data: ['Home', 'About', 'Services', 'Blogs', 'Contact']
    },
    {
        title: 'Social',
        data: ['Facebook', 'Twitter', 'Pinterest', 'Instagram', 'Youtube']
    },
    {
        title: 'Contact Us',
        data: ['+9184199084', 'gsushil12@gmail.com', 'Wadala-(East)']
    }
]

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={[styles.footer_container]}>

                <View style={{ paddingStart: 15 }}>
                    <Image style={{ marginBottom: 10 }} source={require('../assets/images/main-logo.png')} />
                    <Text style={GlobalStyle.text}>Mi facilisis facilisis orci vitae. Cum nisi morbi integer tincidunt ornare ac praesent in. Dolor tempus arcu sit quis nunc arcu facilisis quis eget nisi morbi integer.</Text>
                    <Text style={GlobalStyle.text}>© Copyright 2023.</Text>
                    <Text style={GlobalStyle.text}>Design by Sushil </Text>

                </View>

                <View style={{ paddingStart: 5 }}>
                    {
                        footerData.map((footer, index) => (
                            <View key={index}>
                                <Text style={[styles.section_text, { marginTop: 20 }]}>{footer.title}</Text>
                                {
                                    footer.data.map((item, index) => (<Text key={index} style={[styles.item_text]}>{item}</Text>))
                                }
                            </View>
                        ))
                    }
                </View>

            </View>
        </View>
    )
}

{/* 

<SectionList
    keyExtractor={(item, index) => index.toString()}
    sections={footerData}
    renderItem={({ item }) => (<Text style={[GlobalStyle.text]}>{item}</Text>)}
    renderSectionHeader={({ section }) => (
    <Text style={[styles.sectionText, { marginTop: 20 }]}>{section.title}</Text>
    )}
    >
</SectionList> 

*/}



export default Footer

const styles = StyleSheet.create({
    footer: {
        marginTop: 10
    },
    footer_container: {
        flexDirection: 'column',
        gap: 30,
    },
    section_text: {
        color: '#787d62',
        fontSize: 32,
        fontFamily: 'Cinzel',
        textTransform: 'uppercase',
    },
    item_text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 22,
        textTransform: 'uppercase',
        paddingStart: 10,
    }
})