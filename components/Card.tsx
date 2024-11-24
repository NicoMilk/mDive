import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, View, type ViewProps } from "react-native";

type Props = ViewProps;

export const Card = ({ style, ...rest }: Props) => {
  const colors = useThemeColors();
  return (
    <View
      style={[style, styles.design, { backgroundColor: colors.iEigengrau }]}
      {...rest}
    ></View>
  );
};

const styles = StyleSheet.create({
  design: { borderRadius: 2 },
});
