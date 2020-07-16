import { StyleSheet } from "react-native";
import { main } from './theme'; 

export const fieldStyle = StyleSheet.create({
	main: {
		backgroundColor: '#fff',
	},
	mainError: {
	},
	error: {
		padding: 8,
		marginBottom: 4,
		color: '#fff',
		fontWeight: '700',
		fontSize: 12
	},
	fieldError: {
		backgroundColor: '#fc5c65',
		padding: 4,
	},
	field: {
		padding: 4,
	},
	titleContainer: {
		backgroundColor: '#f2f5f9', 
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftColor: '#f2f5f9',
		borderLeftWidth: 2
	},
	titleContainerRequired: {
		backgroundColor: '#f2f5f9', 
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftColor: '#fc5c65',
		borderLeftWidth: 2
	},
	title: {
		fontSize: 12, 
		color: '#16325c', 
		padding: 10,
		paddingLeft: 6,
		fontWeight: '300',
		borderBottomWidth: 0,
		borderTopWidth: 0
	},
	headerContainer: {
		backgroundColor: '#16325c', 
		padding: 14,
		paddingLeft: 6,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		marginBottom: 0
	}, 
	header: {
		fontSize: 14,
		color: '#f5f5f5',
		fontWeight: '300'
	},
	input: {
		height: main.heightInput, 
		backgroundColor: '#fff',
		color: main.headerColor,
		lineHeight: main.lineHeight, 
		fontSize: 16,
		fontWeight: '300',
		padding: 10
	},
	slider: {
		flexDirection: 'row', 
		height: main.heightInput, 
		backgroundColor: main.colorBackgroundInput, 
	},
	link: {

		color: main.headerColor, 
		padding: main.paddingTitle,
	}
});
