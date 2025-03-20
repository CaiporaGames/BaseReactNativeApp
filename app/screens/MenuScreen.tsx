import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCategories from "../components/ProductCategories";

const getStoredTableRef = async () => 
{
    try {
        const tableRef = await AsyncStorage.getItem("tableRef");
        return tableRef ? tableRef : null;
    } catch (error) {
        console.error("Error retrieving table reference:", error);
        return null;
    }
};
  
export default function MenuScreen() 
{
  const [tableRef, setTableRef] = useState<string | null>(null);

    useEffect(() => 
    {
        const fetchTableRef = async () => 
        {
            const storedTableRef = await AsyncStorage.getItem("tableRef");
            if (storedTableRef) {
                setTableRef(storedTableRef);
            }
        };

        fetchTableRef();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Table: {tableRef || "No table assigned"}</Text>
      <ProductCategories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
