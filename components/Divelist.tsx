import { FlatList, ActivityIndicator } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useFetchQuery } from "@/hooks/useFetch";
import ListCard from "@/components/ListCard";

const Divelist = () => {
  const colors = useThemeColors();
  const { data: diveList, isFetching } = useFetchQuery("/divelist");
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={diveList.toReversed() || []}
      ListFooterComponent={
        isFetching ? (
          <ActivityIndicator size={"large"} color={colors.iEigengrau} />
        ) : null
      }
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
  );
};
export default Divelist;
