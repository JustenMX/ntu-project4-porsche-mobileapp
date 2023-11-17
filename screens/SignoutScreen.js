import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignoutScreen({ setIsLoggedIn }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("jwtToken");
    await AsyncStorage.removeItem("userId");
    await AsyncStorage.removeItem("username");
    setIsLoggedIn(false);
  };

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

      <View className="bg-white rounded-2xl p-4 mt-8 mb-4 mx-4 shadow-md">
        <View className="flex-row items-center mt-8">
          <TouchableOpacity
            className="flex-1 bg-gray-900 rounded px-4 py-2 items-center justify-center"
            onPress={handleLogout}
          >
            <Text className="text-white text-base font-bold">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignoutScreen;
