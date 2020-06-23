/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useCallback } from 'react';
import {Platform, View, FlatList, StyleSheet} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { responseDetailStyle } from '../../Elements/Stylesheet';
import { ResponseListItem } from '../Responses/listitem';
import { AppContext } from '../../Context';
import { useResponses } from '../../../api';
import { useFocusEffect } from '@react-navigation/native';

export const FormDetail = ({ route, navigation }) => {
	
	const { activeForm } = useContext(AppContext); 

	const { responses, filtered } = useResponses();

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			
			if(isActive) 
				filtered(`Form__c = "${activeForm.Id}"`);
	
			return () => {
				isActive = false;
			};
			
		}, [route.key])
	);

	const responseSelected = () => {

	}

	const newResponse = () => {
		navigation.navigate('Form Response', route.params)
	}

	React.useLayoutEffect(() => {
    navigation.setOptions({
			title: route.params.Title__c,
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#16325c'} />
			),
			headerRight: () => (
				Platform.OS === 'ios' ?
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={22} onPress={() => newResponse()} name={"ios-add"} color={'#16325c'} /> :
				null
			)
    });
  }, [navigation]);
	
	return  <View  style={{ flex:1, backgroundColor: '#fff' }}>
		<View style={responseDetailStyle.container}>
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

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
		color: '#16325c'
  },
});