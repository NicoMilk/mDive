import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import LoginForm from "@/components/LoginForm";
import Divelist from "@/components/Divelist";
import { useAtom } from "jotai";
import { bearerTokenAtom } from "../hooks/useFetch";
import * as SecureStore from "expo-secure-store";
import AntDesign from "@expo/vector-icons/AntDesign";

const Index = () => {
  const [bearerToken, setBearerToken] = useAtom(bearerTokenAtom);
  const colors = useThemeColors();

  const logout = async () => {
    await SecureStore.deleteItemAsync("bearer_token");
    setBearerToken(null); // Clears the token in the atom
  };

  return (
    <>
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.tint }]}
      >
        <View style={styles.header}>
          <ThemedText variant="headline" color="iEigengrau">
            mDive
          </ThemedText>
          {bearerToken && (
            <Pressable style={styles.buttonLogout} onPress={logout}>
              <AntDesign name="logout" size={15} color="#16161d" />
            </Pressable>
          )}
        </View>

        {bearerToken ? (
          <Divelist />
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  // TODO body toujours nécessaire ?
  body: { flex: 1 },
  buttonLogout: {
    backgroundColor: "#e9e9e2",
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
