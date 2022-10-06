import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountHome from "../screens/Account/AccountHome";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./layout";

const LogoTitle = (children) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{children.children}</Text>
    </View>
  );
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mon Compte"
          component={AccountHome}
          options={OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
