import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddProduct({ addProduct }) {
  return (
    <TouchableOpacity style={styles.container} onPress={addProduct}>
      <AntDesign name="pluscircle" size={40} color="#1A3D7D" />
      <Text style={styles.addText}>Agregar producto</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 26,
  },
  addText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
});
