import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined; // No parameters
    About: undefined; // No parameters
  };
export default function HomeScreen()
{
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title="Go to About" onPress={()=> navigation.navigate("About")}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:16
    }
});