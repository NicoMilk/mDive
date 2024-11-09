import { StyleSheet, Text } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SingleDive = () => {
  const params = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DIVE #{params.id}</Text>
      <Link href="/" style={styles.button}>
        Back to Dives list
      </Link>
    </SafeAreaView>
  );
};

export default SingleDive;

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
