/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect } from 'react';
import {Text, Button, View, TouchableOpacity, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ResponsesList } from '../Responses/list';
import { responseDetailStyle } from '../Elements/Stylesheet';

export const FormDetail = ({ route, navigation }) => {

	React.useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.form.forms__Title__c });
	}, [navigation]);
	
  return (

			<View style={{ 
				flex: 1, 
				alignItems: 'stretch',
				flexDirection: 'column',
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				padding: 10,
				background: '#fff'
			}}>
				
				<View style={responseDetailStyle.container}>
					<Text>Form Detail</Text>
				</View>

				<TouchableOpacity onPress={() => navigation.navigate('Form Response', route.params)} style={responseDetailStyle.createButton}>
					<Text style={responseDetailStyle.createButtonText}>Create New {route.params.form.forms__Title__c}</Text>
				</TouchableOpacity>
				<ResponsesList route={route} navigation={navigation} />


			</View>


  );
}