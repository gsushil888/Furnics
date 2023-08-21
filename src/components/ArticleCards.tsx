import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Button, Avatar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { deviceWidth, deviceHeight } from './Dimension'

const ArticleCards = ({ items }: any) => {
    return (
        <View style={{}}>
            {
                items.map((item: any, index: any) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.card_container}>
                            <Image style={styles.image} source={item.image} />
                            <Text style={styles.title_text}>{item.title}</Text>
                            <Text style={styles.desc_text}>{item.desc}</Text>
                            <TouchableOpacity>
                                <Text style={styles.read_more}>Read More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            }

        </View>

    )
}

export default ArticleCards

const styles = StyleSheet.create({

    card: {
        flex: 1,
        marginBottom: 40,
    },
    card_container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    image: {
        height: deviceHeight / 3 - 50,
        width: deviceWidth - 24,
    },
    title_text: {
        color: '#000',
        fontFamily: 'Cinzel',
        fontSize: 26,
        marginTop: 10,
        textTransform: 'uppercase',
    },
    desc_text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 17,
        marginBottom: 10,
    },
    read_more: {
        color: '#000',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        fontFamily: 'Cinzel',
        textTransform: 'uppercase',
        fontSize: 16,
        marginVertical: 5,
    }

})

{/* <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                    <TouchableOpacity>
                        <Text variant="bodyMedium">Learn More</Text>
                    </TouchableOpacity>
                </Card.Content>
                <Card.Actions>

                </Card.Actions>
            </Card> */}