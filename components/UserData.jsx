import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function UserData() {
  const [factura, setFactura] = useState(false);
  const [contado, setContado] = useState(false);
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.title}>
        <AntDesign name="arrowleft" size={24} color="#1A3D7D" />
        <Text style={styles.titleColor}>Registrar venta</Text>
      </View>
      <View style={styles.userInfo}>
        <FontAwesome name="user-circle" size={30} color="black" />
        <Text style={styles.userInfoText}>Tomas Bohn Guixeras</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.chakboxData}>
          <Checkbox value={factura} onValueChange={setFactura} />
          <Text style={styles.checkboxTitle}>Factura</Text>
        </View>

        <View style={styles.chakboxData}>
          <Checkbox value={contado} onValueChange={setContado} />
          <Text style={styles.checkboxTitle}>Contado</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  titleColor: {
    marginLeft: 10,
    color: "#1A3D7D",
    fontWeight: "bold",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  userInfoText: {
    marginLeft: 5,
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  chakboxData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  checkboxTitle: {
    marginLeft: 10,
    color: "#1A3D7D",
    fontWeight: "bold",
  },
});
