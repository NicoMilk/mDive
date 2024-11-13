import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { Card } from "@/components/Card";
import ListCard from "@/components/ListCard";
import { mockDivesList } from "@/mocks";

const Index = () => {
  const colors = useThemeColors();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <ThemedText variant="headline" color="iEigengrau">
          mDive
        </ThemedText>
      </View>
      {/* <Card style={styles.body}> */}
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={mockDivesList}
        renderItem={({ item }) => (
          <ListCard
            divenumber={parseInt(item.divenumber)}
            location={item.location}
            date={new Date(item.date)}
            maxdepth={item.maxdepth}
            length={58}
          />
        )}
      />
      {/* </Card> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  body: { flex: 1 },
});

export default Index;
