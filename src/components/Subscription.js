import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../utils/GlobalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Subscription = () => {

  const [email, setEmail] = useState('');

  return (
    <View style={styles.subscription_section}>
      <Text style={GlobalStyle.sectionTitle}>Get offers & discounts by subscribing us</Text>
      <TextInput
        placeholder='Enter Your Email Address'
        placeholderTextColor={'#ccc'}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
        style={styles.input}
      />
      <Pressable
        onPress={() => { }}
        style={({ pressed }) => ([{ backgroundColor: pressed ? '#787d62' : '#000' }, { marginHorizontal: 10, marginVertical: 10 }])
        }
      >

        <Text style={styles.subscribe_btn}>Subscribe Now</Text>
      </Pressable>

    </View >
  )
}

export default Subscription

const styles = StyleSheet.create({
  subscription_section: {
    flex: 1,
    marginBottom: 40
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingStart: 40,
    fontSize: 16,
    fontStyle: 'italic',
    marginHorizontal: 10
  },
  subscribe_btn: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    paddingVertical: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center'

  }
})