import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
// import { Button } from "@react-native-material/core";
// import {
//   Stack,
//   TextInput,
//   IconButton,
//   Switch,
// } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import porschelogo from "../assets/porschelogo.png";
import { Button, Provider, TextInput } from "react-native-paper";
// import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList } from "react-native-dropdown-select-list";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPassword, setCfmPassword] = useState("");
  const [selected, setSelected] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, password, model, cfmPassword]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = "Name is required.";
    }

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Form is valid, perform the submission logic
      console.log("Form submitted successfully!");
    } else {
      // Form is invalid, display error messages
      console.log("Form has errors. Please correct them.");
    }
  };


const styles = StyleSheet.create({
  bgContainer: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  authContainer: {
    flex: 1,
    paddingHorizontal: 50,
  },
  logo: {
    width: 150,
    height: 200,
    resizeMode: "contain",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
  text: {
    textAlign: "center",
    marginBottom: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    margin: 12,
  },
});

const modelList = [
  {
    label: "Taycan",
    value: "TAYCAN",
  },
  {
    label: "Cayenne",
    value: "CAYENNE",
  },
  {
    label: "Panamera",
    value: "PANAMERA",
  },
  {
    label: "718",
    value: "P718",
  },
  {
    label: "911",
    value: "P911",
  },
  {
    label: "Macan",
    value: "MACAN",
  },
];

return (
  <>
    <ScrollView className={"bg-white"}>
      {/* logo */}
      <View style={styles.container}>
        <Image style={styles.logo} source={porschelogo} />
      </View>

      <View style={styles.authContainer}>
        <TextInput
          label="name"
          mode="outlined"
          id="name"
          name="name"
          value="name"
          onChangeText={setName}
        ></TextInput>

        <TextInput label="Email" mode="outlined"></TextInput>
        <TextInput label="Password" mode="outlined"></TextInput>
        <TextInput label="Vehicle Number" mode="outlined"></TextInput>

        <SelectList
          data={modelList}
          setSelected={setSelected}
          dropdownStyles={{ backgroundColor: "gray" }}
          dropdownTextStyles={{ color: "white" }}
          placeholder="Select car model"
          maxHeight={100}
        />
        <Button
          style={{ marginTop: 15 }}
          icon="send"
          mode="contained"
          onPress={() => alert("🎉🎉🎉")}
        >
          Sign up
        </Button>

        {/* Display error messages */}
        {Object.values(errors).map((error, index) => (
          <Text key={index} style={styles.error}>
            {error}
          </Text>
        ))}
      </View>
    </ScrollView>
  </>
);
        }
export default RegisterScreen;
