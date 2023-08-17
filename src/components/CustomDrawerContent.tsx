import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Entypo from 'react-native-vector-icons/Entypo'
import CustomDropDownItems from './CustomDropDownItems'

const CustomDrawerContent = (props: any) => {
    return (
        <View style={{ flex: 1, padding: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center',marginBottom:50 }}>
                <Image resizeMode='contain' style={{}} source={require('../assets/images/main-logo.png')} />
                <TouchableOpacity onPress={() => { }}>
                    <Entypo name='cross' color={'black'} size={32} onPress={() => { props.navigation.closeDrawer() }} />
                    {/* <Image style={{ }} source={require('../assets/images/nav-icon.svg')} /> */}
                </TouchableOpacity>


            </View>
            <DrawerContentScrollView {...props}>
               
                <CustomDropDownItems {...props}/>
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawerContent

