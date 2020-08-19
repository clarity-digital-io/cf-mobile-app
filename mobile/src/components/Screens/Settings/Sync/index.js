import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSync } from '../../../../api';

export const SyncDetails = ({ navigation, route }) => {

	const { sync } = useSync(); 
	
	return (
		<View style={{ flex: 1, flexDirection: 'column'	}}>

			<Ionicons style={{ marginRight: 14 }} size={32} onPress={() => sync()} name={"ios-sync"} color={'#E7F1F6'} />
			<Text style={{ backgroundColor: '#00b388', color: '#fff' }}>Sync</Text>

		</View>
  );
}
