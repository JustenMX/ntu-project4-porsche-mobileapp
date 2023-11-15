import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./screens/HomeScreen";
// import SettingScreen from "./screens/SettingScreen";
import LoginScreen from "./screens/LoginScreen";
// import ScannerScreen from "./screens/ScannerScreen";
// import CalendarScreen from "./screens/CalendarScreen";

function App() {
  const Tab = createBottomTabNavigator();

  // const status = false;
  // if (!status) {
  //   return <LoginScreen />;
  // }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        {/* <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} /> */}
        {/* <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Scanner" component={ScannerScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
