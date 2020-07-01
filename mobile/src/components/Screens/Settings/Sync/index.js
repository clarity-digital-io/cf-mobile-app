import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSync } from '../../../../api';

export const SyncDetails = ({ navigation, route }) => {

	const { sync, profile } = useSync(); 

	console.log('profile', profile); 
	
	return (
    <View style={{ backgroundColor: '#fff' }}>

				<Text style={{ color: '#16325c', fontWeight: '300', fontSize: 14 }}>Start Syncing</Text>

				<View style={{ alignItems: 'center', padding: 10	}}>
					<Ionicons style={{ marginRight: 14 }} size={22} onPress={() => sync()} name={"ios-sync"} color={'#16325c'} />
					<Text style={{ color: '#16325c' }}>Sync</Text>
				</View>


		</View>
  );
}
