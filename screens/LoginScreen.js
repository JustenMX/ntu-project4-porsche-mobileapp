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
import porschelogo from "../assets/porschelogo.png";

function LoginScreen() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      optMarketing: false,
      joinDate: new Date().toISOString(),
      isSubmitting: true,
      isValidating: true,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
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
    }),
    onSubmit: async (values) => {
      const currentDate = new Date().toISOString();
      values.joinDate = currentDate;

      // You can uncomment and add your API call logic here
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            width: 80,
            height: 40,
            resizeMode: "contain",
            marginBottom: 2,
          }}
          source={porschelogo}
        />
      </View>

      <View>
        <View style={{ marginTop: 8, marginHorizontal: 16 }}>
          <TextInput
            style={{
              marginTop: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
            placeholder="Name"
            onChangeText={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
              {formik.errors.name}
            </Text>
          ) : null}

          <TextInput
            style={{
              marginTop: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
            placeholder="Email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
              {formik.errors.email}
            </Text>
          ) : null}

          <TextInput
            style={{
              marginTop: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
            placeholder="Password"
            secureTextEntry
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
              {formik.errors.password}
            </Text>
          ) : null}

          <TextInput
            style={{
              marginTop: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
            placeholder="Password Confirmation"
            secureTextEntry
            onChangeText={formik.handleChange("passwordConfirmation")}
            onBlur={formik.handleBlur("passwordConfirmation")}
            value={formik.values.passwordConfirmation}
          />
          {formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation ? (
            <Text style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
              {formik.errors.passwordConfirmation}
            </Text>
          ) : null}

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#ccc",
              }}
              onPress={() =>
                formik.setFieldValue(
                  "optMarketing",
                  !formik.values.optMarketing
                )
              }
            >
              {formik.values.optMarketing && (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#4285F4",
                    borderRadius: 4,
                  }}
                />
              )}
            </TouchableOpacity>
            <Text style={{ marginLeft: 8, fontSize: 12, color: "#333" }}>
              I want to receive emails about events, product updates and company
              announcements.
            </Text>
          </View>

          <Text style={{ marginTop: 8, fontSize: 12, color: "#888" }}>
            By creating an account, you agree to our
            <Text style={{ textDecorationLine: "underline", color: "#4285F4" }}>
              {/* Add link to terms */}
            </Text>
            and
            <Text
              style={{
                marginLeft: 4,
                textDecorationLine: "underline",
                color: "#4285F4",
              }}
            >
              {/* Add link to privacy */}
            </Text>
            .
          </Text>

          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#4285F4",
                borderRadius: 4,
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={formik.handleSubmit}
            >
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                Create an account
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{ marginTop: 4, fontSize: 12, color: "#888" }}>
            Already have an account?
            <Text style={{ textDecorationLine: "underline", color: "#4285F4" }}>
              {/* Add link to sign in */}
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
