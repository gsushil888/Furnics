import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomDropDownItems from './CustomDropDownItems'

const CustomDrawerContent = (props: any) => {
    return (
        <View style={styles.drawer_content}>

            <View style={styles.drawer_header}>
                <Image resizeMode='contain' source={require('../assets/images/main-logo.png')} />
                <TouchableOpacity onPress={() => { }}>
                    <Entypo name='cross' color={'black'} size={32} onPress={() => { props.navigation.closeDrawer() }} />
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
        padding: 25
    },
    drawer_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: 50
    }

})

export default CustomDrawerContent

