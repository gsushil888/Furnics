import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomDropDownItems from './CustomDropDownItems'

const CustomDrawerContent = (props) => {
    return (
        <View style={styles.drawer_content}>

            <View style={styles.drawer_header}>
                <Image resizeMode='contain' source={require('../assets/images/main-logo.png')} />
                <TouchableOpacity onPress={() => { props.navigation.closeDrawer() }}>
                    <Entypo name='cross' color={'gray'} size={36} onPress={() => { }} />
                </TouchableOpacity>
            </View>

            <DrawerContentScrollView {...props}>
                <CustomDropDownItems {...props} />
            </DrawerContentScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    drawer_content: {
        flex: 1,
    },
    drawer_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: 50,
        padding: 25
    }

})

export default CustomDrawerContent

