import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

const Blog = () => {
  return (
    <View style={[{backgroundColor:'red'},GlobalStyle.centered_item]}>
      <Text style={GlobalStyle.big_text}>Blog</Text>
    </View>
  )
}

export default Blog

const styles = StyleSheet.create({})