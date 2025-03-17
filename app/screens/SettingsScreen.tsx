import { View, Text, StyleSheet, Button } from "react-native";

export type RootStackParamList = {
    Home: undefined; // No parameters
    About: undefined; // No parameters
  };
export default function SettingsScreen({navigation}:any)
{
    //const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen</Text>
            <Button title="Go to About" onPress={()=> navigation.navigate("About",
                {
                    name:"Dara"
                }
            )}></Button>
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