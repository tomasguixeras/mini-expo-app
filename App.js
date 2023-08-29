import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import uuid from "react-native-uuid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import UserData from "./components/UserData";
import AddProduct from "./components/AddProduct";
import products from "./data/products.json";

export default function App() {
  const [order, setOrder] = useState([
    {
      id: uuid.v4(),
      product: "",
      quantity: 1,
    },
  ]);

  const addProduct = () => {
    setOrder([
      ...order,
      {
        id: uuid.v4(),
        product: "",
        quantity: 1,
      },
    ]);
  };

  const removeCard = (id) => {
    setOrder(order.filter((el) => el.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Navbar />
        <UserData />
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
          <FlatList
            data={order}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                removeCard={removeCard}
                products={products}
              />
            )}
            keyExtractor={(item) => item.id}
          />
          <AddProduct addProduct={addProduct} />
        {/* </ScrollView> */}
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  container: {
    width: "95%",
    flex: 1,
  },
});
