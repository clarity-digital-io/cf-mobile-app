/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect } from 'react';
import {Text, FlatList, View} from 'react-native';
import {useFormsAPI} from '../../api';

import { FormListItem } from './listitem'

export const FormsList = ({ route, navigation }) => {

	const { loading, forms, error } = useFormsAPI(route.key);
	
	const formSelected = (form) => {
		console.log('navigation', form, navigation)
		navigation.navigate('Form Details', form)
	}

	return (
    <View>
			{
				loading && forms != null && forms.length > 0 ? 
				<Text>Forms!</Text> :
				<FlatList
					data={forms}
					renderItem={({ item }) => (
						<FormListItem form={item} onPress={formSelected} />
					)}
				/>
			}
    </View>
  );
}
