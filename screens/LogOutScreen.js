import React from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LogoutScreen({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("jwtToken");
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("username");
    navigation.navigate("Login");

    return (
      <ScrollView className="bg-white just">
        <View className="flex items-center justify-between">
          <Image
            style={{
              width: 150,
              height: 60,
              resizeMode: "contain",
              marginBottom: 10,
            }}
            source={{
              uri: "https://res.cloudinary.com/doniqecd2/image/upload/v1700139232/PORSCHE/plogo.png",
            }}
          />
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity
            className="text-xs text-gray-800 mt-8"
            onPress={handleRegistrationPress}
          >
            <Text>
              Do you have an account?
              <Text className="text-sm underline text-blue-500"> Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
}

export default LogoutScreen;
