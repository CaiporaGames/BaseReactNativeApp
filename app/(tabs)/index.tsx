import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import { View, Text, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function App() 
{
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState<{ userName?: string; userPassword?: string }>({});


  const validateForm = () => 
  {
    let errors: { userName?: string; userPassword?: string } = {};
    if(!userName) errors.userName = "User name is required!";
    if(!userPassword) errors.userPassword = "Password is required!";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const submitHandler = () =>
  {
    if(validateForm())
    {
      setUserName("");
      setUserPassword("");

      setErrors({});
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username:</Text>
        <TextInput  
          style={styles.input} 
          placeholder='Enter your name...'
          value={userName}
          onChangeText={setUserName}
          />
        {
          errors.userName ? <Text style={styles.errorText}>{errors.userName}</Text> : null
        }
        <Text  style={styles.label}>Password:</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Enter your password...' 
          secureTextEntry
          value={userPassword}
          onChangeText={setUserPassword}
          />
        {
          errors.userPassword ? <Text style={styles.errorText}>{errors.userPassword}</Text> : null
        }
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