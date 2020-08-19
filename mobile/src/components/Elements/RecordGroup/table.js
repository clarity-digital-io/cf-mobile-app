/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';

import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RecordGroupContext, FormContext } from '../../Context';
import { ScrollView } from 'react-native-gesture-handler';

export const RecordGroups = ({ navigation, route }) => {

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
				<Ionicons style={{ marginRight: 16, marginTop: 2 }} size={22} onPress={() => newRecordGroup()} name={"ios-add"} color={'#fff'} />
			),
			headerLeft: () => (
				<Ionicons style={{ marginLeft: 16, marginTop: 2 }} size={22} onPress={() => navigation.goBack()} name={"ios-arrow-back"} color={'#fff'} />
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
