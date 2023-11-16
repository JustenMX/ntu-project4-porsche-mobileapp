import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
// import { Button } from "@react-native-material/core";
// import {
//   Stack,
//   TextInput,
//   IconButton,
//   Switch,
// } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import porschelogo from "../assets/porschelogo.png";
import { Button, TextInput } from "react-native-paper";
import * as Yup from "yup";
import { Formik } from "formik";


function LoginScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email Required"),
    password: Yup.string().required("password Required"),
  })

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

  return (
    <>
      <ScrollView className={"bg-white"}>
        {/* logo */}
        <View style={styles.container}>
          <Image style={styles.logo} source={porschelogo} />
        </View>

        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => {console.log(values)}}
         >
          {({
              handleSubmit,
              errors
          }) => (

        <View style={styles.authContainer}>
          
          <TextInput
            label="Email"
            mode="outlined"
            style={{ width: 300, marginLeft: 50 }}
          ></TextInput>
          <TextInput
            label="Password"
            mode="outlined"
            style={{ width: 300, marginLeft: 50 }}
          ></TextInput>
          <Button
            style={{ width: 300, marginLeft: 50, marginTop: 15 }}
            icon="send"
            mode="contained"
            onPress={handleSubmit}
          >
            Login
          </Button>
          <Text>{errors.email}</Text>
          <Text>{errors.password}</Text>
        
          
        </View>
        )}
        </Formik>

         {/* Start - Service Card */}
         <View className="bg-emerald-100 rounded-2xl p-4 mt-4 mb-4 shadow-md">
            <Text className="text-sm">3 Nov 2023</Text>
            <Text className="text-xl font-bold">SMZ4044G</Text>
            <Text className="text-base">Porsche Service Centre</Text>
            <Text className="text-base">Tanjong Penjuru</Text>
            <Text className="text-sm mt-2">32000KM</Text>
          </View>
          {/* End - Service Card */}

        {/* Login Credentials */}
        {/* <View style={styles.authContainer}>
          <Stack spacing={2} style={{ margin: 16 }}>
            <TextInput
              label="email"
              variant="outlined"
              trailing={(props) => (
                <IconButton
                  icon={(props) => <Icon name="email" {...props} />}
                  {...props}
                  color="black"
                />
              )}
            />{" "}
            <TextInput
              label="password"
              secureTextEntry
              variant="outlined"
              trailing={(props) => (
                <IconButton
                  icon={(props) => <Icon name="lock" {...props} />}
                  {...props}
                  color="black"
                />
              )}
            />
          </Stack>
          <Stack fill center spacing={4}>
            <Text>Sports+ Mode</Text>
            <Switch
              value={checked}
              onValueChange={() => setChecked(!checked)}
            />
          </Stack>
          <Button
            title="Submit"
            style={{ alignSelf: "center", marginTop: 20 }}
            onPress={() => alert("🎉🎉🎉")}
            color="black"
          />
        </View> */}
      </ScrollView>
    </>
  );
}

export default LoginScreen;
