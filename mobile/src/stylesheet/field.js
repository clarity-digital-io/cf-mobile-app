import { StyleSheet } from "react-native";
import { main } from './theme'; 

export const fieldStyle = StyleSheet.create({
	main: {
		backgroundColor: '#fff',
	},
	mainError: {
		backgroundColor: '#fc5c65',
		padding: 14,
	},
	mainErrorText: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 12,
	},
	error: {
		padding: 8,
		marginBottom: 4,
		color: '#fff',
		fontWeight: '700',
		fontSize: 12
	},
	mainFieldError: {
		padding: 2
	},
	fieldError: {
		backgroundColor: '#fc5c65',
		padding: 4,
	},
	field: {
		padding: 4,
	},
	connectionField: {
		padding: 4,
		paddingBottom: 8,
		backgroundColor: '#FDE14D'
	},
	connectionFieldType: {
		padding: 4,
		paddingTop: 8,
		backgroundColor: '#FDE14D'
	},
	connectionFieldText: {
		fontSize: 14, 
		fontWeight: '700'
	},
	connectionTitleContainer: {
		backgroundColor: '#1C1C1C', 
		borderBottomWidth: 0,
		borderTopWidth: 0
	},
	connectionTitle: {
		fontSize: 14, 
		color: '#fff', 
		padding: 12,
		paddingLeft: 2,
		fontWeight: '500',
		borderBottomWidth: 0,
		borderTopWidth: 0
	},
	titleContainer: {
		backgroundColor: '#F8F8F8', 
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftColor: '#fff',
		borderLeftWidth: 2,
	},
	titleContainerRequired: {
		backgroundColor: '#F8F8F8', 
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftColor: '#fc5c65',
		borderLeftWidth: 8
	},
	requiredTitle: {
		fontSize: 14, 
		color: '#1C1C1C', 
		padding: 21,
		paddingLeft: 6,
		fontWeight: '500',
		borderBottomWidth: 0,
		borderTopWidth: 0
	},
	title: {
		fontSize: 14, 
		color: '#1C1C1C', 
		padding: 21,
		paddingLeft: 2,
		fontWeight: '500',
		borderBottomWidth: 0,
		borderTopWidth: 0
	},
	headerContainer: {
		backgroundColor: '#FDE14D', 
		padding: 24,
		paddingLeft: 6,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		marginBottom: 0
	}, 
	header: {
		fontSize: 16,
		color: '#1c1c1c',
		fontWeight: '500'
	},
	input: {
		height: main.heightInput, 
		backgroundColor: '#fff',
		color: main.headerColor,
		lineHeight: main.lineHeight, 
		fontSize: 16,
		fontWeight: '300',
		padding: 6,
		borderColor: '#f5f5f5',
		borderWidth: 1
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
