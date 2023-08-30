import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.commentStyles}>
        <Entypo name="message" size={24} color="#1A3D7D" />
        <Text style={styles.commentText}>Agregar comentario</Text>
      </View>
      <View
        style={{
          borderBottomColor: "#1A3D7D",
          borderBottomWidth: 2,
        }}
      />
      <TouchableOpacity style={styles.saleButton}>
        <Text style={styles.buttonText}>Vender</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "95%",
  },
  commentStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 7,
  },
  commentText: {
    marginLeft: 11,
    color: "#1A3D7D",
    fontWeight: "bold",
    fontSize: 14,
  },
  saleButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#367DFD",
    padding: 10,
    borderRadius: 25,
    marginVertical: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 7,
  },
});
