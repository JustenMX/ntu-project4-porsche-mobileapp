import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import porschesgAPI from "../api/porschesgAPI";

function LoginScreen() {
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
        const response = await porschesgAPI.post(
          "/authentication/login",
          values
        );

        console.log("API Response:", response.data);

        if (response.data.jwt) {
          const jwtToken = response.data.jwt;
          const { userId, username } = response.data.porscheUserAuth;

          // Use AsyncStorage or other storage solution for React Native
          AsyncStorage.setItem("jwtToken", jwtToken);
          AsyncStorage.setItem("userId", userId.toString());
          AsyncStorage.setItem("username", username);

          // Set isLoggedIn to true in App component
          // setIsLoggedIn(true);

          // Navigate to the desired screen
          navigation.navigate("Home");

          // Alert.alert("Login Successful");
        } else {
          // Alert.alert("Invalid username or password. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        // Alert.alert("An error occurred. Please try again later.");
      }
    },
  });

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
        <View className="mt-8 mx-4">
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
  );
}

export default LoginScreen;
