import { Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';  //TODO: remove PROVIDER_GOOGLE import if not using Google Maps


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default function Map() {
    return(
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} //TODO: remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: LATITUDE,
         longitude: LONGITUDE,
         latitudeDelta: LATITUDE_DELTA,
         longitudeDelta: LONGITUDE_DELTA,
       }}
     >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} // TODO: replace lat, lng and title with original data from API if needed, added for demo purpose only
        title={'OTOZ Head office'} />
        <Marker coordinate={{ latitude: 37.78525, longitude: -122.4224 }}
         title={'Bilal car rental'} />
        <Marker coordinate={{ latitude: 37.7765, longitude: -122.4124 }} 
         title={'Toyota Yaris'} />
        <Marker coordinate={{ latitude: 37.7965, longitude: -122.4424 }}
         title={'BMW 7281'}  />
        <Marker coordinate={{ latitude: 37.8065, longitude: -122.4424 }}
        title={'mini cooper countryman'} />
     </MapView>
   </View>);
}