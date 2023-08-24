import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

const Blog = ({navigation}) => {
  return (
    <View style={[{ backgroundColor: 'red' }, GlobalStyle.centered_item]}>
      <Text style={GlobalStyle.big_text}>Blog</Text>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Blog

const styles = StyleSheet.create({})