import { StyleSheet } from "react-native";

export default StyleSheet.create({
   row_container: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      justifyContent:'center'

   },
   sectionTitle: {
      color: '#787d62',
      fontSize: 48,
      fontFamily: 'Cinzel',
      textTransform: 'uppercase',
      marginBottom: 20
   },
   btn: {
      marginTop: 20,
      width: 200,
      height: 70,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text: {
      color: 'black',
      fontFamily: 'Poppins-Light',
      fontSize: 22,
   },
   centered_item: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   big_text: {
      fontSize: 40,
      color: '#fff'
   }
})


