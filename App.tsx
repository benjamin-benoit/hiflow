import React, { useState } from "react";
import { RootNavigator } from "./src/routes/routes";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "MerriweatherSans-Bold": require("./src/assets/fonts/MerriweatherSans-Bold.ttf"),
    "MerriweatherSans-Medium": require("./src/assets/fonts/MerriweatherSans-Medium.ttf"),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
      <RootNavigator />
    </>
  );
}

export default App;
