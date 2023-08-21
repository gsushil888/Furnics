
import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import { View } from 'react-native';


function App(): JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator></AppNavigator>
    </View>

  );

}



export default App;
