import React from "react";
import { View } from "react-native";
import styles from "./layout";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};
export default Container;
