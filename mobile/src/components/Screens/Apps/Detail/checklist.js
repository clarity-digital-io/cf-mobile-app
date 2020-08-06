/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Timeline} from 'react-native-just-timeline';
import Moment from 'moment';
import { main } from '../../../../stylesheet/theme';
import { useChecklist } from '../../../../api/checklists';

export const Checklist = ({ route, navigation }) => {
	
	const [checkListGroupId] = useState(route.params.record.forms__Checklist_Group__c); 
	const [data, setData] = useState([]);

	const { loading, checkListResponses, create } = useChecklist('Account', route.params.record.Id);

	const start = () => {
		//create new checklist and related responses
		//setloading
		//when created
		//stop loading and show new checklist responses required
		//new checklist and responses are created in realm
		//these are auto uploaded to salesforce when needed
		create(checkListGroupId);
		
	}

	return [
				
		<View style={{ borderRadius: 14, margin: 8, marginTop: 4,  marginBottom: 0, padding: 14, borderLeftWidth: 0, borderRightWidth: 0 }}>
			<Text style={{ color: '#16325c', fontWeight: '700', fontSize: 16 }}>Today</Text>
		</View>,

		loading ? 
			<ActivityIndicator size="large" color={main.highLightColor} /> : 
			checkListResponses.length ? 
				<Timeline data={transformChecklistData(checkListResponses, navigation)} timeContainerStyle={{ display: 'none' }} contentContainerStyle={{ flexBasis: '78%' }} /> :
				<TouchableOpacity onPress={() => start()} style={startStyle}>
					<Text style={{ fontSize: 14, color: main.highLightColor, fontWeight: '700' }}>Start New Checklist</Text>
				</TouchableOpacity>

	]

}

const startStyle = {
	backgroundColor: main.backgroundColor,
	borderRadius: 20,
	flexDirection: "row",
	alignItems: "center",
	alignSelf: "center",
	justifyContent: 'center',
	padding: 0,
	width: 300,
	height: 50,
	shadowOffset: {
		width: 0,
		height: 1,
	},
	shadowOpacity: .05,
	shadowRadius: 20,
	shadowColor: '#fff',
	elevation: 1,
};


const responseSelected = (response, navigation) => {
	navigation.navigate('InitResponse', { formId: response.Form, new: false, responseId: response.UUID })
}

const transformChecklistData = (checkListResponses, navigation) => {

	return checkListResponses.map(response => {
		console.log('response', JSON.stringify(response)); 
		return {
			pressAction: () => responseSelected(response, navigation),
			title: ({styles}) => (
				<View>
					<Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
						{Moment().format('lll')}
					</Text>
					<Text style={[styles, {marginBottom: 0, color: main.highLightColor}]}>
						Retail Verification
					</Text>
				</View>
			),
			description: {
				content: 'Item Added Event Description',
			},
			time: {
				content: "",
				style: {
					display: 'none',
				},
			},
			icon: response.Status != 'New' ? {
				content: 'edit',
				style: {
					width: 35,
					height: 35,
					backgroundColor: main.highLightColor,
					color: '#FFF',
					borderColor: '#FFF',
					fontSize: 16,
					paddingTop: 6,
					borderRadius: 18,
				},
			} : {}
		}

	})

}

const data123 = [
  {
		pressAction: () => console.log('test'),
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {Moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: main.highLightColor}]}>
          Retail Verification
        </Text>
      </View>
    ),
    description: {
      content: 'Item Added Event Description',
    },
    time: {
      content: "",
      style: {
        display: 'none',
      },
    },
    icon: {
      content: 'check',
      style: {
        width: 35,
        height: 35,
        backgroundColor: main.highLightColor,
        color: '#FFF',
        borderColor: '#FFF',
        fontSize: 16,
        paddingTop: 6,
        borderRadius: 18,
      },
    },
  },
  {
		pressAction: () => console.log('test'),
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {Moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: main.highLightColor }]}>
          Product Updates
        </Text>
      </View>
    ),
    description: {
      content: 'Item Added Event Description',
    },
    time: {
      content: "",
      style: {
        paddingTop: 8,
      },
    },
  },
  {
		pressAction: () => console.log('test'),
    title: ({styles}) => (
      <View>
        <Text style={{fontSize: 10, color: '#999', marginBottom: 7}}>
          {Moment().format('lll')}
        </Text>
        <Text style={[styles, {marginBottom: 0, color: main.highLightColor}]}>
          Order Confirmation
        </Text>
      </View>
    ),
    description: {
      content: 'Item Added Event Description',
    },
    time: {
      content: "",
      style: {
        paddingTop: 8,
      },
    }
  },
];
