import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Moment from 'moment';
import { alert } from '../../Elements/Notification';

import {Text, View, ScrollView, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useProfile } from '../../../api/profile';

import {ListItem} from 'react-native-elements';

import TouchableScale from 'react-native-touchable-scale';

export const SettingsList = ({ navigation, route }) => {

	const { sync, getProfile, profile } = useProfile();

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive) 
				getProfile();
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	return (
    <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
				<ScrollView>

					{
						profile != null ?
						<ListItem 
							Component={TouchableScale}
							friction={90}
							tension={100} 
							activeScale={0.98}
							title={
								() => <View style={{ paddingTop: 2, paddingBottom: 2 }}>
									<Text style={{ color: '#1C1C1C', fontWeight: '500', fontSize: 12 }}>Sync Salesforce Records</Text>
									<Text style={{ paddingTop: 10, color: '#1C1C1C', fontWeight: '100', fontSize: 12 }}>Status: {profile.SyncStatus}</Text>
									<Text style={{ paddingTop: 10, color: '#1C1C1C', fontWeight: '500', fontSize: 12 }}>Last Sync Date: {Moment(new Date(profile.LastSync)).format('MM d YYYY hh:mm:ss')} </Text>
								</View>
							}
							onPress={() => alert('Salesforce Sync', 'This will take a few minutes.', () => onConfirm(sync))}
							chevron={() => <Ionicons size={18} onPress={() => console.log('test')} name={"ios-sync"} color={'#1C1C1C'} /> }
							containerStyle={style.container}
						/>
						:
						null
					}

				</ScrollView>
		</View>
  );
}

const onConfirm = (sync) => {

	sync()

}


{
	/**
	 * Send Feedback and Push Notifications
	 */
}

const colors = [
	'#E7F1F6',
	'#FDE14D',
	'#001B34',
	'#1C1C1C'
]

const style = StyleSheet.create({
  container: { 
		margin: 4, 
		marginBottom: 2,
		padding: 14, 
		backgroundColor: '#fff', 
		borderColor: colors[2], 
		borderLeftWidth: 6, 
		borderRightWidth: 0, 
		borderBottomWidth: 0, 
		borderTopWidth: 0,
		borderRadius: 2
	}
});

