/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { connectActionSheet } from '@expo/react-native-action-sheet'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useActionSheet } from '@expo/react-native-action-sheet'

import { Single } from './single';
import { Multi } from './multi';

import { FormContext } from '../../../Context';
import { useSubmit } from '../../../../api';

export const NewFormResponse = ({ route, navigation }) => {
	return (
		<ActionSheetProvider>
			<NewFormResponseConnected route={route} navigation={navigation} />
		</ActionSheetProvider>
	);
}

export const NewFormResponseConnected = connectActionSheet(({ route, navigation }) => {

	const { showActionSheetWithOptions } = useActionSheet();

	const { handleCancel, handleProcess } = useSubmit(navigation);

	const process = () => {

		const options = ['Save & New', 'Submit', 'Cancel'];
		const cancelButtonIndex = 2;

		showActionSheetWithOptions({ options, cancelButtonIndex }, buttonIndex => handleProcess(buttonIndex)); 

	}

	const cancel = () => {

		const options = ['Delete Response', 'Save & Close', 'Cancel'];
		const destructiveButtonIndex = 0;
		const cancelButtonIndex = 2;

		showActionSheetWithOptions({ options, cancelButtonIndex, destructiveButtonIndex }, buttonIndex => handleCancel(buttonIndex));

	}

	const { form } = useContext(FormContext);
	
	React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={32} onPress={() => process()} name={"ios-checkmark"} color={'#16325c'} />
			),
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => cancel()} name={"ios-close"} color={'#16325c'} />
			)
    });
  }, [navigation]);

	return form.Is_Multi_Page__c ? 
				<Multi key="Multi" /> :
				<Single key="Single" />

})
