import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import { View, Text, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from "axios";

function App() 
{
  const [cep, setCEP] = useState("");


  const submitHandler = async () =>
  {
    const {data} = await axios.get('https://viacep.com.br/ws/01001000/json/');
    console.log(data);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Enter CEP:</Text>
        <TextInput  
          style={styles.input} 
          placeholder='Enter CEP here...'
          value={cep}
          onChangeText={setCEP}
          />
        <Button title="Login" onPress={()=>{submitHandler()}} />
      </View>
    </KeyboardAvoidingView>
  );
}

// Register the root component
registerRootComponent(App);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:"#f5f5f5"

    },
    errorText:{
      color:"red",
      marginBottom:10
    },
    form:{
      backgroundColor:"white",
      padding:20,
      borderRadius:10,
      shadowColor:"black",
      textShadowOffset:
      {
        width:0,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:5
    },
    label:
    {
      fontSize:16,
      marginBottom:5,
      fontWeight:"bold"
    },
    input:
    {
      height:40,
      borderColor:"#ddd",
      borderWidth:1,
      marginBottom:15,
      padding:10,
      borderRadius:5
    }
});