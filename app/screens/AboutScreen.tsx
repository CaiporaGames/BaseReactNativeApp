import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen({route}:any)
{
   // const { name } = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>About</Text>
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