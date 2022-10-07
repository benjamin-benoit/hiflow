import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./layout";

interface Props {
  cityFrom: string;
  dateFrom: string;
  cityTo: string;
  dateTo: string;
}

export const FromTo = ({ cityFrom, dateFrom, cityTo, dateTo }: Props) => {
  return (
    <View style={styles.fromToContainer}>
      <View style={styles.iconsContainer}>
        <Image source={require("../../../assets/icn_flagcircle_start.png")} />
        <Image
          style={{ marginLeft: 17 }}
          source={require("../../../assets/line.png")}
        />
        <Image source={require("../../../assets/icn_flagcircle_end.png")} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.city}>{cityFrom}</Text>
          <Text style={styles.date}>{dateFrom}</Text>
        </View>
        <View>
          <Text style={styles.city}>{cityTo}</Text>
          <Text style={styles.date}>{dateTo}</Text>
        </View>
      </View>
    </View>
  );
};
