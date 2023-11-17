import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

function HomeScreen() {
  return (
    <ScrollView className="bg-white">
      <View className="flex-2 items-center justify-between">
        <Text className="text-2xl font-extrabold text-center m-2">
          Hello Justen.
        </Text>
        <Text className="text-center mb-5">Welcome to Porsche Singapore</Text>
        <Image
          className="w-80 h-40 object-contain mb-2"
          source={{
            uri: "https://res.cloudinary.com/doniqecd2/image/upload/v1700054447/PORSCHE/panamera.png",
          }}
        />
        <Text className="text-center">Porsche Panamera Turbo S</Text>
        <Text className="text-center">SMZ8088G</Text>

        <View className="flex-row items-center mt-8 mx-10">
          <TouchableOpacity
            className="flex-1 bg-gray-900 rounded px-4 py-2 items-center justify-center"
            // onPress={formik.handleSubmit}
          >
            <Text className="text-white text-base font-bold">
              Book an appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-2 items-center justify-between px-1">
        <View className="bg-white rounded-2xl p-4 mt-8 mb-4 shadow-md">
          <Text className="text-base font-bold text-center">
            Upcoming Appointments
          </Text>
          {/* Start - Service Card */}
          <View className="bg-blue-100 rounded-2xl p-4 mt-4 mb-4 shadow-md">
            <Text className="text-sm">20 Nov 2023</Text>
            <Text className="text-xl font-bold">SMZ8088G</Text>
            <Text className="text-base">Porsche Service Centre</Text>
            <Text className="text-base">Tanjong Penjuru</Text>
            <Text className="text-sm mt-2">60000KM</Text>
          </View>
          {/* End - Service Card */}
          <Text className="text-sm text-center mt-5">
            Details of your most recent service / repair booking will be shown
            here
          </Text>
          <View className="border-b border-gray-300 my-4"></View>
          <Text className="text-base font-bold text-center">
            Latest Service
          </Text>
          {/* Start - Service Card */}
          <View className="bg-emerald-100 rounded-2xl p-4 mt-4 mb-4 shadow-md">
            <Text className="text-sm">3 Nov 2023</Text>
            <Text className="text-xl font-bold">SMZ8088G</Text>
            <Text className="text-base">Porsche Service Centre</Text>
            <Text className="text-base">Tanjong Penjuru</Text>
            <Text className="text-sm mt-2">60000KM</Text>
          </View>
          {/* End - Service Card */}
          {/* Start - Service Card */}
          <View className="bg-emerald-100 rounded-2xl p-4 mt-4 mb-4 shadow-md">
            <Text className="text-sm">3 Nov 2022</Text>
            <Text className="text-xl font-bold">SMZ8088G</Text>
            <Text className="text-base">Porsche Service Centre</Text>
            <Text className="text-base">Tanjong Penjuru</Text>
            <Text className="text-sm mt-2">45000KM</Text>
          </View>
          {/* End - Service Card */}

          {/* Start - Service Card */}
          <View className="bg-emerald-100 rounded-2xl p-4 mt-4 mb-4 shadow-md">
            <Text className="text-sm">3 Nov 2021</Text>
            <Text className="text-xl font-bold">SMZ8088G</Text>
            <Text className="text-base">Porsche Service Centre</Text>
            <Text className="text-base">Tanjong Penjuru</Text>
            <Text className="text-sm mt-2">30000km</Text>
          </View>
          {/* End - Service Card */}
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
