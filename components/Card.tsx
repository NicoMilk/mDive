import { useThemeColors } from "@/hooks/useThemeColors";
import {
  StyleSheet,
  Text,
  View,
  type ViewStyle,
  type ViewProps,
} from "react-native";

type Props = ViewProps;

export const Card = ({ style, ...rest }: Props) => {
  const colors = useThemeColors();
  return (
    <View
      style={[style, styles, { backgroundColor: colors.iEigengrau }]}
      {...rest}
    ></View>
  );
};

const styles = {
  borderRadius: 2,
} satisfies ViewStyle;
