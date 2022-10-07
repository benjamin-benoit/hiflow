import React from "react";
import { View, Text } from "react-native";
import { FromTo } from "./FromTo";
import styles from "./layout";
import { Mission } from "./types";

interface Props {
  mission: Mission;
}

const MissionCard = ({ mission }: Props) => {
  const { cityFrom, dateFrom, cityTo, dateTo } = mission.FromTo;

  return (
    // Creation de sous composent pour avoir un code moins immense
    <View style={styles.container}>
      <View style={styles.mainData}>
        <FromTo
          cityFrom={cityFrom}
          dateFrom={dateFrom}
          cityTo={cityTo}
          dateTo={dateTo}
        />
        <View style={styles.rightBloc}>
          <View style={styles.quotation}>
            <Text style={styles.quotationText}>
              {mission.quotation <= 2 ? "0 - 2 devis" : "+ 5 devis"}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.priceText}>{`${mission.price}€`}</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <View style={styles.kilometers}>
            <Text
              style={styles.kilometersText}
            >{`${mission.kilometers} km`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.client}>
        <Text style={styles.clientText}>{`Client ${mission.client}`}</Text>
      </View>
      <View style={styles.bottomData}>
        {mission.types ? (
          <View style={styles.typeCardContainer}>
            {mission.types.map((type) => (
              <View style={styles.typeCard}>
                <Text style={styles.typeText}>{type}</Text>
              </View>
            ))}
          </View>
        ) : null}
        <Text style={styles.missionIdText}>{`Mission n°${mission.id}`}</Text>
      </View>
    </View>
  );
};
export default MissionCard;
