import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MockQRCodeScreen({ navigation }: { navigation: any }) {
  const mockTableRef = "table_5"; // Mock table reference

  useEffect(() => {
    // Simulate QR code scan by saving the mock data to AsyncStorage
    const storeMockData = async () => {
      await AsyncStorage.setItem("tableRef", mockTableRef);
      navigation.navigate("MenuScreen", { tableRef: mockTableRef });
    };

    storeMockData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Scan this QR Code</Text>
      <QRCode value={mockTableRef} size={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
