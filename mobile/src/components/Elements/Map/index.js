/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';

export const ClarityMap = ({ route }) => {

	const [coordinates, setCoordinates] = useState({latitude: 37.78825, longitude:-122.4324});
	const initialRegion = {
		latitude: -37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}

	const onMapReady = (e) => {
		console.log('e', e); 
	}
		
	return (
		<MapView
		style={styles.map}
		showsUserLocation={true}
		initialRegion={{
			latitude: 37.78825,
			longitude: -122.4324
		}}
  >

<Marker draggable title='Test' description='test' coordinate={coordinates} onDragEnd={(e) => setCoordinates(e.nativeEvent.coordinate)} />

		</MapView>
	)
}
const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
});