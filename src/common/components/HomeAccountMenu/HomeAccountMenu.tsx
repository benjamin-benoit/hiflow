import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./layout";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  id: number;
  action: () => void;
  name: string;
}

const HomeAccountMenu = ({ id, action, name }: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      key={id}
      onPress={action}
    >
      <View style={styles.menuElement}>
        <Text style={styles.textMenu}>{name}</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default HomeAccountMenu;
