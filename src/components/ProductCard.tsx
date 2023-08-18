import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimension'

const ProductCard = ({ items }: any) => {
    return (

        <TouchableOpacity onPress={() => { }}>
            <View style={styles.card}>
                <View style={styles.card_container}>
                    <Image style={styles.image} source={items.image} />
                    <Text style={styles.name_text}>{items.name}</Text>
                    <Text style={styles.price_text}>{items.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        width: deviceWidth / 2,
        marginRight: 30,
    },
    card_container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    image: {
        height: deviceHeight / 3 - 50,
        width: deviceWidth / 2,
        // borderRadius: 10
    },
    name_text: {
        color: '#787d62',
        fontFamily: 'Cinzel',
        fontSize: 28,
        marginTop: 10,
        letterSpacing: 2,
    },
    price_text: {
        color: '#787d62',
        fontFamily: 'Cinzel',
        fontSize: 18,
    }
})