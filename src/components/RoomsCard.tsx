import { ImageBackground, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { deviceWidth, deviceHeight } from './Dimension'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const cardDetails = [
    { headTitle: "Living Rooms", image: require('../assets/images/product-item1.jpg'), title: 'About Room', desc: 'Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.', list: ['Various Types of Bedroom', 'Different Size of Bed', 'Comfortable and Clean Room'] },
    { headTitle: "Kitchen Rooms", image: require('../assets/images/product-item2.jpg'), title: 'About Room', desc: 'Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.', list: ['Various Types of Bedroom', 'Different Size of Bed', 'Comfortable and Clean Room'] },
    { headTitle: "Bed Rooms", image: require('../assets/images/product-item3.jpg'), title: 'About Room', desc: 'Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.', list: ['Various Types of Bedroom', 'Different Size of Bed', 'Comfortable and Clean Room'] },
    { headTitle: "Guest Rooms", image: require('../assets/images/product-item4.jpg'), title: 'About Room', desc: 'Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.', list: ['Various Types of Bedroom', 'Different Size of Bed', 'Comfortable and Clean Room'] },
    { headTitle: "Living Rooms", image: require('../assets/images/product-item5.jpg'), title: 'About Room', desc: 'Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.', list: ['Various Types of Bedroom', 'Different Size of Bed', 'Comfortable and Clean Room'] },
    { headTitle: "Living Rooms", image: require('../assets/images/product-item6.jpg'), title: 'About Room', desc: 'Assumenda temporibus quidem ipsam. fuga corporis iusto similique voluptates sint quibusdam.', list: ['Various Types of Bedroom', 'Different Size of Bed', 'Comfortable and Clean Room'] }
]


const RoomsCard = () => {

    const [isPressed, setIsPressed] = useState(false);

    const handleView = () => {
        setIsPressed(!isPressed)
        setTimeout(() => setIsPressed(false), 5000)
    }

    return (
        <View style={styles.living_section}>

            <ScrollView
                horizontal={true}
            >
                {
                    cardDetails.map((item, index) => (
                        <View key={index}>
                            <Text style={styles.title_header}>{item.headTitle}</Text>
                            <View style={styles.card_container}>

                                <TouchableWithoutFeedback
                                    onPress={handleView}
                                >
                                    <ImageBackground resizeMode='cover' style={styles.image} source={item.image} >
                                        {
                                            isPressed ?
                                                <TouchableWithoutFeedback
                                                    onPress={handleView}
                                                >
                                                    <View style={styles.modal_card_container}>
                                                        <Text style={[styles.title_text, { marginBottom: 20 }]}>{item.title}</Text>
                                                        <Text style={[styles.text, { marginBottom: 20 }]}>{item.desc}</Text>
                                                        {
                                                            item.list.map((e, index) => (
                                                                <View key={index} style={{ flexDirection: 'row', gap: 10, alignItems: 'center', paddingLeft: 20, marginBottom: 10 }}>
                                                                    <FontAwesome name='circle' size={7} color={'black'} />
                                                                    <Text style={styles.text}>{e}</Text>
                                                                </View>
                                                            ))
                                                        }
                                                        <Text style={styles.learn_more}>Learn More</Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                                : null
                                        }
                                    </ImageBackground>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>

    )
}

export default RoomsCard

const styles = StyleSheet.create({
    living_section: {
        flex: 1,
        marginBottom: 50,
    },
    title_header: {
        color: 'black',
        fontFamily: 'Cinzel',
        fontSize: 24,
        textTransform: 'uppercase',
        marginBottom: 5,
        fontWeight: '500',
        paddingStart: 5,
    },

    card_container: {
        position: 'relative',
        flexDirection: 'row',
        width: deviceWidth,
        marginRight: 20,

    },
    modal_card_container: {
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
        position: 'absolute',
        top: '20%',
        padding: 30,
    },
    image: {
        height: deviceHeight / 2,
        width: deviceWidth,
    },
    title_text: {
        color: '#000',
        fontFamily: 'Cinzel',
        fontSize: 22,
        marginTop: 10,
        letterSpacing: 2,
    },
    text: {
        color: '#000000',
        fontFamily: 'Poppins-Light',
        fontSize: 16,
        letterSpacing: 1.4,
    },
    learn_more: {
        textDecorationLine: 'underline',
        fontSize: 18,
        marginTop: 20,
        paddingStart: 30,
    }

})