/**
 * Clarity Forms App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useState } from 'react';

import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RecordGroupContext, FormContext } from '../../Context';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const getTable = (table) => {

	return Array.from(table.values()).map(row => {
		console.log('row', row); 
		return Array.from(row.values())
	})
}

export const RecordGroups = ({ navigation, route }) => {

	const { headers, setIndex, table } = useContext(RecordGroupContext);

	const newRecordGroup = () => {
		setIndex(index => {
			return index + 1; 
		})
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

			<Table borderStyle={{borderWidth: 1, borderColor: '#ccc'}}>
				<Row data={headers} style={styles.HeadStyle} textStyle={styles.TableText}/>
				<Rows data={getTable(table)} textStyle={styles.TableText}/>
			</Table>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff' 
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#f5f5f5'
  },
  TableText: { 
    margin: 10
  }
});

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
