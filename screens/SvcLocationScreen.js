import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { getDistance, getPreciseDistance } from "geolib";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const destination = {
  latitude: 1.3074110934958647,
  longitude: 103.73432318271726,
};

function SvcLocationScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [distance, setDistance] = useState("");
  const mapViewRef = useRef(null);
  const calculateDistance = () => {
    var dis = getDistance(
      {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
      { latitude: destination.latitude, longitude: destination.longitude }
    );
    var round = Math.round(dis / 1000);
    setDistance(round);
  };
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setInitialRegion({
          latitude: 1.29027,
          longitude: 103.851959,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        });
        return;
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922,
        });
      }
    };
    getLocation();
  }, []);
  return (
    <ScrollView className="bg-white">
      <View className="bg-white">
        <View className="bg-white rounded-2xl p-4 mt-0 mb-4 shadow-md justify-items-center">
          {initialRegion && (
            <MapView
              className="w-5/5 h-3/5"
              initialRegion={initialRegion}
              showsUserLocation={true}
              ref={mapViewRef}
            >
              <Marker
                coordinate={{
                  latitude: destination.latitude,
                  longitude: destination.longitude,
                }}
                title="Porsche Service Centre"
              />
              {/* 
          <MapViewDirections 
            origin={currentLocation}
            destination={destination}
            strokeWidth={3}
            strokeColor="hotpink"
            /> */}
            </MapView>
          )}
          <View className=" bg-blue-100 rounded-2xl p-4 mt-6 mb-5 shadow-md">
            <Text className="text-xl font-bold">Porsche Service Centre </Text>
            <Text className="my-2">
              {distance != "" ? <Text> ({distance} km)</Text> : ""}
            </Text>
            <Text className="text-sm font-semibold">
              27A Tanjong Penjuru, Singapore 609042
            </Text>
            <Text className="text-sm font-semibold">+(65)6331 0700</Text>
            <Text className="text-sm mt-2">Mon - Thur : 8.30am - 6pm</Text>
            <Text className="text-sm mt-2 ml-14">Fri : 8.30am - 5.30pm</Text>
            <Text className="text-sm mt-2 ml-14">Sat : 8.30am - 12.30pm</Text>
            <TouchableOpacity
              className=" bg-gray-900 rounded px-4 py-2 items-center justify-center mb-2 mt-4"
              onPress={() => {
                mapViewRef.current.animateToRegion(destination, 1000);
                {
                  currentLocation && calculateDistance();
                }
              }}
            >
              <Text className="text-white text-base font-bold">Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SvcLocationScreen;
