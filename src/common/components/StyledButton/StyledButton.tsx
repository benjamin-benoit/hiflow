import React from "react";
import { View, Button, ButtonProps } from "react-native";
import themes from "../../themes";
import styles from "./layout";

export const StyledButton = ({ ...props }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Button color={themes.palette.white} {...props} />
    </View>
  );
};
