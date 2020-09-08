/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { fieldStyle } from '../../../stylesheet';
import { transform } from '../../../api/helpers';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormContext } from '../../Context';
import { useOnSelectChange } from '../../Handlers/OnChange/useOnSelectChange';

const getOptions = (question, picklists) => {

	if(question.Type == 'PICKLIST') {
		let picklistValues = transform(picklists[0].PicklistValues); 

		return picklistValues.map(val => {
			return {
				Label: val.Label,
				Name: val.APIName,
				Id: val.Id
			}
		})

	} else {
		return transform(question.Question_Options);
	}

}

export const Dropdown = ({ question, disabled, uuid, isRecordGroup  }) => {

	const { recordGroupPicklists } = useContext(FormContext); 

	const [options] = useState(getOptions(question, recordGroupPicklists));

	return options.length > 10 ?
		<SelectView options={options} question={question} /> :
		<PickerView options={options} question={question} />
}

const SelectView = ({ options, question }) => {

	const  { value, answers } = useOnSelectChange(question); 

	const { navigation, setActiveOptions } = useContext(FormContext); 

	const select = () => {
		setActiveOptions(options); 
		navigation.navigate('Select', { question: question })
	}

	return (
		<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10	}}> 
			<Ionicons style={{ marginRight: 14 }} size={32} onPress={select} name={ value != null ? 'ios-checkmark' : 'ios-add' } color={'#1C1C1C'} />

			{
				value != null ? 
				<Text style={{ color: '#1C1C1C' }}>{ value.Label }</Text> :
				<Text style={{ color: '#1C1C1C' }}>Select an Option</Text> 
			}

		</View>
	)

}

const PickerView = ({ options, question }) => {

	const  { value, update, answers } = useOnSelectChange(question); 

	return (
		<RNPickerSelect
			style={{
				inputIOS: fieldStyle.input,
				padding: 100
			}}
			onValueChange={(val) => update(val)}
			items={options.map(option => {
				return {
					label: option.Label, 
					value: option.Id
				}
			})}
		/>
	)

}