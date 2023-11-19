import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import porscheAPI from "../api/porscheAPI";
import { Video } from "expo-av";
import drive from "../assets/drive.mp4";

function LoginScreen({ setIsLoggedIn }) {
  const navigation = useNavigation();

  const handleRegistrationPress = () => {
    navigation.navigate("Register");
  };

  /**
   * ==============================================
   * Formik with Yup validation
   * ==============================================
   */

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await porscheAPI.post("/authentication/login", values);
        console.log("API Response:", response.data);

        if (response.data.jwt) {
          const jwtToken = response.data.jwt;
          const { userId, username } = response.data.porscheUserAuth;

          // Use AsyncStorage or other storage solution for React Native
          AsyncStorage.setItem("jwtToken", jwtToken);
          AsyncStorage.setItem("userId", userId.toString());
          AsyncStorage.setItem("username", username);
          setIsLoggedIn(true);
        } else {
          throw new Error("Authentication Error");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <View className="flex-1">
      {/* Expo Video Background */}
      <Video
        source={drive}
        rate={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <ScrollView className="bg-transparent">
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
          <View className="mt-2 mx-4">
            <TextInput
              className="mt-8 px-4 py-2 rounded border border-gray-300"
              placeholder="Email"
              onChangeText={formik.handleChange("username")}
              onBlur={formik.handleBlur("username")}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <Text className="text-red-500 text-xs font-bold">
                {formik.errors.username}
              </Text>
            ) : null}

            {/* Password */}
            <TextInput
              className="mt-8 px-4 py-2 rounded border border-gray-300"
              placeholder="Password"
              secureTextEntry
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Text className="text-red-500 text-xs font-bold">
                {formik.errors.password}
              </Text>
            ) : null}

            <View className="flex-row items-center mt-8">
              <TouchableOpacity
                className="flex-1 bg-gray-900 rounded px-4 py-2 items-center justify-center"
                onPress={formik.handleSubmit}
              >
                <Text className="text-white text-base font-bold">Login</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center">
              <TouchableOpacity
                className="text-xs text-gray-800 mt-8"
                onPress={handleRegistrationPress}
              >
                <Text>
                  Do you have an account?
                  <Text className="text-sm underline text-blue-500">
                    {" "}
                    Register
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
