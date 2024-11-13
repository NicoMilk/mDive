import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Card } from "./Card";
import { ThemedText } from "./ThemedText";
import { DateTime } from "luxon";

type Props = {
  style?: ViewStyle;
  divenumber: number;
  location: string;
  date: Date;
  maxdepth: string;
  // TODO : find a way to have the duration. Divelog APPI doesn't seem to providing it
  length?: number;
  gaz?: string[];
  infos?: string[];
};

const ListCard = ({
  style,
  divenumber,
  location,
  date,
  maxdepth,
  length,
  gaz,
  infos,
}: Props) => {
  return (
    <Card style={[style, styles.body]}>
      <View>
        <ThemedText variant="subtitle1" color={"eigengrau"}>
          #{divenumber.toString().padStart(2, "0")} -{" "}
          {location || "Site inconnu"}
        </ThemedText>
        <ThemedText variant={"subtitle1"}>
          {DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED, {
            locale: "fr",
          })}
        </ThemedText>
        <ThemedText variant={"subtitle1"}>
          {maxdepth}m - {length} min.
        </ThemedText>
      </View>
      <View style={styles.image}>
        <Image
          source={{
            uri: "https://placehold.co/96x72/aqua/000.png",
          }}
          width={96}
          height={72}
        />
      </View>
    </Card>
  );
};
export default ListCard;

const styles = StyleSheet.create({
  body: { marginBottom: 4, flexDirection: "row" },
  data: {},
  image: {
    marginLeft: "auto",
    padding: 2,
  },
});
