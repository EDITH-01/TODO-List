import { View,Text,StyleSheet } from "react-native";
export default ()=>{
  return(
<View style={styles.container}>
  <Text>
    i changed the code 
  </Text>
</View>
  );}

  const styles= StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:`lightblue`,
    },
    });

  