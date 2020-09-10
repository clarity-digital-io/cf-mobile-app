/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {ScrollView,Platform, View, FlatList, StyleSheet, Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../../Context';

import { detailStyle } from '../../../stylesheet';
import { ResponseListItem } from '../Responses/listitem';

import { useResponses } from '../../../api';

export const Detail = ({ route, navigation }) => {

	const { activeForm } = useContext(AppContext); 

	const { responses, filtered } = useResponses();

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive) 
				filtered(`Form = "${activeForm.Id}"`);
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const responseSelected = (response) => {
		navigation.navigate('InitResponse', { formId: activeForm.Id, new: false, responseId: response.UUID })
	}

	const newResponse = () => {
		navigation.navigate('InitResponse', { formId: activeForm.Id, new: true })
	}

	React.useLayoutEffect(() => {
    navigation.setOptions({
			title: activeForm.Title,
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#fff'} />
			),
			headerRight: () => (
				Platform.OS === 'ios' ?
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={22} onPress={() => newResponse()} name={"ios-add"} color={'#fff'} /> :
				null
			)
    });
  }, [navigation]);
	
	return  <View  style={{ backgroundColor: '#F8F8F8', flex: 1 }}>
		<View 
			style={{ 
				marginBottom: 0,
				padding: 14, 
				backgroundColor: '#1C1C1C',
				borderRightWidth: 0, 
				borderBottomWidth: 0, 
				borderTopWidth: 0
			}}
		>
			<View style={{ padding: 2,  margin: 2 }}>
				<Text style={{ color: '#fff', fontSize: 10, fontWeight: '500' }}>
					Fields
				</Text>
				<Text style={{ color: '#fff', fontSize: 12, fontWeight: '300', marginTop: 10 }}>
					{ activeForm.Questions.length }
				</Text>
			</View>
			<View style={{ padding: 2, margin: 2 }}>
				<Text style={{ color: '#fff', fontSize: 10, fontWeight: '500' }}>
					Description
				</Text>
				<Text style={{ color: '#fff', fontSize: 12, fontWeight: '300', marginTop: 10 }}>
					{ activeForm.Description }
				</Text>
			</View>
		</View>
		
		<FlatList
			data={responses || []}
			renderItem={({ item }) => (
				<ResponseListItem key={item.Name} response={item} onPress={responseSelected} />
			)}
		/>

		{
			Platform.OS === 'android' ?
			<FloatingAction
				color={'#fff'}
				floatingIcon={<Icon name="md-add" style={styles.actionButtonIcon} />}
				onPressMain={() => newResponse() }
			/> :
			null
		}

	</View>

}

const colors = [
	'#E7F1F6',
	'#FDE14D',
	'#001B34',
	'#1C1C1C'
]

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
		color: '#1C1C1C'
  },
});