import React from "react";
import { View, Image, Text } from "react-native";
import HomeAccountMenu from "../../../common/components/HomeAccountMenu";
import styles from "./layout";

const AccountHome = () => {
  const mainItems = [
    {
      id: 1,
      name: "Mes informations",
      action: () => console.log("nav"),
    },
    { id: 2, name: "Mes missions", action: () => console.log("nav") },
  ];

  return (
    <>
      <View style={styles.profile}>
        <Image source={require("../../../assets/avatar.png")} />
        <Text style={styles.userName}>John Smith</Text>
        <Text style={styles.userMail}>john.smith@gmail.com</Text>
      </View>
      <View style={styles.menu}>
        {mainItems.map(({ id, name, action }) => (
          <HomeAccountMenu id={id} action={action} name={name} />
        ))}
      </View>
    </>
  );
};

export default AccountHome;