/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, View } from 'react-native';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ClarityDate = ({ key, question, disabled }) => {

	const [date, setDate] = useState(new Date(1598051730000));

	const [show, setShow] = useState(false); 
	
	const showDatePicker = () => {
		setShow(show => {
			return !show
		})
	}

	return [
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'	}}>
				<Ionicons style={{ marginRight: 14 }} size={32} onPress={() => showDatePicker()} name={"ios-calendar"} color={'#E7F1F6'} />
				<Text style={{ color: '#1C1C1C' }}>{Moment(date).format('MMMM d YYYY')}</Text>
			</View>,
			show ? 
			<DateTimePicker
				testID="dateTimePicker"
				timeZoneOffsetInMinutes={0}
				value={date}
				mode={'date'}
				is24Hour={true}
				display="default"
				onChange={(v) => console.log('v', v)}
			/> :
			null
		
	]
}