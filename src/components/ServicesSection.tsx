import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const servicesItem = [
    { name: 'Quick Delivery', icon: 'bus-outline' },
    { name: 'Pick Up in Store', icon: 'cart-outline' },
    { name: 'Special Pacakaging', icon: 'gift-outline' },
    { name: 'Return & Refund Policy', icon: 'reload-outline' },
]

const ServicesSection = () => {
    return (
        <View style={styles.services_section}>
            <Items />
        </View>
    )
}

export const Items = () => {
    return (
        servicesItem.map((item, index) => (
            <View key={index} style={styles.view_row}>
                <View style={styles.view_round_icon}>
                    <Ionicons name={item.icon} size={28} color={'#787d62'} />
                </View>
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </View>
        ))
    )
}

export default ServicesSection

const styles = StyleSheet.create({
    services_section: {
        padding: 10,
        marginBottom: 40
    },
    view_row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginVertical: 10,
        paddingLeft: 20
    },
    view_round_icon: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#787d62',
        padding: 20
    },
    text: {
        textTransform: 'uppercase',
        color: '#787d62',
        fontSize: 24,
        fontWeight: '100',
        fontFamily: 'Cinzel'
    }
})