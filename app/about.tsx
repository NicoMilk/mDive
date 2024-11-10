import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ABOUT</Text>
      <Link href="/" style={styles.button}>
        Back to Dives list
      </Link>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#346ba0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    color: "#e9e9e2",
  },
  button: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#e9e9e2",
  },
});
