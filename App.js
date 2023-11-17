import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import SvcLocationScreen from "./screens/SvcLocationScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isLoggedIn ? (
          <>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Service" component={SvcLocationScreen} />
          </>
        ) : (
          <>
            <Tab.Screen name="Login">
              {(props) => (
                <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />
              )}
            </Tab.Screen>
            <Tab.Screen name="Register" component={RegistrationScreen} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
