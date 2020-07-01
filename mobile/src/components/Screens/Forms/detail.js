/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {Platform, View, FlatList, StyleSheet} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../../Context';

import { responseDetailStyle } from '../../Elements/Stylesheet';
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

	const responseSelected = () => {

	}

	const newResponse = () => {
		navigation.navigate('InitResponse', { formId: activeForm.Id, new: true })
	}

	React.useLayoutEffect(() => {
    navigation.setOptions({
			title: route.params.Title,
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