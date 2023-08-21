import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const menuItems = [
    { title: 'Home', icon: 'caret-down-sharp', screen: 'Home' },
    { title: 'About Us', icon: '', screen: 'AboutUs' },
    { title: 'Shop', icon: 'caret-down-sharp', screen: 'Shop' },
    { title: 'Blog', icon: 'caret-down-sharp', screen: 'Blog' },
    { title: 'Pages', icon: 'caret-down-sharp', screen: 'Pages' },
    { title: 'Log out', icon: 'log-out-outline', screen: 'Login' },
]


const CustomDropDownItems = (props: any) => {
    return (

        menuItems.map((item, index) => (
            <View key={index} style={styles.drawer_items}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate(item.screen)}
                >
                    <View style={styles.drawer_item_wrapper} >
                        <Text style={styles.text}>{item.title}</Text>
                        {
                            item.icon === '' ? null : <Ionicons name={item.icon} size={30} color={'black'} />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        ))

    )
}

export default CustomDropDownItems

const styles = StyleSheet.create({
    drawer_items: {
        backgroundColor: '#fff',
        paddingStart: 30,
        paddingBottom: 20,

    },
    drawer_item_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 36,
        fontFamily: 'Poppins-Light'
    }
})