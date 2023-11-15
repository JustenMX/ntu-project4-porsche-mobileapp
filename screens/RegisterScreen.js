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
import { Button, Provider, TextInput } from "react-native-paper";
// import DropDownPicker from 'react-native-dropdown-picker';
import { SelectList } from "react-native-dropdown-select-list";



function RegisterScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [model, setModel] = useState("");
    const [selected, setSelected] = useState("");
    // const [isOpen, setIsOpen] = useState(false);
  

  
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
        paddingHorizontal:50,
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
        }
      ];
    
  
    return (
      <>
        <ScrollView style={styles.bgContainer}>
          {/* logo */}
          <View style={styles.container}>
            <Image style={styles.logo} source={porschelogo} />
          </View>

          <View style={styles.authContainer}>
          <TextInput
            label="Name"
            mode="outlined"
            
          ></TextInput>
          <TextInput
            label="Email"
            mode="outlined"
         
          ></TextInput>
          <TextInput
            label="Password"
            mode="outlined"
          
          ></TextInput>
          <TextInput
            label="Vehicle Number"
            mode="outlined"
           
          ></TextInput>

          <SelectList 
            data={modelList} 
            setSelected={setSelected}
            dropdownStyles={{backgroundColor:'gray'}}
            dropdownTextStyles={{color:'white'}}
            placeholder="Select car model"
            maxHeight={100}
            />

          {/* <DropDownPicker
            items={modelList}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={model}
            setValue={() => setModel(model)}
            maxHeight={200}
            autoScroll

            placeholder="Select your car model"

            showTickIcon={true}
            showArrowIcon={true}
            dropDownDirection="BOTTOM"
            disableBorderRadius={true}
            theme="LIGHT"


          >

          </DropDownPicker> */}
        
          <Button
            style={{ marginTop: 15 }}
            icon="send"
            mode="contained"
          >
            Sign up
          </Button>
        </View>

        </ScrollView>
      </>
    );
  }
  
  export default RegisterScreen;