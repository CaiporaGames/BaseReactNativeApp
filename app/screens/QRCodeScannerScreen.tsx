import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, Text } from "react-native-paper";
import { Camera, CameraView } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function QRCodeScannerScreen({ navigation }: { navigation: any }) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    setScanned(true);

    // Save table reference in AsyncStorage
    await AsyncStorage.setItem("tableRef", data);

    Alert.alert("QR Code Scanned!", `Table Reference: ${data}`, [
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("MenuScreen", { tableRef: data });
        },
      },
    ]);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
       {/*  <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate("MockQRCodeScanner")}>Go to Mock QR Code</Button> */}

      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {scanned && (
        <Button mode="contained" onPress={() => setScanned(false)} style={styles.button}>
          Scan Again
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    top: 50,
    zIndex: 999, // Ensure it appears on top of other components
  },
});
