import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Create the stack and drawer navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer navigator with screens that should have the drawer
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// Root stack navigator, which contains the drawer
function RootStack() {
  return (
    <Stack.Navigator>
      {/* Drawer is nested inside the Stack */}
      <Stack.Screen name="Main" component={DrawerNavigator} />
      {/* Other screens that should not show the drawer */}
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

// Main App component
function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

// Register the root component
registerRootComponent(App);
