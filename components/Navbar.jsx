import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
      }}
    >
      <Entypo
        name="menu"
        size={40}
        color="black"
        onPress={() => console.log("hola")}
      />
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image source={Logo} style={{ height: 31, width: 31 }} />
        <Text style={{ marginLeft: 7, color: "#1A3D7D", fontSize: 22, fontWeight: "bold" }}>Smart Water</Text>
      </View>
      <Ionicons name="ios-notifications-circle" size={40} color="#1A3D7D" />
    </View>
  );
}

export default Navbar;
