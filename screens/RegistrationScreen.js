import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import porschesgAPI from "../api/porschesgAPI";

function RegistrationScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  /**
   * ==============================================
   * Formik with Yup validation
   * ==============================================
   */

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      vehicleNo: "",
      porscheModel: "Select",
      optMarketing: false,
      joinDate: new Date().toISOString(),
      isSubmitting: true,
      isValidating: true,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one numeric digit")
        .required("Password is required"),
      passwordConfirmation: Yup.string()
        .label("confirm password")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      vehicleNo: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Vehicle number is required"),
      porscheModel: Yup.string().notOneOf(
        ["select"],
        "Vehicle model is required"
      ),
    }),
    onSubmit: async (values) => {
      const currentDate = new Date().toISOString();
      values.joinDate = currentDate;

      try {
        // Post Method
        const response = await porschesgAPI.post("/user/register", values);
        console.log("API Response:", response.data);

        if (response.status === 200) {
          console.log("User registered successfully");
        } else {
          throw new Error("Network Error");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ScrollView className="bg-white">
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
        <View className="mx-4">
          <TextInput
            className="mt-8 px-4 py-2 rounded border border-gray-300"
            placeholder="Name"
            onChangeText={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Text className="text-red-500 text-xs font-bold">
              {formik.errors.name}
            </Text>
          ) : null}

          <TextInput
            className="mt-4 px-4 py-2 rounded border border-gray-300"
            placeholder="Email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text className="text-red-500 text-xs font-bold">
              {formik.errors.email}
            </Text>
          ) : null}

          <TextInput
            className="mt-4 px-4 py-2 rounded border border-gray-300"
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

          <TextInput
            className="mt-4 px-4 py-2 rounded border border-gray-300"
            placeholder="Password Confirmation"
            secureTextEntry
            onChangeText={formik.handleChange("passwordConfirmation")}
            onBlur={formik.handleBlur("passwordConfirmation")}
            value={formik.values.passwordConfirmation}
          />
          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <Text className="text-red-500 text-xs font-bold">
              {formik.errors.passwordConfirmation}
            </Text>
          ) : null}

          <TextInput
            className="mt-4 px-4 py-2 rounded border border-gray-300"
            placeholder="Vehicle No"
            onChangeText={formik.handleChange("vehicleNo")}
            onBlur={formik.handleBlur("vehicleNo")}
            value={formik.values.vehicleNo}
          />
          {formik.touched.vehicleNo && formik.errors.vehicleNo ? (
            <Text className="text-red-500 text-xs font-bold">
              {formik.errors.vehicleNo}
            </Text>
          ) : null}

          <View className="mt-8">
            <Text className="text-xs text-gray-700">
              Select your vehicle model
            </Text>
            <Picker
              selectedValue={formik.values.porscheModel}
              onValueChange={(itemValue, itemIndex) =>
                formik.setFieldValue("porscheModel", itemValue)
              }
            >
              <Picker.Item label="Select 🚗" value="select" />
              <Picker.Item label="Panamera" value="PANAMERA" />
              <Picker.Item label="911" value="P911" />
              <Picker.Item label="718" value="P718" />
              <Picker.Item label="Macan" value="MACAN" />
              <Picker.Item label="Cayenne" value="CAYENNE" />
              <Picker.Item label="Taycan" value="TAYCAN" />
            </Picker>
            {formik.touched.porscheModel && formik.errors.porscheModel && (
              <Text className="text-red-500 text-xs font-bold">
                {formik.errors.porscheModel}
              </Text>
            )}
          </View>

          <View className="flex-row items-center mt-2">
            <TouchableOpacity
              className="h-5 w-5 rounded border-2 border-gray-300"
              onPress={() =>
                formik.setFieldValue(
                  "optMarketing",
                  !formik.values.optMarketing
                )
              }
            >
              {formik.values.optMarketing && (
                <View className="flex-1 bg-gray-900 rounded" />
              )}
            </TouchableOpacity>
            <Text className="ml-2 text-xs text-gray-700">
              I want to receive emails about events, product updates and company
              announcements.
            </Text>
          </View>

          <Text className="mt-8 text-xs text-gray-800">
            By creating an account, you agree to our
            <Text className="underline text-blue-500"> terms</Text> and
            <Text className="ml-1 underline text-blue-500"> privacy</Text>.
          </Text>

          <View className="flex-row items-center mt-8">
            <TouchableOpacity
              className="flex-1 bg-gray-900 rounded px-4 py-2 items-center justify-center"
              onPress={formik.handleSubmit}
            >
              <Text className="text-white text-base font-bold">
                Create an account
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity
              className="text-xs text-gray-800 mt-8"
              onPress={handleLoginPress}
            >
              <Text>
                Already have an account?
                <Text className="text-sm underline text-blue-500">
                  {" "}
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegistrationScreen;
