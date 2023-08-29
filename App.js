import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import UserData from "./components/UserData";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Navbar />
        <UserData />
        <ScrollView>
          <ProductCard />
        </ScrollView>
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
  },
});
