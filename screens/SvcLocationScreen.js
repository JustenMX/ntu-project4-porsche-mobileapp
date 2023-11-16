import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const destination = {latitude: 1.3074110934958647, longitude: 103.73432318271726};

function SvcLocationScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    };

    getLocation();
  }, []);

  return (
    <View className="bg-white">
    <View className="bg-white rounded-2xl p-4 mt-0 mb-4 shadow-md justify-items-center">
      {initialRegion && (
        <MapView className="w-5/5 h-4/5" initialRegion={initialRegion} showsUserLocation={true}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude,
              }}
              title="destination"
            />
          )}
{/* 
          <MapViewDirections 
            origin={currentLocation}
            destination={destination}
           
            strokeWidth={3}
            strokeColor="hotpink"
            /> */}
        </MapView>
      )}

     
    </View>
    </View>       
  );
};



export default SvcLocationScreen;