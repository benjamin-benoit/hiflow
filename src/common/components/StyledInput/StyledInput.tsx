import React from "react";
import { View, Text, TextInputProps, TextInput } from "react-native";
import styles from "./layout";

interface Props extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const StyledInput = ({ label, error, helperText, ...props }: Props) => {
  return (
    <View>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.container} {...props} />
      {error && <Text style={styles.erreur}>{helperText}</Text>}
    </View>
  );
};
