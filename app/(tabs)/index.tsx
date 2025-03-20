import React from "react";
import { registerRootComponent } from 'expo';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import QRCodeScannerScreen from "../screens/QRCodeScannerScreen";
import MockQRCodeScreen from "../screens/MockQRCodeScreen";
import MenuScreen from "../screens/MenuScreen";
//import MenuScreen from "./screens/MenuScreen"; // You'll create this later

const Stack = createStackNavigator();

const App: React.FC = () => 
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} options={{ title: "Scan QR Code" }} />
    {/*     <Stack.Screen name="MockQRCodeScanner" component={MockQRCodeScreen} options={{ title: "Mock QR Code" }} /> */}
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ title: "Menu" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(App);
