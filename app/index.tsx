import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DIVES LIST</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#346ba0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontFamily: "Nunito_400Regular",
    color: "#e9e9e2",
  },
  button: {
    fontSize: 16,
    fontFamily: "Nunito_400Regular",
    textDecorationLine: "underline",
    color: "#e9e9e2",
  },
});

export default Index;
