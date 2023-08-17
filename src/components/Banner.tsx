import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
    return (
        <View style={{marginBottom:80}}>
            <ImageBackground
                source={require('../assets/images/banner.jpg')}
                style={styles.banner_img_background}
            >

                <Text style={styles.banner_head_text}>wooden table set</Text>
                <Text style={styles.banner_sub_text}>Aliquet donec ut arcu risus amet mattis diam gravida. Ac vestibulum quis proin in aliquam et et auctor. Amet urna est arcu euismod egestas morbi nunc lacus. Nec id rutrum mauris commodo habitant amet quisque. Velit ornare pellentesque facilisi in odio nibh.</Text>
                <Pressable
                    style={
                        ({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#577d60' : '#787d62',
                            },
                            styles.shopNowBtn
                        ]}
                >

                    <Text style={
                        styles.shopNowText
                    }>Shop Now</Text>
                </Pressable>

            </ImageBackground>

        </View>
    )
}

export default Banner
const styles = StyleSheet.create({
   
    banner_img_background: {
        height: 682,
        marginHorizontal: 15,
        backgroundColor: 'rgba(246, 245, 242, 0.5)',
        // paddingBottom: 20,
        // paddingTop: 50,
        justifyContent: 'center'
    },
    shopNowBtn: {
        marginTop: 30,
        width: 200,
        height: 70,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shopNowText: {

        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20

    },
    banner_content: {


    },
    banner_head_text: {
        fontSize: 60,
        marginBottom: 24,
        marginTop:50,
        textTransform: 'uppercase',
        fontFamily: 'Cinzel',
        color: '#000',
        letterSpacing: 3,

    },
    banner_sub_text: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: '#0d0d0d',
        marginBottom: 80,
        letterSpacing: 1

    }
})