import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountHome from "../screens/Account/AccountHome";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./layout";
import AccountInformations from "../screens/Account/AccountInformations";
import AccountMissions from "../screens/Account/AccountMissions";
import Theme from "../common/themes";

const LogoTitle = (children) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{children.children}</Text>
    </View>
  );
};

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.palette.white,
    background: Theme.palette.background,
  },
};

const Stack = createNativeStackNavigator();

const OPTIONS = {
  headerBackground: () => (
    <LinearGradient
      colors={["#4569EA", "#04D5E1"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  ),
  headerTitle: (props) => <LogoTitle style={styles.headerTitle} {...props} />,
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Mon Compte"
          component={AccountHome}
          options={OPTIONS}
        />
        <Stack.Screen
          name="Mes Informations"
          component={AccountInformations}
          options={OPTIONS}
        />
        <Stack.Screen
          name="Mes Missions"
          component={AccountMissions}
          options={OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
