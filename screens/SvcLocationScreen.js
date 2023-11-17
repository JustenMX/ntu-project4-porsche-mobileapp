import React, { useEffect, useRef, useState } from "react";
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
// import MapViewDirections from 'react-native-maps-directions';
import {getDistance, getPreciseDistance} from 'geolib';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const destination = {latitude: 1.3074110934958647, longitude: 103.73432318271726};



function SvcLocationScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  // const [distance, setDistance] = useState("");


  const mapViewRef = useRef(null);


  // const calculateDistance = () => {
  //   var dis = getDistance(
  //     {latitude: 20.0504188, longitude: 64.4139099},
  //     {latitude: 51.528308, longitude: -0.3817765},
  //   );
  //     setDistance(dis.toString);
  // };
  

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
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
      });
    };

    getLocation();
  }, []);

  return (
    <View className="bg-white">
    <View className="bg-white rounded-2xl p-4 mt-0 mb-4 shadow-md justify-items-center">
      {initialRegion && (
        <MapView className="w-5/5 h-3/5" initialRegion={initialRegion} showsUserLocation={true} ref={mapViewRef}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: destination.latitude,
                longitude: destination.longitude,
              }}
              title="Porsche Service Centre"
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

            <View className=" bg-blue-100 rounded-2xl p-4 mt-6 mb-5 shadow-md">
              
              <Text className="text-xl font-bold">Porsche Service Centre </Text>
              <Text className="text-base">27A Tanjong Penjuru, Singapore 609042</Text>
              <Text className="text-base">+(65)6331 0700</Text>
              <Text className="text-sm mt-2">Mon - Thur  : 8.30am - 6pm</Text>
              <Text className="text-sm mt-2 ml-14">Fri  : 8.30am - 5.30pm</Text>
              <Text className="text-sm mt-2 ml-14">Sat : 8.30am - 12.30pm</Text>
              {/* <Text className="text-sm mt-2 ml-14">{distance}</Text> */}
              
             
              
      
              <TouchableOpacity className=" bg-gray-900 mt-2 rounded px-4 py-2 items-center justify-center"  onPress= {() => mapViewRef.current.animateToRegion( destination, 1000)}>
                <Text className="text-white text-base font-bold">
                  Search
                </Text>
              </TouchableOpacity>
              
            </View>
      </View>
   
    </View>       
  );
};



export default SvcLocationScreen;