import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";

export default function ProductCard() {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.firstColumn}>
        <SelectDropdown
          // data={countries}
          // onSelect={(selectedItem, index) => {
          //   console.log(selectedItem, index);
          //   citiesDropdownRef.current.reset();
          //   setCities([]);
          //   setCities(selectedItem.cities);
          // }}
          defaultButtonText={"Select country"}
          // buttonTextAfterSelection={(selectedItem, index) => {
          //   return selectedItem.title;
          // }}
          // rowTextForSelection={(item, index) => {
          //   return item.title;
          // }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <Entypo
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>
      <View style={styles.secondColumn}>
        <Text style={styles.quantity}>Cantidad</Text>
        <View style={styles.quantitySelector}>
          <AntDesign name="minuscircleo" size={20} color="#005B96" />
          <Text style={styles.quantityText}>{quantity}</Text>
          <AntDesign name="pluscircleo" size={20} color="#005B96" />
        </View>
      </View>
      <View style={styles.thirdColumn}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>15</Text>
          <View style={styles.currency}>
            <Text style={styles.currencyText}>Bs</Text>
          </View>
        </View>
        <FontAwesome5 name="trash" size={24} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#1A3D7D",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 200,
    padding: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  firstColumn: {
    width: "100%",
    height: 38,
  },
  dropdown1BtnStyle: {
    flex: 1,
    width: "100%",
    height: 38,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: {
    color: "#626262",
    textAlign: "left",
    // fontFamily: ''
    fontSize: 13,
    fontWeight: "bold",
  },
  dropdown1DropdownStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "#444",
    textAlign: "left",
  },
  secondColumn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 38,
    borderWidth: 1,
    borderColor: "#626262",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  quantity: {
    margin: 10,
    color: "#626262",
    fontSize: 12,
    fontWeight: "bold",
  },
  quantitySelector: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  quantityText: {
    borderWidth: 1,
    borderColor: "#005B96",
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  thirdColumn: {
    width: "100%",
    height: 38,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    width: 150,
    height: 38,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 1,
    borderColor: "#626262",
  },
  priceText: {
    margin: 10,
    color: "#626262",
    fontSize: 12,
    fontWeight: "bold",
  },
  currency: {
    borderLeftWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 10,
    borderColor: "#626262",
  },
  currencyText: {
    color: "#626262",
    fontSize: 12,
    fontWeight: "bold",
  },
});
