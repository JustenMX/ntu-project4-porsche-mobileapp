import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import SvcLocationScreen from "./screens/SvcLocationScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    // Check authentication status from AsyncStorage
    const checkAuthenticationStatus = async () => {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      setIsLoggedIn(!!jwtToken); // Set isLoggedIn to true if jwtToken exists
    };

    checkAuthenticationStatus();
  }, []);

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
                <LoginScreen
                  {...props}
                  setIsLoggedIn={(value) => {
                    setIsLoggedIn(value);
                  }}
                />
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
