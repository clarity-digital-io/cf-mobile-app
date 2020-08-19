/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Questions } from '../../../Elements/Questions';
import { FormContext } from '../../../Context';
import { fieldStyle } from '../../../../stylesheet';
import { ConnectionTitle } from '../../../Elements/Controls/Title';

export const Single = () => {

	const { formConnection, errors } = useContext(FormContext); 

	return <ScrollView>
			{
				formConnection.Id ? 
				<Connection formConnection={formConnection} /> :
				null
			}
		
			{
				errors.success == false ? 
				<Error errors={errors} /> :
				null
			}
			<Questions />
		</ScrollView>
}

const Connection = ({formConnection}) => {
	return <View style={fieldStyle.main}>
		<ConnectionTitle title={'Form Record Connection'} />
		<View style={ fieldStyle.connectionFieldType}>
			<Text>{formConnection.Type}</Text>	
		</View>
		<View style={ fieldStyle.connectionField}>
			<Text style={ fieldStyle.connectionFieldText }>{formConnection.Name}</Text>	
		</View>
	</View>
}

const Error = ({ errors }) => {

	return (
		<View style={fieldStyle.mainError}>
				<Text style={fieldStyle.mainErrorText}>Oops! Something went wrong.</Text>	
		</View>
	)

}

