/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState, useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { SafeAreaView, View, Text, StyleSheet, FlatList, Button } from 'react-native';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {ListItem} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RecordGroupContext, FormContext } from '../../Context';
import { Fields } from './Fields';
import { ScrollView } from 'react-native-gesture-handler';

const RecordGroupStack = createStackNavigator();

export const InitRecordGroup = ({ navigation, route }) => {

	return (
		<RecordGroupProvider rgId={route.params.recordGroupId}>
			<RecordGroup />
		</RecordGroupProvider>
	)
	
}

const RecordGroupProvider = ({ children, rgId }) => {

	const { form, recordGroupQuestions } = useContext(FormContext);

	const [fields, setFields] = useState(recordGroupQuestions.has(rgId) ? recordGroupQuestions.get(rgId) : []); 

	const [recordGroupId] = useState(rgId); 

	return (
		<RecordGroupContext.Provider
			value={{
				recordGroupId,
				fields
			}}
		>
			{ children }
		</RecordGroupContext.Provider>
	)
}

const RecordGroup = ({ navigation, route }) => {

	return (
		<RecordGroupStack.Navigator style={{ backgroundColor: '#fff' }} mode="modal">
			<RecordGroupStack.Screen
				name={'Init Record Group'}
				component={RecordGroups}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#f2f5f9',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					}
				}}
			/>
			<RecordGroupStack.Screen
				name={'NewRecordGroup'}
				component={NewRecordGroup}
				options={{
					tabBarLabel: false, 
					headerStyle: {
						backgroundColor: '#f2f5f9',
					},
					headerTintColor: '#16325c',
					headerTitleStyle: {
						fontWeight: '500',
						fontSize: 14
					}
				}}
			/>
		</RecordGroupStack.Navigator>
	)
}

const RecordGroups = ({ navigation, route }) => {

	const { recordGroupAnswers } = useContext(FormContext);

	const { recordGroupId } = useContext(RecordGroupContext);

  const renderItem = ({ item }) => (
    <Item title={item.Name} />
	);
	
	const newRecordGroup = () => {
		navigation.navigate('NewRecordGroup')
	}

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={22} onPress={() => newRecordGroup()} name={"ios-add"} color={'#16325c'} />
			),
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#16325c'} />
			)
		});
	}, [navigation]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView horizontal>
			<FlatList
				data={recordGroupAnswers.has(recordGroupId) ? recordGroupAnswers.get(recordGroupId) : []}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				numColumns={4}
			/>
			</ScrollView>

		</SafeAreaView>
	)
}

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const NewRecordGroup = ({ navigation, route }) => {

	const add = () => {
		navigation.goBack();
	}
	const { form } = useContext(FormContext);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={32} onPress={() => add()} name={"ios-checkmark"} color={'#16325c'} />
			),
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={32} onPress={() => navigation.goBack()} name={"ios-close"} color={'#16325c'} />
			)
		});
	}, [navigation]);

	return <Fields />
}