import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

// Define the navigation type for the screen
type AboutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'About'>;

export default function AboutScreen() {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  return (
    <View style={styles.container} >
      <View style={styles.TextInput}>
      <TextInput style={styles.textinput} placeholder='Type the task'/>
      <Button title='Add task'/>
      </View>
      <View>
      <Text> List of tasks</Text>
      </View>
    </View>
  );
}

      {/* <Text style={styles.title}>Welcome to the About Screen</Text> */}
      {/* Button to navigate to Home */}
      {/* <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} // Navigate back to Home screen
      /> */}
const styles = StyleSheet.create({
  container: {

    padding: 50,
  },
 textinput: {
    borderWidth: 1,
    borderColor:'#cccccc',
    width:"80%",
  },
  TextInput:{
  flexDirection:'row',
  justifyContent:'space-between',
  }
});
