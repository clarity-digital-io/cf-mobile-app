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
		<View style={{height: 100, borderBottomColor: '#f2f5f9', borderBottomWidth: 2 }} >
		<ScrollView horizontal={true} contentContainerStyle={{ alignItems: 'center' }} >
			<View style={{ padding: 10, margin: 14 }}>
				<Text style={{ color: '#16325c', fontSize: 14, fontWeight: '100' }}>
					Connection
				</Text>
				<Text style={{ color: '#16325c', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
					Connection
				</Text>
			</View>
			<View style={{ padding: 10,  margin: 14 }}>
				<Text style={{ color: '#16325c', fontSize: 14, fontWeight: '100' }}>
					Fields
				</Text>
				<Text style={{ color: '#16325c', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
					{ activeForm.Questions.length }
				</Text>
			</View>
			<View style={{ padding: 10,  margin: 14 }}>
				<Text style={{ color: '#16325c', fontSize: 14, fontWeight: '100' }}>
					Location Required
				</Text>
				<Text style={{ color: '#16325c', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
					Yes
				</Text>
			</View>
			<View style={{ padding: 10, margin: 14 }}>
				<Text style={{ color: '#16325c', fontSize: 14, fontWeight: '100' }}>
					Description
				</Text>
				<Text style={{ color: '#16325c', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
					{ activeForm.Description }
				</Text>
			</View>
			<View style={{ padding: 10,  margin: 14}}>
				<Text style={{ color: '#16325c', fontSize: 14, fontWeight: '100' }}>
					Requires Customer Signature
				</Text>
				<Text style={{ color: '#16325c', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
					No
				</Text>
			</View>
			<View style={{ padding: 10,  margin: 14 }}>
				<Text style={{ color: '#16325c', fontSize: 14, fontWeight: '100' }}>
					Payment Option
				</Text>
				<Text style={{ color: '#16325c', fontSize: 12, fontWeight: '500', marginTop: 10 }}>
					Yes
				</Text>
			</View>
		</ScrollView>
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