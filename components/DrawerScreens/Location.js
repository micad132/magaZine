import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Box } from "native-base";
const Location = () => {
  const region = {
    latitude: 9.042297075866122,
    longitude: 7.47588413525869,
    latitudeDelta: 1.0922,
    longitudeDelta: 0.0221,
  };
  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Box mt={100} mb={20}>
        <MapView
          region={region}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="MagaZine"
            description="Our location"
          />
        </MapView>
      </Box>
    </Box>
  );
};

export default Location;
