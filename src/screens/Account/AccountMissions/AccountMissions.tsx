import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import Container from "../../../common/components/Container/Container";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./layout";
import MissionCard from "../../../common/components/MissionCard/MissionCard";
import { Mission } from "../../../common/components/MissionCard/types";

const AccountMissions = () => {
  const missionItems: Mission[] = [
    {
      id: "789078",
      FromTo: {
        cityFrom: "Paris (75)",
        dateFrom: "Mar. 12 Oct. à 10h",
        cityTo: "Lille (59)",
        dateTo: "Mer. 26 Oct. à 7h",
      },
      quotation: 2,
      price: 50,
      kilometers: 217,
      client: "A",
      types: ["Lavage", "W-Garage"],
    },
    {
      id: "789078",
      FromTo: {
        cityFrom: "Paris (75)",
        dateFrom: "Mar. 12 Oct. à 10h",
        cityTo: "Lille (59)",
        dateTo: "Mer. 26 Oct. à 7h",
      },
      quotation: 9,
      price: 50,
      kilometers: 200,
      client: "B",
      types: ["W-Garage"],
    },
    {
      id: "789078",
      FromTo: {
        cityFrom: "Paris (75)",
        dateFrom: "Mar. 12 Oct. à 10h",
        cityTo: "Lille (59)",
        dateTo: "Mer. 26 Oct. à 7h",
      },
      quotation: 6,
      price: 50,
      kilometers: 200,
      client: "B",
    },
  ];

  return (
    <LinearGradient
      colors={["#4569EA", "#04D5E1"]}
      style={{ height: "100%", width: "100%", padding: 15 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <ScrollView>
        {missionItems.map((mission) => (
          <MissionCard mission={mission} />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default AccountMissions;
